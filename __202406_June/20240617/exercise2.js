// Task 2: Swap Two Numbers in an Array
// Objective: Write a function to swap two numbers in a two-element array in ascending
// order and then in descending order.
// Instructions:
// 1. Function Signature: function swapInAscending(arr) and function
// swapInDescending(arr)
// 2. Parameters:
// ○ arr - A two-element array of integers.
// 3. Return:
// ○ An array with the two numbers swapped in ascending or descending
// order.

// WITH DESTRUCTURING

function swapInAscending(arr) {
  // Ensure the array has exactly two elements
  if (arr.length !== 2) {
    return console.log("Error: Array must have exactly two elements");
  }
  
  // Check if the first element is greater than the second element
  if (arr[0] > arr[1]) {
    // Swap the elements
    [arr[0], arr[1]] = [arr[1], arr[0]];
    // Return the array with elements in ascending order
  return arr;
  }
  
  
}

function swapInDescending(arr) {
  // Ensure the array has exactly two elements
  if (arr.length !== 2) {
    return console.log("Error: Array must have exactly two elements");
  }
  
  // Check if the first element is less than the second element
  if (arr[0] < arr[1]) {
    // Swap the elements
    [arr[0], arr[1]] = [arr[1], arr[0]];
    // Return the array with elements in descending order
  return arr;
  }
  
  
}

console.log(swapInAscending([99, 23]));

console.log(swapInDescending([23, 99]));

console.log(swapInAscending([99, 23, 43]));
