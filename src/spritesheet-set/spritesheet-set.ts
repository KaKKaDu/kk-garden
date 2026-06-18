import { isSpritesheetSetKey, type Nullable, type WithId } from '../types/index.js';
import type {
  SpritesheetElement,
  SpritesheetInit,
  SpritesheetPath,
  SpritesheetSetKey,
} from '../types/index.js';
import { type DensityPick, densityPick } from './density-pick.js';
import type { SpritesheetSetDto } from '../types/spritesheet-element.types.js';

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

  toDto(): SpritesheetSetDto {
    return {
      key: this.key,
      path: this.pth,
      map: Object.fromEntries(this.map),
    };
  }

  static fromDto(dto: SpritesheetSetDto): Nullable<SpritesheetSet<string>> {
    const { key, path, map } = dto;

    const isValidDto: boolean = isSpritesheetSetKey(key) && !!path && !!map;

    if (isValidDto) {
      return new SpritesheetSet({
        spritesheetKey: key as SpritesheetSetKey,
        spritesheetPath: path,
        spritesheetMap: map,
      });
    }

    return null;
  }
}
