//Game Data
class Game {
  constructor()  {
    this.gameBoard = ['','','','','','','','','']
    this.player1 = player1
    this.player2 = player2
    this.currentPlayer = player1
  }

  initGame() {
    var player1 = new Player('O','Rangers',true)
    var player2 = new Player('X','The Turtles',false)
    this.gameBoard = ['','','','','','','','','']
  }

   

}











var gameBoard = ['','','','','','','','','']
var player1 = new Player('O','Rangers',true)
var player2 = new Player('X','The Turtles',false)
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

function selectBox(box,index,) {
  gameBoard[index] = currentPlayer.id
  checkForWin()
}

function switchCurrentPlayer() {
  if(currentPlayer == player1) {
    currentPlayer = player2
    player1.isCurrentPlayer = false
    player2.isCurrentPlayer = true
    console.log(currentPlayer.token)
  } else {
    currentPlayer = player1
    player1.isCurrentPlayer = true
    player2.isCurrentPlayer = false
    console.log(currentPlayer.token)
  }
}

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
   currentPlayer.increaseWinCount()
   console.log(`${currentPlayer.token} Wins!`)

} else if(!gameBoard.includes('')) {

  console.log('DRAW')
} else {
  switchCurrentPlayer()
}

}

function initGame() {
gameBoard = ['','','','','','','','','']
currentPlayer = player1

}



// selectBox('b3',3)
// switchCurrentPlayer()
selectBox('b0',0)
switchCurrentPlayer()
//  selectBox('b4', 4)
// switchCurrentPlayer()
selectBox('b1',1)
switchCurrentPlayer()
//  selectBox('b8',8)
//  switchCurrentPlayer()
  selectBox('b2',2)
// switchCurrentPlayer()
//   selectBox('b6',6)
// switchCurrentPlayer()
//   selectBox('b7',7)
// switchCurrentPlayer()
//   selectBox('b8',8)
