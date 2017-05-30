let squares = document.querySelectorAll('.square');
let colorToGuessDisplay = document.querySelector('#colorToGuess');
let header = document.querySelector('header');
let colors = [];
// Have to run the function below to fill up the colors array
// before I can establish the colorToGuess variable
randomRGBColors(); 
let colorToGuess = randomItem(colors);


function randomRGBColors() {
  for (var i = 0; i < 6; i++) {
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

for (var i = 0; i < colors.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    let pickedColor = this.style.backgroundColor;
    if (pickedColor !== colorToGuess) {
      this.classList.add("hiddenSquare");
    }
  });
}

colorToGuessDisplay.textContent = colorToGuess;
