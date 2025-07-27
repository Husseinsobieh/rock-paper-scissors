const bodyContainer = document.querySelector("body");
const scoreBoard = document.querySelector("#score");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const gameStartBtn = document.querySelector("#game");
const outcomeStatus = document.querySelector("#outcome");
let humanScore = 0;
let computerScore = 0;
let outcome = 0;

const winConditions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("You draw!");
    return 0;
  }
  if (winConditions[humanChoice] === computerChoice) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return 1;
  } else {
    console.log(`You lose! ${humanChoice} beats ${computerChoice}`);
    return -1;
  }
};

const gameOutcome = (humanScore, computerScore) => {
  if (humanScore > computerScore) {
    outcomeStatus.textContent = "Victory";
  } else {
    outcomeStatus.textContent = "Defeat";
  }
};

const getComputerChoice = () => {
  const possibleOutput = ["rock", "paper", "scissors"];

  return possibleOutput[Math.floor(Math.random() * 3)];
};

const startGame = () => {
  humanScore = 0;
  computerScore = 0;
  scoreBoard.textContent = `${humanScore} - ${computerScore}`;
  outcomeStatus.textContent = "";
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
};

const disableBtns = () => {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
};

const handleScoreChange = (humanChoice) => {
  outcome = playRound(humanChoice, getComputerChoice());
  if (outcome === 1) humanScore++;
  else if (outcome === -1) computerScore++;
  scoreBoard.textContent = `${humanScore} - ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    setTimeout(() => {
      gameOutcome(humanScore, computerScore);
      disableBtns();
    }, 10);
  }
};

rockBtn.addEventListener("click", () => {
  handleScoreChange("rock");
});
paperBtn.addEventListener("click", () => {
  handleScoreChange("paper");
});
scissorsBtn.addEventListener("click", () => {
  handleScoreChange("scissors");
});

gameStartBtn.addEventListener("click", startGame);

disableBtns();
