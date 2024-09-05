let name = "Estelle";
let age = 40;
let color = "blue";

console.log({name, age, color});

const obj = { a: 1, b: 2 };
const { a, b } = obj;
// This creates two variables, a and b,
// which are equivalent to
// const a = obj.a;
// const b = obj.b;

console.log(a);
console.log(b);


const array = [1, 2, 3, 4, 5];
const [ zerothEle, firstEle, secondEle ] = array;
// This creates zerothEle and firstEle, both of which point
// to the elements in the 0th and 1st indices of the array

console.log(secondEle);