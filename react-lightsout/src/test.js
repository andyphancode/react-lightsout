let nrows = 5;
let ncols = 5;

function createBoard() {
    let initialBoard = [];
    // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < nrows; i++) {
      let row = [];
      for (let j = 0; j < ncols; j++) {
        row.push(Math.random() < 0.5)
      }
      initialBoard.push(row);
    }
    return initialBoard;
  }

var board = createBoard();
console.log(board);