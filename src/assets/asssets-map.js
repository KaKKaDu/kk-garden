import AnimationSpritesheet from './spritesheets/animation_spritesheet.png';
import DecorationsSpritesheet from './spritesheets/decorations_spritesheet.png';
import StonesSpritesheet from './spritesheets/stones_spritesheet.png';
import TilesSpritesheet from './spritesheets/tiles_spritesheet.png';
export const AssetsMap = {
  'animation-spritesheet': AnimationSpritesheet,
  'decorations-spritesheet': DecorationsSpritesheet,
  'stones-spritesheet': StonesSpritesheet,
  'tiles-spritesheet': TilesSpritesheet,
};
export const getSpritesheetAsset = (key) => AssetsMap[key];
export const isSpritesheetAssetKey = (key) =>
  key.endsWith('-spritesheet') && Object.keys(AssetsMap).includes(key);
//# sourceMappingURL=asssets-map.js.map
