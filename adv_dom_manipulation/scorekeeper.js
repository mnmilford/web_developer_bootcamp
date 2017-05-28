// ******************************************
// Setup variables for Player 1
// ******************************************
var p1 = document.querySelector('#p1');
var p1Button = document.querySelector('#p1button');
var p1Score = 0;

// ******************************************
// Setup variables for Player 2
// ******************************************
var p2 = document.querySelector('#p2');
var p2Button = document.querySelector('#p2button');
var p2Score = 0;

// ******************************************
// Other game variables
// ******************************************
var playingTo = document.querySelector('#game-over');
var gameScore = document.querySelector('#game-score');
var reset = document.querySelector('#reset');

function addPoint(player) {
  if (p1Score < playingTo.textContent && p2Score < playingTo.textContent) {
    if (player === p1) {
      p1Score++;
      p1.textContent = p1Score;
    } else {
      p2Score++;
      p2.textContent = p2Score;
    }
    makeScoreGreen();
  }
}

function makeScoreGreen() {
  if (p1Score === Number(playingTo.textContent)) {
    p1.style.color = "green";
  } else if (p2Score === Number(playingTo.textContent)) {
    p2.style.color = "green";
  }
}

p1Button.addEventListener("click", function(){
  addPoint(p1);
});

p2Button.addEventListener("click", function(){
  addPoint(p2);
});

gameScore.addEventListener("change", function(){
  playingTo.textContent = this.value;
});

reset.addEventListener("click", function(){
  p1Score = 0;
  p1.textContent = p1Score;
  p1.style.color = "initial";
  p2Score = 0;
  p2.textContent = p2Score;
  p2.style.color = "initial";
  gameScore.value = 0;
  playingTo.textContent = 0;
});