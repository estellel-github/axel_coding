// Function scope
// Task 1: Define a Function Scope:
// ● Write a JavaScript program that declares a global variable
// globalVar outside of any function.
// ● Inside a function named localScope, declare a local variable
// localVar.
// ● Attempt to access both globalVar and localVar outside of the
// function.
// ● Discuss with your partner what happens when attempting to
// access these variables outside of their respective scopes.

let globalVar = 10;
function localScope() {
  let localVar = 20;
}
console.log(globalVar) // Output: 10
console.log(localVar) // ReferenceError: localVar is not defined
