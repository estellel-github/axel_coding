// var x = 1;
// x *= z;
// (1 x 3) = 3;
// y += x;
// 2 + 3;
// y = 5;
// console.log

var x = 1;
var y = 2;
var z = 3;
console.log(y += x *= z);

const myName = "Estelle";
console.log(`My name is ${myName}.`);

let myAge = 19;
console.log("I'm " + myAge + " years-old!");

let hasPet = false;
if (hasPet === true) {
	console.log("I have a pet!");
}
else {
	console.log("I don't have a pet!")
}

console.log(x == 1 && y == 2);
console.log(x == 1 || y == 2);
x = 2;
console.log(x != 1);
let num1 = 5;
let num2 = 10;
console.log(num1>num2);

console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof num1);
console.log(typeof hasPet);

// Let’s do a quick exercise.
// If the length of the rod is 2 meters being var meterRod =  2
// What is the centimeterRod and kiloMeter rod if 1 meter has 100cm and 1 kilometer has 1000 meters? Let’s express this in variables

var meterRod = 2;
var centimeterRod = meterRod * 100;
var kilometerRod = meterRod / 1000;
console.log(`If the length of my rod is ${meterRod} meters long, then it is ${centimeterRod} centimeters long, and ${kilometerRod} kilometers long.`);


