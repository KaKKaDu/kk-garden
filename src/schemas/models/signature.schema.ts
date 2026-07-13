import { z } from 'zod';
import { addMongoId } from './common.schemas.js';
import { VisualisationIdSchema } from './id.schemas.js';

export const SignatureSchema = z
  .object({
    value: z.string(),
    visualisationId: VisualisationIdSchema,
    signatureProof: z.string(),
    createdAt: z.string().or(z.date()),
  })
  .extend(addMongoId('string'));
