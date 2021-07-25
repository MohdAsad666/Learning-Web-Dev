/** @format */

let a = [];
let arr = [
  1,
  "string",
  null,
  undefined,
  true,
  [1, 2, 3, 5, [6, 7, 8, 9, 0]],
  function fn() {
    return `returned from fn`;
  },
];
console.log(arr);

for (x of arr) {
  if (typeof x === "function") {
    console.log(typeof x, x());
    continue;
  }
  if (Array.isArray(x)) {
    console.log(typeof x, x);
    for (y of x) {
      if (Array.isArray(y)) {
        for (z of y) {
          process.stdout.write(z + " ");
        }
        console.log();
        continue;
      } else {
        process.stdout.write(y + " ");
      }
    }
    console.log();
    continue;
  }
  console.log(typeof x, x);
}

function ff() {
  return "";
}

// console.log();
if (ff()) {
  console.log(`bruh`);
} else {
  console.log(`okok`);
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1;
let arr3 = Array.from(arr1);
console.log(arr1, arr2, arr3);
arr2.push("pushed for arr2");
arr1.push("pushed for arr1");

arr3.push("arr3");
console.log(arr1, arr2, arr3);
