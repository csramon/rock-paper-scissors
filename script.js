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

<<<<<<< HEAD
// Computer input
function computerPlay() {
  let choice = ['rock', 'paper', 'scissors'];
  let randomPlay = Math.floor(Math.random() * choice.length);
  return choice[randomPlay]
}

// User input
rockButton.addEventListener('click', () => {
  let computerSelection = computerPlay();
  playRound('rock', computerSelection);
  playerChoice.innerText = "You: rock";
  computerChoice.innerText = `Computer: ${computerSelection}`
});

paperButton.onclick = () => {
  let computerSelection = computerPlay();
  playRound('paper', computerSelection)
  playerChoice.innerText = "You: paper";
  computerChoice.innerText = `Computer: ${computerSelection}`
}

scissorsButton.onclick = () => {
  let computerSelection = computerPlay();
  playRound('scissors', computerSelection);
  playerChoice.innerText = "You: scissors";
  computerChoice.innerText = `Computer: ${computerSelection}`
}

// Gameplay
function playRound(playerSelection, computerSelection) {
  // Round play
  if (playerSelection === computerSelection) {
    tieScore += 1;
    tieContainer.innerText = `Ties: ${tieScore}`

  } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    playerScoreContainer.innerText = `Your score: ${playerScore}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    computerScoreContainer.innerText = `Computer score: ${computerScore}`;
  }

  // Final score
  if (playerScore === 5) {
    mainContainer.innerHTML = `
   <h1>You won!</h1>
   <h3>Play again</h3>
   `
    setTimeout(function () {
      window.location.reload();
    }, 1500)
  } else if (computerScore === 5) {
    mainContainer.innerHTML = `
    <h1>You lost!</h1>
    <h3>Play again</h3>
  `
    setTimeout(function () {
      window.location.reload();
    }, 1500)
  } else if (tieScore === 5) {
    mainContainer.innerHTML = `
    <h1>It's a tie!</h1>
    <h3>Play again</h3>
  `
    setTimeout(function () {
      window.location.reload();
    }, 1500)
  }

}
=======
function game() {  
    for (i=0; i<5; i++) {
        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                alert(`
                Your choice: ${playerSelection}
                Computer's choice: ${computerSelection}
                It\'s a tie!
                `)
            }
            if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
                alert(`
                Your choice: ${playerSelection}
                Computer's choice: ${computerSelection}

                ${playerSelection} beats ${computerSelection}

                You won this round!
                `);
                playerScore += 1;
            }
            if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "rock" && computerSelection === "paper") {
                alert(`
                Your choice: ${playerSelection}
                Computer's choice: ${computerSelection}

                ${computerSelection} beats ${playerSelection}
    
                You lost this round!
                `);
                computerScore += 1;
            }
  }
  
  let playerSelection = prompt('Rock, paper, or scissors?') 

  let computerSelection = computerPlay(); 
  //playerSelection and computerSelection needed to be outside of the playRound function in order to be used as an argument

  console.log(playRound(playerSelection, computerSelection)); //playRound needed two parameters

}

if (playerScore>computerScore) {
    alert(`
        FINAL SCORE
        Your score: ${playerScore}
        Computer's score: ${computerScore}
        You won!`);
        } else if (playerScore<computerScore){
            alert(`
            FINAL SCORE
            Your score: ${playerScore}
            Computer's score: ${computerScore}
            You lost.`);
        } else {
            alert('It\'s a tie! Press F5 and try again');
        }
}
  
game();
>>>>>>> 7113e2e2642e367b4e4842608247b108a5fb9ccb
