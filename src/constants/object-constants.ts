export type ObjectWeights = {
  density: number;
  grouping: number;
  diversity: number;
};

export type ObjectMetrics = {
  minAmount: number;
  maxAmount: number;
};

export class ObjectConstants {
  private readonly weights: ObjectWeights;
  private readonly metrics: ObjectMetrics;

  constructor(weights: ObjectWeights, metrics: ObjectMetrics) {
    this.weights = weights;
    this.metrics = metrics;
  }

  get objectDensity(): number {
    return this.weights.density;
  }

  get objectGrouping(): number {
    return this.weights.grouping;
  }

  get objectDiversity(): number {
    return this.weights.diversity;
  }

  get minObjectsCount(): number {
    return this.metrics.minAmount;
  }

  get maxObjectsCount(): number {
    return this.metrics.maxAmount;
  }
}
