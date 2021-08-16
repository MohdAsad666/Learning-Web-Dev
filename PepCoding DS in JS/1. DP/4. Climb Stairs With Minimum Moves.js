/** @format */
"use strict";
let InputArray = require("./0. InputArray");

let climbStairsMinrecur = (array, idx) => {
  if (idx == array.length) {
    return 0;
  }
  let minMoves = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i <= array[idx] && idx + i <= array.length; i++) {
    minMoves = Math.min(minMoves, climbStairsMinrecur(array, idx + i));
  }
  return minMoves != Number.MAX_SAFE_INTEGER ? minMoves + 1 : minMoves;
};
let climbStairsMinDP = (array) => {
  let n = array.length,
    dp = new Array(parseInt(n + 1));
  dp[n] = 0;
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = Number.MAX_SAFE_INTEGER;
    let minim = Number.MAX_SAFE_INTEGER;
    for (let j = 1; j <= array[i] && i + j <= dp.length; j++) {
      minim = Math.min(minim, dp[i + j]);
    }
    dp[i] = minim + 1;
  }
  return dp[0];
};
let arr = InputArray.input1d();
console.log(climbStairsMinDP(arr));
/*
10 3 3 0 2 1 2 4 2 0 0
*/
