// var gameBoxes = document.querySelectorAll('.game-box')
//       for(var i = 0; i < gameBoxes.length; i++) {
//         addEventListener('click',addTokenToDom)
//       }
var b0 = document.querySelector('#b0')
var b1 = document.querySelector('#b1')
var b2 = document.querySelector('#b2')
var b3 = document.querySelector('#b3')
var b4 = document.querySelector('#b4')
var b5 = document.querySelector('#b5')
var b6 = document.querySelector('#b6')
var b7 = document.querySelector('#b7')
var b8 = document.querySelector('#b8')



var gameStatus = document.querySelector('.game-status')
var player1Score = document.querySelector('.player-1-score')
var player2Score = document.querySelector('.player-2-score')



function addTokenToDom() {
  .innerText = currentPlayer.id
  switchCurrentPlayer()

}




















// //query selectors and event handlers
// document.addEventListener('click',boxSelected)
//
//
//
// function boxSelected(event) {
//   if(event.target.matches('.game-box')) {
//      tilePlacment()
//   }
// }
// function tilePlacment(){
//   var id = event.target.id
//   if(!gameBoard[id]) {
//     gameBoard[id] = currentPlayer
//     event.target.innerText = currentPlayer
//   }
//
// if(currentPlayer === player1.id ) {
//  event.target.innerText = currentPlayer
//  var id = event.target.id
//   currentPlayer = player2.id
// } else {
//    var id = event.target.id
//   event.target.innerText = currentPlayer
//   currentPlayer = player1.id
// }
// }
