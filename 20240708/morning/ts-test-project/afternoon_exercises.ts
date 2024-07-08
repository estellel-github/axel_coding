// Task 1: Show the Differences with Quick Examples
// Task: Explain the differences between JavaScript and TypeScript using quick
// examples. See the example below of how you would declare a variable and define a
// function in JS. Translate this code to TS and explain in 1-2 sentences what the main
// difference is between JS and TS.
// JavaScript Example:
// // Declare a variable
// let message = "Hello, world!";

// // Define a function
// function greet(name) {
// return `Hello, ${name}!`;
// }

let message:string = "Hello, world!";

function greet(userName: string): string {
  return `Hello, ${userName}!`;
}

let myName: string = "Estelle";

console.log(greet(myName));

// Task 2: Translate a Simple Function
// Task: Translate the following JavaScript function into TypeScript.
// JavaScript Function:

// function add(a, b) {
// return a + b;
// }

function add(a: number, b: number): number {
  return a + b;
  }

console.log(add(2,3));

// Task 3: Create the Interface Student
// A.: Create an interface Student in TypeScript with the following properties: id
// (number), name (string), age(number), and email (string). Explanation: Define a
// structure for the Student object using an interface.
// B. Create a GraduateStudent interface that extends Student and adds a property for
// graduationYear (number). Hint: look at slide 19. 🙂
// C. Create an instance of a GraduateStudent and log it to the console. Hint: look at
// slide 19.

interface Student {
  id: string;
  name: string;
  age: number;
  email: string;
  graduationYear?: number;
}

interface GraduateStudent extends Student {
  graduationYear: number;
}

let student1: Student = {
  id: "001",
  name: "Gloria",
  age: 83,
  email: "gloria@university.com",
}

let student2: Student = {
  id: "002",
  name: "Octavia",
  age: 87,
  email: "octavia@university.com",
}

let student3: GraduateStudent = {
  id: "003",
  name: "Selina",
  age: 65,
  email: "selina@university.com",
  graduationYear: 2023,
}


