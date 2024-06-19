const originalArray = [64, 34, 25, 12, 22, 11, 90];
const originalArrayElement = document.querySelector("#original-array");
const sortedArrayElement = document.querySelector("#sorted-array");
const iterationsElement = document.querySelector("#iterations");


originalArrayElement.textContent = originalArray.join(", ");

function selectionSort(array) {
  let iterations = 0;
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
      iterations++;
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return {sortedArray: array, iterations: iterations};
}

function sort() {
  const {sortedArray, iterations} = selectionSort(originalArray.slice());
  sortedArrayElement.textContent = sortedArray.join(", ");
  iterationsElement.textContent = iterations;
}

