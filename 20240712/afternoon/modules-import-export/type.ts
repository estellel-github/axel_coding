export enum TaskStatus {
  "To do", //0
  "In progress", //1
  "Completed", //2
}

export type Task = {
  id: number,
  name: string,
  status: TaskStatus,
}