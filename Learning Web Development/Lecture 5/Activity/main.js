/** @format */

let srcPath = process.argv.splice(2)[0];
let helpObj = require("./Commands/help");
let organizeObj = require("./Commands/organize");
let treeObj = require("./Commands/tree");

helpObj.help();
organizeObj.organize(srcPath);
treeObj.tree(srcPath);
