import { z } from 'zod';
import type { FromZod } from '../../../types/common.types.js';
import { ProfileAccentProjectionSchema } from '../../models/profile-accent-projection.schema.js';
import { ProfileAvatarDeliverySchema } from '../../models/profile-avatar-delivery.schema.js';
import {
  ProfileBioSchema,
  ProfileDisplayNameSchema,
  ProfileLookupCodeSchema,
} from '../../models/profile.schema.js';

export const ProfileOwnerResponseSchema = z.discriminatedUnion('configured', [
  z
    .object({
      configured: z.literal(false),
      accent: ProfileAccentProjectionSchema,
      avatar: z.null(),
      lookupCode: ProfileLookupCodeSchema.nullable(),
    })
    .strict(),
  z
    .object({
      configured: z.literal(true),
      displayName: ProfileDisplayNameSchema,
      bio: ProfileBioSchema.optional(),
      accent: ProfileAccentProjectionSchema,
      avatar: ProfileAvatarDeliverySchema.nullable(),
      lookupCode: ProfileLookupCodeSchema.nullable(),
    })
    .strict(),
]);

export type ProfileOwnerResponse = FromZod<typeof ProfileOwnerResponseSchema>;
