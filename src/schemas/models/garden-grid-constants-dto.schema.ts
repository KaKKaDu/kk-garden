import {z} from "zod";
import {GridConstantsDtoSchema} from "./grid-constants-dto.schema.js";

export const GardenGridConstantsDtoSchema = z.object({
  gridConstants: GridConstantsDtoSchema,
  largeGridConstants: GridConstantsDtoSchema,
});