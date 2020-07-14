import Piece from "./piece";
import Square from "../square";
export default class Bishop extends Piece {
  constructor(player) {
    super(player);
  }

  diagonalMoveForwardRight(board, arrayOfLocations, currentLocation) {
    let rowValueQuadOne = currentLocation.row;
    let columnValueQuadOne = currentLocation.col;

    for (let index = 0; index < 8; index++) {
      columnValueQuadOne += 1;
      rowValueQuadOne += 1;
      if (columnValueQuadOne < 8 && rowValueQuadOne < 8) {
        arrayOfLocations.push(Square.at(rowValueQuadOne, columnValueQuadOne));
      }
    }
    return arrayOfLocations;
  }

  diagonalMoveBackwardRight(board, arrayOfLocations, currentLocation) {
    let rowValueQuadTwo = currentLocation.row;
    let columnValueQuadTwo = currentLocation.col;

    for (let index = 0; index < 8; index++) {
      columnValueQuadTwo -= 1;
      rowValueQuadTwo -= 1;
      if (columnValueQuadTwo >= 0 && rowValueQuadTwo >= 0) {
        arrayOfLocations.push(Square.at(rowValueQuadTwo, columnValueQuadTwo));
      }
    }
    return arrayOfLocations;
  }

  diagonalMoveBackwardLeft(board, arrayOfLocations, currentLocation) {
    let rowValueQuadThree = currentLocation.row;
    let columnValueQuadThree = currentLocation.col;

    for (let index = 0; index < 8; index++) {
      columnValueQuadThree += 1;
      rowValueQuadThree -= 1;
      if (columnValueQuadThree < 8 && rowValueQuadThree >= 0) {
        arrayOfLocations.push(
          Square.at(rowValueQuadThree, columnValueQuadThree)
        );
      }
    }
    return arrayOfLocations;
  }

  diagonalMoveForwardLeft(board, arrayOfLocations, currentLocation) {
    let rowValueQuadFour = currentLocation.row;
    let columnValueQuadFour = currentLocation.col;

    for (let index = 0; index < 8; index++) {
      columnValueQuadFour -= 1;
      rowValueQuadFour += 1;
      if (columnValueQuadFour >= 0 && rowValueQuadFour < 8) {
        arrayOfLocations.push(Square.at(rowValueQuadFour, columnValueQuadFour));
      }
    }
    return arrayOfLocations;
  }

  getAvailableMoves(board) {
    const currentLocation = board.findPiece(this);

    let arrayOfLocations = [];
    this.diagonalMoveForwardRight(board, arrayOfLocations, currentLocation);
    this.diagonalMoveBackwardRight(board, arrayOfLocations, currentLocation);
    this.diagonalMoveBackwardLeft(board, arrayOfLocations, currentLocation);
    this.diagonalMoveForwardLeft(board, arrayOfLocations, currentLocation);

    return arrayOfLocations;
  }
}
