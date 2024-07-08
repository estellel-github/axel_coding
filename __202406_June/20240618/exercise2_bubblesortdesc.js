function bubbleSortDescending(array) {
  let swap;

  do {
    swap = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]; // Swap elements
        swap = true;
        console.log(array); // Log the array after each swap (optional)
      }
    }
  } while (swap); // Continue if a swap has occurred in the last pass

  return array;
}

bubbleSortDescending([5, 3, 8, 4, 2, 9]);