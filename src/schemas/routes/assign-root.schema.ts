import { z } from 'zod';

export const AssignRootResponseSchema = z.object({
  success: z.boolean(),
});

export const AssignRootRequestSchema = z.object({
  visualisationId: z.string(),
  userId: z.string(),
  pendingId: z.string().optional(),
});

export type AssignRootResponse = z.infer<typeof AssignRootResponseSchema>;
export type AssignRootRequest = z.infer<typeof AssignRootRequestSchema>;
