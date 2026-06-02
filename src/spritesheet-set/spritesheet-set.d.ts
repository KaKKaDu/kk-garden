import type { Nullable, WithId } from '../types';
import type { SpritesheetElement, SpritesheetInit, SpritesheetPath, SpritesheetSetKey } from '../types';
export declare class SpritesheetSet<Tile extends string> {
    private map;
    private readonly pth;
    private readonly key;
    constructor(init: SpritesheetInit<Tile>);
    get path(): SpritesheetPath;
    get id(): SpritesheetSetKey;
    getElement(key: Tile): Nullable<WithId<SpritesheetElement>>;
    getRandomElement(): WithId<SpritesheetElement>;
}
//# sourceMappingURL=spritesheet-set.d.ts.map