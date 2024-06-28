// Recursive

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  if (n < 0) {
    return "Please enter a positive number!";
  }
  return n * factorial(n-1);  
}

// Memoization (add to array)

const factorialMemoArray = [];

const factorialMemo = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  if (n < 0) {
    return "Please enter a positive number!";
  }
  if (factorialMemoArray[n]) {
    return factorialMemoArray[n];
  }
  factorialMemoArray[n] = n * factorialMemo(n-1);
  return factorialMemoArray[n];  
}

// Tabulation

const factorialTab = (n) => {
  const factorialTabArray = [1, 1];
  for (let i = 2; i <= n; i++) {
    factorialTabArray[i] = i * factorialTabArray[i-1];
  }
  return factorialTabArray[n];
}

console.log(factorial(3));
console.log(factorialMemo(3));
console.log(factorialTab(3));