/** @format */

let climbStair = (n) => {
  let array = new Array(n + 1);
  array[n] = 1;
  for (let i = n - 1; i >= 0; i--) {
    array[i] = 0;
    for (let j = 1; i + j <= n && j <= 3; j++) {
      array[i] += array[i + j];
    }
  }
  console.log(array[0]);
};
let x = process.argv.slice(2)[0];
climbStair(x);
