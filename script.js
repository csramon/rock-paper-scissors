function computerPlay() {
    let choice = ['rock', 'paper', 'scissors'];
    let randomPlay = Math.floor(Math.random() * choice.length);
    return choice[randomPlay]
  }
const computerSelection = computerPlay();
function playRound() {
    let playerSelection = prompt('Rock, paper, or scissors?');
    let availableOptions = ['rock', 'paper', 'scissors'];
    if (playerSelection == computerSelection) {
      alert(`Tie! You chose ${playerSelection} and computer chose ${computerSelection} as well.`)
    } else if (playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'rock') {
      alert(`
      Your choice: ${playerSelection}
      Computer's choice: ${computerSelection}
      You lose! ${computerSelection} beats ${playerSelection}.`);
    } else if (playerSelection != availableOptions) {
      alert ('Invalid option!') //check why does this appear even if it's an available option
    } else {
      alert (`
      Your choice: ${playerSelection}
      Computer's choice: ${computerSelection}
      You won! ${playerSelection} beats ${computerSelection}.`)
    } 
  }
  playRound();