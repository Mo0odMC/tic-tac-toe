/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let currentPlayer = "X";

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
// console.log(sqr0, sqr1, sqr2, sqr3, sqr4, sqr5, sqr6, sqr7, sqr8);

/*-------------------------------- Functions --------------------------------*/
message.textContent = `${currentPlayer}, Turn to play`;
/*----------------------------- Event Listeners -----------------------------*/
sqr0.addEventListener("click", () => {
  sqr0.textContent = currentPlayer;
});
sqr1.addEventListener("click", () => {
  sqr1.textContent = currentPlayer;
});
sqr2.addEventListener("click", () => {
  sqr2.textContent = currentPlayer;
});
sqr3.addEventListener("click", () => {
  sqr3.textContent = currentPlayer;
});
sqr4.addEventListener("click", () => {
  sqr4.textContent = currentPlayer;
});
sqr5.addEventListener("click", () => {
  sqr5.textContent = currentPlayer;
});
sqr6.addEventListener("click", () => {
  sqr6.textContent = currentPlayer;
});
sqr7.addEventListener("click", () => {
  sqr7.textContent = currentPlayer;
});
sqr8.addEventListener("click", () => {
  sqr8.textContent = currentPlayer;
});
