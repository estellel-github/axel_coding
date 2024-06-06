function toggleMenu() {
  const menu = document.querySelector(".header-right");
  menu.classList.toggle("visible");

  const menuButton = document.getElementById("menu-button-img");

  if (menu.classList.contains("visible")) {
    menuButton.src = "images/menu_close.png";
  } else {
    menuButton.src = "images/menu_lines.png";
  }
}

/* <form class="contact-form" action="#" method="post">
<div class="form-group">
  <label for="name">Name:</label>
  <input type="text" id="form-name-input" name="name" required>
</div>
<div class="form-group">
  <label for="email">Email:</label>
  <input type="email" id="form-email-input" name="email" required>
</div>
<div class="form-group">
  <label for="subject">Subject:</label>
  <input type="text" id="form-subject-input" name="subject" required>
</div>
<div class="form-group">
  <label for="message">Message:</label>
  <textarea id="message" name="form-message-input" rows="5" required></textarea>
</div>
<button type="form-submit-button">Send Message</button>
</form> */

const form = document.getElementById("contact-form");
const nameField = form.elements["form-name-input"];
const emailField = form.elements["form-email-input"];
const subjectField = form.elements["form-subject-input"];
const messageField = form.elements["form-message-input"];

form.addEventListener("submit", (event) => {
  // Prevent form submission
  event.preventDefault();

  // Clear previous errors
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("subject-error").textContent = "";
  document.getElementById("message-error").textContent = "";

  // Validation flags
  let isValid = true;

  // Validate all fields
  if (nameField.value === "") {
    document.getElementById("name-error").textContent =
      "⚠️ This field is required!";
      isValid = false;
  }
  if (emailField.value === "") {
    document.getElementById("email-error").textContent =
      "⚠️ This field is required!";
      isValid = false;
  }
  if (subjectField.value === "") {
    document.getElementById("subject-error").textContent =
      "⚠️ This field is required!";
      isValid = false;
  }
  if (messageField.value === "") {
    document.getElementById("message-error").textContent =
      "⚠️ This field is required!";
      isValid = false;
  }
  // If form is valid, submit the form
  if (isValid) {
    form.submit();
    document.getElementById("form-success").textContent = "Thank you for your message! We'll get back to you as soon as possible.";
  }

});