let age = 17;
let message = (age >=18 ) ? "Adult" : "Minor";
console.log(message)

/* return a === b ? 0 : a <b ? -1 : 1;

// Equivalent to:
if (a === b) {
  return 0;
} else if (a < b) {
return -1;
} else {
  return 1;
} */

let userName = "Test";
let defaultUserName = "Guest";
let message2 = userName || defaultUserName;
console.log("Welcome", message2)