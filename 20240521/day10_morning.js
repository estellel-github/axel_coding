// TEST 1: Checking user age, can enter if 18 or over

let userAge1 = 18;
if (userAge1 >= 18) {
  console.log("You are allowed to view this content. Have fun!");
} else {
  console.log("Oops! You must be 18 or older to view this content.");
}

// TEST 2: Checking user age, can drink if 18 or over

let userAge2 = 12;
let legalDrinkingAge = 18;

if (userAge2 < legalDrinkingAge) {
  console.log("You are not old enough to drink alcohol!");
} else {
  console.log("You are old enough to drink alcohol! Cheers!");
}

let userAge3 = 78;
let retirementAge = 75;
if (userAge3 < retirementAge) {
  let yearsLeft = retirementAge - userAge3;
  console.log(`You have ${yearsLeft} year(s) left until retirement.`);
} else {
  console.log("You're old enough to retire! Congrats!");
}

// TEST 3: Difference between == and === in JavaScript

if (7 == "7") {
  console.log(
    "This is true; using == means checking for loose equality (across data types) between the operands. Type coercion is attempted: the string is converted to a number before performing the comparison."
  );
}

if (7 == 7) {
  console.log(
    "This is true; we are checking for loose equality but both operands are anyway of the same type (integer)."
  );
}

if (7 === "7") {
  console.log(
    "/! This will NOT be displayed since the result of the statement is false."
  );
} else {
  console.log(
    "This is false; we are checking for strict equality, but the operands are of different data types (integer vs string) and no type coercion is applied."
  );
}

if (7 === 7) {
  console.log(
    "This is true; we are checking for strict equality, and the operands are of same data type (integer) AND same value of 7, so the result of the comparison is true."
  );
}

// TEST 4: String concatenation in case of addition vs subtraction

if (2 + 2 === 4) {
  console.log(
    "This returns 4 as the two operands have data type integer, so the + sign means arithmetic addition."
  );
}

if ("2" + "2") {
  console.log(
    "This returns ''22'' because the operands are both of string type, so the + sign means string concatenation."
  );
}

if (2 + 2 - 2 === 2) {
  console.log(
    "This returns 2 since all operands are integers so the compiler applies arithmetic addition then subtraction."
  );
}

if ("4" + "2" - "2" === 40) {
  console.log(
    "This returns 40. Associativity for arithmetic operators is left-to-right!"
  );
}

console.log("4" + "2" - "2");

/* TEST 5: Let’s do our first test!
Adult more than 18 years
Young Adult 13 - 18 years
Less than 13 – a kid
0 baby
Less than 0 prints an error
*/

let userAge = 23;

if (userAge >= 18) {
  console.log("You're an adult!");
} else if (userAge < 18 && userAge >= 13) {
  console.log("You're a young adult!");
} else if (userAge < 13 && userAge > 0) {
  console.log("You're a kid!");
} else if (userAge === 0) {
  console.log("You're a baby!");
} else if (userAge < 0) {
  console.log("Error! You can't be younger than 0.");
}

/* TEST 6: 
Let’s try to create a covid test program. Create variable test, assign a true or false to it. Then execute code on false saying “You’re not infected”, and otherwise “Sorry, take a good rest!”
*/

/* First test (with curly braces)
let userCovidPositive1 = true;
if (userCovidPositive1) {
  console.log("Sorry, you're infected! Take a good rest.")
}
else {
  console.log("Yahoo! You're not infected!")
}
*/

/* Another test, w curly braces and inverting with !
let userCovidPositive = true;
if (!userCovidPositive) {
  console.log("Yahoo! You're not infected!")
}
else {
  console.log("Sorry, you're infected! Take a good rest.")
}
*/

// Last version without curly braces

let userCovidPositive2 = false;
if (userCovidPositive2) console.log("Sorry, you're infected.");
else console.log("You're not infected.");

// TEST 7 (Gym = out of shape vs opening time):
let severelyOutOfShape = false;
let gymOpeningTime = 7;
let gymLatestEntryTime = 21;
let currentTime = 3;
if (!(currentTime >= gymOpeningTime && currentTime < gymLatestEntryTime)) {
  console.log("Regardless of your shape, the gym is closed at the moment.");
} else {
  if (severelyOutOfShape === true) {
    console.log(
      "You're severely out of shape and the gym is open. Head there now!"
    );
  } else {
    console.log(
      "You're in great shape today, you can go to the gym some other day!"
    );
  }
}

