import { z } from 'zod';
import { SpritesheetPathSchema } from './spritesheet-path.schema.js';
import { SpritesheetElementSchema } from './spritesheet-element.schema.js';
import {addId, CellSchema, CoordinatesSchema, SizeMeasuresSchema} from './common.schemas.js';

export const GridDrawerElementSchema = z.object({
  spritesheetPath: SpritesheetPathSchema,
  element: SpritesheetElementSchema,
  cell: CellSchema,
  innerCoordinates: CoordinatesSchema.optional(),
  sizes: SizeMeasuresSchema.optional(),
  index: z.number(),
});

export const GridDrawerElementWithIdSchema = GridDrawerElementSchema.extend(
  addId('string')
);
