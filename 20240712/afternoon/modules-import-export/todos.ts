// TODOS.TS

import { TaskStatus, Task } from './type';

class Todo {
  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  addTask = (name: string): void => {
    const id = Math.floor(Math.random() * 1000);
    this.tasks.push(
      {
        name,
        id,
        status: TaskStatus["To do"],
      }
    )
  }

  displayTasks = (): void => {
    console.log("Tasks:");
    this.tasks.forEach((task) => {
      const { id, name, status } = task;
      console.log(
        `ID: ${id} - Task: ${name} - Status: ${TaskStatus[status]}`
      );
    })
  }

  removeTask = (name: string): void => {
    this.tasks = this.tasks.filter((task) => task.name !== name);
  }

}

export default Todo;
