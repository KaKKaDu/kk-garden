import type { FromZod } from './common.types.js';
import type { SignatureSchema } from '../schemas/index.js';

export type Signature = FromZod<typeof SignatureSchema>;
