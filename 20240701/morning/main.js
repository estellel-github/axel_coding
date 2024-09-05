

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

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

const largeArray = Array.from({length: 10000}, () => Math.floor(Math.random() * 10000));

const largeArray2 = [...largeArray];
const largeArray3 = [...largeArray];

insertionSortAscending(largeArray);
selectionSortAscending(largeArray2);
mergeSort(largeArray3);