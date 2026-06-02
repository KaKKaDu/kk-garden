import type { Coordinates, SizeMeasures, WithDensity } from './common.types.ts';
import type { SpritesheetAssetKey } from '../assets';

export type SpritesheetElement = WithDensity<Coordinates & SizeMeasures>;

export type SpritesheetObject<Tile extends string = string> = Record<
  Tile,
  SpritesheetElement
>;

export type SpritesheetPath = SpritesheetAssetKey;

export type SpritesheetSetKey = `${string}-set`;

export const isSpritesheetSetKey = (key: string): key is SpritesheetSetKey =>
  key.endsWith('-set');

export type SpritesheetInit<Tile extends string = string> = {
  spritesheetKey: SpritesheetSetKey;
  spritesheetPath: SpritesheetPath;
  spritesheetMap: SpritesheetObject<Tile>;
};
