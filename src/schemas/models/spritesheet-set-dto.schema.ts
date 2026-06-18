import { z } from 'zod';
import { SpritesheetPathSchema } from './spritesheet-path.schema.js';
import { SpritesheetElementSchema } from './spritesheet-element.schema.js';

export const SpritesheetSetDtoSchema = z.object({
  key: z.string(),
  path: SpritesheetPathSchema,
  map: z.record(z.string(), SpritesheetElementSchema),
});
