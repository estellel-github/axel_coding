/* <input placeholder="Please enter your paragraph!" id="paragraphInput">
  <button id="checkCountsButton">Get Counts</button>
  <div id="resultBox"></div> */

/* NOT WORKING ON MULTIPLE LINES -- ABANDONING! */

// Define variables
const buttonElement = document.getElementById("checkCountsButton");
const paragraphInput = document.getElementById("paragraphInput");
const resultBox = document.getElementById('resultBox');

// Set up event listener
buttonElement.addEventListener('click', function () {
  let paragraph = paragraphInput.value;
  let paragraphArray = paragraph.split("\s/\r\n|\r|\n/");
  let wordCount = paragraphArray.length;
  console.log(paragraphArray);
  resultBox.innerHTML = `Your paragraph contains ${wordCount} words.`;
  })

// .split
// (can use space tab etc.)