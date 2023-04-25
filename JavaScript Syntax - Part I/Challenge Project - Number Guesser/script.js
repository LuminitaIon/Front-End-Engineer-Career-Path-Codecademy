let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

const compareGuesses = (userNumber, computerNumber, target) => {
  diffComputer = Math.abs(computerNumber - target);
  diffUser = Math.abs(userNumber - target);
  if (diffUser === diffComputer || diffUser < diffComputer) {
    return true;
  } else if (diffComputer < diffUser) {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1
}
