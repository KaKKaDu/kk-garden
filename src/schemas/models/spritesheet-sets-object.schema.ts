import { z } from 'zod';
import { SpritesheetSetDtoSchema } from './spritesheet-set-dto.schema.js';

export const SpritesheetSetsObjectSchema = z.record(
  z.string(),
  SpritesheetSetDtoSchema
);
