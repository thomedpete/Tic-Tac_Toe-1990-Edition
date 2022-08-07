//Game Data

var gameBoard = ['','','','','','','','','']
var player1 = new Player('one','O',true)
var player2 = new Player('two','X',false)
var currentPlayer = player1.token






function switchCurrentPlayer() {
  if(currentPlayer === player1.token) {
    currentPlayer = player2.token
    player1.isCurrentPlayer = false
    player2.isCurrentPlayer = true
  } else {
    currentPlayer = player1.token
    player1.isCurrentPlayer = true
    player2.isCurrentPlayer = false
  }
}

function selectBox(box,index) {
  gameBoard[index] = currentPlayer
}

// selectBox('b9',9)
// switchCurrentPlayer()
// selectBox('b3',3)
// switchCurrentPlayer()
// selectBox('b0',0)
// switchCurrentPlayer()







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
