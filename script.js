const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const playButton = document.getElementById('playButton');
const resultContainer = document.getElementById('resultContainer');
const currentPlayerElement = document.getElementById('currentPlayer');
const sidesPerDieElement = document.getElementById('sidesPerDie');
const totalElement = document.getElementById('total');
const player1ScoreElement = document.getElementById('player1Score');
const player2ScoreElement = document.getElementById('player2Score');
const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');

dice1.style.display = 'none';
dice2.style.display = 'none';

let currentPlayer = 'Player 1';
let player1Score = 0;
let player2Score = 0;

playButton.addEventListener('click', rollDice);

function rollDice() {
  const numSides = parseInt(document.getElementById('num_sides').value);
  const rolls = [];

  for (let i = 0; i < 2; i++) {
    const result = Math.floor(Math.random() * numSides) + 1;
    rolls.push(result);
  }

  dice1.style.display = 'block';
  dice2.style.display = 'block';

  // Trigger animation
  dice1.classList.add('roll-animation');
  dice2.classList.add('roll-animation');

  setTimeout(() => {
    // Update dice with rolled numbers
    dice1.textContent = rolls[0];
    dice2.textContent = rolls[1];

    // Remove animation class
    dice1.classList.remove('roll-animation');
    dice2.classList.remove('roll-animation');

    // Update result section
    currentPlayerElement.textContent = currentPlayer;
    sidesPerDieElement.textContent = numSides;
    totalElement.textContent = rolls.reduce((acc, curr) => acc + curr, 0);

    // Update player scores
    if (currentPlayer === 'Player 1') {
      player1Score += rolls.reduce((acc, curr) => acc + curr, 0);
      player1ScoreElement.textContent = player1Score;
    } else {
      player2Score += rolls.reduce((acc, curr) => acc + curr, 0);
      player2ScoreElement.textContent = player2Score;
    }

    resultContainer.classList.add('show');

    // Switch to the next player
    currentPlayer = currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';

    // Clear player name inputs
    player1Input.value = '';
    player2Input.value = '';
  }, 1000);
}