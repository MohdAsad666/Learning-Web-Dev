/** @format */

// Function Statement

function fn(param) {
  console.log(`parameter was ${param}`);
}

fn(10);
fn("String");
fn([10, 20, 30, 40, 50]);
fn({ num: 10 });

// Function Expression

const fnExp = function (param) {
  console.log(`This is funtion Exp and ${param}`);
};
fnExp(`fnExp`);

let fnExp1 = fnExp;

fnExp1(`fnExp1`);

fnExp1 = "Not Function Anymore";

fnExp(`fnExp`); // then why is this working

// IIFE :: Immediately Invoked Function

(function IIFE() {
  console.log(`Called Already`);
})();

let arrFn = () => {
  console.log(`This is Arrow Function`);
};

arrFn();
