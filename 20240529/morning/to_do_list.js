const taskInput = document.getElementById('taskInput');
const taskAddButton = document.getElementById('taskAddButton');
const taskList = document.getElementById('taskList');

function addTask(taskText) {
  const taskItem = document.createElement('div');
  taskItem.className = 'taskItem';

  const taskTextElement = document.createElement('div');
  taskTextElement.innerText = taskText;

  const deleteButton = document.createElement('button');
deleteButton.innerText = 'Complete';
deleteButton.addEventListener('click', function () {
  taskItem.remove();
});
}

taskItem.appendChild(taskTextElement);
taskItem.appendChild(deleteButton);
taskList.appendChild(taskItem);

taskAddButton.addEventListener('click', function () {
  if (taskInput.value !== "") {
      addTask(taskInput.value);
  }
});
