// Print all numbers between -10 & 19

var i = -10;
while (i < 19) {
  console.log(i);
  i++;
}

// Print all even numbers between 10 & 40

var j = 10;
while (j < 40) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}

// Print all odd numbers between 300 and 333

var k = 300;
while (k < 333) {
  if (k % 2 !== 0) {
    console.log(k);
  }
  k++
}

// Print all numbers divisible by 5 AND 3 from 5 up to & including 50

var x = 5;
while (x <= 50) {
  if (x % 15 === 0) {
    console.log(x);
  }
  x++;
}