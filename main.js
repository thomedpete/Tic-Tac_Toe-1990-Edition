window.addEventListener('load',domClear)
var currentPlayerStatus = document.querySelector('.turn-status')
var gameBoxes = document.querySelectorAll('.box')
for(var i = 0; i < gameBoxes.length; i++) {
    addEventListener('click',checksLegalMove)
}


var player1 = new Player('Its The Rangers Move!','<img class="player-1-token"  src="assets/coin-vector-mighty-morphin-power-rangers-1096316.png">')
var player2 = new Player('Its The Turtles Move!','<img class="player-2-token" src="assets/turtles.png">')
var nuGame =  new Game(player1,player2)

function switchPlayerDom() {
currentPlayerStatus.innerText = nuGame.currentPlayer.id
}

function domClear() {
var gameBoxes = document.querySelectorAll('.box')
currentPlayerStatus.innerText = nuGame.currentPlayer.id
nuGame.isWinner = null
for(var i = 0; i < gameBoxes.length; i++) {
var gameIndex = gameBoxes[i]
gameIndex.innerText = ''
  }
}

function checksLegalMove(event) {
  var  id = event.target.id
  if(nuGame.gameBoard[id] != '') {
    return
  }
  boxChoice(event)
}

function boxChoice(event) {
  var  id = event.target.id
  if(event.target.matches('.box')) {
    event.target.innerHTML += nuGame.currentPlayer.token
  }
  switchPlayerDom()
  nuGame.selectBox(id)


if(nuGame.isWinner === nuGame.currentPlayer.token) {
   currentPlayerStatus.innerText = nuGame.currentPlayer.id
   setTimeout(domClear,3000)
   nuGame.gameBoard = ['','','','','','','','','']
 } else if(nuGame.isWinner === 'draw') {
   currentPlayerStatus.innerText = 'Draw....'
   setTimeout(domClear,3000)
   nuGame.gameBoard = ['','','','','','','','','']
 }
  nuGame.switchCurrentPlayer()
}
