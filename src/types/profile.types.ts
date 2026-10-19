import type { FromZod } from './common.types.js';
import { ProfileSchema } from '../schemas/index.js';

export type Profile = FromZod<typeof ProfileSchema>;
