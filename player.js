class Player {
 constructor(name,id,token) {
   this.name = name
   this.id = id
   this.wins = 0
   this.token = token
 }

increaseWinCount(nuGame) {
 nuGame.currentPlayer.wins++
  }
}
