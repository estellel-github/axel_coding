// let person = prompt("Hi there! What's your name?");
// alert("Lovely to meet you, " + person + "!");

// Testing VAR
// Variables declared with var are function-scoped or globally-scoped.
// They are hoisted to the top of their scope, which means they can be accessed before they are declared (but their initial value will be undefined).
// Redeclaring a variable with var in the same scope is allowed and overwrites the previous value.
// Variables declared with var inside a block (e.g., an if statement) are accessible outside the block.

console.log(x); // Output: undefined
var x = 10;
console.log(x); // Output: 10

var y = 20;
var y = 30;
console.log(y); // Output: 30

if (true) {
  var z = 40;
}
console.log(z); // Output: 40

// TESTING LET
// Variables declared with let are block-scoped.
// They are not hoisted, and accessing them before declaration results in a ReferenceError.
// Re-declaring a variable with let in the same scope is not allowed and throws an error.
// Variables declared with let inside a block are only accessible within that block.

// console.log(a); // Error: Cannot access 'a' before initialization
let a = 10;
console.log(a); // Output: 10

let b = 20;
// let b = 30; // Error: Identifier 'b' has already been declared

if (true) {
  let c = 40;
}
// console.log(c); // Error: c is not defined

// TESTING CONST
// Variables declared with const are block-scoped, similar to let.
// They must be initialized at the time of declaration, and accessing them before declaration results in a ReferenceError.
// Once a value is assigned to a const variable, it cannot be reassigned. Attempting to reassign a const variable throws an error.
// However, if a const variable holds an object or an array, the properties or elements of the object or array can be modified.

// console.log(d); // Error: Cannot access 'd' before initialization
const d = 10;
console.log(d); // Output: 10

// d = 20; // Error: Assignment to constant variable

const obj = { x: 1 };
obj.x = 2;
console.log(obj.x); // Output: 2

// obj = { y: 3 }; // Error: Assignment to constant variable

// EXPLORING BASIC ARITHMETIC

// Addition
let sum = 1 + 1;
console.log(sum);

// Subtraction
let difference = 10 - 5;
console.log(difference);

// Multiplication
let multiplication = 4 * 12;
console.log(multiplication);

// Modulus (Remainder)
let remainder = 17 % 5;
console.log(remainder);

// Increment
let count = 0;
count++;
console.log(count);

// Decrement
let num = 5;
count--;
console.log(num);

// Compound assignments
let num2 = 5;
num2 += 3;
console.log(num2);

num2 -= 2;
console.log(num2);

num2 *= 4;
console.log(num2);

num2 /= 3;
console.log(num2);

num %= 5;
console.log(num2);

let cohortArray = [];
cohortArray[0] = "Bernadetta";
cohortArray[1] = "Bojana";
cohortArray[2] = "Francieli";
cohortArray[3] = "Mariem";
cohortArray[4] = "Regina";
console.log(cohortArray);
console.log(cohortArray[2]);

// RECTANGLE
let length = Number(prompt("Let's make a rectangle! Please input the length."));
let width = Number(prompt("Now, please input the width!"));
let area = length * width;
alert("Good job! The area of our lovely rectangle is: " + area);
