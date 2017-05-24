// Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order (don\'t modify the original array)

var arr = [1, 2, 3, 4, 5];

function printReverse(array) {
  for (var i = array.length-1; i >= 0; i--) {
    console.log(array[i]);
  }
}

// printReverse(arr);

// Write a function isUniform() which takes an array as an argument and returns true if all elements are identical

function isUniform(array) {
  baseItem = array[0];
  for (var i = 1; i < array.length; i++) {
    if (baseItem !== array[i]) {
      return false;
    }
  }
  return true;
}

// console.log(isUniform(arr));  //false
// console.log(isUniform([1,1,1,2]));  //false
// console.log(isUniform([3,3,3,3,3,3,3]));  //true
// console.log(isUniform(["a", "b", "p"]));  //false
// console.log(isUniform(["b", "b", "b"]));  //true

// Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array

function sumArray(array) {
  var sum = 0;
  for (var i of array) {
    sum += i;
  }
  return sum
}

// console.log(sumArray(arr)); //15
// console.log(sumArray([-5, 100])); //95
// console.log(sumArray([10,3,10,4])); //27

// Write a function max() that accepts an array of numbers and returns the maximum number in the array

function max(array) {
  var max = array[0];
  for (var i of array) {
    (i > max) ? max = i : max;
  }
  return max;
}

console.log(max(arr));  //5
console.log(max([10,3,10,4]));  //10
console.log(max([-5,-20,100]));  //100