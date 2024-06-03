/* Task 3: Arrow Function for Addition:
● Create a function called add that adds to numbers and
returns the result */



function add99(number) {
  return (number += 99);
}

console.log(add99(1));

// ● Convert the add function from a regular function to an arrow function.

const add99Arrow = (number) => number + 99;


// ● Call the arrow function with sample numbers and print the result to the console.

console.log(add99Arrow(1));
console.log(add99Arrow(11));
console.log(add99Arrow(11111));
console.log(add99Arrow(-199));
console.log(add99Arrow(-1199));

const testArray = [1, 11, 11111, -199, -1199];

const add99ArrowArray = (array) => {
  return array.map(number => {
    return number + 99;
  });
  }

console.log(add99ArrowArray(testArray));


