const arr = [5, 3, 2, 6, 18];

function binary(data) {
  return data.toString(2);
}

const mapResult = arr.map(binary);

console.log(mapResult); // [ '101', '11', '10', '110', '10010' ]

//! Filter function

const filterResult = arr.filter((element) => {
  return element > 5;
});
console.log(filterResult); // [ 6, 18 ]
