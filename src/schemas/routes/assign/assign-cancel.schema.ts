import { z } from 'zod';
import type { FromZod } from '../../../types/common.types.js';
import { VisualisationPendingIdSchema } from '../../models/id.schemas.js';

export const AssignCancelRequestSchema = z.object({
  pendingId: VisualisationPendingIdSchema,
});

export const AssignCancelResponseSchema = z.object({
  success: z.boolean(),
});

export type AssignCancelRequest = FromZod<typeof AssignCancelRequestSchema>;
export type AssignCancelResponse = FromZod<typeof AssignCancelResponseSchema>;
