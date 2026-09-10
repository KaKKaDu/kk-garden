import { z } from 'zod';

export const OwnershipVerificationPointSchema = z.object({
  success: z.boolean(),
  error: z.string().optional(),
});

export type OwnershipVerificationPoint = z.infer<
  typeof OwnershipVerificationPointSchema
>;
