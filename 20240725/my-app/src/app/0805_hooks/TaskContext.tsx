import React, { createContext, useState, ReactNode } from 'react';
import { Task } from './interfaces';

interface TaskContextProps {
  tasks: Task[];
  addTask: (title: string) => void;
  setTasks: (tasks: Task[]) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };