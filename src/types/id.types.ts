import { z } from 'zod';
import type {
  GridDrawerElementIdSchema,
  SignatureIdSchema,
  UserIdSchema,
  VisualisationIdSchema,
  OwnershipIdSchema,
  VisualisationPendingIdSchema,
} from '../schemas/index.js';

export type GridDrawerElementId = z.infer<typeof GridDrawerElementIdSchema>;

export type SignatureId = z.infer<typeof SignatureIdSchema>;

export type VisualisationId = z.infer<typeof VisualisationIdSchema>;

export type VisualisationPendingId = z.infer<
  typeof VisualisationPendingIdSchema
>;

export type UserId = z.infer<typeof UserIdSchema>;

export type OwnershipId = z.infer<typeof OwnershipIdSchema>;
