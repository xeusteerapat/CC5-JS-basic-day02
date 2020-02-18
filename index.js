let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}

// Lab 1027
let sum = 0;
for (let i = 1027; i > 0; i -= 2) {
  sum += i;
}
console.log(sum);

// Lab guessing game
let answer = prompt("Enter number");
let guessNum = prompt("Enter guessing number");
while (answer !== guessNum) {
  if (guessNum > answer) {
    alert("Your number is more than answer");
  } else if (guessNum < answer) {
    alert("Your number is less than answer");
  }
  guessNum = prompt("Enter guessing number");
}
alert("Your answer is correct");
