interface TaskInfo {
  title: string;
  completed: boolean;
}

class Task {
  title: string;
  completed: boolean;

  constructor(title: string, completed: boolean) {
      this.title = title;
      this.completed = completed;
  }

  markCompleted(): void {
      this.completed = true;
  }

  showDetails(): void {
      console.log(`Task: ${this.title} | Completed: ${this.completed}`);
  }
}

function displayTasks(tasks: Task[], filter: 'all' | 'completed' | 'incomplete'): void {
  const taskList = document.getElementById('task-list') as HTMLUListElement | null;
  if (taskList) {
      taskList.innerHTML = ''; // Clear existing tasks

      tasks.forEach(task => {
          if (filter === 'all' || (filter === 'completed' && task.completed) || (filter === 'incomplete' && !task.completed)) {
              const taskElement = document.createElement('li');
              taskElement.className = 'task';
              taskElement.textContent = `Task: ${task.title} | Completed: ${task.completed ? 'Yes' : 'No'}`;
              if (task.completed) {
                  taskElement.classList.add('completed');
              }
              taskList.appendChild(taskElement);
          }
      });
  }
}

// Example tasks
const tasks: Task[] = [
  new Task('Complete assignment', false),
  new Task('Read book', true),
  new Task('Write report', false)
];

// Display all tasks initially
displayTasks(tasks, 'all');

// Event listeners for filter buttons
document.getElementById('showAllBtn')?.addEventListener('click', () => displayTasks(tasks, 'all'));
document.getElementById('showCompletedBtn')?.addEventListener('click', () => displayTasks(tasks, 'completed'));
document.getElementById('showIncompleteBtn')?.addEventListener('click', () => displayTasks(tasks, 'incomplete'));