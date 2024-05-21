/*
Task 1: Temperature Classifier:
● Write a JavaScript program that prompts the user to enter the current
temperature in Celsius.
● Use a conditional statement to classify the temperature into different
categories:
● If the temperature is below 0 degrees Celsius, display "It's freezing
outside!".
● If the temperature is between 0 and 15 degrees Celsius, display "It's
cold outside.".
● If the temperature is between 16 and 25 degrees Celsius, display "It's
pleasant outside.".
● If the temperature is above 25 degrees Celsius, display "It's hot
outside.".

● Done? Also write down the ‘smart’ way of doing this, as shown in the slides
with ‘isLoggedIn’ on slide 19.
*/

/*
// IF ELSE
let celsiusTemp = (prompt("Please enter the temperature in Celsius."));
if (celsiusTemp < 0) {
  alert("It's freezing outside!");
}
else if (celsiusTemp <= 15) {
  alert("It's cold outside.");
}
else if (celsiusTemp <= 25) {
  alert("It's pleasant outside");
}
else (celsiusTemp > 25) {
  alert("It's hot outside.");
}
*/

// SMARTER
let celsiusTemp = (prompt("Please enter the temperature in degrees Celsius."));
let tempStatus =
  celsiusTemp < 0
  ? "It's freezing outside!"
  : celsiusTemp <= 15
  ? "It's cold outside."
  : celsiusTemp <= 25
  ? "It's pleasant outside."
  : "It's hot outside.";
alert(tempStatus)
