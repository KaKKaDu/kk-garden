import { z } from 'zod';
import type { FromZod } from '../../types/common.types.js';
import { addMongoId } from './common.schemas.js';
import { UserIdSchema } from './id.schemas.js';

export const GardenShareRequestSchema = z
  .object({
    requesterId: UserIdSchema,
    ownerId: UserIdSchema,
    createdAt: z.string().or(z.date()),
  })
  .extend(addMongoId('string'));

export type GardenShareRequest = FromZod<typeof GardenShareRequestSchema>;
