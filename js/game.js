const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

const choices = ["Rock", "Paper", "Scissors"];

const computerChoice = getRandomChoice(choices);
let playerChoice = "";

rock.addEventListener("click", function () {
  playRound("Rock", computerChoice);
});

paper.addEventListener("click", function () {
  playRound("Paper", computerChoice);
});

scissor.addEventListener("click", function () {
  playRound("Scissor", computerChoice);
});

function getRandomChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function play(choice) {
  playRound("Rock", computerChoice);
}

function playRound(playerChoice, computerChoice) {
  console.log("Computers choice: " + computerChoice);
  console.log("Players choice: " + playerChoice);

  if (playerChoice === "Rock" && computerChoice === "Scissors") {
    console.log("You win, Rock beats Scissors");
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    console.log("You win, Paper beats Rock");
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    console.log("You win, Scissors beat Paper");
  } else if (playerChoice === "Rock" && computerChoice === "Paper") {
    console.log("You lose, Paper beats Rock");
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    console.log("You lose, Scissors beat Paper");
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    console.log("You lose, Rock beats Scissors");
  } else if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } else {
    console.log("Invalid input. Please enter Rock, Paper, or Scissors.");
  }
}
