import { AnimatedSpriteSet } from '../../animated-sprite/animated-sprite-set';
import { regularTreeSprite } from './regular-tree/regular-tree-sprite';
const treesAnimatedSpriteSetMap = {
    'regular-tree': {
        sprite: regularTreeSprite,
        density: 20,
    },
};
export const TreesAnimatedSpriteSet = new AnimatedSpriteSet({
    animatedSpriteMap: treesAnimatedSpriteSetMap,
});
//# sourceMappingURL=trees-animation-set.js.map