/** @format */

let fs = require("fs");
let path = require("path");
let path_given = process.argv.slice(1)[0];
let dir_files = fs.readdirSync(path_given);

for (let i = 0; i < dir_files.length; i++) {
  if (fs.lstatSync(path.join(path_given, dir_files[i])).isFile()) {
    let content = fs.readFileSync(path.join(path_given, dir_files[i]));
    fs.appendFileSync("summary.txt", content + " ");
  }
}
