import type { FromZod } from './common.types.js';
import type {
  AvatarWorkClaimSchema,
  AvatarWorkFailureSchema,
} from '../schemas/models/avatar-work.schema.js';
import type {
  ProfileAvatarUploadResultSchema,
  ProfileAvatarUploadSessionSchema,
} from '../schemas/models/profile-avatar-upload-session.schema.js';
import type {
  AvatarCleanupJobSchema,
  AvatarCleanupTargetSchema,
} from '../schemas/models/avatar-cleanup-job.schema.js';

export type AvatarWorkClaim = FromZod<typeof AvatarWorkClaimSchema>;
export type AvatarWorkFailure = FromZod<typeof AvatarWorkFailureSchema>;
export type ProfileAvatarUploadResult = FromZod<
  typeof ProfileAvatarUploadResultSchema
>;
export type ProfileAvatarUploadSession = FromZod<
  typeof ProfileAvatarUploadSessionSchema
>;
export type AvatarCleanupTarget = FromZod<typeof AvatarCleanupTargetSchema>;
export type AvatarCleanupJob = FromZod<typeof AvatarCleanupJobSchema>;
