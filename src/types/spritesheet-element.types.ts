import type { SpritesheetAssetKey } from '../assets';
import type {FromZod} from "../schemas/models/common.schemas";
import type {SpritesheetElementSchema} from "../schemas/models/spritesheet-element.schema";

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
