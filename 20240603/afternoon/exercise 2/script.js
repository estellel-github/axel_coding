/* <div>Please enter your information below.</div>
<div>Name:</div>
<input id="userNameInput" default="Name">
<div>Email:</div>
<input id="userEmailInput" default="Email">
<button id="submitButton">Submit</button>
<div id="validationMessageDisplay"></div> */

const userNameElement = document.getElementById("userNameInput");
const userEmailElement = document.getElementById("userEmailInput");
const submitElement = document.getElementById("submitButton");
const validationMessageElement = document.getElementById("validationMessageDisplay");

function validateEmail(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

submitElement.addEventListener('click', function () {
  let userName = userNameElement.value;
  let userEmail = userEmailElement.value;
  if (userName !== null && validateEmail(userEmail)) {
    console.log(`Your information is valid. Thank you!`)
  }
  else {
  console.log(`Your information is not valid. Please try again.`)
}
}
)

