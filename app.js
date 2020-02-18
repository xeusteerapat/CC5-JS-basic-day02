// Lab 1
/*
alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // alert 1 first, then alert 2
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // alert 1, then alert undefined
alert(null || (2 && 3) || 4); // alert 3
*/

// Lab 2
let age = prompt("How old are you?");
if (age >= 18 && age <= 60) {
  alert("Your age is between 18 and 60.");
}

if (age < 18 || age > 60) {
  alert("Your age is not between 18 and 60.");
}

// Lab 3
if (-1 || 0) alert("first"); // alert first
if (-1 && 0) alert("second"); // no alert
if (null || (-1 && 1)) alert("third"); // alert third

// Lab 4

let isAdmin = prompt("Please enter who you are: ");

if (isAdmin === "Admin") {
  let password = prompt("Please enter password");
  if (password === "codecamp#5") {
    alert("ยินดีต้อนรับ!");
  } else if (password === "" || !password) {
    alert("ยกเลิก");
  } else {
    alert("Wrong password!");
  }
} else if (isAdmin === "" || !isAdmin) {
  alert("ยกเลิก");
} else {
  alert("ผมไม่รู้จักคุณ!");
}
