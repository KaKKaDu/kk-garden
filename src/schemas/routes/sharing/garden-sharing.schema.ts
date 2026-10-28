import { z } from 'zod';
import type { FromZod } from '../../../types/common.types.js';
import { ProfileAvatarDeliverySchema } from '../../models/profile-avatar-delivery.schema.js';
import {
  GardenShareGrantIdSchema,
  GardenShareRequestIdSchema,
} from '../../models/id.schemas.js';
import {
  ProfileDisplayNameSchema,
  ProfileLookupCodeSchema,
} from '../../models/profile.schema.js';

export const GardenShareDirectionSchema = z.enum(['incoming', 'outgoing']);

export const CreateGardenShareRequestSchema = z
  .object({
    lookupCode: ProfileLookupCodeSchema,
  })
  .strict();

export const GardenShareRequestIdParamsSchema = z
  .object({
    requestId: GardenShareRequestIdSchema,
  })
  .strict();

export const GardenShareGrantIdParamsSchema = z
  .object({
    grantId: GardenShareGrantIdSchema,
  })
  .strict();

export const GardenShareListQuerySchema = z
  .object({
    direction: GardenShareDirectionSchema,
    page: z.coerce
      .number()
      .int()
      .min(1)
      .max(Number.MAX_SAFE_INTEGER)
      .default(1),
    pageSize: z.coerce.number().int().min(1).max(50).default(50),
  })
  .strict()
  .superRefine(({ page, pageSize }, context): void => {
    if (!Number.isSafeInteger((page - 1) * pageSize)) {
      context.addIssue({
        code: 'custom',
        message: 'Pagination offset exceeds the safe integer range',
        path: ['page'],
      });
    }
  });

export const GardenShareListEntrySchema = z
  .object({
    id: z.string().min(1),
    displayName: ProfileDisplayNameSchema,
    avatar: ProfileAvatarDeliverySchema.nullable(),
    createdAt: z.string().or(z.date()),
  })
  .strict();

export const GardenShareListResponseSchema = z
  .object({
    items: z.array(GardenShareListEntrySchema),
    page: z.number().int().min(1),
    pageSize: z.number().int().min(1).max(50),
    hasNextPage: z.boolean(),
  })
  .strict();

export const CreateGardenShareRequestResponseSchema = z
  .object({
    requestId: GardenShareRequestIdSchema,
  })
  .strict();

export const GardenShareActionResponseSchema = z
  .object({
    success: z.boolean(),
  })
  .strict();

export type CreateGardenShareRequest = FromZod<
  typeof CreateGardenShareRequestSchema
>;
export type GardenShareDirection = FromZod<typeof GardenShareDirectionSchema>;
export type GardenShareListQuery = FromZod<typeof GardenShareListQuerySchema>;
export type GardenShareListEntry = FromZod<typeof GardenShareListEntrySchema>;
export type GardenShareListResponse = FromZod<
  typeof GardenShareListResponseSchema
>;
export type CreateGardenShareRequestResponse = FromZod<
  typeof CreateGardenShareRequestResponseSchema
>;
export type GardenShareActionResponse = FromZod<
  typeof GardenShareActionResponseSchema
>;
