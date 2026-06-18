import type { FromZod } from './common.types.js';
import type { GridConstantsDtoSchema } from '../schemas/index.js';
import type { GardenGridConstantsDtoSchema } from '../schemas/index.js';

export type GridConstantsDto = FromZod<typeof GridConstantsDtoSchema>;
export type GardenGridConstantsDto = FromZod<
  typeof GardenGridConstantsDtoSchema
>;
