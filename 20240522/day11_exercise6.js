// Bonus Task: Task 6 - Finding Maximum
// Number in an Array:
// ● Write a JavaScript function named findMax that takes an array of
// numbers as a parameter.
// ● Inside the function, use a loop to iterate through the array
// elements and find the maximum number.
// ● Return the maximum number found in the array.
// ● Call the findMax function with a sample array and print the result
// to the console.

function findMax(array) {
  let biggerNum = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > biggerNum) {
      biggerNum = array[i];
    }
  }
  
  return biggerNum;
}

const myNumbers = [1, 45, 75, 3, 2.3]

console.log(`${findMax(myNumbers)}`)
