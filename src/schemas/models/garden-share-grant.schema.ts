import { z } from 'zod';
import type { FromZod } from '../../types/common.types.js';
import { addMongoId } from './common.schemas.js';
import { UserIdSchema } from './id.schemas.js';

export const GardenShareGrantSchema = z
  .object({
    viewerId: UserIdSchema,
    ownerId: UserIdSchema,
    grantedAt: z.string().or(z.date()),
  })
  .extend(addMongoId('string'));

export type GardenShareGrant = FromZod<typeof GardenShareGrantSchema>;
