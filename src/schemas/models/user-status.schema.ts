import { z } from 'zod';
import { userStatuses } from '../../types/user.types.js';

export const UserStatusSchema = z.enum(userStatuses);
