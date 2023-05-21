const choices = ["Rock", "Paper", "Scissors"];
const computerChoice = getRandomChoice(choices);
const playerInput = prompt("Enter one of the following: Rock, Paper, or Scissors.");
const playerChoice = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

console.log("Computers choice: " + computerChoice);
console.log("Players choice: " + playerChoice);

function getRandomChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  // Add your game logic here
}
