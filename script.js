function computerPlay() {
    let choice = ['rock', 'paper', 'scissors'];
    let randomPlay = Math.floor(Math.random() * choice.length);
    return choice[randomPlay]
  }

let playerScore = 0;
let computerScore = 0;

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
  //playerSelection and computerSelection need to be outside of the playRound function so they can be used as an argument

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
  }
  else {
    alert('It\'s a tie! Press F5 and try again');
  }
}
  
game();