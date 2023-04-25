const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("You didn't choose rock, paper or scissors");
  }
};

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "the computer did not choose yet";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It is a tie";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "Computer wins!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "bomb") {
    return "You won! ;)";
  }
};

const playGame = () => {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();

  const winner = determineWinner(userChoice, computerChoice);
  console.log(winner);
};

playGame();
