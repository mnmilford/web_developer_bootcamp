let colorToGuessDisplay = document.querySelector('#colorToGuess');
let header = document.querySelector('header');
let feedback = document.querySelector('#feedback');
let resetButton = document.querySelector('#new_colors_button')
let easyBtn = document.querySelector('#easy_btn');
let hardBtn = document.querySelector('#hard_btn');
let container = document.querySelector('#container');
let colors = [];
let colorToGuess;
let level;


function randomRGBColors(num=6) {
  for (var i = 0; i < num; i++) {
    result = "rgb(";
    let red = Math.floor(Math.random() * 256).toString();
    let green = Math.floor(Math.random() * 256).toString();
    let blue = Math.floor(Math.random() * 256).toString();
    result += red + ", ";
    result += green + ", ";
    result += blue + ")";
    colors.push(result);
  }
}

function randomItem(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

function newColors() {
  colors.splice(0);
  randomRGBColors(level);
  colorToGuess = randomItem(colors);
  colorToGuessDisplay.textContent = colorToGuess;
  feedback.textContent = "";
  header.style.backgroundColor = "#24292E";
  container.innerHTML = "";
}

function generateSquares() {
  let result = "";
  for (var i = 0; i < colors.length; i++) {
    result += '<div class="square"></div>';
  }
  container.innerHTML += result;
}

function newGame() {
  newColors();
  generateSquares();
  let squares = document.querySelectorAll('.square');
  // colorToGuessDisplay.textContent = colorToGuess;
  for (var i = 0; i < colors.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      let pickedColor = this.style.backgroundColor;
      if (pickedColor === colorToGuess) {
        feedback.textContent = "You got it!";
        header.style.backgroundColor = colorToGuess;
        for (square of squares) {
          square.classList.remove("hiddenSquare");
          square.style.backgroundColor = colorToGuess;
        }
      } else {
          feedback.textContent = "Nope. Try again!";
          this.classList.add("hiddenSquare");
      }
    });
  }
}

resetButton.addEventListener("click", newGame);

easyBtn.addEventListener("click", function(){
  level = 3;
  if (hardBtn.classList.contains('selectedBtn')) {
    hardBtn.classList.remove('selectedBtn');
    this.classList.add('selectedBtn');
  }
  newGame();
})

hardBtn.addEventListener("click", function(){
  level = 6;
  if (easyBtn.classList.contains('selectedBtn')) {
    easyBtn.classList.remove('selectedBtn');
    this.classList.add('selectedBtn');
  }
  newGame();
})

newGame();