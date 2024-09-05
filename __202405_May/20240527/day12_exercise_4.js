/* Task 4: Arrow Function with Implicit Return:

Exercise:
● Write an arrow function named cube that takes a number as
a parameter and returns its cube (number raised to the
power of 3) using implicit return syntax. (hint: Look up how
to do exponentiation in JS).
● Call the cube function with a sample number and print the
result to the console. */

const cube = (number) => number ** 3;

let num1 = 234;

console.log(`The cube of ${num1} is ${cube(num1)}.`);