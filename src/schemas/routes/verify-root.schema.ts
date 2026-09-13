import { z } from 'zod';
import { UserIdSchema } from '../models/id.schemas.js';
import { OwnershipVerificationResultSchema } from '../models/ownership-verification-result.schema.js';

export const VerifyRootRequestSchema = z.object({
  userId: UserIdSchema,
});

export const VerifyRootResponseSchema = z.object({
  success: z.boolean(),
  data: OwnershipVerificationResultSchema,
});

export type VerifyRootRequest = z.infer<typeof VerifyRootRequestSchema>;
export type VerifyRootResponse = z.infer<typeof VerifyRootResponseSchema>;
