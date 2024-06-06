function toggleMenu() {
  const menu = document.querySelector(".header-right");
  menu.classList.toggle("visible");

  const menuButton = document.getElementById("menu-button-img");
  
  if (menu.classList.contains("visible")) {
    menuButton.src = "images/menu_close.png";
  }
  else {
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

form.addEventListener("submit", (event) => {
  event.preventDefault();

});
