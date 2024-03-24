// Variable Declarations
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// Part 1: Using a for loop
console.log("Using a for loop:");
for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

// Part 2: Using a while loop
console.log("\nUsing a while loop:");
let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++;
}

// Part 3: Using a forEach loop
console.log("\nUsing a forEach loop:");
studentReport.forEach(function (item) {
  if (item < LIMIT) {
    console.log(item);
  }
});

// Part 4: Using a for...in loop
console.log("\nUsing a for...in loop:");
for (let i in studentReport) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

// Part 5: Dynamically producing day names
console.log("\nDynamically producing day names:");
const today = new Date();
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for (let i = 0; i < DAYS; i++) {
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + i);
  console.log(dayNames[nextDay.getDay()]);
}