/* TEST 8
Let’s test our && and || 
Write a program where we have a variable day. If the day is equal to 1,2,3,4,5, print the days names. If for the 6,7 - print it’s weekend!


let currentDay = 3;
let goodWeather = false;
const weekArray = ["Monday","Tuesday","Wednesday","Thursday","Friday"];

if ((currentDay === 6 || currentDay === 7)) {
  if (goodWeather === true) {
    console.log("It's the weekend and the weather is good! Go out and enjoy!")
  }
  else {
    console.log("It's the weekend but the weather is crap! Do some cleaning or read a book!")
  }
}
else {
  if (goodWeather === true) {
    console.log(`It's ${weekArray[currentDay-1]} and the weather is good... Schade, you have to work! But only ${5-currentDay} day(s) until the weekend!`)
  }
  else {
    console.log(`It's ${weekArray[currentDay-1]} and you have to work... but that's all right, because the weather is crap!`)
  }
}
*/

/*
Other version (more verbose):

let currentDay = 6;
let goodWeather = true;
const weekArray = ["Monday","Tuesday","Wednesday","Thursday","Friday"];

if ((currentDay === 6 || currentDay === 7) && goodWeather === true) {
  console.log("It's the weekend and the weather is good! Go out and enjoy!")
}
else if ((currentDay === 6 || currentDay === 7) && goodWeather === false)  {
  console.log("It's the weekend but the weather is crap! Do some cleaning or read a book!")
}
else if ((currentDay === 1 || currentDay === 2 || currentDay === 3 || currentDay === 4 || currentDay === 5) && (goodWeather === true)) {
  console.log(`It's ${weekArray[currentDay-1]} and the weather is good... Schade, you have to work! But only ${5-currentDay} more day(s) until the weekend!`)
}
else if ((currentDay === 1 || currentDay === 2 || currentDay === 3 || currentDay === 4 || currentDay === 5) && (goodWeather === false)) {
  console.log(`It's ${weekArray[currentDay-1]} and you have to work... but that's all right, because the weather is crap!`)
}

*/

// Other version (use arrays and functions)
/*
let currentDay = 6;
let goodWeather = true;
const weekdays = [
  {dayNumber: 1, dayName: "Monday"},
  {dayNumber: 2, dayName: "Tuesday"},
  {dayNumber: 3, dayName: "Wednesday"},
  {dayNumber: 4, dayName: "Thursday"},
  {dayNumber: 5, dayName: "Friday"}
];
const weekend = [
  {dayNumber: 6, dayName: "Monday"},
  {dayNumber: 7, dayName: "Tuesday"}
];

function isWeekDay(day) {
  return weekdays.some(item => item.dayNumber === day);
}
function isWeekend(day) {
  return weekend.some(item => item.dayNumber === day)
}

if (isWeekend(currentDay)) {
  if (goodWeather === true) {
    console.log("It's the weekend and the weather is good! Go out and enjoy!")
  }
  else {
    console.log("It's the weekend but the weather is crap! Do some cleaning or read a book!")
  }
}
else {
  if (goodWeather === true) {
    console.log(`It's ${weekArray[currentDay-1]} and the weather is good... Schade, you have to work! But only ${5-currentDay} day(s) until the weekend!`)
  }
  else {
    console.log(`It's ${weekArray[currentDay-1]} and you have to work... but that's all right, because the weather is crap!`)
  }
}
*/

let currentDay = 3;
const weekArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

if (currentDay === 6 || currentDay === 7) {
  console.log("It's the weekend! Go out and enjoy life!");
} else {
  console.log(
    `It's ${
      weekArray[currentDay - 1]
    } and you have to work... Schade! But only ${
      5 - currentDay
    } more day(s) until the weekend!`
  );
}

// TEST 9 Ternary operator (check even or odd number)

let number = 7;

let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";

console.log(evenOrOdd);

// TEST 10 Switch statement -- Now let’s implement a switch statement for all the months in a year, instead of using a month name, let’s use a number to indicate month

let month = -4;
let monthName;

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "not a month. Use a number between 1 and 12";
}
console.log(`The month you entered is ${monthName}!`);

/*
TEST 11 One pound (lb) is approximately equal to 0.45 kilograms (kg), write a simple function that will take single parameter in kgs, and give output in lbs.

let weightKg = 5;

function converter(inputKg) {
  let outputLb = inputKg * 2.20462;
  return `${weightKg} kg = ${outputLb} lb`;
}

console.log(converter(weightKg));
*/

// TEST 12 Try to modify our kg to lbs script so it can’t take negative values as we can’t really calculate them.

let weightKg = 5;

function converter(inputKg) {
  if (inputKg < 0) {
    return "Cannot calculate with negative value. Please enter a positive weight.";
  }
  let outputLb = inputKg * 2.20462;
  return `${weightKg} kg = ${outputLb} lb`;
}

console.log(converter(weightKg));

// TEST 13
// Try writing a program with functional expressions checking if the number is odd or even.
// Hint: we use % 2 to check the remainder

let numberToCheck = 9;
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "The number is even!";
  }
  return "The number is odd!";
}
console.log(isEvenOrOdd(numberToCheck));
