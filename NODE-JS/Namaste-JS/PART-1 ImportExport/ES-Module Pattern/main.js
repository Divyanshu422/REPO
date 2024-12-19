// main.js

// Importing named exports
import { add, subtract } from './module.js';

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2)); // Output: 3

// Importing the default export
import calculator from './module.js';

console.log(calculator.add(2, 3)); // Output: 5
console.log(calculator.subtract(5, 2)); // Output: 3
