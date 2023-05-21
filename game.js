const choices = ["Rock", "Paper", "Scissors"];

game();

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let round = 1; round <= 5; round++) {
    const computerChoice = getRandomChoice(choices);
    let playerChoice = "";

    while (!choices.includes(playerChoice)) {
      playerChoice = prompt(
        "Enter one of the following: Rock, Paper, or Scissors."
      ).toLowerCase();
      playerChoice =
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    }

    const result = playRound(playerChoice, computerChoice);
    if (result === "win") {
      playerScore++;
      console.log("You win this round!");
    } else if (result === "lose") {
      computerScore++;
      console.log("You lose this round!");
    } else {
      console.log("It's a tie!");
    }

    console.log("Round: " + round);
    console.log("Computers choice: " + computerChoice);
    console.log("Players choice: " + playerChoice);
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    console.log("----------------");
  }

  console.log("Game over!");
  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie game!");
  }
}

function getRandomChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === "Rock" && computerChoice === "Scissors") {
    return "win";
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    return "win";
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    return "win";
  } else if (playerChoice === "Rock" && computerChoice === "Paper") {
    return "lose";
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    return "lose";
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    return "lose";
  } else {
    return "tie";
  }
}
