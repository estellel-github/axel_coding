/* 5. Task 5: Higher-order Function for Filtering:
● Write a JavaScript function named filterEven that takes an
array of numbers as a parameter.
● Inside the function, use the filter function to filter out even
numbers from the array. (hint: an example of the filter
function is given in Day 12 slides)
● Return the filtered array of even numbers.
● Call the filterEven function with a sample array and print the
result to the console. */

const filterEven = (array) => array.filter((number) => number % 2 === 0);

const myArray = [23, 90, 340, 25, 678, 9846, 3, 7, 11];

console.log(filterEven(myArray));