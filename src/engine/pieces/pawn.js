import Piece from "./piece";
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const currentLocation = board.findPiece(this);

    const arrayOfLocations = [];

      if (this.player === Player.WHITE) {
        if(currentLocation.row === 1) {
          arrayOfLocations.push(Square.at(2, 7))
          arrayOfLocations.push(Square.at(3, 7))
        } else {
          // arrayOfLocations[0].row += 1
          arrayOfLocations.push(Square.at(3, 0))
        }
      } else {
        if(currentLocation.row === 6) {
          arrayOfLocations.push(Square.at(4, 7))
          arrayOfLocations.push(Square.at(5, 7))
        } else {
          // currentLocation.row -= 1
          // else move one square
          arrayOfLocations.push(Square.at(4, 0))
        }
      }


    return arrayOfLocations;
  }
}
