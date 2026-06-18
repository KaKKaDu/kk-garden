import type { AnimatedSpriteSetObject } from '../../../types/index.js';
import { AnimatedSpriteSet } from '../../animated-sprite/animated-sprite-set.js';
import { regularTreeSprite } from './regular-tree/regular-tree-sprite.js';

const treesAnimatedSpriteSetMap = {
  'regular-tree': {
    sprite: regularTreeSprite,
    density: 20,
  },
} as const satisfies AnimatedSpriteSetObject;

export const TreesAnimatedSpriteSet = new AnimatedSpriteSet({
  animatedSpriteMap: treesAnimatedSpriteSetMap,
});
