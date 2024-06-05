/* Task 6: Higher-order Function for Mapping:
● Write a JavaScript function named double that takes an
array of numbers as a parameter (or multiple numbers using
rest parameter).
● Inside the function, use the map higher-order function to
double each number in the array.
● Return the new array of doubled numbers.
● Call the double function with a sample array (or numbers)
and print the result to the console. */

const double = (numbers) => {
  return numbers.map(number => number * 2);
};

const myArray = [4, 8, 15, 16, 23, 42];

console.log(double(myArray));