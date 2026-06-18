import { z } from 'zod';
import { SpritesheetPathSchema } from './spritesheet-path.schema.js';
import { SpritesheetElementSchema } from './spritesheet-element.schema.js';
import { addId, CellSchema, SizeMeasuresSchema } from './common.schemas.js';

export const GridDrawerElementSchema = z.object({
  spritesheetPath: SpritesheetPathSchema,
  spritesheetElement: SpritesheetElementSchema,
  cell: CellSchema,
  innerCoordinates: CellSchema.optional(),
  sizes: SizeMeasuresSchema.optional(),
  index: z.number(),
});

export const GridDrawerElementWithIdSchema = GridDrawerElementSchema.extend(
  addId('string')
);
