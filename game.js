//Game Data

var gameBoard = ['','','','','','','','','']
var player1 = new Player('one','O',true)
var player2 = new Player('two','X',false)
var currentPlayer = player1


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


function checkForWin() {
  var winnerFound = false
for(var i = 0; i < winCons.length; i++) {
    var winStatus = winCons[i]
    var boxZero = gameBoard[winStatus[0]]
    var boxOne = gameBoard[winStatus[1]]
    var boxTwo = gameBoard[winStatus[2]]
 if(boxZero == '' || boxOne == '' || boxTwo == '') {
    continue
  }
  if(boxZero == boxOne && boxOne == boxTwo) {
    winnerFound = true
    break
   }
 }
 if(winnerFound == true) {
   console.log(`${currentPlayer.id} Wins!`)
} else if(!gameBoard.includes('')) {
  console.log('DRAW')
} else {
  switchCurrentPlayer()
}

}

function resetGame() {
gameBoard = ['','','','','','','','','']
}

function switchCurrentPlayer() {
  if(currentPlayer === player1) {
    currentPlayer = player2
    player1.isCurrentPlayer = false
    player2.isCurrentPlayer = true
  } else {
    currentPlayer = player1
    player1.isCurrentPlayer = true
    player2.isCurrentPlayer = false
  }
}

function selectBox(box,index) {
  gameBoard[index] = currentPlayer.token
  checkForWin()

}

// selectBox('b3',3)
// switchCurrentPlayer()
// selectBox('b0',0)
//  switchCurrentPlayer()
//  selectBox('b4', 4)
// switchCurrentPlayer()
// selectBox('b1',1)
// switchCurrentPlayer()
//  selectBox('b8',8)
//  switchCurrentPlayer()
//   selectBox('b2',2)
// switchCurrentPlayer()
//   selectBox('b6',6)
// switchCurrentPlayer()
//   selectBox('b7',7)
// switchCurrentPlayer()
//   selectBox('b8',8)
