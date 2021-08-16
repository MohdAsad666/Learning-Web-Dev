/** @format */

let arr = [1, 2, 3, 4, 5];
function squared(x) {
  return x * x;
}
function cubed(x) {
  return x * x * x;
}
function op(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let x = cb(arr[i]);
    newArr.push(x);
  }
  return newArr;
}
let square = op(arr, squared);
console.log(square);
let cube = op(arr, cubed);
console.log(cube);
