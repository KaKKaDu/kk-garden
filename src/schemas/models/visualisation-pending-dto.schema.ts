import { z } from 'zod';
import { UserIdSchema } from './id.schemas.js';
import { VisualisationDtoSchema } from './visualisation-dto.schema.js';

export const VisualisationPendingDtoSchema = z
  .object({
    pendingId: z.string(),
    ownerId: UserIdSchema.min(1),
  })
  .extend(VisualisationDtoSchema.shape);
