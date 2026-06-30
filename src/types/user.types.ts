import type { FromZod } from './common.types.js';
import { UserSchema } from '../schemas/index.js';

export const userRoles = ['admin', 'user'] as const;

export type UserRole = (typeof userRoles)[number];

export const userStatuses = [
  'active',
  'suspended',
  'inactive',
  'deleted',
] as const;

export type UserStatus = (typeof userStatuses)[number];

export type User = FromZod<typeof UserSchema>;
