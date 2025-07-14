const getComputerChoice = () => {
  const possibleOutput = ["rock", "paper", "scissors"];

  return possibleOutput[Math.floor(Math.random() * 3)];
};

const getHumanChoice = () => {
  return prompt("Please enter your choice:");
};

const playRound = (humanChoice, computerChoice, humanScore, computerScore) => {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors");
    return 1;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    return -1;
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("You draw! Rock draws Rock");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper");
    return -1;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("You draw! Paper draws Paper");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock");
    return 1;
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("You draw! Scissors draws Scissors");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats Paper");
    return 1;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors");
    return -1;
  }
};

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;
  while (humanScore < 5 && computerScore < 5) {
    let outcome = playRound(
      getHumanChoice(),
      getComputerChoice(),
      humanScore,
      computerScore
    );
    if (outcome === 1) humanScore++;
    else if (outcome === -1) computerScore++;
    console.log(`Score: ${humanScore}:${computerScore}`);
  }
  humanScore === 5 ? console.log("Victory") : console.log("Defeat");
};

playGame();
