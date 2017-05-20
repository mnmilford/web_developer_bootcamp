// Write a function which takes a single numeric argument and 
// returns true if the number is even, and false otherwise

function isEven(num) {
  return num % 2 === 0 ? true : false;
}

// console.log(isEven(4));
// console.log(isEven(21));
// console.log(isEven(68));


// Write a factorial() function which takes a single number
// and returns the factorial of that number

function factorial(num) {
  if (num === 0) {return 1};
  for (var i = num; i > 1; i--) {
        num *= i-1;
      }
  return num
}

// console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(10));