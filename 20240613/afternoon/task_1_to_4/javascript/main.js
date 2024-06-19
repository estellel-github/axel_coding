// Exercise 1

const studentGrades = new Map();

studentGrades.set("Roberta", 90);
studentGrades.set("Juanita", 100);
studentGrades.set("Simone", 95);
studentGrades.set("Brianna", 30);
studentGrades.set("Héloïse", 15);

const gradesListElement = document.querySelector("#grades-list");
const gradesListGroup1Element = document.querySelector("#grades-list-group1");
const gradesListGroup2Element = document.querySelector("#grades-list-group2");
const hobbiesListElement = document.querySelector("#hobbies-list");
const namesListElement = document.querySelector("#names-list");

function displayGradesList(gradesList, location) {
  const listSizeP = document.createElement("p");
  listSizeP.textContent = `Size of group: ${gradesList.size} student(s)`;
  location.appendChild(listSizeP);
  gradesList.forEach((grade, studentName) => {
    const p = document.createElement("p");
    p.textContent = `${studentName}: ${grade}`;
    location.appendChild(p);
  });
}

displayGradesList(studentGrades, gradesListElement);

// Exercise 2

const studentGradesArray = Array.from(studentGrades);
const halfArray = Math.ceil(studentGradesArray.length / 2);

const studentGrades1 = new Map(studentGradesArray.slice(0, halfArray));
const studentGrades2 = new Map (studentGradesArray.slice(halfArray));

displayGradesList(studentGrades1, gradesListGroup1Element);

displayGradesList(studentGrades2, gradesListGroup2Element);

// Exercise 3

const hobbiesArray = ["Reading", "Knitting", "Petting the cat", "Drinking tea", "Drinking tea"];

const hobbiesSet = new Set(hobbiesArray);

function displayHobbies() {
  hobbiesListElement.textContent = "The students have the following hobbies: " + [...hobbiesSet].join(`, `);
}

displayHobbies();

// Exercise 4

const namesSet1 = new Set(['Chloe', 'Emma', 'Jade', 'Manon', 'Lea']);

const namesSet2 = new Set(['Lea', 'Aurora', 'Giulia', 'Ginevra', 'Emma']);

const namesSetUnion = new Set([...namesSet1, ...namesSet2]);

function displayCombinedNames() {
  namesListElement.textContent = "Here is the list of combined names: " + [...namesSetUnion].join(`, `);
}

displayCombinedNames();