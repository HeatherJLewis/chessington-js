import Piece from "./piece";
import Square from "../square";

export default class King extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const currentLocation = board.findPiece(this);
    let arrayOfLocations = [];
    const arrayOfmoves = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];

    arrayOfmoves.forEach(el => arrayOfLocations.push(Square.at(currentLocation.row + el[0], currentLocation.col + el[1])))

    const arrayOfFilteredLocations = arrayOfLocations.filter(location => location.isViableMove());

    return arrayOfFilteredLocations;
  }
}
