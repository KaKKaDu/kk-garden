import { z } from 'zod';
import type { FromZod } from '../../../types/common.types.js';

export const DeleteAccountRequestSchema = z
  .object({
    confirmation: z.literal('DELETE'),
  })
  .strict();

export const DeleteAccountResponseSchema = z
  .object({
    success: z.literal(true),
  })
  .strict();

export type DeleteAccountRequest = FromZod<typeof DeleteAccountRequestSchema>;
export type DeleteAccountResponse = FromZod<typeof DeleteAccountResponseSchema>;
