// Introduction to Tribonacci Sequence
// The Tribonacci sequence is a variation of the Fibonacci sequence where each term is
// the sum of the three preceding ones. The sequence starts with T(0) = 0, T(1) = 1, and
// T(2) = 1, and the nth term is defined as: T(n)=T(n−1)+T(n−2)+T(n−3)T(n) = T(n-1) + T(n-2) +
// T(n-3)T(n)=T(n−1)+T(n−2)+T(n−3)
// Feel free to look at your previous Fibonacci code for inspiration.

// Task 1: Implement Recursive Tribonacci
// Objective: Implement the Tribonacci function recursively and measure its
// performance.
// Steps:
// 1. Create an HTML file for Tribonacci Performance Analysis, with a button to run
// tribonacci and a paragraph for the result
// 2. Write a JavaScript function to calculate the nth Tribonacci number using
// recursion.
// 3. Measure and log the execution time of the recursive function using the
// provided measureExecutionTime function.

const tribonacciRecursive = (n) => {
  // Base cases
  if (n === 0) return 0;
  if (n === 1 || n ===2) return 1;

  // Recursive case
  return (
    tribonacciRecursive(n - 1) + tribonacciRecursive(n - 2) + tribonacciRecursive(n - 3)
  );
};

const numInputEl = document.querySelector("#num-input");
const calculateButtonEl = document.querySelector("#calculate-button");
const tribonacciResultEl = document.querySelector("#tribonacci-result");

const displayTribonacci = () => {
  const input = parseInt(numInputEl.value, 10);

  if (isNaN(input) || input < 0) {
    tribonacciResultEl.textContent = "Please enter a positive integer!";
    return;
  }

  tribonacciResultEl.textContent = `The ${input}th Tribonacci number is ${tribonacciRecursive(
    input
  )}`;
};

calculateButtonEl.addEventListener("click", displayTribonacci);

function analyzeRecursiveTribonacci() {
  let n = 35; // Using 35 to ensure we see the performance difference
  console.log("Recursive Tribonacci:");
  const time = measureExecutionTime(tribonacciRecursive, n);
  console.log(`Execution Time: ${time} ms`);
}

function measureExecutionTime(algorithm, input) {
  const start = performance.now();
  algorithm(input);
  const end = performance.now();
  return end - start;
}

analyzeRecursiveTribonacci();