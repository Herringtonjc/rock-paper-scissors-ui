const winGames = 5;

const btnStart = document.getElementById("start");
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
let pScore = parseInt(playerScore.textContent);
let cScore = parseInt(computerScore.textContent);

const flxButtons = document.getElementById("flex-buttons");
const flxScores = document.getElementById("flex-scores");
const flxSelect = document.getElementById("flex-selections");
const gStatus = document.getElementById("status");

btnStart.addEventListener("click", () => game());
btnRock.addEventListener("click", () => { playRound("rock") });
btnPaper.addEventListener("click", () => { playRound("paper"); });
btnScissors.addEventListener("click", () => { playRound("scissors"); });

function game() {
  /*Clear all scores
    Clear all choices
    Show game components*/
  gStatus.textContent = "New Game Started!";
  pScore = 0;
  playerScore.textContent = pScore;
  cScore = 0;
  computerScore.textContent = cScore;

  if (flxButtons.className === "hide") {
    flxButtons.className = "flex-buttons";
  }

  if (flxScores.className === "hide") {
    flxScores.className = "flex-scores";
  }
}

function gamePlaying() {
  /*A continuous check every round
    to determine if a player has reached
    the maximum score*/
  if (pScore >= winGames) {
    gStatus.textContent = "You've won the game! Press 'Start Game' to play again...";

    if (flxButtons.className === "flex-buttons") {
      flxButtons.className = "hide";
    }
    return false;
  } else if (cScore >= winGames) {
    gStatus.textContent = "You've lost the game! Press 'Start Game' to play again...";
    if (flxButtons.className === "flex-buttons") {
      flxButtons.className = "hide";
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

function updateComputerImage(computerSelection) {
  //Display the computers choice using an image
  let imageDiv = getElementByClassName("computer-choice-image");
  switch(computerSelection) {
    case "rock":
      let rockImage = new Image();
      rockImage.src = "images/rock.png";
      imageDiv.appendChild(rockImage);
      break;
    case "scissors":
      let scissorsImage = new Image();
      scissorsImage.src = "images/scissors.png";
      imageDiv.appendChild(scissorsImage);
      break;
    case "paper":
      let paperImage = new Image();
      paperImage.src = "images/paper.png";
      imageDiv.appendChild(paperImage);
      break;
    default:
      return;
  }
}

function playRound(humanSelection) {
  //Compare the humanSelection to the computerSelection
  if (gamePlaying()) {
    let computerSelection = computerPlay();
    
    if (humanSelection == "rock" && computerSelection == "scissors") {
      pScore++;
      playerScore.textContent = pScore;
      gStatus.textContent = "You win this round!";
    } else if (humanSelection == "rock" && computerSelection == "paper") {
      cScore++;
      computerScore.textContent = cScore;
      gStatus.textContent = "You lost this round!";
    } else if (humanSelection == "scissors" && computerSelection == "paper") {
      pScore++;
      playerScore.textContent = pScore;
      gStatus.textContent = "You win this round!";
    } else if (humanSelection == "scissors" && computerSelection == "rock") {
      cScore++;
      computerScore.textContent = cScore;
      gStatus.textContent = "You lost this round!";
    } else if (humanSelection == "paper" && computerSelection == "rock") {
      pScore++;
      playerScore.textContent = pScore;
      gStatus.textContent = "You win this round!";
    } else if (humanSelection == "paper" && computerSelection == "scissors") {
      cScore++;
      computerScore.textContent = cScore;
      gStatus.textContent = "You lost this round!";
    } else if (humanSelection == computerSelection) {
      gStatus.textContent = "You tied!";
    } else {
      //This should never be reached, only used as failsafe
      console.log("ERROR: A valid selection was not made.");
    }
  }
  gamePlaying();
}