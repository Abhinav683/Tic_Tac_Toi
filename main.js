const info = document.getElementById("box");
const win = document.getElementById("win");
const butt = document.getElementById("butt");
const start1 = document.getElementById("start1");
const startbtn = document.getElementById("restart");
const para = document.getElementById("para");


let currentPlayer = 1;
gameWin = false;
let s=false

let game = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
];

document.addEventListener("DOMContentLoaded", function () {
  info.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("div");
      cell.className = `cell`;
      info.appendChild(cell);
    }
  }

  startbtn.addEventListener("click", function () {
    start1.textContent = `Restart`;
    restart();
  });
});

function start() {
    s=true;
 
  info.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("div");
      cell.id = `${i}${j}`;
      cell.className = `cell`;
      cell.addEventListener("click", function () {
        change(i, j);
      });

      info.appendChild(cell);
    }
  }
}

function change(i, j) {
  const cell = document.getElementById(`${i}${j}`);
  if (cell.innerHTML == "" && gameWin == false) {
    if (currentPlayer == 1) {
      cell.innerHTML = `<img src="cross.png" alt="">`;
    } else {
      cell.innerHTML = `<img src="circle.png" alt="">`;
    }
    game[i][j] = currentPlayer;

    checkGame();
    currentPlayer = currentPlayer == 1 ? 2 : 1;
  }
}

function checkGame() {
  let gridFull = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (game[i][j] == -1) {
        gridFull = false;
        break;
      }
    }
  }
  if (
    (game[0][0] == currentPlayer &&
      game[0][1] == currentPlayer &&
      game[0][2] == currentPlayer) ||
    (game[1][0] == currentPlayer &&
      game[1][1] == currentPlayer &&
      game[1][2] == currentPlayer) ||
    (game[2][0] == currentPlayer &&
      game[2][1] == currentPlayer &&
      game[2][2] == currentPlayer)
  ) {
    winGame();
  } else if (
    (game[0][0] == currentPlayer &&
      game[1][0] == currentPlayer &&
      game[2][0] == currentPlayer) ||
    (game[0][1] == currentPlayer &&
      game[1][1] == currentPlayer &&
      game[2][1] == currentPlayer) ||
    (game[0][2] == currentPlayer &&
      game[1][2] == currentPlayer &&
      game[2][2] == currentPlayer)
  ) {
    winGame();
  } else if (
    (game[0][0] == currentPlayer &&
      game[1][1] == currentPlayer &&
      game[2][2] == currentPlayer) ||
    (game[0][2] == currentPlayer &&
      game[1][1] == currentPlayer &&
      game[2][0] == currentPlayer)
  ) {
    winGame();
  } else if (gridFull) {
    win.textContent = `Game Draw`;
  }
}

function winGame() {
  gameWin = true;
  win.textContent = `Player ${currentPlayer} wins.`;
}

function restart() {
  win.textContent = ``;
  currentPlayer = 1;
  game = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ];
  gameWin = false;

  start();
}
start();
