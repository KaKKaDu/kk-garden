import { z } from 'zod';
import type { FromZod } from '../../../types/common.types.js';
import { ProfileAccentProjectionSchema } from '../../models/profile-accent-projection.schema.js';
import { ProfileAvatarDeliverySchema } from '../../models/profile-avatar-delivery.schema.js';
import {
  ProfileBioSchema,
  ProfileDisplayNameSchema,
} from '../../models/profile.schema.js';

export const GardenProfileResponseSchema = z
  .object({
    displayName: ProfileDisplayNameSchema,
    bio: ProfileBioSchema.optional(),
    accent: ProfileAccentProjectionSchema,
    avatar: ProfileAvatarDeliverySchema.nullable(),
  })
  .strict();

export type GardenProfileResponse = FromZod<typeof GardenProfileResponseSchema>;
