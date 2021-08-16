/** @format */

let fs = require("fs");
let path = require("path");
let dirpath = `D:\\Academics\\CPP\\pepcoding List\\1. Foundation\\1. Basics of Programming`;
let arr = fs.readdirSync(dirpath);

for (let i = 0; i < arr.length; i++) {
  fs.readFile(path.join(dirpath, arr[i]), "utf8", cb);
}
function cb(err, data) {
  if (err) {
    console.log("Error");
    return;
  } else {
    console.log(data);
  }
}
