// Primitive types can be copied directly as shown
let firstName = "Divyanshu";
let lastName = firstName;

console.log(lastName); //! Divyanshu

// !Spread Operator to create the shallow copy for reference type

let marks = [10, 20, 32];
let marksCopy = [...marks]; // * Mandatory to use bracket

marksCopy = [11, 22];
console.log(marks); // * [ 10, 20, 32 ]
console.log(marksCopy); // * [ 11, 22 ]

// falsy value -> 0, null, undefined, false, NaN, document.all
// Note: document.all is falsy value

if (" ") {
  console.log("blank space is truthy value");
}
