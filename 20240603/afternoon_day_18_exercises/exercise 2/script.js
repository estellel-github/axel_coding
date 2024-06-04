/* <div>Please enter your information below.</div>
<div>Name:</div>
<input id="userNameInput" default="Name">
<div>Email:</div>
<input id="userEmailInput" default="Email">
<button id="submitButton">Submit</button>
<div id="validationMessageDisplay"></div> */

const userNameElement = document.getElementById("name-input");
const userEmailElement = document.getElementById("email-input");
const submitElement = document.getElementById("submit-button");
const validationMessageElement = document.getElementById(
  "validation-message"
);

function validateEmail(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

submitElement.addEventListener("click", function () {
  let userName = userNameElement.value;
  let userEmail = userEmailElement.value;
  let message;
  if (userName !== null && validateEmail(userEmail)) {
    message = `Your information is valid. Thank you!`;
  } else {
    message = `Your information is not valid. Please try again`;
  }
  console.log(message);
  validationMessageElement.textContent = `${message}`;
});

