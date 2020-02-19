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

// แปลง Code ดังกล่าวเป็น if-else statement
let browser = prompt("Enter your browser: ");
if (browser === "Edge") {
  alert("You've got the Edge!");
} else if (browser === "Opera") {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

// แปลง Code ดังกล่าวเป็น switch-case statement
let a = 2;

switch (a) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2 || 3:
    console.log(2, 3);
    break;
}
