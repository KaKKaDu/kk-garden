import { z } from 'zod';
import { VisualisationDtoSchema } from './visualisation-dto.schema.js';

export const VisualisationPendingDtoSchema = z
  .object({
    pendingId: z.string(),
  })
  .extend(VisualisationDtoSchema.shape);
