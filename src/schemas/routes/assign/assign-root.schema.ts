import { z } from 'zod';
import type { FromZod } from '../../../types/common.types.js';
import {
  VisualisationIdSchema,
  VisualisationPendingIdSchema,
} from '../../models/id.schemas.js';

export const AssignRootResponseSchema = z.object({
  success: z.boolean(),
});

export const AssignRootRequestSchema = z
  .object({
    visualisationId: VisualisationIdSchema,
    pendingId: VisualisationPendingIdSchema.optional(),
  })
  .strict();

export type AssignRootResponse = FromZod<typeof AssignRootResponseSchema>;
export type AssignRootRequest = FromZod<typeof AssignRootRequestSchema>;
