"use strict";
let myVariable = "Hello, world!";
let arrNumber = [1, 2, 3];
let arrString = ["Bob", "Mary", "Joe"];
let arrBoolean = [true, false, true];
let arrObject = [
    { name: "Bob" },
    { name: "Jane" },
];
// Union
let arrNumStr = [23, "text"];
// Tuple
let arrTuple = ["Danny", 1, true, { country: "USA", }];
arrTuple[0] = "Joe";
console.log(arrTuple);
// Declare variable with specific object type annotation
let person;
person = {
    name: "Danny",
    location: "UK",
    isProgrammer: true,
};
let otherPerson;
otherPerson = {
    name: "Tom",
    age: "ten",
    // isProgrammer: "yes",
};
let person1 = {
    name: "Gary",
    age: 25,
};
let person2 = {
    name: "Gloria",
    age: 83,
    isProgrammer: false,
};
const employee1 = {
    name: "Julia",
    age: 23,
    joiningDate: "2024-07-08",
};
