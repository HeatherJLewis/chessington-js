import Square from "./square";

function diagonalMoveForwardRight(arrayOfLocations, currentLocation) {
  let rowValueQuadOne = currentLocation.row;
  let columnValueQuadOne = currentLocation.col;

  for (let index = 0; index < 8; index++) {
    columnValueQuadOne += 1;
    rowValueQuadOne += 1;
    if (columnValueQuadOne < 8 && rowValueQuadOne < 8) {
      arrayOfLocations.push(Square.at(rowValueQuadOne, columnValueQuadOne));
    }
  }
  return arrayOfLocations;
}

function diagonalMoveBackwardRight(arrayOfLocations, currentLocation) {
  let rowValueQuadTwo = currentLocation.row;
  let columnValueQuadTwo = currentLocation.col;

  for (let index = 0; index < 8; index++) {
    columnValueQuadTwo -= 1;
    rowValueQuadTwo -= 1;
    if (columnValueQuadTwo >= 0 && rowValueQuadTwo >= 0) {
      arrayOfLocations.push(Square.at(rowValueQuadTwo, columnValueQuadTwo));
    }
  }
  return arrayOfLocations;
}

function diagonalMoveBackwardLeft(arrayOfLocations, currentLocation) {
  let rowValueQuadThree = currentLocation.row;
  let columnValueQuadThree = currentLocation.col;

  for (let index = 0; index < 8; index++) {
    columnValueQuadThree += 1;
    rowValueQuadThree -= 1;
    if (columnValueQuadThree < 8 && rowValueQuadThree >= 0) {
      arrayOfLocations.push(Square.at(rowValueQuadThree, columnValueQuadThree));
    }
  }
  return arrayOfLocations;
}

function diagonalMoveForwardLeft(arrayOfLocations, currentLocation) {
  let rowValueQuadFour = currentLocation.row;
  let columnValueQuadFour = currentLocation.col;

  for (let index = 0; index < 8; index++) {
    columnValueQuadFour -= 1;
    rowValueQuadFour += 1;
    if (columnValueQuadFour >= 0 && rowValueQuadFour < 8) {
      arrayOfLocations.push(Square.at(rowValueQuadFour, columnValueQuadFour));
    }
  }
  return arrayOfLocations;
}

function moveVerticallyAndHorizontally(arrayOfLocations, currentLocation) {
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

function moveDiagonally(arrayOfLocations, currentLocation) {
  diagonalMoveForwardRight(arrayOfLocations, currentLocation);
  diagonalMoveBackwardRight(arrayOfLocations, currentLocation);
  diagonalMoveBackwardLeft(arrayOfLocations, currentLocation);
  diagonalMoveForwardLeft(arrayOfLocations, currentLocation);
}

export { moveDiagonally, moveVerticallyAndHorizontally };
