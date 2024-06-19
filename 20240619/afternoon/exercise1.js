// Task 1: Simple Selection Sort (Ascending Order)
// Objective: Write a function to sort an array of integers in ascending order using the
// selection sort algorithm.
// Instructions:
// 1. Function Signature: function selectionSortAscending(arr)
// 2. Parameters:
// ○ arr - An array of integers.
// 3. Return:
// ○ The array sorted in ascending order.
// Example:
// For an input array [64, 25, 12, 22, 11]:
// ● selectionSortAscending([64, 25, 12, 22, 11]) should return [11, 12,
// 22, 25, 64].

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function selectionSortAscending(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      swap(arr, i, minIdx);
    }
  }
  return arr;
}

console.log(selectionSortAscending([64, 25, 12, 22, 11]));


// Task 3: Selection Sort with Iteration Count
// Objective: Write a function to sort an array of integers in ascending order using the
// selection sort algorithm and return the number of iterations (passes through the
// array) required to sort the array.
// Instructions:
// 1. Function Signature: function selectionSortWithCount(arr)
// 2. Parameters:
// ○ arr - An array of integers.
// 3. Return:
// ○ An object with two properties: sortedArray (the sorted array) and
// iterations (the number of iterations).

// Example:
// For an input array [64, 25, 12, 22, 11]:
// ● selectionSortWithCount([64, 25, 12, 22, 11]) should return {
// sortedArray: [11, 12, 22, 25, 64], iterations: 4 }.

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function selectionSortAscending(arr) {
  let len = arr.length;
  let iterations = 0;
  for (let i = 0; i < len - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      swap(arr, i, minIdx);
    }
    iterations++;
  }
  return {array: arr, iterations: iterations};
}

console.log(selectionSortAscending([64, 25, 12, 22, 11]));