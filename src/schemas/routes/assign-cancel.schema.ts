import { z } from 'zod';
import { VisualisationPendingIdSchema } from '../models/id.schemas.js';

export const AssignCancelRequestSchema = z.object({
  pendingId: VisualisationPendingIdSchema,
});

export const AssignCancelResponseSchema = z.object({
  success: z.boolean(),
});

export type AssignCancelRequest = z.infer<typeof AssignCancelRequestSchema>;
export type AssignCancelResponse = z.infer<typeof AssignCancelResponseSchema>;
