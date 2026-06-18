import type { SpritesheetInit, SpritesheetObject } from '../../types/index.js';
import { SpritesheetSet } from '../spritesheet-set.js';

const decorationsSpritesheetMap = {
  'white-flower-1': {
    x: 0,
    y: 0,
    width: 6,
    height: 4,
    density: 10,
  },
  'white-flower-2': {
    x: 12,
    y: 0,
    width: 6,
    height: 5,
    density: 10,
  },
  'white-flower-3': {
    x: 18,
    y: 0,
    width: 5,
    height: 5,
    density: 10,
  },
  'white-flower-4': {
    x: 23,
    y: 0,
    width: 6,
    height: 5,
    density: 10,
  },
  'white-flower-5': {
    x: 8,
    y: 5,
    width: 6,
    height: 5,
    density: 10,
  },
  'white-flower-6': {
    x: 20,
    y: 5,
    width: 6,
    height: 6,
    density: 10,
  },
  'light-green-grass-1': {
    x: 0,
    y: 5,
    width: 8,
    height: 5,
    density: 100,
  },
  'light-green-grass-2': {
    x: 16,
    y: 18,
    width: 5,
    height: 8,
    density: 100,
  },
  'light-green-grass-3': {
    x: 21,
    y: 18,
    width: 6,
    height: 10,
    density: 100,
  },
  'dark-green-grass-1': {
    x: 26,
    y: 5,
    width: 5,
    height: 6,
    density: 35,
  },
  'dark-green-grass-2': {
    x: 0,
    y: 11,
    width: 9,
    height: 6,
    density: 35,
  },
  'dark-green-grass-3': {
    x: 24,
    y: 11,
    width: 5,
    height: 7,
    density: 35,
  },
  'yellow-grass-1': {
    x: 6,
    y: 0,
    width: 6,
    height: 4,
    density: 20,
  },
  'yellow-grass-2': {
    x: 14,
    y: 5,
    width: 6,
    height: 5,
    density: 20,
  },
  'yellow-grass-3': {
    x: 9,
    y: 11,
    width: 8,
    height: 6,
    density: 20,
  },
  'yellow-grass-4': {
    x: 17,
    y: 11,
    width: 7,
    height: 6,
    density: 20,
  },
  'yellow-grass-5': {
    x: 24,
    y: 0,
    width: 6,
    height: 4,
    density: 20,
  },
  'yellow-grass-6': {
    x: 0,
    y: 18,
    width: 7,
    height: 7,
    density: 20,
  },
  'yellow-grass-7': {
    x: 7,
    y: 18,
    width: 9,
    height: 7,
    density: 20,
  },
} as const satisfies SpritesheetObject;

export type DecorationSpreadsheetElementKey = Extract<
  keyof typeof decorationsSpritesheetMap,
  string
>;

const decorationsSpritesheetSet: SpritesheetInit<DecorationSpreadsheetElementKey> =
  {
    spritesheetKey: 'decorations-set',
    spritesheetPath: 'decorations-spritesheet',
    spritesheetMap: decorationsSpritesheetMap,
  };

export const DecorationsSpritesheetSet =
  new SpritesheetSet<DecorationSpreadsheetElementKey>(
    decorationsSpritesheetSet
  );
