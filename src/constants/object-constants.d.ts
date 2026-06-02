export type ObjectWeights = {
    density: number;
    grouping: number;
    diversity: number;
};
export type ObjectMetrics = {
    minAmount: number;
    maxAmount: number;
};
export declare class ObjectConstants {
    private readonly weights;
    private readonly metrics;
    constructor(weights: ObjectWeights, metrics: ObjectMetrics);
    get objectDensity(): number;
    get objectGrouping(): number;
    get objectDiversity(): number;
    get minObjectsCount(): number;
    get maxObjectsCount(): number;
}
//# sourceMappingURL=object-constants.d.ts.map