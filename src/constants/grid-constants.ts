import type {GridConstantsDto} from "../types/constants.types.js";

export class GridConstants {
  private readonly size: number;
  public readonly columns: number;
  public readonly rows: number;

  constructor(cellSize: number, gridColumns: number, gridRows: number) {
    this.size = cellSize;
    this.columns = gridColumns;
    this.rows = gridRows;
  }

  get cellSize(): number {
    return this.size;
  }

  get canvasWidth(): number {
    return this.size * this.columns;
  }

  get canvasHeight(): number {
    return this.size * this.rows;
  }

  toDto(): GridConstantsDto {
    return {
      size: this.size,
      columns: this.columns,
      rows: this.rows,
    };
  };

  static fromDto(dto: GridConstantsDto): GridConstants {
    return new GridConstants(dto.size, dto.columns, dto.rows);
  };
}
