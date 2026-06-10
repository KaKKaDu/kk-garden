import type {
  SpritesheetElement,
  SpritesheetPath,
} from './spritesheet-element.types';
import type { Cell, Coordinates, SizeMeasures, WithId } from './common.types';
import type { SpriteData } from './animated-sprite.types';
import type { GridConstants } from '../constants';
export type GridDrawerElement = {
  spritesheetPath: SpritesheetPath;
  element: SpritesheetElement;
  cell: Cell;
  innerCoordinates?: Coordinates;
  sizes?: SizeMeasures;
  index: number;
};
export type StaticDrawReport = {
  report: string;
  elements: WithId<GridDrawerElement>[];
};
export type GardenDrawData = {
  tile: WithId<GridDrawerElement>[];
  trees: SpriteData[];
  bushes: SpriteData[];
  stones: WithId<GridDrawerElement>[];
};
export type GardenGridConstants = {
  gridConstants: GridConstants;
  largeGridConstants: GridConstants;
};
//# sourceMappingURL=grid-drawer.types.d.ts.map
