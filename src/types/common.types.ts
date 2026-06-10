import {
  type CellSchema,
  type CoordinatesSchema,
  SizeMeasuresSchema,
} from '../schemas';
import { z } from 'zod';

export type Nullable<T> = T | null | undefined;

export type FromZod<ZodObject extends z.ZodObject> = z.infer<ZodObject>;

export type Coordinates = FromZod<typeof CoordinatesSchema>;

export type SizeMeasures = FromZod<typeof SizeMeasuresSchema>;

export type Cell = FromZod<typeof CellSchema>;

export const directions = ['top', 'right', 'bottom', 'left'] as const;

export type Direction = (typeof directions)[number];

export type Move = Direction | 'straight' | 'back';

export type WithDensity<T> = T & { density?: number };

export type WithId<T> = T & { id: string };
