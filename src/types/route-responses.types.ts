import type { ErrorSchema } from '../schemas/index.js';
import type { FromZod } from './common.types.js';

export type ErrorResponse = FromZod<typeof ErrorSchema>;
