"use strict";
function addBasic(num1, num2) {
    return num1 + num2;
}
// const num1 = "5"; // <- incorrect as num1 must be a number in ts
const num1 = 5;
const num2 = 2.8;
const result = addBasic(num1, num2);
console.log(result);
