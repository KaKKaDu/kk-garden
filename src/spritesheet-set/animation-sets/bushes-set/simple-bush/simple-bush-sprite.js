import { SpritesheetSet } from '../../../spritesheet-set';
import { AnimatedSprite } from '../../../animated-sprite/animated-sprite';
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
};
const SimpleBushSpritesheetSet = new SpritesheetSet({
    spritesheetKey: 'simple-bush-sprite-set',
    spritesheetPath: 'animation-spritesheet',
    spritesheetMap: simpleBushSpritesheetMap,
});
export const simpleBushSprite = new AnimatedSprite('simple-bush', SimpleBushSpritesheetSet, 2, ['frame-1', 'frame-2']);
//# sourceMappingURL=simple-bush-sprite.js.map