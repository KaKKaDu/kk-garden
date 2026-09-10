import { z } from 'zod';
import { OwnershipVerificationPointSchema } from './ownership-verification-point.schema.js';

export const OwnershipVerificationResultSchema = z.object({
  ownershipExists: OwnershipVerificationPointSchema,
  signatureExists: OwnershipVerificationPointSchema,
  visualisationExists: OwnershipVerificationPointSchema,
  userExists: OwnershipVerificationPointSchema,
  ownershipProofVerified: OwnershipVerificationPointSchema,
  signatureProofVerified: OwnershipVerificationPointSchema,
  visualisationVerified: OwnershipVerificationPointSchema,
});

export type OwnershipVerificationResult = z.infer<
  typeof OwnershipVerificationResultSchema
>;
