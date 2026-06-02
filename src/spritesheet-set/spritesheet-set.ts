import type { Nullable, WithId } from '../types';
import type {
  SpritesheetElement,
  SpritesheetInit,
  SpritesheetPath,
  SpritesheetSetKey,
} from '../types';
import { type DensityPick, densityPick } from './density-pick';

export class SpritesheetSet<Tile extends string> {
  private map: Map<Tile, SpritesheetElement> = new Map<
    Tile,
    SpritesheetElement
  >();
  private readonly pth: SpritesheetPath;
  private readonly key: SpritesheetSetKey;

  constructor(init: SpritesheetInit<Tile>) {
    const { spritesheetMap, spritesheetPath } = init;
    Object.entries(spritesheetMap).forEach(([key, element]) => {
      this.map.set(key as Tile, element as SpritesheetElement);
    });
    this.pth = spritesheetPath;
    this.key = init.spritesheetKey;
  }

  get path(): SpritesheetPath {
    return this.pth;
  }

  get id(): SpritesheetSetKey {
    return this.key;
  }

  getElement(key: Tile): Nullable<WithId<SpritesheetElement>> {
    const el: Nullable<SpritesheetElement> = this.map.get(key);
    if (!el) {
      return el;
    }
    return {
      ...el,
      id: key,
    };
  }

  getRandomElement(): WithId<SpritesheetElement> {
    const pick: DensityPick<SpritesheetElement> = densityPick(this.map);
    return {
      ...pick.data,
      id: pick.key,
    };
  }
}
