window.addEventListener('load',domClear)
var currentPlayerStatus = document.querySelector('.turn-status')
var gameBoxes = document.querySelectorAll('.box')
for(var i = 0; i < gameBoxes.length; i++) {
    addEventListener('click',checksLegalMove)
}



var player1 = new Player('GO! GO! Power Rangers!','Rangers',true)
var player2 = new Player('Cowabunga doooode!','The Turtles',false)
var nuGame =  new Game(player1,player2)

function switchPlayerDom() {
currentPlayerStatus.innerText = nuGame.currentPlayer.id
}

function domClear() {
var gameBoxes = document.querySelectorAll('.box')
currentPlayerStatus.innerText = nuGame.currentPlayer.id
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
    event.target.innerText = nuGame.currentPlayer.token
    switchPlayerDom()
  }
  nuGame.selectBox(id)

if(nuGame.isWinner === nuGame.currentPlayer.token || nuGame.isWinner === 'draw') {
   currentPlayerStatus.innerText = nuGame.currentPlayer.token + 'Win!'
   setTimeout(domClear,3000)
   nuGame.gameBoard = ['','','','','','','','','']
   nuGame.switchCurrentPlayer()
 }
  nuGame.switchCurrentPlayer()
}
