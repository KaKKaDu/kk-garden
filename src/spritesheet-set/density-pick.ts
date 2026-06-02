import type { WithDensity } from '../types';

export type DensityPick<Data> = {
  data: WithDensity<Data>;
  key: string;
};

export const densityPick = <Data>(
  map: Map<string, WithDensity<Data>>
): DensityPick<Data> => {
  const entries = Array.from(map.entries()).filter(
    ([_, element]) => element.density && element.density > 0
  );

  const totalDensity = entries.reduce(
    (sum, [_, el]) => sum + (el.density as number),
    0
  );

  const randomValue: number = Math.random() * totalDensity;

  let cumulative = 0;

  for (const [key, element] of entries) {
    cumulative += element.density as number;
    if (randomValue < cumulative) {
      return {
        data: element,
        key,
      };
    }
  }

  // fallback (should theoretically never happen)
  return {
    data: entries[entries.length - 1][1],
    key: entries[entries.length - 1][0],
  };
};
