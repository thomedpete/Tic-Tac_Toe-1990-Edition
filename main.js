//query selectors and event handlers
document.addEventListener('click',boxSelected)



function boxSelected(event) {
  if(event.target.matches('.game-box')) {
     tilePlacment()
  }
}
function tilePlacment(){
  var id = event.target.id
  if(!gameBoard[id]) {
    gameBoard[id] = currentPlayer
    event.target.innerText = currentPlayer
  }

if(currentPlayer === player1.id ) {
 event.target.innerText = currentPlayer
 var id = event.target.id
  currentPlayer = player2.id
} else {
   var id = event.target.id
  event.target.innerText = currentPlayer
  currentPlayer = player1.id
}
}
