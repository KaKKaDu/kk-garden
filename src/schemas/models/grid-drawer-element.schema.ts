import {z} from "zod";
import {SpritesheetPathSchema} from "./spritesheet-path.schema";
import {SpritesheetElementSchema} from "./spritesheet-element.schema";
import {addId, CellSchema, SizeMeasuresSchema} from "./common.schemas";

export const GridDrawerElementSchema = z.object({
  spritesheetPath: SpritesheetPathSchema,
  spritesheetElement: SpritesheetElementSchema,
  cell: CellSchema,
  innerCoordinates: CellSchema.optional(),
  sizes: SizeMeasuresSchema.optional(),
  index: z.number(),
});

export const GridDrawerElementWithIdSchema = GridDrawerElementSchema.extend(addId('string'));