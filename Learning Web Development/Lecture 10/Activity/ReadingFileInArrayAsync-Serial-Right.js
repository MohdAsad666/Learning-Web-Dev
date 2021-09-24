/** @format */
// using Reccurssion
let fs = require("fs");
let path = require("path");
let dirpath = `D:\\Academics\\CPP\\pepcoding List\\1. Foundation\\1. Basics of Programming`;
let arr = fs.readdirSync(dirpath);
console.log(`before`);
function serialReader(i) {
  if (i == arr.length) {
    return;
  }
  fs.readFile(path.join(dirpath, arr[i]), function cb(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(arr[i]);
    serialReader(i + 1);
  });
}
serialReader(0);
console.log(`After`);
