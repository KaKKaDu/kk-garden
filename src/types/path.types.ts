import type { TilePathSpritesheetElementKey } from '../spritesheet-set/index.js';
import type { Cell, Direction } from './common.types.js';

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
