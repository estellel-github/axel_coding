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