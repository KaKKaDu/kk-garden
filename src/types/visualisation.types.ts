import type { FromZod } from './common.types.js';
import { VisualisationDtoSchema } from '../schemas/index.js';

export type VisualisationDto = FromZod<typeof VisualisationDtoSchema>;
