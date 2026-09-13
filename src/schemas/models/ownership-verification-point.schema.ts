import { z } from 'zod';
import { ownershipVerificationStatuses } from '../../types/ownership-verification.types.js';

export const OwnershipVerificationPointSchema = z.object({
  status: z.enum(ownershipVerificationStatuses),
  error: z.string().optional(),
});

export type OwnershipVerificationPoint = z.infer<
  typeof OwnershipVerificationPointSchema
>;
