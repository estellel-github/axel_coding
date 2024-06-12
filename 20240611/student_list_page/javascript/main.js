const students = [
  "Bernadetta",
  "Bojana",
  "Daniela",
  "Estelle",
  "Francieli",
  "Mariem",
  "Regina",
  "Shenoa",
  "Tina",
  "Zana",
];

const studentList = document.getElementById("student-list");
const message = document.getElementById("message-box");
const addButton = document.getElementById("add-button");
const deleteButton = document.getElementById("delete-button");

function clearStudentList() {
  studentList.textContent = "";
}

function updateStudentList() {
  clearStudentList();
  students.forEach((student) => {
    const listItem = document.createElement("li");
    listItem.textContent = student;
    studentList.appendChild(listItem);
  });
}

// Display initial list when opening page
updateStudentList();

// Rewrite to have single function for message, color

function displayMessage(text, color) {
  message.removeAttribute("class");
  message.classList.add("msg-box", `${color}`);
  message.textContent = text;
}

function addToArray(array, item) {
  if (array.includes(item)) {
    displayMessage(`${item} could not be added as they are already in the list!`, "red");
  } else if (item === "") {
    displayMessage("Please enter a name to add!", "red");
  } else {
    array.push(item);
    displayMessage(`${item} was successfully added to the list!`, "green");
    updateStudentList();
  }
}

function removeFromArray(array, item) {
  if (!array.includes(item)) {
    displayMessage(`${item} could not be removed as they are not in the list!`, "red");
  }
  let i = 0;
  while (i < array.length) {
    if (item === array[i]) {
      array.splice(i, 1);
      displayMessage(`${item} was successfully removed from the list!`, "green");
    } else {
      i++;
    }
  }
}

addButton.addEventListener("click", () => {
  // Display message box if hidden
  message.classList.remove("hidden");
  // Clear message box
  message.textContent = "";
  // Get name input
  const studentName = document.getElementById("student-name-input").value;
  // Clear name input
  document.getElementById("student-name-input").value = "";

  addToArray(students, studentName);
});

deleteButton.addEventListener("click", () => {
  // Display message box if hidden
  message.classList.remove("hidden");
  // Clear message box
  message.textContent = "";
  // Get name input
  const studentName = document.getElementById("student-name-input").value;
  // Clear name input
  document.getElementById("student-name-input").value = "";

  if (studentName === "") {
    displayMessage("Please enter a name to delete!", "red");
  } else {
    removeFromArray(students, studentName);
    updateStudentList();
  }
});