import { TaskStatus, Task } from './type';

export const addTask = (name: string, tasks: Task[]) : void => {
  const id = Math.floor(Math.random() * 1000);
  tasks.push(
    {
      name,
      id,
      status: TaskStatus["To do"],
    }
  )
}

// export const removeTask(id: number): void => {
//   tasks = tasks.filter((task) => task[0] !== id);
// }

// export const displayTasks(tasks: Task[]): void => {
//   console.log("Tasks:");
//   tasks.forEach((task) => {
//     console.log(
//       `ID: ${task[0]} - Task: ${task[1]} - Status: ${TaskStatus}`
//     )
//   })
// }