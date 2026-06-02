export const densityPick = (map) => {
    const entries = Array.from(map.entries()).filter(([_, element]) => element.density && element.density > 0);
    const totalDensity = entries.reduce((sum, [_, el]) => sum + el.density, 0);
    const randomValue = Math.random() * totalDensity;
    let cumulative = 0;
    for (const [key, element] of entries) {
        cumulative += element.density;
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
//# sourceMappingURL=density-pick.js.map