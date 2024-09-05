const largeArray = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 1000)
);
largeArray.sort((a, b) => a - b);

function binarySearchCount(arr, target) {
  let count = 0;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      count++;
      // Expand search to include potential adjacent occurrences
      let left = mid - 1;
      while (left >= low && arr[left] === target) {
        count++;
        left--;
      }
      let right = mid + 1;
      while (right <= high && arr[right] === target) {
        count++;
        right++;
      }
      break; // All occurrences found
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return count;
}

const countOf10 = binarySearchCount(largeArray, 10);
console.log("Number of times 10 appears:", countOf10);