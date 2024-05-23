// Task 3: Reverse Array Elements:
// ● Write a JavaScript function named reverseArray that takes
// an array of strings as a parameter.
// ● Inside the function, use a loop to reverse the order of
// elements in the array.
// ● Return the reversed array.

// ● Call the reverseArray function with a sample array and print
// the result to the console.

// Declare function, takes array as parameter
function reverseArray(array) {
// Declare empty array with const
  const reversedArray = [];
// Declare index
  let i = array.length - 1;
// Use for loop to iterate over initial array in reverse
  for (j = i; j >= 0; j--) {
// or in one line, with no need for j:
// for (let i = array.length -1; i >= 0; i--) {
// Use push method to append each element at index j to the end of the reversed array
    reversedArray.push(array[j]);
  }
// Return the reversed array
  return reversedArray;
}

// Declare sample array
const sampleArray = ["A", "B", "C", "D", "E", "F", "G"];

// Use console.log to print to the console
// Use backticks to allow for template literals
// Call the function using sampleArray as argument
console.log(reverseArray(sampleArray))