// Given radius of circle as an array
const radius = [3, 1, 4, 6];

const area = (radius) => {
  return Math.PI * Math.pow(radius, 2);
};

const diameter = (radius) => {
  return 2 * radius;
};

const genericFunction = function (logic, radius) {
  const output = [];
  for (let r of radius) {
    output.push(logic(r));
  }
  return output;
};

console.log(genericFunction(area, radius));
console.log(genericFunction(diameter, radius));
