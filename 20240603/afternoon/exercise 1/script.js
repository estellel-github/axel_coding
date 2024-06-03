{/* <button id="incrementButton">Increment</button>
<br>
<div id="updatedCountDisplay"></div> */}

const buttonElement = document.getElementById("incrementButton");
const displayElement = document.getElementById("updatedCountDisplay");

let counter = 0;

buttonElement.addEventListener('click', function () {
  counter += 1;
  displayElement.innerHTML = `Current value: ${counter}`;
}
)

