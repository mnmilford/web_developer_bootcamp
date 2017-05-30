let squares = document.querySelectorAll('.square');
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
  squares[i].style.backgroundColor = colors[i];
}