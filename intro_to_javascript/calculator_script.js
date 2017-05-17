document.addEventListener("DOMContentLoaded", function(event) { 
  var age = prompt("How many years old are you?");
  var daysOld = age * 365;
  alert("You are ~" + daysOld + " days old.");
});