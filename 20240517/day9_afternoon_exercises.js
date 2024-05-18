// Exercise 1: Variables and Arithmetic Operations
let num1 = 10;
let num2 = 4;
let result = num1 + num2;
console.log(result);
result = num1 - num2;
console.log(result);
result = num1 * num2;
console.log(result);
result = num1 / num2;
console.log(result);

// Exercise 2: String Interpolations and Type Coercion
let myName = "Estelle";
let myAge = 19;
// Could use String() for type coercion -> turn myAge into string; but not needed bcs will use extrapolat
// Can also use myAge.toString()
console.log(`My name is ${myName}. I swear I'm ${myAge} years old!`);

// Exercise 3: Type Checking and Type Coercion
let value = 45;
console.log(typeof(value));
value = (String(value));
console.log(typeof(value));

/*
// Exercise 4: Documenting Functionalities using comments
let length = Number (
  prompt("Let's make a rectangle! Please input the length.")
); // Declare variable "length", assign type Number, let user pick value through prompt
let width = Number (
  prompt("Now, please input the width!")
); // Declare variable "width", assign type Number, let user pick value through prompt
let area = length * width; // Declare variable "area", assign value of product of length x width
console.log(`The area of a rectangle with a ${length} cm length and a ${width} cm width is: ${area} cm²`);// Print result to the console: print string of text including the three variables using interpolation
*/

// Exercise 4: Documenting Functionalities using comments
let length = (
  prompt("Let's make a rectangle! Please input the length.")
); // PREV: Declare variable "length", let user pick value through prompt
// Let user pick value "length"
let width = (
  prompt("Now, please input the width!")
); // PREV: Declare variable "width", let user pick value through prompt
// Let user pick value "width"
let area = length * width; // Declare variable "area", assign value of product of length x width
console.log(`The area of a rectangle with a ${length} cm length and a ${width} cm width is: ${area} cm²`);
// PREV: Print result to the console: print string of text including the three variables using interpolation
// Print result to the console