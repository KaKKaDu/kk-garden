import { z } from 'zod';
import { addMongoId } from './common.schemas.js';

export const SignatureSchema = z
  .object({
    value: z.string(),
    visualisationId: z.string(),
    certificate: z.string(),
    createdAt: z.string().or(z.date()),
  })
  .extend(addMongoId('string'));
