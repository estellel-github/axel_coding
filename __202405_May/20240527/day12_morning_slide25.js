const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const number of numbersArray) {
let evenOrOdd = (number % 2 === 0) ? "even" : "odd";
console.log(`${number} is ${evenOrOdd}.`)
}

/* for (const number of numbersArray) {
number % 2 === 0 ? console.log(`${number} is even.`) : console.log(`${number} is odd.`);
} */