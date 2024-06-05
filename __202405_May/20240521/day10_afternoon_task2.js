/*
Task 2: Ticket Price Calculator:
● Write a JavaScript program that prompts the user to enter their age.
● Use a conditional statement to determine the ticket price for a movie
theater based on the age of the user:
● If the age is 12 or younger, the ticket price is $8.
● If the age is between 13 and 64, the ticket price is $12.
● If the age is 65 or older, the ticket price is $10.
● Display the ticket price to the user.
● Done? Also write down the ‘smart’ way of doing this, as shown in the slides
with ‘isLoggedIn’ on slide 19.
*/

/*
let userAge = prompt("Hello! Please enter your age.");
let ticketPrice;

if (userAge <= 12) {
  ticketPrice = 8;
}
else if (userAge <= 64) {
  ticketPrice = 12;
}
else if (userAge > 65) {
  ticketPrice = 10;
}
alert(`You are ${userAge} years old so the ticket price for you is ${ticketPrice} EUR.`)
*/

// Smarter

let userAge = prompt("Hello! Please enter your age.");

let ticketPricePrompt =
  userAge <= 12
    ? (ticketPrice = 8)
    : userAge <= 64
    ? (ticketPrice = 12)
    : (ticketPrice = 10);

alert(
  `You are ${userAge} years old so the ticket price for you is ${ticketPrice} EUR.`
);
