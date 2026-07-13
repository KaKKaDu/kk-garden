import { z } from 'zod';
import type {
  GridDrawerElementIdSchema,
  SignatureIdSchema,
  UserIdSchema,
  VisualisationIdSchema,
} from '../schemas/index.js';
import type { OwnershipIdSchema } from '../schemas/models/id.schemas.js';

export type GridDrawerElementId = z.infer<typeof GridDrawerElementIdSchema>;

export type SignatureId = z.infer<typeof SignatureIdSchema>;

export type VisualisationId = z.infer<typeof VisualisationIdSchema>;

export type UserId = z.infer<typeof UserIdSchema>;

export type OwnershipId = z.infer<typeof OwnershipIdSchema>;
