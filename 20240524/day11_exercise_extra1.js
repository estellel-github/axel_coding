// Extra Exercise 1: Classroom Grades
// Create a constructor function named Student with properties name and grades.
// Create an object literal named classroom with properties students (an array of student objects) and averageGrades (an empty object).
// Create 3 students named Alice, Bob, and Charlie with the following grades:
// Alice: [85, 90, 78]
// Bob: [92, 88, 79]
// Charlie: [80, 85, 88]
// Write a function named calculateAverageGrades that takes the classroom object as a parameter.
// Inside the function, use nested loops to calculate the average grade for each student and store it in the averageGrades object with the student's name as the key.
// Call the calculateAverageGrades function with the classroom object and print the classroom object to the console, including the averageGrades property.

function student(name, grades) {
  this.name = name;
  this.grades = grades;
}

const alice = new student("Alice", [85, 90, 78]);
const bob = new student("Bob", [92, 88, 79]);
const charlie = new student("Charlie", [80, 85, 88]);

const classroom = {
  students: [],
  averageGrades: {},
};

classroom.students.push(alice, bob, charlie);

console.log(classroom);

function calculateAverageGrades(classroom) {
  for (let i = 0; i < classroom.students.length; i++) {
    const student = classroom.students[i];
    let gradesTotal = 0;
    for (let j = 0; j < student.grades.length; j++) {
      gradesTotal += student.grades[j];
    }
    const average = gradesTotal / student.grades.length;
    classroom.averageGrades[student.name] = average;
  }
}

calculateAverageGrades(classroom);

console.log(classroom);
