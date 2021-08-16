/** @format */
"use strict";
let InputArray = require("./0. InputArray");

let minMovesMazeDP = (maze) => {
  let n = maze.length,
    m = maze[0].length;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      let minValue = Number.MAX_SAFE_INTEGER;
      if (i + 1 < n) {
        minValue = Math.min(minValue, maze[i + 1][j]);
      }
      if (j + 1 < m) {
        minValue = Math.min(minValue, maze[i][j + 1]);
      }
      maze[i][j] =
        maze[i][j] + (minValue == Number.MAX_SAFE_INTEGER ? 0 : minValue);
    }
  }
  return maze[0][0];
};

let maze = InputArray.input2d();
console.log(minMovesMazeDP(maze));
/*
node "5. Min Cost In Maze Traversal.js" 6 6 0 1 4 2 8 2 4 3 6 5 0 4 1 2 4 1 4 6 2 0 7 3 2 2 3 1 5 9 2 4 2 7 0 8 5 1
*/
