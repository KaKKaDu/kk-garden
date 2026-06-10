import { z } from 'zod';
import { SpritesheetPathSchema } from './spritesheet-path.schema';
import { SpritesheetElementSchema } from './spritesheet-element.schema';

export const SpritesheetSetDtoSchema = z.object({
  key: z.string(),
  path: SpritesheetPathSchema,
  map: z.record(z.string(), SpritesheetElementSchema),
});
