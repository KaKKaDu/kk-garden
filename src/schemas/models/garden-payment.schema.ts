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

export const GardenPaymentInvitationStatusSchema = z.enum([
  'not_required',
  'not_sent',
  'sent',
  'failed',
]);

export const GardenPaymentProviderKindSchema = z.string().trim().min(1);

export const GardenPaymentRecipientEmailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .pipe(z.email());

export const GardenPaymentTimestampSchema = z.string().or(z.date());

const GardenPaymentBaseSchema = z
  .object({
    _id: GardenPaymentIdSchema,
    recipientEmail: GardenPaymentRecipientEmailSchema,
    recipientUserId: UserIdSchema.nullable(),
    isGift: z.boolean(),
    invitationEmailStatus: GardenPaymentInvitationStatusSchema.optional(),
    paidByUserId: UserIdSchema.nullable(),
    state: GardenPaymentStateSchema,
    providerKind: GardenPaymentProviderKindSchema,
    providerReference: z.string().min(1).nullable(),
    createdAt: GardenPaymentTimestampSchema,
    paidAt: GardenPaymentTimestampSchema.nullable(),
    ownershipId: OwnershipIdSchema.nullable(),
  })
  .strict();

export const GardenPaymentSchema = GardenPaymentBaseSchema.transform(
  (payment) => ({
    ...payment,
    invitationEmailStatus:
      payment.invitationEmailStatus ??
      (payment.isGift ? 'not_sent' : 'not_required'),
  })
);
