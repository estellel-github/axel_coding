/* <input placeholder="Please enter your paragraph!" id="paragraphInput">
  <button id="checkCountsButton">Get Counts</button>
  <div id="resultBox"></div> */

// Define variables
const buttonElement = document.getElementById("checkCountsButton");
const paragraphInput = document.getElementById("paragraphInput");
const resultBox = document.getElementById('resultBox');

// Set up event listener
buttonElement.addEventListener('click', function () {
  let paragraph = paragraphInput.value;
  let wordCount = paragraph.split(" ");
  resultBox.innerHTML = `Your paragraph contains ${wordCount} words.`;
  })

// .split
// (can use space tab etc.)