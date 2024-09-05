// Task 1: Find a Number in a Sorted Array
// Array: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
// Objective: Write a function to find whether a given number is present in the array
// using binary search.
// Instructions:
// 1. Function Signature: function binarySearch(arr, target)
// 2. Parameters:
// ○ arr - A sorted array of integers.
// ○ target - The number you want to find in the array.
// 3. Return:
// ○ true if the number is found in the array.
// ○ false if the number is not found in the array.

// Example:
// ● For binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23), the
// function should return true.
// ● For binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 7), the
// function should return false.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length-1;

  while (left <= right) {
    let middle = Math.floor((left+right)/2);
    let midNumber = arr[middle];
    if (target === midNumber) {
      return true;
    }
    else if (target < midNumber) { 
      right = middle-1;
    }
    else if (target > midNumber) {
      left = middle+1; 
    }
  }
  return false;
}

// If returning index, -1 will mean non-existing index

console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23));
console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 7));

