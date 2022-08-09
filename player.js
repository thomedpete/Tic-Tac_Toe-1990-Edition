class Player {
 constructor(id,token,currentPlayerStatus) {
   this.id = id
   this.wins = 0
   this.token = token
   this.isCurrentPlayer = true
}


increaseWinCount(nuGame) {
 nuGame.currentPlayer.wins++
}
}
