/** @format */
let fs = require("fs");
let path = require("path");

let input = process.argv.slice(2);

let reduceEnter = input.indexOf("-s");
let numbering = input.indexOf("-n");
let nonEmptyNumbering = input.indexOf("-b");
let lineNumber = 1;
let res_string = "";
for (let el of input) {
  if (fs.existsSync(el)) {
    let content = fs.readFileSync(el) + "";
    content = content.split("\r\n");
    let idx = 0,
      cur_string = "";
    while (idx < content.length) {
      while (idx < content.length && content[idx] != "") {
        cur_string = cur_string.concat(content[idx]);
        idx++;
      }
      let escapeCounter = 0;
      while (idx < content.length && content[idx] == "") {
        escapeCounter++;
        idx++;
      }
      if (reduceEnter != -1 && escapeCounter >= 2) {
        cur_string = cur_string.concat("\n\n");
      } else {
        while (escapeCounter >= 0) {
          cur_string = cur_string.concat("\n");
          escapeCounter--;
        }
      }
    }
    res_string = res_string.concat(cur_string);
  } else if (el != "-b" && el != "-s" && el != "-n") {
    console.log(el, `don't exist`);
  }
}
for (let x = 0; x < res_string.length; x++) {
  let cur_string = "";
  while (x < res_string.length && res_string[x] != "\n") {
    cur_string += res_string[x];
    x++;
  }
  if (
    (numbering != -1 && nonEmptyNumbering == -1) ||
    (numbering != -1 &&
      nonEmptyNumbering != -1 &&
      numbering < nonEmptyNumbering)
  ) {
    process.stdout.write(`${lineNumber++} `);
  } else if (
    (nonEmptyNumbering != -1 && numbering == -1) ||
    (nonEmptyNumbering != -1 &&
      numbering != -1 &&
      nonEmptyNumbering < numbering &&
      cur_string.length > 1)
  ) {
    process.stdout.write(`${cur_string.length > 1 ? lineNumber++ : ""} `);
  }
  process.stdout.write(cur_string);
  console.log();
}

/*
node wcat.js "D:\Academics\PepCoding\Learning Web Development\Lecture 6\Files\f1.txt" "D:\Academics\PepCoding\Learning Web Development\Lecture 6\Files\f2.txt" "D:\Academics\PepCoding\Learning Web Development\Lecture 6\Files\f3.txt" "-n"
*/
