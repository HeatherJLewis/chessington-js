export default class Square {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }

  static at(row, col) {
    return new Square(row, col);
  }

  isViableMove() {
    return this.row > -1 && this.row < 8 && this.col > -1 && this.col < 8
  }

  equals(otherSquare) {
    return (
      !!otherSquare &&
      this.row === otherSquare.row &&
      this.col === otherSquare.col
    );
  }

  toString() {
    return `Row ${this.row}, Col ${this.col}`;
  }
}
