// Task 1
// Task 1: Simple Bubble Sort (Ascending Order)
// ● Objective: Write a function to sort an array of integers in ascending order using
// the bubble sort algorithm.
// ○ Ascending Order: Smallest to Largest
// ● Function Signature: function bubbleSortAscending(arr)
// ● Parameters: arr - An array of integers.
// ● Return: The array sorted in ascending order.
// ● Example: For an input array [5, 3, 8, 4, 2], bubbleSortAscending([5, 3,
// 8, 4, 2]) should return [2, 3, 4, 5, 8].
// Instructions:
// ● Start by discussing the bubble sort algorithm and its steps.
// ● Implement the algorithm step by step, with the driver typing and the navigator
// guiding.
// ● Test your function with different arrays to ensure it works correctly.
// ● Rotate roles after 15 minutes. (or half-way through)

function bubbleSortAscending(array) {
  let swap;

  do {
    swap = false;
    
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]; // Swap elements
        swap = true;
        console.log(array); // Log the array after each swap (optional)
      }
    }
  } while (swap); // Continue if a swap has occurred in the last pass

  return array;
}

// Test the function
console.log(bubbleSortAscending([5, 3, 8, 4, 2, 9])); // Output: [2, 3, 4, 5, 8, 9]
