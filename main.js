var gameBoxes = document.querySelectorAll('.box')
for(var i = 0; i < gameBoxes.length; i++) {
    addEventListener('click',boxChoice)
}



var player1 = new Player('O','Rangers',true)
var player2 = new Player('X','The Turtles',false)
var nuGame = new Game(player1,player2)

nuGame.initGame()

function domClear() {
var gameBoxes = document.querySelectorAll('.box')
  for(var i = 0; i < gameBoxes.length; i++) {
    var gameIndex = gameBoxes[i]
     gameIndex.innerText = ''
  }
}




function boxChoice(event) {
  var  id = event.target.id
  if(event.target.matches('.box')) {
    event.target.innerText = nuGame.currentPlayer.token
    nuGame.selectBox(id)
 }
}
