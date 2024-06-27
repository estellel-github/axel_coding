// Task 1: Simple Hashing Function (Using Sum of Character Codes)
// Objective: Do this task with your pair-programming partner
// Write a function to create a simple hash of a password by summing the character
// codes of each character in the password.
// Instructions:
// 1. Function Signature: function simpleHash(password)
// 2. Parameters:
// ○ password - A string representing the password.
// 3. Return:
// ○ An integer representing the hash of the password.
// Example:
// For an input password "abc":
// ● simpleHash("abc") should return 294 (since a is 97, b is 98, and c is 99, and 97
// + 98 + 99 = 294).
// Explanation:
// ➢ Simple Hashing (Sum of Character Codes): This function iterates through each
// character in the password, retrieves its character code using charCodeAt, and
// sums these codes to produce a hash.

function simpleHash(password) {
  let hash = 0;
  for (let char of password) {
    hash += char.charCodeAt(0);
  }
  console.log(hash)
}

simpleHash("abc");