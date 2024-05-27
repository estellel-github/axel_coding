/* Task 7:


1. Write a JavaScript function named product that takes an array of numbers.
2. Use the reduce() method with an arrow function to calculate the product of all numbers in the array.
3. Return the product.
4. Call the product function with a sample array and print the result to the console. */

let value = 0;

/* const numbers = [4, 8, 15, 16, 23, 42];

for(let i = 0; i < numbers.length; i++) {
  value += numbers[i];
}

console.log(value);

const additionResult = (numbers) => {
  return numbers.reduce((sum, current) => sum + current, 0);
} */

const numbers2 = [4, 8, 15, 16, 23, 42];

/* const result = additionResult(numbers2);
console.log(result); */

const productResult = (numbers) => {
  return numbers.reduce((sum, current) => sum * current, 1);
}

console.log(productResult(numbers2));


