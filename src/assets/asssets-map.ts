import AnimationSpritesheet from './spritesheets/animation_spritesheet.png';
import DecorationsSpritesheet from './spritesheets/decorations_spritesheet.png';
import StonesSpritesheet from './spritesheets/stones_spritesheet.png';
import TilesSpritesheet from './spritesheets/tiles_spritesheet.png';

export const AssetsMap = {
  'animation-spritesheet': AnimationSpritesheet,
  'decorations-spritesheet': DecorationsSpritesheet,
  'stones-spritesheet': StonesSpritesheet,
  'tiles-spritesheet': TilesSpritesheet,
} as const satisfies Record<string, string>;

export type SpritesheetAssetKey = Extract<
  keyof typeof AssetsMap,
  `${string}-spritesheet`
>;

export const getSpritesheetAsset = (key: SpritesheetAssetKey): string =>
  AssetsMap[key];

export const isSpritesheetAssetKey = (
  key: string
): key is SpritesheetAssetKey =>
  key.endsWith('-spritesheet') && Object.keys(AssetsMap).includes(key);
