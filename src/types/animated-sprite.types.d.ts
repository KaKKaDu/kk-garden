import type { AnimatedSprite } from '../spritesheet-set';
import type { Cell, Coordinates, WithDensity } from './common.types';
export type AnimatedSpriteData<Tile extends string = string> = WithDensity<{
    sprite: AnimatedSprite<Tile>;
}>;
export type AnimatedSpriteSetObject<Sprite extends string = string, Tile extends string = string> = Record<Sprite, AnimatedSpriteData<Tile>>;
export type AnimatedSpriteSetInit<Sprite extends string = string, Tile extends string = string> = {
    animatedSpriteMap: AnimatedSpriteSetObject<Sprite, Tile>;
};
export type SpriteData = {
    sprite: AnimatedSprite<string>;
    cell: Cell;
    coordinates?: Coordinates;
};
//# sourceMappingURL=animated-sprite.types.d.ts.map