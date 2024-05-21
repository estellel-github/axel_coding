/* Write a JavaScript program that prompts the user to enter their exam score
(out of 100).
● Use a conditional statement to classify the grade based on the score:
● If the score is 90 or above, display "A".
● If the score is between 80 and 89, display "B".
● If the score is between 70 and 79, display "C".

● If the score is between 60 and 69, display "D".
● If the score is below 60, display "F".
● Done? Also write down the ‘smart’ way of doing this, as shown in the
slides with ‘isLoggedIn’ on slide 19.
*/

/*
// IF / ELSE

let userExamScore = prompt("Hi there! Please enter your exam score.");
if (userExamScore >= 90) {
  scoreLetter = "an A";
}
else if (userExamScore >= 80) {
  scoreLetter = "a B";
}
else if (userExamScore >= 70) {
  scoreLetter = "a C";
}
else if (userExamScore >= 60) {
  scoreLetter = "a D";
}
else {
  scoreLetter = "an F";
}
alert(`You got ${scoreLetter}! Well done (or not)!`)

*/

// SMARTER (with ternary operator)

let userExamScore = prompt("Hi there! Please enter your exam score.");

let scoreLetter =
  userExamScore >= 90
  ? "an A"
  : userExamScore >= 80
  ? "a B"
  : userExamScore >= 70
  ? "a C"
  : userExamScore >= 60
  ? "a D"
  : "an F";

alert(`You got ${scoreLetter}! Well done (or not)!`);

