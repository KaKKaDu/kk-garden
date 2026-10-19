import { z } from 'zod';
import type { FromZod } from '../../../types/common.types.js';
import { GardenGridConstantsDtoSchema } from '../../models/garden-grid-constants-dto.schema.js';
import { GardenDrawDataDtoSchema } from '../../models/garden-draw-data-dto.schema.js';
import {
  VisualisationIdSchema,
  VisualisationPendingIdSchema,
} from '../../models/id.schemas.js';

export const GenerateRootResponseSchema = z.object({
  constants: GardenGridConstantsDtoSchema,
  generations: z.array(
    GardenDrawDataDtoSchema.extend({
      visualisationId: VisualisationIdSchema,
    })
  ),
  pendingId: VisualisationPendingIdSchema.optional(),
});

export const GenerateRootQueryStringSchema = z.object({
  count: z.coerce.number().optional().default(3),
  pendingId: VisualisationPendingIdSchema.optional(),
});

export type GenerateRootResponse = FromZod<typeof GenerateRootResponseSchema>;
export type GenerateRootQueryString = FromZod<
  typeof GenerateRootQueryStringSchema
>;
