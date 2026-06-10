import type { SpritesheetSet } from '../spritesheet-set.ts';
export declare class AnimatedSprite<Tile extends string> {
  readonly key: string;
  readonly fps: number;
  readonly frames: SpritesheetSet<Tile>;
  readonly animation: Tile[];
  constructor(
    key: string,
    frames: SpritesheetSet<Tile>,
    fps: number,
    animation: Tile[]
  );
}
//# sourceMappingURL=animated-sprite.d.ts.map
