function ticTacToe(input) {
  let matrix = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  let player = "X";

  for (let line of input) {
    let [row, col] = line.split(" ").map(Number);

    if (matrix[row][col] !== false) {
      console.log("This place is already taken. Please choose another!");
      continue;
    }

    matrix[row][col] = player;

    for (let i = 0; i < 3; i++) {
      if (
        matrix[i][0] === player &&
        matrix[i][1] === player &&
        matrix[i][2] === player
      ) {
        console.log(`Player ${player} wins!`);
        printMatrix();
        return;
      } else if (
        matrix[0][i] === player &&
        matrix[1][i] === player &&
        matrix[2][i] === player
      ) {
        console.log(`Player ${player} wins!`);
        printMatrix();
        return;
      }
    }
    if (
      matrix[0][0] === player &&
      matrix[1][1] === player &&
      matrix[2][2] === player
    ) {
      console.log(`Player ${player} wins!`);
      printMatrix();
      return;
    } else if (
      matrix[0][2] === player &&
      matrix[1][1] === player &&
      matrix[2][0] === player
    ) {
      console.log(`Player ${player} wins!`);
      printMatrix();
      return;
    }

    let isFalse = false;

    for (let row = 0; row < matrix.length; row++) {
      if (matrix[row].includes(false)) {
        isFalse = true;
      }
    }

    if (!isFalse) {
      console.log("The game ended! Nobody wins :(");
      printMatrix();
      return;
    }

    player = player === "X" ? "O" : "X";
  }

  function printMatrix() {
    for (let row = 0; row < matrix.length; row++) {
      console.log(matrix[row].join("\t"));
    }
  }
}
ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
ticTacToe([
  "0 0",
  "0 0",
  "1 1",
  "0 1",
  "1 2",
  "0 2",
  "2 2",
  "1 2",
  "2 2",
  "2 1",
]);
ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 2",
  "1 1",
  "2 1",
  "2 2",
  "0 0",
]);
