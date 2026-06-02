import { densityPick } from './density-pick';
export class SpritesheetSet {
    map = new Map();
    pth;
    key;
    constructor(init) {
        const { spritesheetMap, spritesheetPath } = init;
        Object.entries(spritesheetMap).forEach(([key, element]) => {
            this.map.set(key, element);
        });
        this.pth = spritesheetPath;
        this.key = init.spritesheetKey;
    }
    get path() {
        return this.pth;
    }
    get id() {
        return this.key;
    }
    getElement(key) {
        const el = this.map.get(key);
        if (!el) {
            return el;
        }
        return {
            ...el,
            id: key,
        };
    }
    getRandomElement() {
        const pick = densityPick(this.map);
        return {
            ...pick.data,
            id: pick.key,
        };
    }
}
//# sourceMappingURL=spritesheet-set.js.map