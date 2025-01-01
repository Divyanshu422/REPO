// * Iterator -> Loops
/*
      - Loops: modern looping is done ->  For..Each, For..in, for..of, map function 
*/

const arr = [1, 2, 3, 4, 5, 6];

// ! For each loop -> general loop
// arr.forEach((item, index) => {
//   console.log(`the item at ${index} is ${item} `);
// });

//! For of loop -> iterating at each element:
// for (const item of arr) {
//   console.log(item);
// }

//! For in loop -> manily used for the enumerator [ i.e. which has key -> object].
// * Not recommended

// for (const index in arr) {
//   console.log(index);
// }

//! map -> but it give a new array
let data = arr.map((item) => {
  return item * 2;
});

console.log(data);
