import type { FromZod } from './common.types.js';
import type {
  GardenPaymentProviderKindSchema,
  GardenPaymentRecipientEmailSchema,
  GardenPaymentSchema,
  GardenPaymentStateSchema,
} from '../schemas/models/garden-payment.schema.js';

export type GardenPayment = FromZod<typeof GardenPaymentSchema>;
export type GardenPaymentState = FromZod<typeof GardenPaymentStateSchema>;
export type GardenPaymentProviderKind = FromZod<
  typeof GardenPaymentProviderKindSchema
>;
export type GardenPaymentRecipientEmail = FromZod<
  typeof GardenPaymentRecipientEmailSchema
>;
