console.log('Module is used to calculate the sum of 2 variable')

let randomVariable = 0;

function calculateSum(a , b){
    let sum = a + b;
    console.log(sum);
}

// Using ES6 object Declaration using both ways -> key and value or ShortHand Object notation
module.exports = {
    calculateSum: calculateSum,
    randomVariable
}