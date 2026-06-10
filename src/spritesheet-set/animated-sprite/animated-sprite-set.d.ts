import type {
  Nullable,
  WithId,
  AnimatedSpriteData,
  AnimatedSpriteSetInit,
} from '../../types';
export declare class AnimatedSpriteSet<Sprite extends string> {
  private map;
  constructor(init: AnimatedSpriteSetInit<Sprite>);
  getSprite(sprite: Sprite): Nullable<AnimatedSpriteData>;
  getRandomSprite(): WithId<AnimatedSpriteData>;
}
//# sourceMappingURL=animated-sprite-set.d.ts.map
