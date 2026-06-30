import { UserSchema } from '../schemas/index.js';
import type { FromZod } from './common.types.js';

export type User = FromZod<typeof UserSchema>;
