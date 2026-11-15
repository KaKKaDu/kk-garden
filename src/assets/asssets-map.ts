export const assetsMapKeys = [
  'animation-spritesheet',
  'decorations-spritesheet',
  'stones-spritesheet',
  'tiles-spritesheet',
] as const;

export const AssetsMap = {
  'animation-spritesheet': './spritesheets/animation_spritesheet.png',
  'decorations-spritesheet': './spritesheets/decorations_spritesheet.png',
  'stones-spritesheet': './spritesheets/stones_spritesheet.png',
  'tiles-spritesheet': './spritesheets/tiles_spritesheet.png',
} as const satisfies Record<(typeof assetsMapKeys)[number], string>;

export type SpritesheetAssetKey = Extract<
  (typeof assetsMapKeys)[number],
  `${string}-spritesheet`
>;

export const getSpritesheetAsset = (key: SpritesheetAssetKey): string => {
  switch (key) {
    case 'animation-spritesheet':
      return new URL(
        './spritesheets/animation_spritesheet.png',
        import.meta.url
      ).href;
    case 'decorations-spritesheet':
      return new URL(
        './spritesheets/decorations_spritesheet.png',
        import.meta.url
      ).href;
    case 'stones-spritesheet':
      return new URL('./spritesheets/stones_spritesheet.png', import.meta.url)
        .href;
    case 'tiles-spritesheet':
      return new URL('./spritesheets/tiles_spritesheet.png', import.meta.url)
        .href;
    default: {
      const exhaustiveCheck: never = key;
      throw new Error(`Unsupported spritesheet asset key: ${exhaustiveCheck}`);
    }
  }
};

export const isSpritesheetAssetKey = (
  key: string
): key is SpritesheetAssetKey =>
  key.endsWith('-spritesheet') && Object.keys(AssetsMap).includes(key);
