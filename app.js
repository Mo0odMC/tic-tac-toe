/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let currentPlayer = "X";
let isGameOver = false;

/*------------------------ Cached Element References ------------------------*/
const message = document.getElementById("message");
const sqr0 = document.getElementById("0");
const sqr1 = document.getElementById("1");
const sqr2 = document.getElementById("2");
const sqr3 = document.getElementById("3");
const sqr4 = document.getElementById("4");
const sqr5 = document.getElementById("5");
const sqr6 = document.getElementById("6");
const sqr7 = document.getElementById("7");
const sqr8 = document.getElementById("8");
const reset = document.getElementById("reset");
// console.log(sqr0, sqr1, sqr2, sqr3, sqr4, sqr5, sqr6, sqr7, sqr8);

/*-------------------------------- Functions --------------------------------*/
message.textContent = `${currentPlayer}, Turn to play`;
/*----------------------------- Event Listeners -----------------------------*/

sqr0.addEventListener("click", () => {
  // sqr0.textContent = currentPlayer;
  if (sqr0.textContent !== "" || isGameOver === true) {
    return;
  } else if (currentPlayer === "X") {
    sqr0.textContent = currentPlayer;
    currentPlayer = "O";
  } else if (currentPlayer === "O") {
    sqr0.textContent = currentPlayer;
    currentPlayer = "X";
  }
});
sqr1.addEventListener("click", () => {
  // sqr1.textContent = currentPlayer;
  if (sqr1.textContent !== "" || isGameOver === true) {
    return;
  } else if (currentPlayer === "X") {
    sqr1.textContent = currentPlayer;
    currentPlayer = "O";
  } else if (currentPlayer === "O") {
    sqr1.textContent = currentPlayer;
    currentPlayer = "X";
  }
  message.textContent = `${currentPlayer}, Turn to play`;
});
sqr2.addEventListener("click", () => {
  // sqr2.textContent = currentPlayer;
  if (sqr2.textContent !== "" || isGameOver === true) {
    return;
  } else if (currentPlayer === "X") {
    sqr2.textContent = currentPlayer;
    currentPlayer = "O";
  } else if (currentPlayer === "O") {
    sqr2.textContent = currentPlayer;
    currentPlayer = "X";
  }
  message.textContent = `${currentPlayer}, Turn to play`;
});
sqr3.addEventListener("click", () => {
  // sqr3.textContent = currentPlayer;
  if (sqr3.textContent !== "" || isGameOver === true) {
    return;
  } else if (currentPlayer === "X") {
    sqr3.textContent = currentPlayer;
    currentPlayer = "O";
  } else if (currentPlayer === "O") {
    sqr3.textContent = currentPlayer;
    currentPlayer = "X";
  }
  message.textContent = `${currentPlayer}, Turn to play`;
});
sqr4.addEventListener("click", () => {
  // sqr4.textContent = currentPlayer;
  if (sqr4.textContent !== "" || isGameOver === true) {
    return;
  } else if (currentPlayer === "X") {
    sqr4.textContent = currentPlayer;
    currentPlayer = "O";
  } else if (currentPlayer === "O") {
    sqr4.textContent = currentPlayer;
    currentPlayer = "X";
  }
  message.textContent = `${currentPlayer}, Turn to play`;
});
sqr5.addEventListener("click", () => {
  // sqr5.textContent = currentPlayer;
  if (sqr5.textContent !== "" || isGameOver === true) {
    return;
  } else if (currentPlayer === "X") {
    sqr5.textContent = currentPlayer;
    currentPlayer = "O";
  } else if (currentPlayer === "O") {
    sqr5.textContent = currentPlayer;
    currentPlayer = "X";
  }
  message.textContent = `${currentPlayer}, Turn to play`;
});
sqr6.addEventListener("click", () => {
  // sqr6.textContent = currentPlayer;
  if (sqr6.textContent !== "" || isGameOver === true) {
    return;
  } else if (currentPlayer === "X") {
    sqr6.textContent = currentPlayer;
    currentPlayer = "O";
  } else if (currentPlayer === "O") {
    sqr6.textContent = currentPlayer;
    currentPlayer = "X";
  }
  message.textContent = `${currentPlayer}, Turn to play`;
});
sqr7.addEventListener("click", () => {
  // sqr7.textContent = currentPlayer;
  if (sqr7.textContent !== "" || isGameOver === true) {
    return;
  } else if (currentPlayer === "X") {
    sqr7.textContent = currentPlayer;
    currentPlayer = "O";
  } else if (currentPlayer === "O") {
    sqr7.textContent = currentPlayer;
    currentPlayer = "X";
  }
  message.textContent = `${currentPlayer}, Turn to play`;
});
sqr8.addEventListener("click", () => {
  // sqr8.textContent = currentPlayer;
  if (sqr8.textContent !== "" || isGameOver === true) {
    return;
  } else if (currentPlayer === "X") {
    sqr8.textContent = currentPlayer;
    currentPlayer = "O";
  } else if (currentPlayer === "O") {
    sqr8.textContent = currentPlayer;
    currentPlayer = "X";
  }
  message.textContent = `${currentPlayer}, Turn to play`;
});

reset.addEventListener("click", () => {
  sqr0.textContent = "";
  sqr1.textContent = "";
  sqr2.textContent = "";
  sqr3.textContent = "";
  sqr4.textContent = "";
  sqr5.textContent = "";
  sqr6.textContent = "";
  sqr7.textContent = "";
  sqr8.textContent = "";
  currentPlayer = "X";
  message.textContent = `${currentPlayer}, Turn to play`;
});
