import type { FromZod } from './common.types.js';
import { OwnershipSchema } from '../schemas/index.js';

export type Ownership = FromZod<typeof OwnershipSchema>;
