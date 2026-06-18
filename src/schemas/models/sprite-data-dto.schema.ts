import { z } from 'zod';
import { CellSchema, CoordinatesSchema } from './common.schemas.js';
import { AnimatedSpriteDtoSchema } from './animated-sprite-dto.schema.js';

export const SpriteDataDtoSchema = z.object({
  sprite: AnimatedSpriteDtoSchema,
  cell: CellSchema,
  coordinates: CoordinatesSchema.optional(),
});
