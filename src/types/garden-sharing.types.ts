import type { FromZod } from './common.types.js';
import type {
  GardenShareGrantSchema,
  GardenShareRequestSchema,
} from '../schemas/index.js';

export type GardenShareGrant = FromZod<typeof GardenShareGrantSchema>;

export type GardenShareRequest = FromZod<typeof GardenShareRequestSchema>;
