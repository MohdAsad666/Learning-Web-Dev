/** @format */
const fs = require("fs");
const path = require("path");
const types = {
  document: ["txt", "md", "doxc"],
  others: [],
};
function organizefn(dirPath) {
  console.log("organize Command has been intitated for ", dirPath);
  if (!fs.existsSync(dirPath)) {
    console.log(`Enter Correct Directory`);
    return;
  }
  let newDirPath = path.join(dirPath, "organised_Files");
  if (!fs.existsSync(newDirPath)) {
    fs.mkdirSync(newDirPath);
  }
  orgainzeHelper(dirPath, newDirPath);
  return;
}
function orgainzeHelper(src, dest) {
  let src_content = fs.readdirSync(src);
  for (let index = 0; index < src_content.length; index++) {
    if (fs.lstatSync(path.join(src, src_content[index])).isFile()) {
      let category = getCategory(src_content[index]);
      sendFile(src, src_content[index], dest, category);
    }
  }
  return;
}
function getCategory(fileName) {
  let extname = path.extname(fileName).slice(1);
  for (let type in types) {
    for (const iterator of types[type]) {
      if (extname == iterator) {
        return type;
      }
    }
  }
  return "others";
}
function sendFile(src, file, dest, category) {
  let categoryPath = path.join(dest, category);
  if (!fs.existsSync(categoryPath)) {
    fs.mkdirSync(categoryPath);
  }
  let src_path = path.join(src, file);
  let dest_Path = path.join(categoryPath, path.basename(file));
  fs.copyFileSync(src_path, dest_Path);
  //   fs.unlinkSync(file);
  return;
}
module.exports = { organize: organizefn };
