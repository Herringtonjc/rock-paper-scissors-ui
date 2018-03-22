const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let pChoice = document.getElementById("player-choice");
let cChoice = document.getElementById("computer-choice");

let winGames = 0;


function computerPlay() {
  //Allow the computer to make a random choice
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random() * 3);
  return choices[computerChoice];
}

function playRound(humanSelection, computerSelection) {
  //Compare the humanSelection to the computerSelection
  let pScore = parseInt(playerScore.innerHTML);
  let cScore = parseInt(computerScore.innerHTML);

  if (humanSelection == "rock" && computerSelection == "scissors") {
    pScore += 1;
    playerScore.innerHTML = pScore;
    pChoice.innerHTML = "Rock";
    cChoice.innerHTML = "Scissors";
  } else if (humanSelection == "rock" && computerSelection == "paper") {
    cScore += 1;
    computerScore.innerHTML = cScore;
    pChoice.innerHTML = "Rock";
    cChoice.innerHTML = "Paper";
  } else if (humanSelection == "rock" && computerSelection == "rock") {
    pChoice.innerHTML = "Rock";
    cChoice.innerHTML = "Rock";
  } else if (humanSelection == "scissors" && computerSelection == "paper") {
    pScore += 1;
    playerScore.innerHTML = pScore;
    pChoice.innerHTML = "Scissors";
    cChoice.innerHTML = "Paper";
  } else if (humanSelection == "scissors" && computerSelection == "rock") {
    cScore += 1;
    computerScore.innerHTML = cScore;
    pChoice.innerHTML = "Scissors";
    cChoice.innerHTML = "Rock";
  } else if (humanSelection == "scissors" && computerSelection == "scissors") {
    pChoice.innerHTML = "Scissors";
    cChoice.innerHTML = "Scissors";
  } else if (humanSelection == "paper" && computerSelection == "rock") {
    pScore += 1;
    playerScore.innerHTML = pScore;
    pChoice.innerHTML = "Paper";
    cChoice.innerHTML = "Rock";
  } else if (humanSelection == "paper" && computerSelection == "scissors") {
    cScore += 1;
    computerScore.innerHTML = cScore;
    pChoice.innerHTML = "Paper";
    cChoice.innerHTML = "Scissors";
  } else if (humanSelection == "paper" && computerSelection == "paper") {
    pChoice.innerHTML = "Paper";
    cChoice.innerHTML = "Paper";
  } else {
    console.log("ERROR");
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