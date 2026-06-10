import type { ErrorSchema } from '../schemas';
import type { FromZod } from './common.types';

export type ErrorResponse = FromZod<typeof ErrorSchema>;
