// Objective: Write a recursive function to calculate the sum of all positive integers from 1
// to n. Implement the solution in three different ways: using Recursion, Memoization,
// and Tabulation.
// Guide and Insight:
// ● Understand the Problem:
// ○ The task is to calculate the sum of all integers from 1 to n.
// ○ Example: For n=5, the sum is 1+2+3+4+5=15.

// A. Sum of Numbers with Recursion

// Explanation:
// 1. Base Case:
// ○ If n is 1, return 1 because the sum of numbers from 1 to 1 is 1.
// 2. Recursive Case:
// ○ Add n to the sum of numbers from 1 to n−1.
// ○ Recursively call the function with n−1 until reaching the base case.
// 3. Return the Result:
// ○ Each recursive call adds the current number n to the sum of all previous
// numbers until the base case is reached.

// Steps to Solve:
// 1. Identify Base Case:
// ○ Define the base case where n is 1.
// 2. Recursive Case:
// ○ Add n to the result of the function call with n−1.
// 3. Test the Function:
// ○ Test the function with different inputs to verify correctness.
// ○ Ensure that the function handles the smallest case (1) and larger
// numbers as well.
// Visual Demonstration:
// 1. Example 1:
// ○ sumOfNumbers(5) breaks down to 5 + sumOfNumbers(4) → 5 + 4 +
// sumOfNumbers(3) → ... → 5 + 4 + 3 + 2 + 1.
// ○ Result is 15.

// 2. Example 2:
// ○ sumOfNumbers(3) breaks down to 3 + sumOfNumbers(2) → 3 + 2 +
// sumOfNumbers(1) → 3 + 2 + 1.
// ○ Result is 6.

// Recursion

const sumNumRecur = (n) => {
  if (n === 1) {
    return 1;
  }
  if (n <= 0) {
    return "Please enter a positive number!";
  }
  return n + sumNumRecur(n - 1);
}

console.log(sumNumRecur(15));

// Memoization

const sumNumMemo = (n, memo = {}) => {
  if (n === 1) return 1;
  if (n <= 0) return "Please enter a positive number!";
  if (memo[n]){
    return memo[n];
  }
  memo[n] = n + sumNumMemo(n-1, memo);
  return memo[n];
};
console.log(sumNumMemo(15));

// Tabulation

const sumNumTab = (n, arr = [0]) => {
  for (let i = 1; i <= n; i++) {
    arr[i] = i + arr[i-1];
  }
  return arr[n];
}
console.log(sumNumTab(15));
