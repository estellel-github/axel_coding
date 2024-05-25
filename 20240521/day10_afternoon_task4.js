function greet(name = "stranger") {
  return `Hi, ${name}! Good to meet you!`;
}

console.log(`${greet()}`);

let inputName = "Estelle";

console.log(`${greet(inputName)}`);
