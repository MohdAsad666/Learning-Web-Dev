/** @format */

let fs = require("fs");
let dirpath = `D:\\Academics\\CPP\\pepcoding List\\1. Foundation\\1. Basics of Programming`;
let arr = fs.readdirSync(dirpath);

let i = 0,
  prev = -1;
while (i < arr.length) {
  //   console.log(i);
  if (i != prev) {
    prev = i;
    fs.readFile(arr[i], "utf8", cb);
  }
}
function cb(err, data) {
  if (err) {
    console.log("Error");
    return;
  } else {
    console.log(data);
    console.log(i);
    i++;
  }
}
