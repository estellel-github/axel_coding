const buttonElement = document.querySelector("#calculateSumButton");
const num1Element = document.querySelector("#num1Input");
const num2Element = document.querySelector("#num2Input");
const resultBox = document.getElementById('resultBox');

buttonElement.addEventListener('click', function () {
  if (!isNaN(num1Element.value) && !isNaN(num2Element.value)) {
  const sum = Number(num1Element.value) + Number(num2Element.value);
  resultBox.textContent = `The sum of ${(num1Element.value).toLocaleString()} and ${(num2Element.value).toLocaleString()} is ${(sum).toLocaleString()}.`;
  }
  else {
    resultBox.textContent = `ERROR!\nThe sum of "${(num1Element.value)}" and "${(num2Element.value)}" cannot be calculated as they are not numbers.\nTry again with 2 numbers!`;
  }
  })