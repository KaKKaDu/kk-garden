import { z } from 'zod';
import {
  GardenPaymentIdSchema,
  OwnershipIdSchema,
  UserIdSchema,
} from './id.schemas.js';

export const GardenPaymentStateSchema = z.enum([
  'pending',
  'paid',
  'failed',
  'refunded',
]);

export const GardenPaymentProviderKindSchema = z.string().trim().min(1);

export const GardenPaymentRecipientEmailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .pipe(z.email());

export const GardenPaymentTimestampSchema = z.string().or(z.date());

export const GardenPaymentSchema = z
  .object({
    _id: GardenPaymentIdSchema,
    recipientEmail: GardenPaymentRecipientEmailSchema,
    recipientUserId: UserIdSchema.nullable(),
    isGift: z.boolean(),
    paidByUserId: UserIdSchema.nullable(),
    state: GardenPaymentStateSchema,
    providerKind: GardenPaymentProviderKindSchema,
    providerReference: z.string().min(1).nullable(),
    createdAt: GardenPaymentTimestampSchema,
    paidAt: GardenPaymentTimestampSchema.nullable(),
    ownershipId: OwnershipIdSchema.nullable(),
  })
  .strict();
