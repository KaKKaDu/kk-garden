import { z } from 'zod/v4';
import { GridDrawerElementWithIdSchema } from '../models/grid-drawer-element.schema';
import { SpritesheetSetDtoSchema } from '../models/spritesheet-set-dto.schema';
import { AnimatedSpriteDtoSchema } from '../models/animated-sprite-dto.schema';

export const GenerateRootResponseSchema = z.object({
  staticData: {
    tiles: z.array(GridDrawerElementWithIdSchema),
    stones: z.array(GridDrawerElementWithIdSchema),
  },
  animatedData: {
    spritesheetSets: z.record(z.string(), SpritesheetSetDtoSchema),
    trees: z.array(AnimatedSpriteDtoSchema),
    bushes: z.array(AnimatedSpriteDtoSchema),
  },
});

export const GenerateRootQueryStringSchema =  z.object({
  count: z.number().optional().default(3),
});
