export declare const AssetsMap: {
  readonly 'animation-spritesheet': string;
  readonly 'decorations-spritesheet': string;
  readonly 'stones-spritesheet': string;
  readonly 'tiles-spritesheet': string;
};
export type SpritesheetAssetKey = Extract<
  keyof typeof AssetsMap,
  `${string}-spritesheet`
>;
export declare const getSpritesheetAsset: (key: SpritesheetAssetKey) => string;
export declare const isSpritesheetAssetKey: (
  key: string
) => key is SpritesheetAssetKey;
//# sourceMappingURL=asssets-map.d.ts.map
