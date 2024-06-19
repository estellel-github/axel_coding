// Task 3: Sort a Three-Element Array
// Objective: Write a function to sort a three-element array in ascending order. For now
// we will branch if statements instead of using for loop.
// Instructions:
// 1. Function Signature: function sortThreeElements(arr)
// 2. Parameters:
// ○ arr - A three-element array of integers.
// 3. Return:
// ○ An array with the three elements sorted in ascending order.

// Example:
// For an input array [9, 4, 7]:
// ● sortThreeElements([9, 4, 7]) should return [4, 7, 9].
// Step-by-Step Guidance:
// 1. Compare the elements and swap them if they are in the wrong order.
// 2. Repeat the comparisons until all elements are in ascending order.

function sortThreeElements(arr) {
  if (arr.length !== 3) {
    console.log("The array must have exactly 3 elements!");
    return null;
  }
// Ensure that arr1 > arr0
if (arr[0] > arr[1]) {
  [arr[0], arr[1]] = [arr[1], arr[0]];
}
// Ensure that arr2 > arr1
if (arr[1] > arr[2]) {
  [arr[1], arr[2]] = [arr[2], arr[1]];
}
// Ensure that arr1 > arr0 again
if (arr[0] > arr[1]) {
  [arr[0], arr[1]] = [arr[1], arr[0]];
}
return arr;
}

console.log(sortThreeElements([9, 4, 7]));
console.log(sortThreeElements([15, 14, 13]));
console.log(sortThreeElements([14, 15, 17]));
console.log(sortThreeElements([10, 15, 13]));
