/** @format */

let fs = require("fs");
let path = require("path");
let input = process.argv.slice(2);
if (!fs.existsSync(input[0])) {
  fs.mkdirSync(input[0]);
  for (let i = 1; i < input.length; i++) {
    let dir_path = path.join(`${input[0]}`, `${input[i]}`);
    fs.mkdirSync(dir_path);
    for (let j = 1; j <= 5; j++) {
      let dir_path_module = path.join(`${dir_path}`, `module-${j}`);
      fs.mkdirSync(dir_path_module);
      for (let k = 1; k <= 5; k++) {
        fs.writeFileSync(
          path.join(dir_path_module, `content-${k}.md`),
          `Hello module-${j} I am ${k}th file.`
        );
      }
    }
  }
}
