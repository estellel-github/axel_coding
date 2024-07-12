// INDEX.TS

import Todo from "./todos";

const codingCourseTodo = new Todo();

codingCourseTodo.addTask("Assignment regarding arrays");
codingCourseTodo.addTask("Work on projects");
codingCourseTodo.displayTasks();

console.log("Shopping Todos");

const shoppingTodo = new Todo();
shoppingTodo.addTask("Shop for groceries");
shoppingTodo.displayTasks();

shoppingTodo.removeTask("Shop for groceries");

shoppingTodo.displayTasks();