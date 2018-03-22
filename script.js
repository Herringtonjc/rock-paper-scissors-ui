const winGames = 5;

const btnStart = document.getElementById("start");
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
let pScore = parseInt(playerScore.innerHTML);
let cScore = parseInt(computerScore.innerHTML);

const flxButtons = document.getElementById("flex-buttons");
const flxScores = document.getElementById("flex-scores");
const flxSelect = document.getElementById("flex-selections");
const pChoice = document.getElementById("player-choice");
const cChoice = document.getElementById("computer-choice");
const gStatus = document.getElementById("status");

btnStart.addEventListener("click", () => game());
btnRock.addEventListener("click", () => { playRound("rock") });
btnPaper.addEventListener("click", () => { playRound("paper"); });
btnScissors.addEventListener("click", () => { playRound("scissors"); });

function game() {
  /*Clear all scores
    Clear all choices
    Show game components*/
  gStatus.innerHTML = "New Game Started!";
  pScore = 0;
  playerScore.innerHTML = pScore;
  cScore = 0;
  computerScore.innerHTML = cScore;
  pChoice.innerHTML = "";
  cChoice.innerHTML = "";

  if (flxButtons.className === "hide") {
    flxButtons.className = "flex-buttons";
  }

  if (flxScores.className === "hide") {
    flxScores.className = "flex-scores";
  }

  if (flxSelect.className === "hide") {
    flxSelect.className = "flex-selections";
  }
}

function gamePlaying() {
  /*A continuous check every round
    to determine if a player has reached
    the maximum score*/
  if (pScore >= winGames) {
    gStatus.innerHTML = "You've won the game! Press 'Start Game' to play again...";

    if (flxButtons.className === "flex-buttons") {
      flxButtons.className = "hide";
    }
    if (flxSelect.className === "flex-selections") {
      flxSelect.className = "hide";
    }
    return false;
  } else if (cScore >= winGames) {
    gStatus.innerHTML = "You've lost the game! Press 'Start Game' to play again...";
    if (flxButtons.className === "flex-buttons") {
      flxButtons.className = "hide";
    }
    if (flxSelect.className === "flex-selections") {
      flxSelect.className = "hide";
    }
    return false;
  } else {
    return true;
  }
}

function computerPlay() {
  //Allow the computer to make a random choice
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random() * 3);
  return choices[computerChoice];
}

function playRound(humanSelection) {
  //Compare the humanSelection to the computerSelection
  if (gamePlaying()) {
    let computerSelection = computerPlay();

    if (humanSelection == "rock" && computerSelection == "scissors") {
      pScore++;
      playerScore.innerHTML = pScore;
      pChoice.innerHTML = "You chose Rock";
      cChoice.innerHTML = "Computer chose Scissors";
      gStatus.innerHTML = "You win this round!";
    } else if (humanSelection == "rock" && computerSelection == "paper") {
      cScore++;
      computerScore.innerHTML = cScore;
      pChoice.innerHTML = "You chose Rock";
      cChoice.innerHTML = "Computer chose Paper";
      gStatus.innerHTML = "You lost this round!";
    } else if (humanSelection == "scissors" && computerSelection == "paper") {
      pScore++;
      playerScore.innerHTML = pScore;
      pChoice.innerHTML = "You chose Scissors";
      cChoice.innerHTML = "Computer chose Paper";
      gStatus.innerHTML = "You win this round!";
    } else if (humanSelection == "scissors" && computerSelection == "rock") {
      cScore++;
      computerScore.innerHTML = cScore;
      pChoice.innerHTML = "You chose Scissors";
      cChoice.innerHTML = "Computer chose Rock";
      gStatus.innerHTML = "You lost this round!";
    } else if (humanSelection == "paper" && computerSelection == "rock") {
      pScore++;
      playerScore.innerHTML = pScore;
      pChoice.innerHTML = "You chose Paper";
      cChoice.innerHTML = "Computer chose Rock";
      gStatus.innerHTML = "You win this round!";
    } else if (humanSelection == "paper" && computerSelection == "scissors") {
      cScore++;
      computerScore.innerHTML = cScore;
      pChoice.innerHTML = "You chose Paper";
      cChoice.innerHTML = "Computer chose Scissors";
      gStatus.innerHTML = "You lost this round!";
    } else if (humanSelection == computerSelection) {
      pChoice.innerHTML = "";
      cChoice.innerHTML = "";
      gStatus.innerHTML = "You tied!";
    } else {
      //This should never be reached, only used as failsafe
      console.log("ERROR: A valid selection was not made.");
    }
  }
  gamePlaying();
}