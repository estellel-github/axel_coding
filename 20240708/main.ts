let myVariable: string = "Hello, world!";
let arrNumber: number[] = [1, 2, 3];
let arrString: string[] = ["Bob", "Mary", "Joe"];
let arrBoolean: boolean[] = [true, false, true];

let arrObject: object[] = [
  { name: "Bob" },
  { name: "Jane" },
];

// Union
let arrNumStr: (number | string)[] = [23, "text"];

// Tuple
let arrTuple: [string, number, boolean, object] = ["Danny", 1, true, { country: "USA", }];

arrTuple[0] = "Joe";

console.log(arrTuple);

// Declare variable with specific object type annotation
let person: {
  name: string;
  location: string;
  isProgrammer?: boolean;
};

person = {
  name: "Danny",
  location: "UK",
  isProgrammer: true,
}

let otherPerson : {
  name: any;
  age: any;
  isProgrammer?: any;
}

otherPerson = {
  name: "Tom",
  age: "ten",
  // isProgrammer: "yes",
}

interface Person {
  name: string;
  age: number;
  isProgrammer?: boolean;
}

let person1: Person = {
  name: "Gary",
  age: 25,
}

let person2: Person = {
  name: "Gloria",
  age: 83,
  isProgrammer: false,
}

interface Employee extends Person {
  joiningDate: String;
}

const employee1: Employee = {
  name: "Julia",
  age: 23,
  joiningDate: "2024-07-08",
}