/** @format */

const fs = require("fs");
fs.writeFileSync("f1.txt", "This is content of f1.txt file ");
let content = fs.readFileSync("f1.txt");
console.log("Content is \n" + content);
fs.appendFileSync("f1.txt", "\nThis is appended text ");
content = fs.readFileSync("f1.txt");
console.log("Content after appending \n" + content);
if (fs.existsSync("f1.txt")) {
  fs.unlinkSync("f1.txt");
  console.log(`File Deleted`);
} else {
  console.log(`File Doesn't exist`);
}
