/* <div>Please enter your information below.</div>
<div>Name:</div>
<input id="userNameInput" default="Name">
<div>Email:</div>
<input id="userEmailInput" default="Email">
<button id="submitButton">Submit</button>
<div id="validationMessageDisplay"></div> */

//Define all variables
const userNameElement = document.getElementById("name-input");
const userEmailElement = document.getElementById("email-input");
const submitElement = document.getElementById("submit-button");
const validationMessageElement = document.getElementById("validation-message");

// Returns true or false if email matches regex pattern
function validateEmail(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

submitElement.addEventListener("click", function () {
  let userName = userNameElement.value;
  let userEmail = userEmailElement.value;
  let message;
  // Reset class to prevent accumulation of classes/unexpected scenarios after loop
  validationMessageElement.className = "";
  if (userName !== null && validateEmail(userEmail)) {
    validationMessageElement.textContent = `Your information is valid. Thank you! 👍`;
    validationMessageElement.classList.add(
      "validation-message",
      "validation-message-green"
    );
  } else {
    validationMessageElement.textContent = `Your information is not valid. Please try again ⚠️`;
    validationMessageElement.classList.add(
      "validation-message",
      "validation-message-red"
    );
  }
  console.log(message);
});
