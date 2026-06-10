import type { SpritesheetAssetKey } from '../assets';
import type { SpritesheetElementSchema } from '../schemas';
import type { SpritesheetSetDtoSchema } from '../schemas';
import type { FromZod } from './common.types';

export type SpritesheetElement = FromZod<typeof SpritesheetElementSchema>;

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

export type SpritesheetSetDto = FromZod<typeof SpritesheetSetDtoSchema>;
