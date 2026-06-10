export class GridConstants {
  size;
  columns;
  rows;
  constructor(cellSize, gridColumns, gridRows) {
    this.size = cellSize;
    this.columns = gridColumns;
    this.rows = gridRows;
  }
  get cellSize() {
    return this.size;
  }
  get canvasWidth() {
    return this.size * this.columns;
  }
  get canvasHeight() {
    return this.size * this.rows;
  }
}
//# sourceMappingURL=grid-constants.js.map
