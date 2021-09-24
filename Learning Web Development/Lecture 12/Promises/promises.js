/** @format */
const fs = require("fs");

console.log("before");

// console.log(`Using Callback`);

// fs.readFile("f1.txt", function (err, data) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(`data ` + data);
// });

let freadPromise = fs.promises.readFile("f1.txt");

freadPromise.then(function (data) {
  console.log(`` + data);
});
freadPromise.catch(function (err) {
  console.log(err);
});

console.log(`After`);
