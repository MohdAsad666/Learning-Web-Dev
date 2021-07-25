/** @format */

let fs = require("fs");
let path = require("path");
// coping file
let srcPath = process.argv.splice(2)[0];
let tobecopied = path.basename(srcPath);
let fileName = tobecopied.split(".");
let destPath = path.join(
  process.cwd(),
  `${fileName[0]}${fs.existsSync(tobecopied) == true ? "(copy)" : ""}${
    "." + fileName[1]
  }`
);
fs.copyFileSync(srcPath, destPath);
