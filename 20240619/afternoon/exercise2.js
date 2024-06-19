// Task 2: Simple Selection Sort (Descending Order)
// Objective: Write a function to sort an array of integers in descending order using the
// selection sort algorithm.
// Instructions:
// 1. Function Signature: function selectionSortDescending(arr)
// 2. Parameters:
// ○ arr - An array of integers.
// 3. Return:
// ○ The array sorted in descending order.
// Example:
// For an input array [64, 25, 12, 22, 11]:
// ● selectionSortDescending([64, 25, 12, 22, 11]) should return [64, 25,
// 22, 12, 11].

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function selectionSortDescending(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] >= arr[minIdx]) {
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