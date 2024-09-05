"use client";

import React, { useState, useEffect, useContext } from 'react';
import TaskList from './TaskList';
import { TaskProvider, TaskContext } from './TaskContext';

const Page: React.FC = () => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const taskContext = useContext(TaskContext);

  useEffect(() => {
    if (taskContext) {
      // Simulate an API call
      setTimeout(() => {
        const fetchedTasks = [
          { id: 1, title: 'Learn React', completed: false },
          { id: 2, title: 'Learn TypeScript', completed: false },
          { id: 3, title: 'Build a Project', completed: false }
        ];
        // Directly set the state with the fetched tasks
        taskContext.setTasks(fetchedTasks);
      }, 2000); // 2 seconds delay
    }
  }, [taskContext]);

  const handleAddTask = () => {
    if (taskContext) {
      taskContext.addTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };

  return (
    <div>
      <h1>Task List</h1>
      {taskContext && <TaskList tasks={taskContext.tasks} />}
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="New Task Title"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

const WrappedPage: React.FC = () => (
  <TaskProvider>
    <Page />
  </TaskProvider>
);

export default WrappedPage;