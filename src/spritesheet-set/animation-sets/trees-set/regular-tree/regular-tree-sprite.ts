import type { SpritesheetObject } from '../../../../types/index.js';
import { SpritesheetSet } from '../../../spritesheet-set.js';
import { AnimatedSprite } from '../../../animated-sprite/animated-sprite.js';

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
} as const satisfies SpritesheetObject;

type RegularTreeSpritesheetKey = Extract<keyof typeof regularTreeSpritesheetMap, string>;

const RegularTreeSpritesheetSet = new SpritesheetSet({
  spritesheetKey: 'regular-tree-sprite-set',
  spritesheetPath: 'animation-spritesheet',
  spritesheetMap: regularTreeSpritesheetMap,
});

export const regularTreeSprite = new AnimatedSprite<RegularTreeSpritesheetKey>(
  'regular-tree',
  RegularTreeSpritesheetSet,
  2,
  ['frame-1', 'frame-2']
);
