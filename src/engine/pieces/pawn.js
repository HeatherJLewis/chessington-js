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
          arrayOfLocations.push(Square.at(currentLocation.row += 1, currentLocation.col))
          arrayOfLocations.push(Square.at(currentLocation.row += 1, currentLocation.col))
        } else {
          // arrayOfLocations[0].row += 1
          arrayOfLocations.push(Square.at(currentLocation.row += 1, currentLocation.col))
        }
      } else {
        if(currentLocation.row === 6) {
          arrayOfLocations.push(Square.at(currentLocation.row -= 2, currentLocation.col))
          arrayOfLocations.push(Square.at(currentLocation.row += 1, currentLocation.col))
        } else {
          // currentLocation.row -= 1
          arrayOfLocations.push(Square.at(currentLocation.row -= 1, currentLocation.col))
        }
      }


    return arrayOfLocations;
  }
}
