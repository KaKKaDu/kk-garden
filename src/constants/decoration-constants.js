export class DecorationConstants {
    weights;
    metrics;
    constructor(weights, metrics) {
        this.weights = weights;
        this.metrics = metrics;
    }
    get decorationsDensity() {
        return this.weights.density;
    }
    get decorationsFrequency() {
        return this.weights.frequency;
    }
    get padding() {
        return this.metrics.padding;
    }
}
//# sourceMappingURL=decoration-constants.js.map