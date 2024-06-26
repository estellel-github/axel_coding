// Define variables
const buttonElement = document.querySelector("#checkCountsButton");
const paragraphInput = document.querySelector("#paragraphInput");
const resultBox = document.getElementById('resultBox');

// Set up event listener
buttonElement.addEventListener('click', function () {
  let paragraph = paragraphInput.value;
  // Trim leading or trailing spaces, split into array with Regex separator (any number of whitespace char incl line breaks), get array length
  let wordCount = paragraph.trim().split(/\s+/).length;
  resultBox.textContent = `Your paragraph contains ${wordCount} words.`;
  })

// Help: Poe / https://stackoverflow.com/questions/18679576/counting-words-in-string