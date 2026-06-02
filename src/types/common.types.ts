export type Nullable<T> = T | null | undefined;

export type Coordinates = { x: number; y: number };

export type SizeMeasures = { width: number; height: number };

export type Cell = { row: number; column: number };

export const directions = ['top', 'right', 'bottom', 'left'] as const;

export type Direction = (typeof directions)[number];

export type Move = Direction | 'straight' | 'back';

export type WithDensity<T> = T & { density?: number };

export type WithId<T> = T & { id: string };
