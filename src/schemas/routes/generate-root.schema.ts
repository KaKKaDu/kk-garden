import { z } from 'zod';
import type { FromZod } from '../../types/common.types.js';
import { GardenGridConstantsDtoSchema } from '../models/garden-grid-constants-dto.schema.js';
import { GardenDrawDataDtoSchema } from '../models/garden-draw-data-dto.schema.js';

export const GenerateRootResponseSchema = z.object({
  constants: GardenGridConstantsDtoSchema,
  generations: z.array(GardenDrawDataDtoSchema),
});

export const GenerateRootQueryStringSchema = z.object({
  count: z.coerce.number().optional().default(3),
});

export type GenerateRootResponse = FromZod<typeof GenerateRootResponseSchema>;
export type GenerateRootQueryString = FromZod<
  typeof GenerateRootQueryStringSchema
>;
