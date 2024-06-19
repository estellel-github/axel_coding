// Task 3: Bubble Sort with Iteration Count
// 1. Objective: Write a function to sort an array of integers in ascending order using
// the bubble sort algorithm and return the number of iterations (passes through
// the array) required to sort the array.
// ○ Ascending Order: Smallest to Largest
// 2. Function Signature: function bubbleSortWithCount(arr)
// 3. Parameters: arr - An array of integers.
// 4. Return: An object with two properties: sortedArray (the sorted array) and
// iterations (the number of iterations).
// 5. Example: For an input array [5, 3, 8, 4, 2], bubbleSortWithCount([5, 3,
// 8, 4, 2]) should return { sortedArray: [2, 3, 4, 5, 8], iterations:
// 5 }.
// Instructions:
// 6. Discuss the additional requirement of counting iterations.
// 7. Implement the algorithm, ensuring to count and track the number of passes
// through the array.
// 8. Test your function with different arrays to ensure it works correctly.
// 9. Rotate roles after 15 minutes.

function bubbleSortWithCount(arr) {
  let swap;
  let iterations = 0;
  let sortedArray = arr.slice(); // Create a copy of the array to avoid modifying the original

  do {
    swap = false; // Reset swap to false at the beginning of each iteration
    for (let i = 0; i < sortedArray.length - 1; i++) {
      if (sortedArray[i] > sortedArray[i + 1]) {
        [sortedArray[i], sortedArray[i + 1]] = [sortedArray[i + 1], sortedArray[i]];
        swap = true;
      }
    }
    iterations++;
  } while (swap);

  console.log(`Total iterations: ${iterations}`);
  return sortedArray;
}

console.log(bubbleSortWithCount([5, 3, 8, 4, 2]));