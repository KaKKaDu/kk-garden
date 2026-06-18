import type { AnimatedSpriteSetObject } from '../../../types/index.js';
import { AnimatedSpriteSet } from '../../animated-sprite/animated-sprite-set.js';
import { simpleBushSprite } from './simple-bush/simple-bush-sprite.js';

const bushesAnimatedSpriteSetMap = {
  'regular-tree': {
    sprite: simpleBushSprite,
    density: 20,
  },
} as const satisfies AnimatedSpriteSetObject;

export const BushesAnimatedSpriteSet = new AnimatedSpriteSet({
  animatedSpriteMap: bushesAnimatedSpriteSetMap,
});
