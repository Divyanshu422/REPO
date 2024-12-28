let hidden = Symbol('email')
const myObject = {
    [hidden]: "email@example.com",
    firstName: "Divyanshu",
    lastName: "Tyagi",
    age: 29
}

console.log(Object.keys(myObject)); // Printing the keys

// * Looping
for (let key in myObject) {
    console.log(key)
}


