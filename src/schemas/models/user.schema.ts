import { z } from 'zod';
import { UserStatusSchema } from './user-status.schema.js';
import { UserRoleSchema } from './user-role.schema.js';
import { addMongoId } from './common.schemas.js';

export const UserSchema = z
  .object({
    email: z.email(),
    authId: z.string(),
    role: UserRoleSchema,
    status: UserStatusSchema,
  })
  .extend(addMongoId('string'));
