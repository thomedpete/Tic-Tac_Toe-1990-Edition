class Game {
  constructor(player1,player2)  {
    this.gameBoard = ['','','','','','','','','']
    this.winCons = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6]
   ]
    this.isWinner = null
    this.player1 = player1
    this.player2 = player2
    this.currentPlayer = player1
  }

  switchCurrentPlayer() {
    if(this.currentPlayer === player1) {
      this.currentPlayer = player2
      player1.isCurrentPlayer = false
      player2.isCurrentPlayer = true

    } else {
      this.currentPlayer = player1
      player1.isCurrentPlayer = true
      player2.isCurrentPlayer = false

    }

  }

  selectBox(index) {
    this.gameBoard[index] = this.currentPlayer.token
    this.checkForWin()
  }

  checkForWin() {
    var winnerFound = false
  for(var i = 0; i < this.winCons.length; i++) {
      var winStatus = this.winCons[i]
      var boxZero = this.gameBoard[winStatus[0]]
      var boxOne = this.gameBoard[winStatus[1]]
      var boxTwo = this.gameBoard[winStatus[2]]
   if(boxZero == '' || boxOne == '' || boxTwo == '') {
      continue
    }
    if(boxZero == boxOne && boxOne == boxTwo) {
      winnerFound = true
      break
     }
   }
   if(winnerFound == true) {
     this.currentPlayer.increaseWinCount(nuGame)
     this.isWinner = this.currentPlayer.name
     console.log(`${this.currentPlayer.name} Win!`)


  } else if(!this.gameBoard.includes('')) {
     this.isWinner = 'draw'
    console.log('DRAW')
  }

  }

}
