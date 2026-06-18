import { z } from 'zod';
import { CoordinatesSchema, SizeMeasuresSchema } from './common.schemas.js';

export const SpritesheetElementSchema = z
  .object({
    density: z.number().optional(),
  })
  .extend(CoordinatesSchema.shape)
  .extend(SizeMeasuresSchema.shape);
