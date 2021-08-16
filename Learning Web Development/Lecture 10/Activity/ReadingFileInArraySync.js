/** @format */

let fs = require("fs");
let path = require("path");
let dirpath = `D:\\Academics\\CPP\\pepcoding List\\1. Foundation\\1. Basics of Programming`;
let arr = fs.readdirSync(dirpath);

for (let i = 0; i < arr.length; i++) {
  const content = fs.readFileSync(path.join(dirpath, arr[i]), "utf8");
  console.log(content);
}
