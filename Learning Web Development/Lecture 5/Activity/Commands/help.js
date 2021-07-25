/** @format */

function help() {
  console.log(`
    Please Enter Right Command, those are:
    main.js tree \${dirPath}
    main.js orgainize \${dirPath}
    main.js help \${dirPath}
    `);
  return;
}
module.exports = { help: help };
