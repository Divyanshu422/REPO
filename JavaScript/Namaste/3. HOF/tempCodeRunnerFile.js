const radius = [3, 1, 4, 6];

const calculateArea = function (radius) {
  const area = [];
  for (let r of radius) {
    area.push[Math.PI * r * r];
  }
  return area;
};

console.log(calculateArea(radius));
