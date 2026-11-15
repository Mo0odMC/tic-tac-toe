/*-------------------------------- Constants --------------------------------*/
const players = ["X", "O"];
const winningCombos = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Top-left to bottom-right diagonal
  [2, 4, 6], // Top-right to bottom-left diagonal
];
/*---------------------------- Variables (state) ----------------------------*/
// let currentPlayer = "X";
let isGameOver = false;
let board = ["", "", "", "", "", "", "", "", ""];

/*------------------------ Cached Element References ------------------------*/
const message = document.getElementById("message");
const squares = document.querySelectorAll(".sqr");
const reset = document.getElementById("reset");

/*-------------------------------- Functions --------------------------------*/
function checkWinner() {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;

    if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }

  return;
}
function render() {
  board.forEach((x, index) => {
    squares[index].textContent = x;
  });

  const winner = checkWinner();

  if (winner) {
    message.textContent = `${winner} wins!`;
  } else if (board.every((x) => x !== "")) {
    message.textContent = "It's a tie!";
  } else {
    const moves = board.filter((x) => x !== "").length;
    message.textContent = `${players[moves % 2]}'s turn`;
  }
}
function handleClick(event) {
  const index = Number(event.target.id);
  if (board[index] !== "" || checkWinner() || board.every((x) => x !== "")) {
    return;
  }
  const moves = board.filter((x) => x !== "").length;
  const player = players[moves % 2];
  board[index] = player;

  render();
}
function resetGame() {
  board.fill("");
  render();
}
/*----------------------------- Event Listeners -----------------------------*/

squares.forEach((square) => {
  square.addEventListener("click", handleClick);
});

reset.addEventListener("click", resetGame);

render();
