import Piece from "./piece";
import { moveDiagonally } from "../genericMoves";
export default class Bishop extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const currentLocation = board.findPiece(this);
    let arrayOfLocations = [];

    moveDiagonally(arrayOfLocations, currentLocation);

    return arrayOfLocations;
  }
}
