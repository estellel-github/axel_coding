/* <button id="generateNumber">Generate Random Number</button>
<div id="resultBox"></div> */

const buttonElement = document.querySelector("#generateNumberButton");

buttonElement.addEventListener('click', function () {
  const randomNum = Math.floor(Math.random() * 9999);
  resultBox.textContent = `Your number has been generated and it is: ${randomNum}.\nIf you don't like it, press again!`;
  })