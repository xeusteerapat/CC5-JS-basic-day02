// Lab 1

alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // alert 1 first, then alert 2
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // alert 1, then alert undefined
alert(null || (2 && 3) || 4); // alert 3

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

// Lab 5
// เลขที่ถูก alert เป็นลำดับสุดท้ายคือเลขอะไร
let i = 3;

while (i) {
  alert(i--);
}
// Ans. 1 is last number alert

// Lab 6
// code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
let i = 0;
while (i++ < 5) alert(i); // alert 1,2,3,4,5

let i = 0;
while (++i < 5) alert(i); // alert 1,2,3,4

// Lab 7
// code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
for (let i = 0; i < 5; i++) alert(i); // alert 0,1,2,3,4
for (let i = 0; i < 5; ++i) alert(i); // alert 0,1,2,3,4

// Lab 8
// 4.	ให้เขียน loop ทั้งแสดงเลข 2 ถึง 10 ออกมา
// 5.	เปลี่ยน code for loop ด้านล่างนี้ให้เป็น while loop โดยที่ผลลัพธ์ยังเหมือนเดิม

/*
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// CONTINUE AT index.js
