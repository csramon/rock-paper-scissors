let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let playerSelection = '';
let rockButton = document.getElementById('rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');
let playerScoreContainer = document.getElementById('player-score');
let computerScoreContainer = document.getElementById('computer-score');
let tieContainer = document.getElementById('tie');
let playerChoice = document.querySelector('.player-choice');
let computerChoice = document.querySelector('.computer-choice');
let mainContainer = document.querySelector('.main-container');
let roundWinner = document.querySelector('.round-winner');

// Computer input
function computerPlay() {
  let choice = ['Rock', 'Paper', 'Scissors'];
  let randomPlay = Math.floor(Math.random() * choice.length);
  return choice[randomPlay]
}

// User input
rockButton.addEventListener('click', () => {
  let computerSelection = computerPlay();
  playRound('Rock', computerSelection);
  playerChoice.innerText = "You: Rock";
  computerChoice.innerText = `AI: ${computerSelection}`
});

paperButton.onclick = () => {
  let computerSelection = computerPlay();
  playRound('Paper', computerSelection)
  playerChoice.innerText = "You: Paper";
  computerChoice.innerText = `AI: ${computerSelection}`
}

scissorsButton.onclick = () => {
  let computerSelection = computerPlay();
  playRound('Scissors', computerSelection);
  playerChoice.innerText = "You: Scissors";
  computerChoice.innerText = `AI: ${computerSelection}`
}

// Gameplay
function playRound(playerSelection, computerSelection) {
  // Round play
  if (playerSelection === computerSelection) {
    tieScore += 1;
    tieContainer.innerText = `Ties: ${tieScore}`
    roundWinner.innerText = `It's a tie! Choose again.`
    roundWinner.style.backgroundColor = "orange";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore += 1;
    playerScoreContainer.innerText = `You: ${playerScore}`;
    roundWinner.innerText = `${playerSelection} beats ${computerSelection}. You won this round!
    Choose again.`
    roundWinner.style.backgroundColor = "green";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock" || playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Rock" && computerSelection === "Paper") {
    computerScore += 1;
    computerScoreContainer.innerText = `AI: ${computerScore}`;
    roundWinner.innerText = `${computerSelection} beats ${playerSelection}. You lost this round.
    Choose again.`
    roundWinner.style.backgroundColor = "red";
  }

  // Final score
  if (playerScore === 5) {
    mainContainer.innerHTML = `
    <div class="final-result">
   <h1>You won! 🎉</h1>
   <h3>Play again</h3>
   </div>
   `
    mainContainer.style.justifyContent = "center;";
    setTimeout(function () {
      window.location.reload();
    }, 1500)
  } else if (computerScore === 5) {
    mainContainer.innerHTML = `
    <div class="final-result">
    <h1>You lost! 😞</h1>
    <h3>Play again</h3>
    </div>
  `
    mainContainer.style.justifyContent = "center;";
    setTimeout(function () {
      window.location.reload();
    }, 1500)
  } else if (tieScore === 5) {
    mainContainer.innerHTML = `
    <div class="final-result">
    <h1>It's a tie! 😶</h1>
    <h3>Play again</h3>
    </div>
  `
  mainContainer.style.justifyContent = "center;";
    setTimeout(function () {
      window.location.reload();
    }, 1500)
  }

}
