import { z } from 'zod';
import type { FromZod } from '../../../types/common.types.js';
import { ProfileAvatarDeliverySchema } from '../../models/profile-avatar-delivery.schema.js';
import { ProfileDisplayNameSchema } from '../../models/profile.schema.js';

export const ProfileLookupCardResponseSchema = z
  .object({
    displayName: ProfileDisplayNameSchema,
    avatar: ProfileAvatarDeliverySchema.nullable(),
  })
  .strict();

export type ProfileLookupCardResponse = FromZod<
  typeof ProfileLookupCardResponseSchema
>;
