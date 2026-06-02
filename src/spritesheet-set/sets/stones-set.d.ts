import { SpritesheetSet } from '../spritesheet-set';
declare const stonesSpritesheetMap: {
    readonly 'stone-1': {
        readonly x: 0;
        readonly y: 0;
        readonly width: 32;
        readonly height: 32;
        readonly density: 10;
    };
    readonly 'stone-2': {
        readonly x: 32;
        readonly y: 0;
        readonly width: 24;
        readonly height: 24;
        readonly density: 10;
    };
};
export type StoneSpritesheetElementKey = keyof typeof stonesSpritesheetMap;
export declare const StonesSpritesheetSet: SpritesheetSet<"stone-1" | "stone-2">;
export {};
//# sourceMappingURL=stones-set.d.ts.map