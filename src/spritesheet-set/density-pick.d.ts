import type { WithDensity } from '../types';
export type DensityPick<Data> = {
  data: WithDensity<Data>;
  key: string;
};
export declare const densityPick: <Data>(
  map: Map<string, WithDensity<Data>>
) => DensityPick<Data>;
//# sourceMappingURL=density-pick.d.ts.map
