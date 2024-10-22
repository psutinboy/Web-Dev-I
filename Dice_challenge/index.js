// JavaScript code will go here
console.log("index.js loaded successfully");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function updateDiceImage(player, diceValue) {
  const imgElement = document.querySelector(`.img${player}`);
  imgElement.setAttribute('src', `images/dice${diceValue}.png`);
}

function determineWinner(player1Value, player2Value) {
  const h1Element = document.querySelector('h1');
  if (player1Value > player2Value) {
    h1Element.textContent = 'Player 1 Wins!';
  } else if (player2Value > player1Value) {
    h1Element.textContent = 'Player 2 Wins!';
  } else {
    h1Element.textContent = 'Draw!';
  }
}

function playGame() {
  const player1Value = rollDice();
  const player2Value = rollDice();

  updateDiceImage(1, player1Value);
  updateDiceImage(2, player2Value);

  determineWinner(player1Value, player2Value);
}

document.addEventListener('DOMContentLoaded', playGame);
