import { z } from 'zod';
import { GridDrawerElementWithIdSchema } from '../models/grid-drawer-element.schema.js';
import { SpritesheetSetDtoSchema } from '../models/spritesheet-set-dto.schema.js';
import { AnimatedSpriteDtoSchema } from '../models/animated-sprite-dto.schema.js';
import type {FromZod} from "../../types/common.types.js";

export const GenerateRootResponseSchema = z.object({
  staticData: z.object({
    tiles: z.array(GridDrawerElementWithIdSchema),
    stones: z.array(GridDrawerElementWithIdSchema),
  }),
  animatedData: z.object({
    spritesheetSets: z.record(z.string(), SpritesheetSetDtoSchema),
    trees: z.array(AnimatedSpriteDtoSchema),
    bushes: z.array(AnimatedSpriteDtoSchema),
  }),
});

export const GenerateRootQueryStringSchema =  z.object({
  count: z.coerce.number().optional().default(3),
});

export type GenerateRootResponse = FromZod<typeof GenerateRootResponseSchema>;
export type GenerateRootQueryString = FromZod<typeof GenerateRootQueryStringSchema>;
