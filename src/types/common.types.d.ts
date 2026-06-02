export type Nullable<T> = T | null | undefined;
export type Coordinates = {
    x: number;
    y: number;
};
export type SizeMeasures = {
    width: number;
    height: number;
};
export type Cell = {
    row: number;
    column: number;
};
export declare const directions: readonly ["top", "right", "bottom", "left"];
export type Direction = (typeof directions)[number];
export type Move = Direction | 'straight' | 'back';
export type WithDensity<T> = T & {
    density?: number;
};
export type WithId<T> = T & {
    id: string;
};
//# sourceMappingURL=common.types.d.ts.map