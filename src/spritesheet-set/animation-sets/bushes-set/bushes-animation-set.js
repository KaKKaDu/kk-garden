import { AnimatedSpriteSet } from '../../animated-sprite/animated-sprite-set';
import { simpleBushSprite } from './simple-bush/simple-bush-sprite';
const bushesAnimatedSpriteSetMap = {
    'regular-tree': {
        sprite: simpleBushSprite,
        density: 20,
    },
};
export const BushesAnimatedSpriteSet = new AnimatedSpriteSet({
    animatedSpriteMap: bushesAnimatedSpriteSetMap,
});
//# sourceMappingURL=bushes-animation-set.js.map