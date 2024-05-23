// Task 4: Student Information:
// ● Create a JavaScript object named student with properties
// name, age, and grade.
// ● Assign sample values to these properties.
// ● Write a function named displayInfo that takes the student
// object as a parameter.
// ● Inside the function, display the student's information (name,
// age, grade) to the console.
// ● Call the displayInfo function with the student object.


// Define class student
class student {
// Create constructor with properties
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
// Create function to display info
displayInfo() {
// Backticks, template literals, use object properties with "this."
  console.log(`This student is named ${this.name}. They're ${this.age} years old. They're in ${this.grade}th grade.`)
}
}

// Create new instance student1
let student1 = new student ("Juanita", "9", "4");

// Use object function to display student1 info. /!\ DO NOT FORGET parentheses at the end /!\
student1.displayInfo();

// Create empty students array
const students = [];

// Push more students to the array

students.push(new student ("Olaf", "10", "5"));
students.push(new student ("Fiorenza", "11", "6"));
students.push(new student ("Roberto", "12", "7"));

students.forEach(student => student.displayInfo());