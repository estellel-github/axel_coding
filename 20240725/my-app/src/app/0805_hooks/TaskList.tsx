import React from "react";
import { Task } from "./interfaces";

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({tasks}) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span>{task.title}</span>
          <span> - </span>
          <span>{task.completed ? "(Completed)" : "Incomplete"}</span>
        </li>
      ))}
    </ul>
  )
}

export default TaskList;