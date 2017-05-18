// Print all numbers between -10 & 19

for (var i = -10; i <= 19; i++) {
  console.log(i);
}

// Print all even numbers between 10 & 40

for (var j = 10; j <= 40; j+=2) {
  console.log(j);
}

// Print all odd numbers between 300 and 333

for (var k = 300; k <= 333; k++) {
  if (k % 2 !== 0) {
    console.log(k);
  }
}

// Print all numbers divisible by 5 AND 3 from 5 up to & including 50

for (var x = 5; x <= 50; x++) {
  if (x % 15 === 0) {
    console.log(x);
  }
}