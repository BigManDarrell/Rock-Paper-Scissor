const playerText = document.getElementById("player");
const compText = document.getElementById("comp");
const resText = document.getElementById("res");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
let rand, comp, compMove, res;

const getComp = () => {
  rand = Math.floor(Math.random() * 4);
  switch (rand) {
    case 1:
      comp = "r";
      break;
    case 2:
      comp = "p";
      break;
    case 3:
      comp = "s";
      break;
  }
  return comp;
};

rockBtn.addEventListener("click", () => {
  playerText.textContent = "Player: Rock";
  switch (getComp()) {
    case "r":
      res = "Draw!";
      compMove = "Rock";
      break;
    case "p":
      res = "You Lose!";
      compMove = "Paper";
      break;
    case "s":
      res = "You Win!";
      compMove = "Scissor";
      break;
  }
  compText.textContent = `Computer: ${compMove}`;
  resText.textContent = res;
});

paperBtn.addEventListener("click", () => {
  playerText.textContent = "Player: Paper";
  switch (getComp()) {
    case "r":
      res = "You Win!";
      compMove = "Rock";
      break;
    case "p":
      res = "Draw!";
      compMove = "Paper";
      break;
    case "s":
      res = "You Lose!";
      compMove = "Scissor";
      break;
  }
  compText.textContent = `Computer: ${compMove}`;
  resText.textContent = res;
});

scissorBtn.addEventListener("click", () => {
  playerText.textContent = "Player: Scissors";
  switch (getComp()) {
    case "r":
      res = "You Lose!";
      compMove = "Rock";
      break;
    case "p":
      res = "You Win!";
      compMove = "Paper";
      break;
    case "s":
      res = "Draw!";
      compMove = "Scissor";
      break;
  }
  compText.textContent = `Computer: ${compMove}`;
  resText.textContent = res;
});
