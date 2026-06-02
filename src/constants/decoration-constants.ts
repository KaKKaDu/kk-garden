export type DecorationWeights = {
  density: number;
  frequency: number;
};

export type DecorationMetrics = {
  padding: number;
};

export class DecorationConstants {
  private readonly weights: DecorationWeights;
  private readonly metrics: DecorationMetrics;

  constructor(weights: DecorationWeights, metrics: DecorationMetrics) {
    this.weights = weights;
    this.metrics = metrics;
  }

  get decorationsDensity(): number {
    return this.weights.density;
  }

  get decorationsFrequency(): number {
    return this.weights.frequency;
  }

  get padding(): number {
    return this.metrics.padding;
  }
}
