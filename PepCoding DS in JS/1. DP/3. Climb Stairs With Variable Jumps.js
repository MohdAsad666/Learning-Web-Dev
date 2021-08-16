/** @format */
let InputArray = require("./0. InputArray");

let climbWithJump = (arr) => {
  let n = arr.length,
    dp = new Array(parseInt(n + 1));
  dp[n] = 1;
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = 0;
    for (let j = 1; j <= arr[i] && i + j <= n; j++) {
      dp[i] += dp[i + j];
    }
  }
  console.log(dp);
  return dp[0];
};

let arr = InputArray.input1d();
console.log(climbWithJump(arr));
/*10 3 3 0 2 1 2 4 2 0 0*/
