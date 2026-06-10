export class PathConstants {
  weights;
  metrics;
  constructor(weights, metrics) {
    this.weights = weights;
    this.metrics = metrics;
  }
  get pathsCount() {
    return this.metrics.paths;
  }
  get maxPathLength() {
    return this.metrics.maxLength;
  }
  get minPathLength() {
    return this.metrics.minLength;
  }
  get turnWeight() {
    return this.weights.turn;
  }
  get accuracy() {
    return this.weights.accuracy;
  }
}
//# sourceMappingURL=path-constants.js.map
