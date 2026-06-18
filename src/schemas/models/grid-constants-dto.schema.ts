import {z} from "zod";

export const GridConstantsDtoSchema = z.object({
  size: z.number(),
  columns: z.number(),
  rows: z.number(),
});