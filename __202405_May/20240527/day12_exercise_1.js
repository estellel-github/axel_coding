/* Task 1: Function with Default Parameter:
● Write a JavaScript function named greet that takes a
parameter name and a default parameter greeting set to
"Hello".
● Inside the function, concatenate the greeting with the name
and return the message.
● Call the greet function with and without providing the
greeting parameter, and print the result to the console. */


function greet(userName, greeting = "Hello") {
  console.log(greeting + ", " + userName + "!")
}

greet("Estelle");

greet("Estelle", "Aloha");

greet("Margrethe", "Hej");

greet("Mario", "Ciao");

/* const greetArrow = (userName, greeting = "Hello") => console.log(greeting + ", " + userName + "!")

greetArrow("Estelle");

greet("Estelle", "Aloha");

greet("Margrethe", "Hej");

greet("Mario", "Ciao"); */