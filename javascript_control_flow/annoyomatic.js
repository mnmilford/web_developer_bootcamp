// The Annoy-O-Matic 3000
// 1. Ask the user "Are we there yet?"
// 2. Keep asking again and again until they enter "yes"
// 3. Then, alert "Yay, we finally made it!"

var answer = ""; 
while (answer !== "yes") {
  answer = prompt("Are we there yet?").toLowerCase();
}
alert("Yay, we finally made it!");
