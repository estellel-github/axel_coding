// SLIDE 10: REWRITE
// Use Math.max
let numbers = [10, 5, 8, 15, 3];
console.log(Math.max(...numbers))
// Sort and slice
console.log(numbers.sort((a,b) => b-a).slice(0,3))

// SLIDE 11: REWRITE

/* let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = [];
for (let num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}
console.log("Even numbers:", evenNumbers); */

let numbers2 = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers2.filter((number) => number % 2 === 0);

/* for (const number of numbers) {
  number % 2 === 0 ? console.log(number) : console.log() ;
}
 */
console.log(evenNumbers);