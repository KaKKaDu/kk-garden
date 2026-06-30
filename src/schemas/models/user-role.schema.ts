import { z } from 'zod';
import { userRoles } from '../../types/user.types.js';

export const UserRoleSchema = z.enum(userRoles);
