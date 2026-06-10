export type DecorationWeights = {
  density: number;
  frequency: number;
};
export type DecorationMetrics = {
  padding: number;
};
export declare class DecorationConstants {
  private readonly weights;
  private readonly metrics;
  constructor(weights: DecorationWeights, metrics: DecorationMetrics);
  get decorationsDensity(): number;
  get decorationsFrequency(): number;
  get padding(): number;
}
//# sourceMappingURL=decoration-constants.d.ts.map
