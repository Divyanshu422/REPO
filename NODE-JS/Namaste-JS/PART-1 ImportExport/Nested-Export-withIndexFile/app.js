// No need to write index.js -> by default it will take index.js
let { multiple, sum } = require("./calculate");

let a = 15;
let b = 4;

console.log("the product of number is ", multiple(a, b));
console.log("the sum of number is ", sum(a, b));
