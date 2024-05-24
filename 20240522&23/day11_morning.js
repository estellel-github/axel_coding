// Loop with increment by 2
for (let i = 1; i < 6; i+=2) {
  console.log(i);
} // Outputs: 1 3 5

// Define array
let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Print array to console
console.log(week)

// Loop, display weekend days in order
for (let d = 5; d < week.length; d++) {
  console.log(week[d])
} // Outputs: Saturday Sunday

// Reverse loop, display weekend days in inverted order
for (let d = week.length-1; d > week.length-3; d--) {
  console.log(week[d]);
} // Outputs: Sunday Saturday

// Display all days in single line
let daysToDisplay = "";
for (let d = 0; d < week.length; d++) {
  daysToDisplay += week[d] + " ";
}
console.log(daysToDisplay)

// Count working days in reverse
let weekdaysToDisplay = "";
for (let d = 4; d >= 0; d--) {
  weekdaysToDisplay += week[d] + " ";
}
console.log(weekdaysToDisplay)

// Display all days in single line with comma
let daysToDisplayComma = "";
for (let d = 0; d < week.length; d++) {
  if (d < 6) {
    daysToDisplayComma += week[d] + ", ";
  }
  else {
    daysToDisplayComma += week[d];
  }
}
console.log(daysToDisplayComma)

// Mutual followers
let alexFollowers = ['Jack', 'Sammy', 'Ellie', 'Ana'];
let jennyFollowers = ['George', 'Ellie', 'Ana'];
let mutualFollowers = [];
for (let i = 0; i < alexFollowers.length; i++) {
  for (let j = 0; j < jennyFollowers.length; j++) {
    if (alexFollowers[i] === jennyFollowers[j]) {
      mutualFollowers.push(alexFollowers[i]);
    }
  }
};
console.log(mutualFollowers)

// Mutual hobbies (Daniela)
let partnerHobbies = ['reading', 'going to the beach', 'singing', 'cooking', 'playing video games'];
let myHobbies = ['spending time with my dogs', 'surfing', 'going to the beach', 'playing video games'];
let mutualHobbies = [];
for (let i = 0; i < partnerHobbies.length; i++) {
  for (let j = 0; j < myHobbies.length; j++)  {
    if (partnerHobbies[i] === myHobbies[j]) {
      //mutualHobbies.push(myHobbies[j]);
      mutualHobbies.push(partnerHobbies[i]);
    }
  }
}
console.log(mutualHobbies)

// Write a program counting down from 10 (with while)

let count = 10;
while (count >= 1) {
  console.log(`Count: ${count}`);
  count--;
}

// // Do while
// let password;
// do {
// password = prompt("Enter your password:", "");
// if (password.length < 8) {
// alert("Password must be at least 8 characters long.");
// }
// } while (password.length < 8);
// alert("Password accepted.");


// Create a class software engineers, add some dummy data to it, and then push your info there!

// Using a function

// function SoftwareEngineer(name, seniority, language, location) {
//   this.name = name;
//   this.seniority = seniority;
//   this.language = language;
//   this.location = location;
//   this.displayEngineer = function () {
//     console.log(`This software engineer is called ${this.name}. They are at ${seniority} level. They work primarily with ${this.language}. They are based in ${this.location}.`)
//   }
// }

// const engineer1 = new SoftwareEngineer("Jane", "senior", "TypeScript", "San Francisco");

// engineer1.displayEngineer();

// Using a class
class SoftwareEngineer {
  constructor(name, seniority, language, location) {
    this.name = name;
    this.seniority = seniority;
    this.language = language;
    this.location = location;
  }

  displayEngineer() {
    console.log(`${this.name} is a ${this.seniority} software engineer. They work primarily with ${this.language}. They are based in ${this.location}.`);
  }
}

const engineer1 = new SoftwareEngineer("Jane", "senior", "TypeScript", "San Francisco");

engineer1.displayEngineer();

const engineers = [];

engineers.push(new SoftwareEngineer("Jane", "senior", "TypeScript", "San Francisco"));
engineers.push(new SoftwareEngineer("Pablo", "junior", "Kotlin", "Madrid"));
engineers.push(new SoftwareEngineer("Amy", "junior", "Swift", "Surrey"));
engineers.push(new SoftwareEngineer("Laila", "senior", "Python", "London"));

console.log(engineers);

// Using for to iterate over the array (longer but more explicit)
// for (let i = 0; i < engineers.length; i++) {
//   const engineer = engineers[i];
//   engineer.displayEngineer();
// }

// Using forEach to iterate over the array (more concise and readable)
engineers.forEach(i => i.displayEngineer());
// i refers to the element, could be anything (e.g. "engineer" to be more explicit)