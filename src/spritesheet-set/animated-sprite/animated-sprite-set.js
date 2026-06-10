import { densityPick } from '../density-pick';
export class AnimatedSpriteSet {
  map = new Map();
  constructor(init) {
    const { animatedSpriteMap } = init;
    Object.entries(animatedSpriteMap).forEach(([key, element]) => {
      this.map.set(key, element);
    });
  }
  getSprite(sprite) {
    return this.map.get(sprite);
  }
  getRandomSprite() {
    const pick = densityPick(this.map);
    return {
      ...pick.data,
      id: pick.key,
    };
  }
}
//# sourceMappingURL=animated-sprite-set.js.map
