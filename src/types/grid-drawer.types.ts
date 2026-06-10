import type { FromZod, WithId } from './common.types';
import type { SpriteData } from './animated-sprite.types';
import type { GridConstants } from '../constants';
import type { GridDrawerElementSchema } from '../schemas';

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
