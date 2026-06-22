import { z } from 'zod';
import { GridDrawerElementWithIdSchema } from './grid-drawer-element.schema.js';
import { SpritesheetSetDtoSchema } from './spritesheet-set-dto.schema.js';
import { SpriteDataDtoSchema } from './sprite-data-dto.schema.js';

export const GardenDrawDataDtoSchema = z.object({
  staticData: z.object({
    tiles: z.array(GridDrawerElementWithIdSchema),
    stones: z.array(GridDrawerElementWithIdSchema),
  }),
  animatedData: z.object({
    spritesheetSets: z.record(z.string(), SpritesheetSetDtoSchema),
    trees: z.array(SpriteDataDtoSchema),
    bushes: z.array(SpriteDataDtoSchema),
  }),
});
