import Piece from "./piece";
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const currentLocation = board.findPiece(this);
    this.player === Player.WHITE
      ? (currentLocation.row += 1)
      : (currentLocation.row -= 1);

    return currentLocation;
  }
}
