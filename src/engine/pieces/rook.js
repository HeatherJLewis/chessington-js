import Piece from "./piece";
import Square from "../square";

export default class Rook extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const currentLocation = board.findPiece(this);

    let arrayOfLocations = [];
    for (let i = 0; i < 8; i++) {
      if (i !== currentLocation.col) {
        arrayOfLocations.push(Square.at(currentLocation.row, i));
      }
      if (i !== currentLocation.row) {
        arrayOfLocations.push(Square.at(i, currentLocation.col));
      }
    }
    return arrayOfLocations;
  }
}
