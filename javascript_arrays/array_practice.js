// Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order (don\'t modify the original array)

arr = [1, 2, 3, 4, 5];

function printReverse(array) {
  for (var i = array.length-1; i >= 0; i--) {
    console.log(array[i]);
  }
}

printReverse(arr);