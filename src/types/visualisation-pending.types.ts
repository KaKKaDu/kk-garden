import type { FromZod } from './common.types.js';
import { VisualisationPendingDtoSchema } from '../schemas/index.js';

export type VisualisationPendingDto = FromZod<
  typeof VisualisationPendingDtoSchema
>;
