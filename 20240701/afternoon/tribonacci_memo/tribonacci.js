//#region
// const tribonacciRecursive = (n) => {
//   // Base cases
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   if (n === 2) return 1;

//   // Recursive case
//   return (
//     tribonacciRecursive(n - 1) +
//     tribonacciRecursive(n - 2) +
//     tribonacciRecursive(n - 3)
//   );
// };

function analyzeMemoizationTribonacci() {
  let n = 35; // Using 35 to ensure we see the performance difference
  console.log("Memoization Tribonacci:");
  const time = measureExecutionTime(tribonacciMemoization, n);
  console.log(`Execution Time: ${time} ms`);
}

function measureExecutionTime(algorithm, input) {
  const start = performance.now();
  algorithm(input);
  const end = performance.now();
  return end - start;
}

// analyzeRecursiveTribonacci();

//#endregion

// Fibonacci with Memoization
// Concept:
// Memoization involves storing the results of expensive function calls and reusing them when the same inputs occur again

function tribonacciMemoization(n, memo = {}) {
  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  // Check if value is already computed
  if (memo[n]) return memo[n];

  // Recursive case with memoization
  memo[n] = tribonacciMemoization(n - 1, memo) + tribonacciMemoization(n - 2, memo) + tribonacciMemoization(n - 3, memo);
  return memo[n];
}

const numInputEl = document.querySelector("#num-input");
const calculateButtonEl = document.querySelector("#calculate-button");
const tribonacciResultEl = document.querySelector("#tribonacci-result");

const displayTribonacci = () => {
  const input = parseInt(numInputEl.value, 10);

  if (isNaN(input) || input < 0) {
    tribonacciResultEl.textContent = "Please enter a positive integer!";
    return;
  }
  tribonacciResultEl.textContent = `The ${input}th Tribonacci number is ${tribonacciMemoization(input)}`;
}

calculateButtonEl.addEventListener("click", displayTribonacci);

analyzeMemoizationTribonacci();