import type { SpritesheetInit, SpritesheetObject } from '../../types';
import { SpritesheetSet } from '../spritesheet-set';

const stonesSpritesheetMap = {
  'stone-1': {
    x: 0,
    y: 0,
    width: 32,
    height: 32,
    density: 10,
  },
  'stone-2': {
    x: 32,
    y: 0,
    width: 24,
    height: 24,
    density: 10,
  },
} as const satisfies SpritesheetObject;

export type StoneSpritesheetElementKey = keyof typeof stonesSpritesheetMap;

const stonesSpritesheetSet: SpritesheetInit<StoneSpritesheetElementKey> = {
  spritesheetKey: 'stones-set',
  spritesheetPath: 'stones-spritesheet',
  spritesheetMap: stonesSpritesheetMap,
};

export const StonesSpritesheetSet =
  new SpritesheetSet<StoneSpritesheetElementKey>(stonesSpritesheetSet);
