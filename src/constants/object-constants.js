export class ObjectConstants {
  weights;
  metrics;
  constructor(weights, metrics) {
    this.weights = weights;
    this.metrics = metrics;
  }
  get objectDensity() {
    return this.weights.density;
  }
  get objectGrouping() {
    return this.weights.grouping;
  }
  get objectDiversity() {
    return this.weights.diversity;
  }
  get minObjectsCount() {
    return this.metrics.minAmount;
  }
  get maxObjectsCount() {
    return this.metrics.maxAmount;
  }
}
//# sourceMappingURL=object-constants.js.map
