/** @format */

let fibbonci = (n) => {
  let dp = new Array(parseInt(n + 1));
  console.log(dp);
  (dp[0] = 0), (dp[1] = 1);
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  console.log(dp[n]);
};
let x = process.argv.slice(2)[0];
fibbonci(x);
