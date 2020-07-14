export default class Square {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    static at(row, col) {
        return new Square(row, col);
    }

    //(location.row > -1 && location.row < 8) && (location.col > -1 && location.col < 8)

    checkViableMove(){
        return (this.row > -1 && this.row < 8) && (this.col > -1 && this.col < 8) ? true : false;
    }

    equals(otherSquare) {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    toString() {
        return `Row ${this.row}, Col ${this.col}`;
    }
}
