// Function exercise
// ข้อ 1
function func1(n) {
  let ans = "";
  for (let i = 1; i <= n; i++) {
    ans += "*";
  }
  console.log(ans);
}

func1(5);

// ข้อ 2
function func2(n) {
  let ans = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      ans += "*";
    }
    ans += "\n";
  }
  console.log(ans);
}

func2(6);

// ข้อ 3
function func3(n) {
  let ans = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      ans += j;
    }
    ans += "\n";
  }
  console.log(ans);
}

func3(4);

// ข้อ 4
function func4(n) {
  let ans = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      ans += i;
    }
    ans += "\n";
  }
  console.log(ans);
}

func4(4);

// ข้อ 5
function func5(n) {
  let ans = "";
  for (let i = n; i >= 1; i--) {
    for (let j = n; j >= 1; j--) {
      ans += i;
    }
    ans += "\n";
  }
  console.log(ans);
}

func5(4);

// ข้อ 6
function func6(n) {
  let ans = "";
  let k = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      ans += k;
      k++;
    }
    ans += "\n";
  }
  console.log(ans);
}

func6(5);

// ข้อ 7
function func7(n) {
  let ans = "";
  let k = n * n;
  for (let i = n; i >= 1; i--) {
    for (let j = n; j >= 1; j--) {
      ans += k;
      k--;
    }
    ans += "\n";
  }
  console.log(ans);
}

func7(4);

// ข้อ 8
function func8(n) {
  let ans = "";
  for (let i = 0; i <= n + 2; i += 2) {
    ans += i + "\n";
  }
  console.log(ans);
}

func8(3);

// ข้อ 9
function func9(n) {
  let ans = "";
  for (let i = 2; i <= 2 * n; i += 2) {
    ans += i + "\n";
  }
  console.log(ans);
}

func9(4);

// ข้อ 10
function func10(n) {
  let ans = "";
  let k = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = k; j <= n * k; j += k) {
      ans += j;
    }
    ans += "\n";
    k++;
  }

  console.log(ans);
}

func10(3);

// ข้อ 11
function func11(n) {
  let ans = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i - j === 0) {
        ans += "_";
      } else if (i - j !== 0) {
        ans += "*";
      }
    }
    ans += "\n";
  }
  console.log(ans);
}
func11(4);

// ข้อ 12
// function getAsterix(n) {
//   let ans = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (i - j === 1) {
//         ans += "_";
//       } else if (i - j !== 1) {
//         ans += "*";
//       }
//     }
//     ans += "\n";
//   }
//   console.log(ans);
// }
// getAsterix(4);
