const queueListElement = document.querySelector("#queue-list");
const queueInputElement = document.querySelector("#queue-input");
const message = document.querySelector("#message");

const queue = [];

function clearDisplay() {
  queueListElement.textContent = "";
}

function clearMessage() {
  message.textContent = "";
}

function updateDisplay() {
  clearDisplay();
  queue.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    queueListElement.appendChild(listItem);
  });
}

function enqueueItem() {
  const value = queueInputElement.value;
  queue.push(value);
  queueInputElement.value = "";
  updateDisplay();
}

function dequeueItem() {
  clearMessage();
  if (queue.length === 0) {
    message.textContent = "The queue is empty! Nothing to dequeue!";
  }
  const dequeuedValue = queue.shift();
  message.textContent = "Dequeued value: " + dequeuedValue;
  updateDisplay();
}