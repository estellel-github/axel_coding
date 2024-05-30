// Task 2: Sum of Array Elements:
// ● Write a JavaScript function named sumArray that takes an
// array of numbers as a parameter.
// ● Inside the function, use a loop to calculate the sum of all
// elements in the array.
// ● Return the sum.
// ● Call the sumArray function with a sample array and print the
// result to the console.

// Make function sumArray, with array parameter
function sumArray(array) {
  // Declare arraySum, needs to be declared outside of the loop. Also, set to 0, otherwise NaN
  let arraySum = 0;
  // Use a for loop to iterate over array
  for (i = 0; i < array.length; i++) {
    // Add value of current element to arraySum
    arraySum += array[i];
  }
  // Return arraySum
  return arraySum;
}

// Declare sampleArray
const sampleArray = [1, 4, 76, 983];

// Use console.log to print to the console
// Use backticks to allow for template literals
// Call the sumArray function with sampleArray as argument
console.log(
  `The sum of the numbers ${sampleArray} is ${sumArray(sampleArray)}!`
);
