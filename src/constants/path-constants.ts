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

export class PathConstants {
  private readonly weights: PathWeights;
  private readonly metrics: PathMetrics;

  constructor(weights: PathWeights, metrics: PathMetrics) {
    this.weights = weights;
    this.metrics = metrics;
  }

  get pathsCount(): number {
    return this.metrics.paths;
  }

  get maxPathLength(): number {
    return this.metrics.maxLength;
  }

  get minPathLength(): number {
    return this.metrics.minLength;
  }

  get turnWeight(): number {
    return this.weights.turn;
  }

  get accuracy(): number {
    return this.weights.accuracy;
  }
}
