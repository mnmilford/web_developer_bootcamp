// Create a secretNumber between 1-10
secretNumber = Math.floor(Math.random() * 10) + 1;

// Create variable to hold user guess & number of guesses
var guess;
var numberOfGuesses = 0;

// Ask user for guess & check guess
while (guess !== secretNumber) {
  guess = Number(prompt("Guess a number between 1-10!"));
  numberOfGuesses += 1;
  if (isNaN(guess)) {
    alert("Try a number next time..");
  } else if (guess < secretNumber) {
    alert("Too low. Try again!");
  } else if (guess > secretNumber) {
    alert("Too high. Try again!");
  } else {
    alert("Congrats! You got it in " + numberOfGuesses + " tries.");
  }
}