import { z } from 'zod';
import { ProfileAccentHexSchema } from './profile.schema.js';

export const ProfileAccentProjectionSchema = z
  .object({
    customHex: ProfileAccentHexSchema.optional(),
    effectiveHex: ProfileAccentHexSchema,
  })
  .strict();
