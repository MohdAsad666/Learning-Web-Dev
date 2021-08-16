/** @format */

let fs = require("fs");
console.log("Before");
fs.readFile("f1.txt", "utf8", cb);
fs.readFile("f2.txt", "utf8", cb);
fs.readFile("f3.txt", "utf8", cb);
function cb(err, data) {
  if (err) {
    console.log("Error");
  } else {
    console.log(data);
  }
}
console.log("After");
