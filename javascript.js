let humanScore = 0;
let computerScore = 0
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
  
    switch (randomIndex) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }
  
//console.log(getComputerChoice());  // Example: "paper"

function getHumanChoice() {
  let userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
  if (["rock", "paper", "scissors"].includes(userInput)) {
    return userInput;
  } else {
    alert("Invalid choice. Please enter rock, paper, or scissors.");
    return getHumanChoice();
  }
}

//console.log(getHumanChoice());



function playGame() {;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "It's a tie!";
    }
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      return `You won! ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  console.log("You chose:", humanSelection);
  console.log("Computer chose:", computerSelection);
  console.log(playRound(humanSelection, computerSelection));

  console.log(`You won: ${humanScore} times`);
}

playGame();
playGame();
playGame();
playGame();
playGame();
