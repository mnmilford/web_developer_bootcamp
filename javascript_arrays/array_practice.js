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

console.log(isUniform(arr));  //false
console.log(isUniform([1,1,1,2]));  //false
console.log(isUniform([3,3,3,3,3,3,3]));  //true
console.log(isUniform(["a", "b", "p"]));  //false
console.log(isUniform(["b", "b", "b"]));  //true
