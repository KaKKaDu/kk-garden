import type { FromZod } from './common.types.js';
import type {
  GridDrawerElementIdSchema,
  ProfileAvatarUploadIdSchema,
  SignatureIdSchema,
  UserIdSchema,
  VisualisationIdSchema,
  OwnershipIdSchema,
  VisualisationPendingIdSchema,
} from '../schemas/index.js';

export type GridDrawerElementId = FromZod<typeof GridDrawerElementIdSchema>;

export type SignatureId = FromZod<typeof SignatureIdSchema>;

export type VisualisationId = FromZod<typeof VisualisationIdSchema>;

export type VisualisationPendingId = FromZod<
  typeof VisualisationPendingIdSchema
>;

export type ProfileAvatarUploadId = FromZod<typeof ProfileAvatarUploadIdSchema>;

export type UserId = FromZod<typeof UserIdSchema>;

export type OwnershipId = FromZod<typeof OwnershipIdSchema>;
