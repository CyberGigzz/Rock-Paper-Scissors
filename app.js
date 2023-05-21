const choices = ["Rock", "Paper", "Scissors"];

const computerChoice = getRandomChoice(choices);
let playerChoice = "";

while (!choices.includes(playerChoice)) {
  playerChoice = prompt(
    "Enter one of the following: Rock, Paper, or Scissors."
  ).toLowerCase();
  playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
}

console.log("Computers choice: " + computerChoice);
console.log("Players choice: " + playerChoice);
console.log(playRound(playerChoice, computerChoice));

function getRandomChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
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
