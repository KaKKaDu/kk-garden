import { z } from 'zod';
import type { FromZod } from '../../../types/common.types.js';
import { ProfileAvatarUploadIdSchema } from '../../models/id.schemas.js';

export const ProfileAvatarUploadRequestSchema = z
  .object({
    contentType: z.enum(['image/jpeg', 'image/png', 'image/webp']),
    byteSize: z.number().int().positive().max(5_000_000),
  })
  .strict();

export const ProfileAvatarUploadResponseSchema = z
  .object({
    uploadId: ProfileAvatarUploadIdSchema,
    uploadUrl: z.url(),
    expiresAt: z.iso.datetime(),
  })
  .strict();

export type ProfileAvatarUploadRequest = FromZod<
  typeof ProfileAvatarUploadRequestSchema
>;
export type ProfileAvatarUploadResponse = FromZod<
  typeof ProfileAvatarUploadResponseSchema
>;
