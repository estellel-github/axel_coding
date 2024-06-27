// Recursive

const factorial = (nn) => {
  if (nn === 0 || nn === 1) {
    return 1;
  }
  if (nn < 0) {
    return "Please enter a positive number!";
  }
  return nn * factorial(nn-1);  
}

// Memoization (add to array)

const factorialMemo = [];

const factorial2 = (nn) => {
  if (nn === 0 || nn === 1) {
    return 1;
  }
  if (nn < 0) {
    return "Please enter a positive number!";
  }
  if (factorialMemo[nn]) {
    return factorialMemo[nn];
  }
  factorialMemo[nn] = nn * factorialMemo[nn-1];
  return nn * factorial(nn-1);  
}

// Tabulation -- CONTINUE




console.log(factorial(3));
console.log(factorial2(3));