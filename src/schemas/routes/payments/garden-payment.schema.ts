import { z } from 'zod';
import type { FromZod } from '../../../types/common.types.js';
import {
  GardenPaymentStateSchema,
  GardenPaymentTimestampSchema,
} from '../../models/garden-payment.schema.js';
import { GardenPaymentIdSchema } from '../../models/id.schemas.js';

export const CreateGardenPaymentRequestSchema = z.object({}).strict();

export const GardenPaymentIdParamsSchema = z
  .object({
    paymentId: GardenPaymentIdSchema,
  })
  .strict();

const GardenPaymentSummarySchema = z
  .object({
    paymentId: GardenPaymentIdSchema,
    state: GardenPaymentStateSchema,
    isGift: z.boolean(),
    createdAt: GardenPaymentTimestampSchema,
    paidAt: GardenPaymentTimestampSchema.nullable(),
  })
  .strict();

export const GardenPaymentResponseSchema = z
  .object({
    payment: GardenPaymentSummarySchema,
    mockConfirmationEnabled: z.boolean(),
  })
  .strict();

export const CurrentGardenPaymentResponseSchema = z
  .object({
    payment: GardenPaymentSummarySchema.nullable(),
    mockConfirmationEnabled: z.boolean(),
  })
  .strict();

export type CreateGardenPaymentRequest = FromZod<
  typeof CreateGardenPaymentRequestSchema
>;
export type GardenPaymentIdParams = FromZod<typeof GardenPaymentIdParamsSchema>;
export type GardenPaymentResponse = FromZod<typeof GardenPaymentResponseSchema>;
export type CurrentGardenPaymentResponse = FromZod<
  typeof CurrentGardenPaymentResponseSchema
>;
