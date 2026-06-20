import { SpritesheetSet } from '../spritesheet-set.js';
import type { AnimatedSpriteDto } from '../../types/animated-sprite.types.js';
import type {
  SpritesheetSetDto,
  SpritesheetSetsObject,
} from '../../types/spritesheet-element.types.js';
import type { Nullable } from '../../types/index.js';

export class AnimatedSprite<Tile extends string> {
  public readonly key: string;
  public readonly fps: number;
  public readonly frames: SpritesheetSet<Tile>;
  public readonly animation: Tile[];

  constructor(
    key: string,
    frames: SpritesheetSet<Tile>,
    fps: number,
    animation: Tile[]
  ) {
    this.key = key;
    this.fps = fps;
    this.frames = frames;
    this.animation = animation;
  }

  toDto(): AnimatedSpriteDto {
    const framesReference: string = this.frames.toDto().key;
    return {
      key: this.key,
      fps: this.fps,
      framesReference: framesReference,
      animation: this.animation,
    };
  }

  static fromDto(
    dto: AnimatedSpriteDto,
    sets: SpritesheetSetsObject
  ): Nullable<AnimatedSprite<string>> {
    const setDto: Nullable<SpritesheetSetDto> =
      sets[dto.framesReference] || null;
    if (!setDto) {
      return null;
    }
    const set: Nullable<SpritesheetSet<string>> =
      SpritesheetSet.fromDto(setDto);
    if (!set) {
      return null;
    }
    return new AnimatedSprite<string>(dto.key, set, dto.fps, dto.animation);
  }
}
