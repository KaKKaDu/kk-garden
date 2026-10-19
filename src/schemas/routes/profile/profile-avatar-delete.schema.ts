import { z } from 'zod';
import type { FromZod } from '../../../types/common.types.js';

export const ProfileAvatarDeleteResponseSchema = z
  .object({
    success: z.literal(true),
  })
  .strict();

export type ProfileAvatarDeleteResponse = FromZod<
  typeof ProfileAvatarDeleteResponseSchema
>;
