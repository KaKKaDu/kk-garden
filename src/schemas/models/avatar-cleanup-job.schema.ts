import { z } from 'zod';
import {
  AvatarCleanupJobIdSchema,
  ProfileAvatarUploadIdSchema,
  UserIdSchema,
} from './id.schemas.js';
import {
  AvatarFinalObjectKeySchema,
  AvatarStagingObjectKeySchema,
  AvatarWorkClaimSchema,
  AvatarWorkFailureSchema,
  AvatarWorkTimestampSchema,
} from './avatar-work.schema.js';

export const AvatarCleanupTargetSchema = z.discriminatedUnion('kind', [
  z
    .object({
      kind: z.literal('staging'),
      objectKey: AvatarStagingObjectKeySchema,
      uploadId: ProfileAvatarUploadIdSchema.min(1),
    })
    .strict(),
  z
    .object({
      kind: z.literal('candidate'),
      objectKey: AvatarFinalObjectKeySchema,
      uploadId: ProfileAvatarUploadIdSchema.min(1),
    })
    .strict(),
  z
    .object({
      kind: z.literal('displaced-avatar'),
      objectKey: AvatarFinalObjectKeySchema,
    })
    .strict(),
]);

const cleanupJobShape = {
  _id: AvatarCleanupJobIdSchema,
  ownerId: UserIdSchema.min(1),
  target: AvatarCleanupTargetSchema,
  createdAt: AvatarWorkTimestampSchema,
  updatedAt: AvatarWorkTimestampSchema,
};

export const AvatarCleanupJobSchema = z
  .discriminatedUnion('state', [
    z
      .object({
        ...cleanupJobShape,
        state: z.literal('pending'),
        attempts: z.number().int().nonnegative(),
        nextAttemptAt: AvatarWorkTimestampSchema,
        lastFailure: AvatarWorkFailureSchema.optional(),
      })
      .strict(),
    z
      .object({
        ...cleanupJobShape,
        state: z.literal('processing'),
        attempts: z.number().int().positive(),
        claim: AvatarWorkClaimSchema,
      })
      .strict(),
    z
      .object({
        ...cleanupJobShape,
        state: z.literal('completed'),
        attempts: z.number().int().positive(),
        completedAt: AvatarWorkTimestampSchema,
      })
      .strict(),
    z
      .object({
        ...cleanupJobShape,
        state: z.literal('failed'),
        attempts: z.number().int().positive(),
        failedAt: AvatarWorkTimestampSchema,
        lastFailure: AvatarWorkFailureSchema,
      })
      .strict(),
  ])
  .superRefine((job, context): void => {
    const createdAt: number = new Date(job.createdAt).getTime();
    const updatedAt: number = new Date(job.updatedAt).getTime();
    if (updatedAt < createdAt) {
      context.addIssue({
        code: 'custom',
        path: ['updatedAt'],
        message: 'Cleanup cannot be updated before creation',
      });
    }
    const eventAt: number | undefined =
      job.state === 'processing'
        ? new Date(job.claim.claimedAt).getTime()
        : job.state === 'completed'
          ? new Date(job.completedAt).getTime()
          : job.state === 'failed'
            ? new Date(job.failedAt).getTime()
            : undefined;
    if (eventAt !== undefined && (eventAt < createdAt || eventAt > updatedAt)) {
      context.addIssue({
        code: 'custom',
        message: 'Cleanup state timestamps must be within the record lifetime',
      });
    }
  });
