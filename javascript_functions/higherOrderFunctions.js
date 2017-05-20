// Pass a function into another function

function sing() {
  console.log("twinkle twinkle...");
  console.log("how i wonder...");
}

setInterval(sing, 1000);

// Anonymous function
setInterval(function() {
  console.log("This is cool!");
  console.log("I'm an anonymous function.");
}, 2000);