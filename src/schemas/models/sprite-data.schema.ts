import {z} from "zod";
import {CellSchema, CoordinatesSchema} from "./common.schemas";
import {AnimatedSpriteDtoSchema} from "./animated-sprite-dto.schema";

export const SpriteDataSchema = z.object({
  sprite: AnimatedSpriteDtoSchema,
  cell: CellSchema,
  coordinates: CoordinatesSchema.optional(),
});