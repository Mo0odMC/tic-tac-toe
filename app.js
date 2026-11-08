/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let currentPlayer = "X";

/*------------------------ Cached Element References ------------------------*/
const message = document.getElementById("message");

/*-------------------------------- Functions --------------------------------*/
message.textContent = `${currentPlayer}, Turn to play`;
/*----------------------------- Event Listeners -----------------------------*/
