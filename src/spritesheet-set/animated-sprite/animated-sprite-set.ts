import type {
  Nullable,
  WithId,
  AnimatedSpriteData,
  AnimatedSpriteSetInit,
} from '../../types/index.js';
import { type DensityPick, densityPick } from '../density-pick.js';

export class AnimatedSpriteSet<Sprite extends string> {
  private map: Map<Sprite, AnimatedSpriteData> = new Map<
    Sprite,
    AnimatedSpriteData
  >();

  constructor(init: AnimatedSpriteSetInit<Sprite>) {
    const { animatedSpriteMap } = init;
    Object.entries(animatedSpriteMap).forEach(([key, element]) => {
      this.map.set(key as Sprite, element as AnimatedSpriteData);
    });
  }

  getSprite(sprite: Sprite): Nullable<AnimatedSpriteData> {
    return this.map.get(sprite);
  }

  getRandomSprite(): WithId<AnimatedSpriteData> {
    const pick: DensityPick<AnimatedSpriteData> = densityPick(this.map);
    return {
      ...pick.data,
      id: pick.key,
    };
  }
}
