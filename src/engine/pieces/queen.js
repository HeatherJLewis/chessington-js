import Piece from "./piece";
import { moveDiagonally, moveVerticallyAndHorizontally } from "../genericMoves";

export default class Queen extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const currentLocation = board.findPiece(this);
    let arrayOfLocations = [];

    moveDiagonally(arrayOfLocations, currentLocation);
    moveVerticallyAndHorizontally(arrayOfLocations, currentLocation);

    return arrayOfLocations;
  }
}
