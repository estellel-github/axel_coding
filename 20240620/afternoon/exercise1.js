// Task 1: Simple Insertion Sort (Ascending Order)
// Objective: Write a function to sort an array of integers in ascending order using the
// insertion sort algorithm.
// Instructions:
// ● Function Signature: function insertionSortAscending(arr)
// ● Parameters:
// ○ arr - An array of integers.
// ● Return: The array sorted in ascending order.
// Example: For an input array [12, 11, 13, 5, 6]:
// ● insertionSortAscending([12, 11, 13, 5, 6]) should return [5, 6, 11,
// 12, 13].

function insertionSortAscending(arr) {
  // Step 1: Iterate through the array
  for (let i = 1; i < arr.length; i++) {
    // Step 2: Store key element
    let key = arr[i];
    // Step 3: Store previous index
    let indexLeft = i - 1;
    // Step 4:
    // In sorted part of the array, shift elements to the right, if they are bigger than the key.
    while (indexLeft >= 0 && arr[indexLeft] > key) {
      // shift element to the right
      arr[indexLeft + 1] = arr[indexLeft];
      indexLeft--;
    }
    // while-loop done --> arr[indexLeft] key
    // Step 5: Insert key element in sorted part of array
    arr[indexLeft + 1] = key;
  }
  return arr;
}

console.log(insertionSortAscending([12,45,32,67,82,12,-5,9,0]));