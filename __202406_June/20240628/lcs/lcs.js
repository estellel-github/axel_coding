// Task 1: Continue with the Longest Common Subsequence (LCS)
// Objective: Continue with the LCS exercise from this morning: Create a simple web
// application that takes two input strings from the user.
// A. Display only the length of the Longest Common Subsequence (LCS).
// Explanation:
// ■ HTML: Create a form to input two strings and a button to trigger the LCS
// length calculation.
// ■ JavaScript: Write a function to calculate the length of the LCS using
// dynamic programming and display the result.

// B. Display the actual Longest Common Subsequence (LCS) string.
// Explanation:
// ■ HTML: Add a button to trigger the LCS calculation.
// ■ JavaScript: Write a function to calculate the LCS string using dynamic
// programming and display the result.


const longestCommonSubsequence = (str1, str2) => {
  const m = str1.length;
  const n = str2.length;

  const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if(str1[i-1] === str2[j-1]) {
        dp[i][j] = dp[i-1][j-1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }
  }
  return dp[m][n];
}

function calculateLCS() {
  const str1 = document.querySelector("#str1").value;
  const str2 = document.querySelector("#str2").value;

  const result = longestCommonSubsequence(str1, str2);

  document.querySelector("#result").textContent = "Longest common subsequence:" + result;
}