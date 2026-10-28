import { z } from 'zod';
import type { FromZod } from '../../../types/common.types.js';
import { GardenShareGrantIdSchema } from '../../models/id.schemas.js';
import { VisualisationDtoSchema } from '../../models/visualisation-dto.schema.js';
import { GardenProfileResponseSchema } from '../profile/profile-garden-view.schema.js';

export const GardenViewParamsSchema = z
  .object({
    grantId: GardenShareGrantIdSchema,
  })
  .strict();

export const GardenViewResponseSchema = z
  .object({
    garden: VisualisationDtoSchema,
    profile: GardenProfileResponseSchema,
  })
  .strict();

export type GardenViewResponse = FromZod<typeof GardenViewResponseSchema>;
