var p1 = document.querySelector('#p1');
var p1Button = document.querySelector('#p1button');
var p1Score = 0;

var p2 = document.querySelector('#p2');
var p2Button = document.querySelector('#p2button');
var p2Score = 0;


function addPoint(player) {
  if (player === p1) {
    p1Score++;
    p1.textContent = p1Score;
  } else {
    p2Score++;
    p2.textContent = p2Score;
  }
}

p1Button.addEventListener("click", function(){
  addPoint(p1);
});

p2Button.addEventListener("click", function(){
  addPoint(p2);
});