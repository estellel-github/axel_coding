/* <button id="incrementButton">Increment</button>
<br>
<div id="updatedCountDisplay"></div> */

const buttonElement = document.getElementById("increment-button");
const countDisplayElement = document.getElementById("count-container");

let counter = 0;

buttonElement.addEventListener('click', function () {
  counter += 1;
  countDisplayElement.innerHTML = `Current value: ${counter}`;
  countDisplayElement.classList.remove("hidden");
}
)