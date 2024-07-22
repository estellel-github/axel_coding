"use strict";
var _a, _b, _c;
class Task {
    constructor(title, completed) {
        this.title = title;
        this.completed = completed;
    }
    markCompleted() {
        this.completed = true;
    }
    showDetails() {
        console.log(`Task: ${this.title} | Completed: ${this.completed}`);
    }
}
function displayTasks(tasks, filter) {
    const taskList = document.getElementById('task-list');
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
const tasks = [
    new Task('Complete assignment', false),
    new Task('Read book', true),
    new Task('Write report', false)
];
// Display all tasks initially
displayTasks(tasks, 'all');
// Event listeners for filter buttons
(_a = document.getElementById('showAllBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => displayTasks(tasks, 'all'));
(_b = document.getElementById('showCompletedBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => displayTasks(tasks, 'completed'));
(_c = document.getElementById('showIncompleteBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => displayTasks(tasks, 'incomplete'));
