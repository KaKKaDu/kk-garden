import type { TilePathSpritesheetElementKey } from '../spritesheet-set';
import type { Cell, Direction } from './common.types';
export type PathMapElement = {
    priority: number;
    key: TilePathSpritesheetElementKey;
};
export type PathMap = Map<string, PathMapElement[]>;
export type GridPathElement = {
    cell: Cell;
    directions: Direction[];
    index: number;
};
//# sourceMappingURL=path.types.d.ts.map