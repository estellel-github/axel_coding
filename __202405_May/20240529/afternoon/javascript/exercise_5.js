/* <input placeholder="Please enter your paragraph!" id="paragraphInput">
  <button id="checkCountsButton">Get Counts</button>
  <div id="resultBox"></div> */

// Define variables
const buttonElement = document.querySelector("#checkCountsButton");
const paragraphInput = document.querySelector("#paragraphInput");
const resultBox = document.getElementById('resultBox');

// Set up event listener
buttonElement.addEventListener('click', function () {
  let paragraph = paragraphInput.value;
  let count = 0;
  let check = false; // boolean
  for (let i = 0; i < paragraph.length; i++) {
    // Condition 1: Character is not a space and check is false = NEW WORD STARTS, set check to true
    if (paragraph[i] !== " " && !check) {
      count++;
      check = true;
    }
    // (Condition 3 (implied): Character is not a space and check is true (we are within a word))
    else if (paragraph[i] !== " " && !check) {
      check = true;
    }
    // Condition 2: Check if character is a space = NOT A WORD, set check to false
    else if (paragraph[i] === " ") {
      check = false;
    }
  }
  resultBox.textContent = `Your paragraph contains ${count} words.`;
  })

// Working but not taking line breaks into account (only spaces within line)
// Feedback from Nikki:
// use .split (can use space tab etc. as separators)
// >> see exercise_5_simpler.js