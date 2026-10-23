import { z } from 'zod';

export const GridDrawerElementIdSchema = z.string();

export const SignatureIdSchema = z.string();

export const VisualisationIdSchema = z.string();

export const VisualisationPendingIdSchema = z.string();

export const ProfileAvatarUploadIdSchema = z.string();

export const AvatarCleanupJobIdSchema = z.string().min(1);

export const UserIdSchema = z.string();

export const OwnershipIdSchema = z.string();

export const GardenShareRequestIdSchema = z.string().min(1);

export const GardenShareGrantIdSchema = z.string().min(1);
