import { z } from 'zod';

export const OwnershipVerificationResultSchema = z.object({
  ownershipExists: z.object({
    success: z.boolean(),
  }),
  signatureExists: z.object({
    success: z.boolean(),
  }),
  visualisationExists: z.object({
    success: z.boolean(),
  }),
  userExists: z.object({
    success: z.boolean(),
  }),
  signatureProofVerified: z.object({
    success: z.boolean(),
  }),
  visualisationVerified: z.object({
    success: z.boolean(),
  }),
});

export type OwnershipVerificationResult = z.infer<
  typeof OwnershipVerificationResultSchema
>;
