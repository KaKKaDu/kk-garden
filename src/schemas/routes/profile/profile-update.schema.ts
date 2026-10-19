import { z } from 'zod';
import type { FromZod } from '../../../types/common.types.js';
import { ProfileOwnerResponseSchema } from './profile-get.schema.js';
import {
  ProfileAccentHexSchema,
  ProfileBioSchema,
  ProfileDisplayNameSchema,
} from '../../models/profile.schema.js';

export const ProfileUpdateRequestSchema = z
  .object({
    displayName: ProfileDisplayNameSchema.optional(),
    bio: ProfileBioSchema.nullable().optional(),
    accentHex: ProfileAccentHexSchema.nullable().optional(),
  })
  .strict()
  .refine((value) => Object.keys(value).length > 0, {
    message: 'At least one profile field must be provided',
  });

export const ProfileUpdateResponseSchema = ProfileOwnerResponseSchema;

export type ProfileUpdateRequest = FromZod<typeof ProfileUpdateRequestSchema>;
export type ProfileUpdateResponse = FromZod<typeof ProfileUpdateResponseSchema>;
