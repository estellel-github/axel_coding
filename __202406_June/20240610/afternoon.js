// Task 1: Arrays
// Objective: Learn how to create and manipulate single and multidimensional arrays.

// 1. Create a single-dimensional array containing the numbers 1 to 5.

let array = [1, 2, 3, 4, 5];

// 2. Add the number 6 to the end of the single-dimensional array.

array.push(6);

console.log(array);

// 1.b. Create a two-dimensional array (matrix) representing the following data:
// 1 2 3
// 4 5 6
// 7 8 9

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 3. Access and print the element at the second row and third column of the matrix.

console.log(matrix[1][2]);

// Task 2: Stacks
// Objective: Implement a basic stack using an array.
// Instructions:

// 1. Create an empty array to represent the stack.
let stack = [];

// 2. Implement functions to push elements onto the stack and pop elements from the stack.

let pushToStack = function (array, item) {
  array.push(item);
  // return array; // NOT NEEDED!
}

let popFromStack = function (array) {
  if (array.length === 0) {
    return console.log(`Can't pop anything, array is empty!`);
  }
  // const item = array.pop(); // NOT NEEDED
  // return item; // NOT NEEDED
  return array.pop();
}

// 3. Push the elements 10, 20, and 30 onto the stack.
let array1 = pushToStack(stack, 10);
pushToStack(stack, 20);
pushToStack(stack, 30);

console.log(stack);

// 4. Pop an element from the stack and print it.

console.log(popFromStack(stack));

console.log(popFromStack(stack));

console.log(popFromStack(stack));

console.log(popFromStack(stack));

// Task 3: Queues
// Objective: Implement a basic queue using an array.
// Instructions:

// 1. Create an empty array to represent the queue.

let queue = [];

// 2. Implement functions to enqueue (add) elements to the end of the queue and dequeue (remove) elements from the front of the queue.

let enqueueItem = function (array, item) {
  array.unshift(item);
  return array;
}

let dequeueItem = function (array) {
  if (array.length === 0) {
    console.log(`Can't dequeue anything, array is empty!`);
    return null;
  }
  const item = array.shift();
  return item;
}

// 3. Enqueue the elements 'a', 'b', and 'c' to the queue.

enqueueItem(queue, "a");
enqueueItem(queue, "b");
enqueueItem(queue, "c");

console.log(queue);

// 4. Dequeue an element from the queue and print it.

console.log(dequeueItem(queue));

console.log(dequeueItem(queue));

console.log(dequeueItem(queue));

console.log(dequeueItem(queue));

// Task 4: Dictionaries (Objects)
// Objective: Learn how to create and manipulate dictionaries (objects).
// Instructions:

// 1. Create an object to represent a dictionary with keys 'name', 'age', and 'city'.
// 2. Assign appropriate values to these keys.

let person = {
  personName: "Sandeep",
  age: 27,
  city: "Berlin",
}

// 3. Add a new key 'country' with a value to the object.
person.country = "India";

// 4. Print the value of the 'name' key.
console.log(`Name: ${person.personName}`);

// Task 5: Sets
// Objective: Learn how to create and manipulate sets.
// Instructions:

// 1. Create a set and add the numbers 1, 2, 3, 4, and 5 to it.
// 2. Add a duplicate number to the set and observe what happens.

// 3. Remove a number from the set.

// 4. Print all the elements of the set.

let set = new Set([1, 2, 2, 3, 4, 5]);
console.log(set);








