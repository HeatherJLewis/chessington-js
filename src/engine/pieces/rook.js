import Piece from "./piece";
import { moveVerticallyAndHorizontally } from "../genericMoves";

export default class Rook extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const currentLocation = board.findPiece(this);
    let arrayOfLocations = [];

    moveVerticallyAndHorizontally(arrayOfLocations, currentLocation);

    return arrayOfLocations;
  }
}
