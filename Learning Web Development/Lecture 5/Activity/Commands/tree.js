/** @format */

let fs = require("fs");
let path = require("path");
function tree(dirname) {
  console.log("Tree Command has been intitated for ", dirname);
  if (!fs.existsSync(dirname)) {
    console.log(`This path doesn't Exist`);
    return;
  } else if (!fs.lstatSync(path.join(dirname)).isFile()) {
    treeHepler(dirname, "");
  } else {
    console.log(path.basename(dirname));
  }
  return;
}
function treeHepler(dirname, indent) {
  let Dir_Content = fs.readdirSync(dirname);
  for (let i = 0; i < Dir_Content.length; i++) {
    let isDirectory = fs.lstatSync(path.join(dirname, Dir_Content[i])).isFile();
    if (!isDirectory) {
      console.log(indent + "└──" + Dir_Content[i]);
      treeHepler(
        path.join(dirname, path.basename(Dir_Content[i])),
        indent + "\t"
      );
    } else {
      console.log(indent + "├──" + path.basename(Dir_Content[i]));
    }
  }
  return;
}
module.exports = { tree: tree };
