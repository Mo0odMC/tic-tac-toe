/*-------------------------------- Constants --------------------------------*/
const players = ["X", "O"];

const winningCombos = [
  [0, 1, 2], //0
  [3, 4, 5], //1
  [6, 7, 8], //2
  [0, 3, 6], //3
  [1, 4, 7], //4
  [2, 5, 8], //5
  [0, 4, 8], //6
  [2, 4, 6], //7
];

/*---------------------------- Variables (state) ----------------------------*/
let board = ["", "", "", "", "", "", "", "", ""];

/*------------------------ Cached Element References ------------------------*/
const squares = document.querySelectorAll(".sqr");
const message = document.getElementById("message"); // i used element id instead of query cuz faster
const resetBtn = document.getElementById("reset"); // i used element id instead of query cuz faster

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
//removed so i can do the level up (event)

// function handleClick(index) {
//     if (
//         board[index] !== '' ||
//         checkWinner() ||
//         board.every(x => x !== '')
//     ) {
//         return
//     }
//     const moves = board.filter(x => x !== '').length
//     const player = players[moves % 2]

//     board[index] = player
//     render()
// }

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

// squares.forEach((square, index) => {
//     square.addEventListener('click', () => handleClick(index))
// })

squares.forEach((square) => {
  square.addEventListener("click", handleClick);
});

resetBtn.addEventListener("click", resetGame);

render();

//my failed animation attempt without editing the CSS (i will fork this project and change the animate the project)

/*------------------ This is me trying to animate the board a bit ------------------*/
/*-------------------- i didn't want to change the CSS directly --------------------*/

// board.forEach((X, index) => {
//   const square = squares[index];

//   if (square.textContent === X) return;

//   square.textContent = "";

//   if (X !== "") {
//     const span = document.createElement("span");
//     span.textContent = X;
//     span.style.display = "inline-block";

//     square.appendChild(span);

//     span.animate(
//       [
//         {
//           opacity: 0,
//           transform: "translateY(8px) scale(0.7)",
//         },
//         {
//           opacity: 1,
//           transform: "translateY(-2px) scale(1.05)",
//           offset: 0.7,
//         },
//         {
//           opacity: 1,
//           transform: "translateY(0) scale(1)",
//         },
//       ],
//       {
//         duration: 200,
//         easing: "ease-in",
//       },
//     );
//   }
// });
