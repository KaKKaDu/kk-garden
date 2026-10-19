import { z } from 'zod';
import type { FromZod } from '../../../types/common.types.js';
import { ProfileAvatarUploadIdSchema } from '../../models/id.schemas.js';
import { ProfileAvatarDeliverySchema } from '../../models/profile-avatar-delivery.schema.js';

export const ProfileAvatarFinalizeRequestSchema = z
  .object({
    uploadId: ProfileAvatarUploadIdSchema,
  })
  .strict();

export const ProfileAvatarFinalizeResponseSchema = z
  .object({
    avatar: ProfileAvatarDeliverySchema,
  })
  .strict();

export type ProfileAvatarFinalizeRequest = FromZod<
  typeof ProfileAvatarFinalizeRequestSchema
>;
export type ProfileAvatarFinalizeResponse = FromZod<
  typeof ProfileAvatarFinalizeResponseSchema
>;
