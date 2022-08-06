//Game Data
// var gameBoxes = Array.from(document.querySelectorAll('.game-box'))

var gameBoard = ['','','','','','','','','']
var currentPlayer = player1
var player1 = new Player('one')
var player2 = new Player('two')

var winCons  = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function gameStart() {

}
