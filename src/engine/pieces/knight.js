import Piece from './piece';
import Square from '../square'
export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentLocation = board.findPiece(this);
        let arrayOfLocations = [];

        const arrayOfmoves = [ [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]];

        arrayOfmoves.forEach(el => arrayOfLocations.push(Square.at(currentLocation.row + el[0], currentLocation.col + el[1])))

        const arrayOfFilteredLocations = arrayOfLocations.filter(location => location.checkViableMove());

        return arrayOfFilteredLocations;
    }
}
