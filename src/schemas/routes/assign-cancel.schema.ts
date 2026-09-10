import { z } from 'zod';

export const AssignCancelRequestSchema = z.object({
  pendingId: z.string().uuid(),
});

export const AssignCancelResponseSchema = z.object({
  success: z.boolean(),
});

export type AssignCancelRequest = z.infer<typeof AssignCancelRequestSchema>;
export type AssignCancelResponse = z.infer<typeof AssignCancelResponseSchema>;
