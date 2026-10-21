import { z } from 'zod';
import { ProfileAvatarUploadIdSchema, UserIdSchema } from './id.schemas.js';
import {
  AvatarFinalObjectKeySchema,
  AvatarStagingObjectKeySchema,
  AvatarWorkClaimSchema,
  AvatarWorkFailureSchema,
  AvatarWorkTimestampSchema,
} from './avatar-work.schema.js';
import { ProfileAvatarUploadRequestSchema } from '../routes/profile/profile-avatar-upload.schema.js';

export const ProfileAvatarUploadResultSchema = z
  .object({
    objectKey: AvatarFinalObjectKeySchema,
    width: z.number().int().min(1).max(512),
    height: z.number().int().min(1).max(512),
    committedAt: AvatarWorkTimestampSchema,
  })
  .strict();

const uploadSessionShape = {
  _id: ProfileAvatarUploadIdSchema.min(1),
  ownerId: UserIdSchema.min(1),
  stagingObjectKey: AvatarStagingObjectKeySchema,
  contentType: ProfileAvatarUploadRequestSchema.shape.contentType,
  byteSize: ProfileAvatarUploadRequestSchema.shape.byteSize,
  createdAt: AvatarWorkTimestampSchema,
  updatedAt: AvatarWorkTimestampSchema,
  expiresAt: AvatarWorkTimestampSchema,
};

export const ProfileAvatarUploadSessionSchema = z
  .discriminatedUnion('state', [
    z
      .object({
        ...uploadSessionShape,
        state: z.literal('pending'),
        attempts: z.number().int().nonnegative(),
        retryAt: AvatarWorkTimestampSchema,
        lastFailure: AvatarWorkFailureSchema.optional(),
      })
      .strict(),
    z
      .object({
        ...uploadSessionShape,
        state: z.literal('processing'),
        attempts: z.number().int().positive(),
        claim: AvatarWorkClaimSchema,
        candidateObjectKey: AvatarFinalObjectKeySchema,
      })
      .strict(),
    z
      .object({
        ...uploadSessionShape,
        state: z.literal('completed'),
        attempts: z.number().int().positive(),
        result: ProfileAvatarUploadResultSchema,
      })
      .strict(),
    z
      .object({
        ...uploadSessionShape,
        state: z.literal('rejected'),
        attempts: z.number().int().nonnegative(),
        reason: z.enum([
          'invalid-image',
          'metadata-mismatch',
          'account-deleted',
          'attempts-exhausted',
        ]),
        finishedAt: AvatarWorkTimestampSchema,
      })
      .strict(),
    z
      .object({
        ...uploadSessionShape,
        state: z.literal('expired'),
        attempts: z.number().int().nonnegative(),
        finishedAt: AvatarWorkTimestampSchema,
      })
      .strict(),
  ])
  .superRefine((session, context): void => {
    const createdAt: number = new Date(session.createdAt).getTime();
    const updatedAt: number = new Date(session.updatedAt).getTime();
    const expiresAt: number = new Date(session.expiresAt).getTime();
    if (updatedAt < createdAt || expiresAt <= createdAt) {
      context.addIssue({
        code: 'custom',
        message: 'Upload timestamps are inconsistent',
      });
    }
    if (
      session.state === 'processing' &&
      (new Date(session.claim.claimedAt).getTime() < createdAt ||
        new Date(session.claim.claimedAt).getTime() > updatedAt ||
        new Date(session.claim.claimedAt).getTime() >= expiresAt)
    ) {
      context.addIssue({
        code: 'custom',
        path: ['claim'],
        message:
          'Upload claims must start before expiry within the record lifetime',
      });
    }
    if (
      session.state === 'completed' &&
      (new Date(session.result.committedAt).getTime() < createdAt ||
        new Date(session.result.committedAt).getTime() > updatedAt ||
        new Date(session.result.committedAt).getTime() >= expiresAt)
    ) {
      context.addIssue({
        code: 'custom',
        path: ['result', 'committedAt'],
        message:
          'Upload results must commit before expiry within the record lifetime',
      });
    }
    if (
      (session.state === 'rejected' || session.state === 'expired') &&
      (new Date(session.finishedAt).getTime() < createdAt ||
        new Date(session.finishedAt).getTime() > updatedAt ||
        (session.state === 'expired' &&
          new Date(session.finishedAt).getTime() < expiresAt))
    ) {
      context.addIssue({
        code: 'custom',
        path: ['finishedAt'],
        message: 'Upload terminal timestamps are inconsistent',
      });
    }
  });
