alert("Let's play Tic-Tac-Toe!");

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const messageElement = document.getElementById('message');

function handleClick(index) {
  if (gameState[index] !== '' || !gameActive) return;

  gameState[index] = currentPlayer;
  document.getElementsByClassName('cell')[index].innerText = currentPlayer;

  if (checkWin()) {
    messageElement.innerText = currentPlayer + ' wins!';
    gameActive = false;
    return;
  }

  if (checkDraw()) {
    messageElement.innerText = 'Draw!';
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  messageElement.innerText = currentPlayer + "'s turn";
}

function checkWin() {
  for (let condition of winningConditions) {
    let [a, b, c] = condition;
    if (gameState[a] !== '' && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return !gameState.includes('');
}

function resetGame() {
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];
  messageElement.innerText = currentPlayer + "'s turn";

  let cells = document.getElementsByClassName('cell');
  for (let cell of cells) {
    cell.innerText = '';
  }
}
