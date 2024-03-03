const PI = 3.14;
let area = 0;
/*const radius = 3;
area = radius * radius * PI;
console.log("Area 1:", area);
radius = 4;
area = radius * radius * PI;
console.log("Area 2:", area); */

function circleArea(radius) {
    const area = radius^2 * PI;
    return area;
  }

const area3 = circleArea(3);
console.log("Area 3:", area3);

const area4 = circleArea(4);
console.log("Area4:", area4);

const area5 = circleArea(12);
console.log("Area5:", area5);

area4 = circleArea(23);
console.log("Area4:", area4);