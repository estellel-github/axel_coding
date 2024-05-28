/* Task 2: Function with Rest Parameter:
Exercise:
● Write a JavaScript function named sum that takes multiple
parameters and calculates the sum of all provided numbers.
● Use the rest parameter syntax (...) to collect all arguments
into an array and loop through them to calculate the sum.
● Return the sum.
● Call the sum function with a sample list of numbers and print
the result to the console. */


function sum(...numbers) {
  let totalSum = 0;
  for (let number of numbers) {
    totalSum += number;
  }
  return totalSum;
}

const testArray = [1, 4, 98, 23, 54];

// Need to add ... to the array name as well!!!
console.log(sum(testArray))

// AS ARROW FUNCTION ---------------------------------

const sumArrow = (...numbers) => {
  let totalSum = 0;
  for (let number of numbers) {
    totalSum += number;
  }
  return totalSum;
}

console.log(sumArrow(1, 4, 98, 23, 54))