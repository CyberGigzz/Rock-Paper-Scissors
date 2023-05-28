// Buttons
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

// images
const playerVisual = document.querySelector("#signPlayer");
const compVisual = document.querySelector("#signComp");

//
const player = document.querySelector("#playerscore");
const computer = document.querySelector("#computerscore");

// targeting backdrop and nedResult
const backdrop = document.querySelector("#backdrop");
const modalCard = document.querySelector("#addModal");
const endResult = document.querySelector(".endResult");
const restartBtn = document.querySelector(".restartBtn");

// starting point for scores
let playerScore = 0;
let computerScore = 0;

const choices = ["Rock", "Paper", "Scissors"];

let playerChoice = "";

rock.addEventListener("click", function () {
  const computerChoice = getRandomChoice(choices);
  playRound("Rock", computerChoice);
});

paper.addEventListener("click", function () {
  const computerChoice = getRandomChoice(choices);
  playRound("Paper", computerChoice);
});

scissor.addEventListener("click", function () {
  const computerChoice = getRandomChoice(choices);
  playRound("Scissors", computerChoice);
});

restartBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  player.innerText = 0;
  computer.innerText = 0;
  toggleModal();
});

backdrop.addEventListener("click", () => {
  toggleModal();
});

function getRandomChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function toggleModal() {
  backdrop.classList.toggle("visible");
  modalCard.classList.toggle("visible");
}

function playRound(playerChoice, computerChoice) {
  if (playerScore >= 5 || computerScore >= 5) {
    toggleModal();
    return;
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    playerScore++;
    player.innerText = playerScore;
    playerVisual.innerText = String.fromCodePoint(0x270a);
    compVisual.innerText = String.fromCodePoint(0x270c);
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    playerScore++;
    player.innerText = playerScore;
    playerVisual.innerText = String.fromCodePoint(0x1f91a);
    compVisual.innerText = String.fromCodePoint(0x270a);
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    playerScore++;
    player.innerText = playerScore;
    playerVisual.innerText = String.fromCodePoint(0x270c);
    compVisual.innerText = String.fromCodePoint(0x1f91a);
  } else if (playerChoice === "Rock" && computerChoice === "Paper") {
    computerScore++;
    computer.innerText = computerScore;
    playerVisual.innerText = String.fromCodePoint(0x270a);
    compVisual.innerText = String.fromCodePoint(0x1f91a);
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    computerScore++;
    computer.innerText = computerScore;
    playerVisual.innerText = String.fromCodePoint(0x1f91a);
    compVisual.innerText = String.fromCodePoint(0x270c);
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    computerScore++;
    computer.innerText = computerScore;
    playerVisual.innerText = String.fromCodePoint(0x270c);
    compVisual.innerText = String.fromCodePoint(0x270a);
  } else if (playerChoice === "Rock" && computerChoice === "Rock") {
    playerVisual.innerText = String.fromCodePoint(0x270a);
    compVisual.innerText = String.fromCodePoint(0x270a);
  } else if (playerChoice === "Paper" && computerChoice === "Paper") {
    playerVisual.innerText = String.fromCodePoint(0x1f91a);
    compVisual.innerText = String.fromCodePoint(0x1f91a);
  } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
    playerVisual.innerText = String.fromCodePoint(0x270c);
    compVisual.innerText = String.fromCodePoint(0x270c);
  }

  if (playerScore == 5 || playerScore > 5) {
    endResult.innerText = "You won!";
    toggleModal();
  } else if (computerScore == 5) {
    endResult.innerText = "You lost...";
    toggleModal();
  }
}
