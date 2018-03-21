const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");


function computerPlay() {
  //Allow the computer to make a random choice
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random() * 3);
  return choices[computerChoice];
}

function playRound(playerSelection, computerSelection) {
  //Compare the playerSelection to the computerSelection
  if (playerSelection == "rock" && computerSelection == "scissors") {

    return "You win! Rock beats Scissors.";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    
    return "You lose! Paper beats Rock.";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    
    return "You win! Scissors beats Paper.";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    
    return "You lose! Rock beats Scissors.";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    
    return "You win! Paper beats Rock.";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    ;
    return "You lose! Scissors beats Paper.";
  } else {
    return "You tied!";
  }
}

btnRock.addEventListener("click", () => {
  playRound("rock", computerPlay())
});

btnPaper.addEventListener("click", () => {
  playRound("paper", computerPlay());
});

btnScissors.addEventListener("click", () => {
  playRound("scissors", computerPlay());
});