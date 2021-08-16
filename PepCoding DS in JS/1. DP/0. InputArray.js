/** @format */
let inputGenerator = (input) => {
  return input.split("\n").join(" ").split(" ");
};
let input1D = (inputArr) => {
  let n = inputArr[0];
  let arr = new Array(parseInt(n));
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(inputArr[i + 1]);
  }
  return arr;
};
let input2D = (inputArr) => {
  let m = inputArr[0],
    n = inputArr[1];
  inputArr = inputArr.slice(2);
  console.log;
  let maze = [];
  let counter = 0;
  for (let i = 0; i < m; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(parseInt(inputArr[counter++]));
    }
    maze.push(arr);
  }
  return maze;
};

module.exports = {
  inputGenerator: inputGenerator,
  input1d: input1D,
  input2d: input2D,
};
