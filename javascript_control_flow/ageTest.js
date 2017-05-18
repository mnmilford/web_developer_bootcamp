var age = prompt("Welcome to the club. How old are you?");
var oddAge;
function oddNotice() {
  alert("Also, your age is odd!");
}

// Odd Age Test
function oddAge(age) {
  if (age % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

// Main Test
if (age < 0) {
  alert("Well.. that's impossible.");
} else if (age < 18) {
  alert("Sorry, you are not old enough to enter the venue.");
    if (oddAge(age)) {
      oddNotice();
    }
} else if (age < 21) {
  alert("You can enter, but cannot drink.");
    if (oddAge(age)) {
      oddNotice();
    }
} else if (age == 21) {
  alert("Happy 21st birthday! Grab a free shot at the bar.");
  oddNotice();
} else {
  alert("Come on in and grab a drink!");
  if (oddAge(age)) {
    oddNotice();
  }
}
