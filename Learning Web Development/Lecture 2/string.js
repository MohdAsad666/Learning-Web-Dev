/** @format */

let num = 10;
let a = `this is number ${num}`;

console.log(a);

let st = a.split(" ");
console.log(st.toString());
console.log(st);
let new_st = st.join("+");
console.log(new_st);

// length of string

console.log(a.length, st.length, new_st.length);

a = "            " + a;
console.log(a);
a = a.trim();
console.log(a);

// type of keyword

let type = typeof a;

console.log(type);

// function processData(input) {
//   let inputs = input.split("\n");
//   let x = inputs[1];
//   let rotate = inputs[0] % x.length;
//   let y = (x + "").split("");
//   let yy = y.splice(y.length - rotate, rotate);

//   y.unshift(...yy);

//   console.log(y.join(""));
// }

// push pop shift unshift

/**
 * Push pop => add remove
 * unshift shift  => add to first / remove first
 * slice splice => slice(x,y) --> gives a portion from x to y but string remain entact,
 *  while for splice(x,y) gives substring from x of length y while the returned portion is deleted from original string.
 * indexof => gives index of first occurance of any element else gives -1.
 * includes => if element present gives true else false;
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements:
fruits.splice(2, 0, "Lemon", "Kiwi");

function processData(ip) {
  console.log(typeof ip);
  let input = ip.substring(1, ip.length - 1);
  input = input.split(",");

  console.log(input);
  let i = 0,
    j = input.length - 1;
  // console.log();
  while (i < j) {
    let x = input[i];
    input[i] = Number(input[j]);
    input[j] = String(x);
    i++;
    j--;
  }
  console.log(input);
}
processData("[1, 2, 3, 4, 5]");

let a = [1, 2, 3, 4];
