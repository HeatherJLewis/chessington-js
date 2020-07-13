import Piece from './piece';
import Square from '../square'
export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentLocation = board.findPiece(this);
        // Quadrant 1
        let rowValueQuadOne = currentLocation.row;
        let columnValueQuadOne = currentLocation.col;

        let arrayOfLocations = [];
        for (let index = 0; index < 8; index++) {
            columnValueQuadOne +=1;
            rowValueQuadOne +=1;
            if(columnValueQuadOne < 8 && rowValueQuadOne < 8){
                arrayOfLocations.push(Square.at(rowValueQuadOne, columnValueQuadOne))
            };
        }

        // Quadrant 2
        let rowValueQuadTwo = currentLocation.row;
        let columnValueQuadTwo = currentLocation.col;

        for (let index = 0; index < 8; index++) {
            columnValueQuadTwo -=1;
            rowValueQuadTwo -=1;
            if(columnValueQuadTwo >= 0 && rowValueQuadTwo >= 0){
                arrayOfLocations.push(Square.at(rowValueQuadTwo, columnValueQuadTwo))
            };
        }

        // Quadrant 3
        let rowValueQuadThree = currentLocation.row;
        let columnValueQuadThree = currentLocation.col;

        for (let index = 0; index < 8; index++) {
            columnValueQuadThree +=1;
            rowValueQuadThree -=1;
            if(columnValueQuadThree < 8 && rowValueQuadThree >= 0){
                arrayOfLocations.push(Square.at(rowValueQuadThree, columnValueQuadThree))
            };
        }

        // Quadrant 4
        let rowValueQuadFour = currentLocation.row;
        let columnValueQuadFour = currentLocation.col;

        for (let index = 0; index < 8; index++) {
            columnValueQuadFour -=1;
            rowValueQuadFour +=1;
            if(columnValueQuadFour >= 0 && rowValueQuadFour < 8){
                arrayOfLocations.push(Square.at(rowValueQuadFour, columnValueQuadFour))
            };
        }




        const expectedMoves = [
            // Forwards diagonal
            Square.at(0, 1), Square.at(1, 2), Square.at(3, 4), Square.at(4, 5), Square.at(5, 6), Square.at(6, 7),
            // Backwards diagonal
            Square.at(0, 5), Square.at(1, 4), Square.at(3, 2), Square.at(4, 1), Square.at(5, 0)
        ];
        // console.log(arrayOfLocations);
        // console.log(expectedMoves);
        return arrayOfLocations;
    }
}
