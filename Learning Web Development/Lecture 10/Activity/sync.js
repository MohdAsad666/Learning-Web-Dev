/** @format */

let fs = require("fs");

let content = fs.readFileSync("f1.txt");
console.log("before");
console.log("content: " + content);
content = fs.readFileSync("f2.txt");
console.log("content: " + content);
content = fs.readFileSync("f3.txt");
console.log("content: " + content);
console.log("after");
