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
  name: string,
  location: string,
  isProgrammer: boolean,
};

person = {
  name: "Danny",
  location: "UK",
  isProgrammer: true,
}

let person2 : {
  name: any,
  age: any,
  isProgrammer: any,
}

person2 = {
  name: "Tom",
  age: "ten",
  isProgrammer: "yes",
}