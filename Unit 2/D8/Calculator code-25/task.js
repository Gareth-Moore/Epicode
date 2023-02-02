// Write a function called "matrixGenerator"
// which receives two integers, x and y, as parameters.
// The result should be a matrix of x times y with, as value,
// the index of the position.

// Ex.: x = 3, y = 2
// [["00","01","02"]
// ["10","11","12"]]

function matrixGenerator(x, y) {
  const matrix = [];

  for (let rowIndex = 0; rowIndex < y; rowIndex++) {
    const newRow = [];

    for (let columnIndex = 0; columnIndex < x; columnIndex++) {
      const value = `${rowIndex}${columnIndex}`;
      //   const value = [currentRow, currentColumn].join("");
      //   const value = currentRow + "" + currentColumn;

      newRow.push(value);
    }

    matrix.push(newRow);
  }

  return matrix;
}

// console.log(matrixGenerator(3, 2));
