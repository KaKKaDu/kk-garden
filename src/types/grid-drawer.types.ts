import type { FromZod, WithId } from './common.types.js';
import type { SpriteData } from './animated-sprite.types.js';
import type { GridConstants } from '../constants/index.js';
import type { GridDrawerElementSchema } from '../schemas/index.js';

export type GridDrawerElement = FromZod<typeof GridDrawerElementSchema>;

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
