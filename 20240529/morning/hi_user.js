const inputElement = document.getElementById('user-input');
const buttonElement = document.getElementById('submit-button');

buttonElement.addEventListener('click', function () {
    // Get the user input
    const inputValue = inputElement.value;
    // Call your function with the user input
    alert(`Hi, ${inputValue}! Nice to meet you!`);
  });