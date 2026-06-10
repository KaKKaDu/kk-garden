import { SpritesheetSet } from '../../../spritesheet-set';
import { AnimatedSprite } from '../../../animated-sprite/animated-sprite';
const regularTreeSpritesheetMap = {
  'frame-1': {
    x: 32,
    y: 0,
    width: 68,
    height: 68,
    density: 10,
  },
  'frame-2': {
    x: 32,
    y: 68,
    width: 68,
    height: 68,
    density: 10,
  },
};
const RegularTreeSpritesheetSet = new SpritesheetSet({
  spritesheetKey: 'regular-tree-sprite-set',
  spritesheetPath: 'animation-spritesheet',
  spritesheetMap: regularTreeSpritesheetMap,
});
export const regularTreeSprite = new AnimatedSprite(
  'regular-tree',
  RegularTreeSpritesheetSet,
  2,
  ['frame-1', 'frame-2']
);
//# sourceMappingURL=regular-tree-sprite.js.map
