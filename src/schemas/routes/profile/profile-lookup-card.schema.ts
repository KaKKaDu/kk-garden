import { z } from 'zod';
import type { FromZod } from '../../../types/common.types.js';
import { ProfileAvatarDeliverySchema } from '../../models/profile-avatar-delivery.schema.js';
import {
  ProfileDisplayNameSchema,
  ProfileLookupCodeSchema,
} from '../../models/profile.schema.js';

export const ProfileLookupCardRequestSchema = z
  .object({
    lookupCode: ProfileLookupCodeSchema,
  })
  .strict();

export const ProfileLookupCardResponseSchema = z
  .object({
    displayName: ProfileDisplayNameSchema,
    avatar: ProfileAvatarDeliverySchema.nullable(),
  })
  .strict();

export type ProfileLookupCardRequest = FromZod<
  typeof ProfileLookupCardRequestSchema
>;
export type ProfileLookupCardResponse = FromZod<
  typeof ProfileLookupCardResponseSchema
>;
