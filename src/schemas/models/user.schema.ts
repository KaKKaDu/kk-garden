import { z } from 'zod';
import { UserStatusSchema } from './user-status.schema.js';
import { UserRoleSchema } from './user-role.schema.js';

export const UserSchema = z.object({
  _id: z.string(),
  email: z.email(),
  authId: z.string(),
  role: UserRoleSchema,
  status: UserStatusSchema,
});
