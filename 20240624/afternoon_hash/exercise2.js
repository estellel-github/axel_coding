// Task 2: Simple Hashing Function (Using Multiplicative Hashing)
// Objective: Do this task with your pair programming partner: Write a function to create
// a simple hash of a password by multiplying the character codes of each character and
// adding them up with a fixed multiplier.
// Instructions:
// 1. Function Signature: function simpleMultiplicativeHash(password)
// 2. Parameters:
// ○ password - A string representing the password.
// 3. Return:
// ○ An integer representing the hash of the password.
// Example:
// For an input password "abc":
// ● simpleMultiplicativeHash("abc") should return 9414 (using a multiplier,
// for instance, 31: (97 * 31^2) + (98 * 31^1) + (99 * 31^0)).
// 1. Simple Multiplicative Hashing: This function iterates through each character in
// the password, retrieves its character code using charCodeAt, multiplies it by a
// fixed multiplier raised to the power of the position (in reverse order), and sums
// these values to produce a hash.
// Explanation:
// ➢ Simple Multiplicative Hashing: This function iterates through each character in
// the password, retrieves its character code using charCodeAt, multiplies it by a
// fixed multiplier raised to the power of the position (in reverse order), and sums
// these values to produce a hash.

function simpleMultiplicativeHash(password) {
  let hash = 0;
  for (let i = password.length-1; i >= 0; i--) {
    hash += (password.charCodeAt(i) * (31 ** i));
    // console.log(`--- Value of i (char position in string): ${i}`);
    // console.log(`--- Char code: ${password.charCodeAt(i)}`);
    // console.log(`--- 31^i: ${(31 ** i)}`);
    // console.log(`----- Hash at this step: ${hash}
    //   `);
  }
  return hash;
}

console.log(simpleMultiplicativeHash("abc"));
// console.log(`---------- Final hash: ${simpleMultiplicativeHash("abc")}`);