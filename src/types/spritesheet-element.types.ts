import type { SpritesheetAssetKey } from '../assets/index.js';
import type { SpritesheetElementSchema } from '../schemas/index.js';
import type { SpritesheetSetDtoSchema } from '../schemas/index.js';
import type { FromZod } from './common.types.js';
import type {SpritesheetSetsObjectSchema} from "../schemas/models/spritesheet-sets-object.schema.js";

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
export type SpritesheetSetsObject = FromZod<typeof SpritesheetSetsObjectSchema>;
