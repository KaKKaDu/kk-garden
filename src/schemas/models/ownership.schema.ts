import { z } from 'zod';
import { addMongoId } from './common.schemas.js';
import { SignatureIdSchema, UserIdSchema } from './id.schemas.js';

export const OwnershipSchema = z
  .object({
    userId: UserIdSchema,
    signatureId: SignatureIdSchema,
    ownershipProof: z.string(),
    assignedAt: z.string().or(z.date()),
  })
  .extend(addMongoId('string'));
