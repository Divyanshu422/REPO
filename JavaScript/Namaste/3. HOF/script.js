// Given radius of circle as an array
const radius = [3, 1, 4, 6];

const area = (radius) => {
  return Math.PI * Math.pow(radius, 2);
};

const diameter = (radius) => {
  return 2 * radius;
};

Array.prototype.genericFunction = function (logic) {
  const output = [];
  for (let r of this) { // Here this means the radius on which generic function is called
    output.push(logic(r));
  }
  return output;
};

const result = radius.genericFunction(diameter);
console.log(result)