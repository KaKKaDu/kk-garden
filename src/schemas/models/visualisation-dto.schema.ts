import { z } from 'zod';
import { GardenDrawDataDtoSchema } from './garden-draw-data-dto.schema.js';

export const VisualisationDtoSchema = z.object({
  _id: z.string(),
  data: GardenDrawDataDtoSchema,
  createdAt: z.string().or(z.date()),
});
