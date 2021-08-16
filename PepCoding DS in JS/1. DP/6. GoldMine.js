/** @format */

let inputArray = require("./0. InputArray");

let GoldMine = (mine) => {
  let m = mine[0].length,
    n = mine.length;
  for (let j = m - 2; j >= 0; j--) {
    for (let i = n - 1; i >= 0; i--) {
      let maxGold = Number.MIN_SAFE_INTEGER;
      if (i - 1 >= 0) {
        maxGold = Math.max(maxGold, mine[i - 1][j + 1]);
      }
      if (i + 1 < n) {
        maxGold = Math.max(maxGold, mine[i + 1][j + 1]);
      }
      maxGold = Math.max(maxGold, mine[i][j + 1]);
      mine[i][j] += maxGold;
    }
  }
  let maxGold = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < mine.length; i++) {
    maxGold = Math.max(maxGold, mine[i][0]);
  }
  return maxGold;
};

let ip = `6
6
0 1 4 2 8 2
4 3 6 5 0 4
1 2 4 1 4 6
2 0 7 3 2 2
3 1 5 9 2 4
2 7 0 8 5 1`;

let ipArr = inputArray.inputGenerator(ip);
let mine = inputArray.input2d(ipArr);
console.log(GoldMine(mine));
