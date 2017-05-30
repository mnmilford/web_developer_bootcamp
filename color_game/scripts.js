let colors = [];
let squares = document.querySelectorAll('.square');

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

randomRGBColors();

for (var i = 0; i < colors.length; i++) {
  squares[i].style.backgroundColor = colors[i];
}