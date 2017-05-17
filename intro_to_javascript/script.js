document.addEventListener("DOMContentLoaded", function(event) { 
  var firstName = prompt("What is your first name?");
  var lastName = prompt("What is your last name?");
  var userAge = prompt("How old are you? (Enter a number)");
  console.log("Your full name is", firstName, lastName + ".");
  console.log("You are " + userAge + " years old.");

  setTimeout(function() {
    var title = document.getElementsByTagName("h1")[0];
    title.innerHTML = "OMG it FUCKING CHANGED!";
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "lightblue";
    body.innerHTML += "<p>Check the JavaScript console...</p>";
  }, 3000);
});