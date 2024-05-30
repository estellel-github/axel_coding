const correctNumber = Math.floor(Math.random() * 10) + 1;
const buttonElement = document.getElementById('submit-button');
const inputElement = document.getElementById('user-input');

buttonElement.addEventListener('click', function () {
    while (true) {
        // Get the user input and parse it as an integer
        const inputValue = parseInt(inputElement.value);
        // Check if the input is a valid number
        if (!isNaN(inputValue)) {
            // Check if the guessed number is correct
            if (inputValue === correctNumber) {
                alert("You guessed correctly!");
                break; // Exit the loop if the number is correct
            }
            else if (inputValue < correctNumber) {
                alert("Number is too low.");
                break; // Exit the loop if the number is too low
            } else if (inputValue > correctNumber) {
                alert("Number is too high.");
                break; // Exit the loop if the number is too high
            }
        } else {
            alert("Please enter a valid number.");
        }
        // Allow the user to enter a new value after an incorrect guess or invalid input
        break;
    }
});