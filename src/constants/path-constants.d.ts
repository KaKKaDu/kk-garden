export type PathWeights = {
  turn: number;
  accuracy: number;
};
export type PathMetrics = {
  paths: number;
  maxLength: number;
  minLength: number;
  maxTurns: number;
};
export declare class PathConstants {
  private readonly weights;
  private readonly metrics;
  constructor(weights: PathWeights, metrics: PathMetrics);
  get pathsCount(): number;
  get maxPathLength(): number;
  get minPathLength(): number;
  get turnWeight(): number;
  get accuracy(): number;
}
//# sourceMappingURL=path-constants.d.ts.map
