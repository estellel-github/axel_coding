function swapInAscending(arr) {
  // Ensure the array has exactly two elements
  if (arr.length !== 2) {
    console.log("Error: Array must have exactly two elements");
    return null; // Return null to indicate an error
  }

  // Check if the first element is greater than the second element
  if (arr[0] > arr[1]) {
    // Swap the elements using a temporary variable
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }

  // Return the array with elements in ascending order
  return arr;
}

function swapInDescending(arr) {
  // Ensure the array has exactly two elements
  if (arr.length !== 2) {
    console.log("Error: Array must have exactly two elements");
    return null; // Return null to indicate an error
  }

  // Check if the first element is less than the second element
  if (arr[0] < arr[1]) {
    // Swap the elements using a temporary variable
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }

  // Return the array with elements in descending order
  return arr;
}

console.log(swapInAscending([45, 23]));
console.log(swapInAscending([23, 45]));
console.log(swapInDescending([45, 23]));
console.log(swapInDescending([23, 45]));
