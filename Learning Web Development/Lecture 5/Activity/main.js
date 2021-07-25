/** @format */

const fs = require("fs");
const path = require("path");
const input = process.argv.slice(2);
const command = input[0],
  dirPath = input[1];
let helpObj = require("./Commands/help");
let organizeObj = require("./Commands/organize");
let treeObj = require("./Commands/tree");
switch (command) {
  case "tree":
    treeObj.tree(dirPath);
    break;
  case "organize":
    organizeObj.organize(dirPath);
    break;
  case "help":
    helpObj.help();
    break;

  default:
    break;
}
