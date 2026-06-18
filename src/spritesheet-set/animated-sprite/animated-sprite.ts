import type { SpritesheetSet } from '../spritesheet-set.js';

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
}
