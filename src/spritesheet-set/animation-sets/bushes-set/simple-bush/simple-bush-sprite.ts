import type { SpritesheetObject } from '../../../../types/index.js';
import { SpritesheetSet } from '../../../spritesheet-set.js';
import { AnimatedSprite } from '../../../animated-sprite/animated-sprite.js';

const simpleBushSpritesheetMap = {
  'frame-1': {
    x: 0,
    y: 0,
    width: 32,
    height: 32,
    density: 10,
  },
  'frame-2': {
    x: 0,
    y: 32,
    width: 32,
    height: 32,
    density: 10,
  },
} as const satisfies SpritesheetObject;

type SimpleBushSpritesheetKey = Extract<
  keyof typeof simpleBushSpritesheetMap,
  string
>;

const SimpleBushSpritesheetSet = new SpritesheetSet({
  spritesheetKey: 'simple-bush-sprite-set',
  spritesheetPath: 'animation-spritesheet',
  spritesheetMap: simpleBushSpritesheetMap,
});

export const simpleBushSprite = new AnimatedSprite<SimpleBushSpritesheetKey>(
  'simple-bush',
  SimpleBushSpritesheetSet,
  2,
  ['frame-1', 'frame-2']
);
