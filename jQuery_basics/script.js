// Selecting elements
let h1s = $("h1");
let lis = $("li");
let specialAnimal = $("#adorable");

// Using the .css() method
h1s.css("color", "green");
// Creating an object with predefined styles
let styles = {
  color: "red",
  background: "pink",
  border: "2px solid purple"
}
// Applying predefined styles to elements
lis.css(styles);

// Select multiple items and change css without declaring a variable
$(".animal").css("font-size", "2rem");

$("a").css({"font-size": "2rem", "text-decoration": "none"});