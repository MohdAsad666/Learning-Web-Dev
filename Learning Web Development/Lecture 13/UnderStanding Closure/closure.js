/** @format */

function outer(num) {
  let outerVar = 10;
  console.log(`outer here`);
  return function innerHeight(num) {
    return num + outerVar;
  };
}

console.log(outer()(20));
