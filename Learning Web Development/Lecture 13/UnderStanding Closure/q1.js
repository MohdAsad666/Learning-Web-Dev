/** @format */

let arr = [];
for (var i = 0; i < 3; i++) {
  arr.push(function fn() {
    console.log(i);
  });
}
console.log(`Using var begin`);
for (let i = 0; i < 3; i++) {
  arr[i]();
}
console.log(`Using var end`);
arr = [];
for (var i = 0; i < 3; i++) {
  arr.push(function fn() {
    var j = i;
    console.log(j);
  });
}
console.log(`Using var with extra variable begin`);
for (let i = 0; i < 3; i++) {
  arr[i]();
}
console.log(`Using var with extra variable end`);
