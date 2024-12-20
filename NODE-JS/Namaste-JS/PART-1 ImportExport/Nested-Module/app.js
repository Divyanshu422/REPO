const { multiple } = require("./Calculate/Multiple.cjs");
const { sum } = require("./Calculate/Sum.cjs");

let a = 10;
let b = 20;

console.log("The product of number is", multiple(a, b));
console.log("The sum of number is", sum(a, b));
