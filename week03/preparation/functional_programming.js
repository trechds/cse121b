
// For all of these exercises, use this array declaration:
let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

/* */

/* Using the array.filter() method,create an array named namesB with 
only those names from the name array that start with the character 'B */
let namesB = names.filter(name => name.charAt(0) === 'B');


/* Using the array.map() method, create a new array named namesLength
that contains the length of each name in the names array.
Expected output is [5, 8, 5, 8, 3].*/
let nameLengths = names.map((name) => name.length);


/* Using the names.reduce() method, create an expression that returns the
average string length of the names in the names array. Expected output is 5.8.*/
names.reduce((total, name) => total + name.length, 0) / names.length;


