const stackListElement = document.querySelector("#stack-list");
const stackInputElement = document.querySelector("#stack-input");
const message = document.querySelector("#message");
const stack = [];

function updateStack() {
  stackListElement.textContent = "";
  for (let i = stack.length -1; i >= 0; i--) {
    const stackItem = document.createElement("li");
    stackItem.textContent = stack[i];
    stackListElement.appendChild(stackItem);
  }
}

function pushElement() {
  stack.push(`Pancake #${stack.length+1}`)
  message.textContent = "";
  // const pushValue = stackInputElement.value;
  // if (!pushValue) {
  //   message.textContent = `Please enter a value to push.`;
  //   return;
  // }
  // stack.push(pushValue);
  updateStack();
  // stackInputElement.value = "";
}

function popElement() {
  message.textContent = "";
  if (stack.length === 0) {
    message.textContent = `Cannot pop, stack is empty!`;
    return;
  }
  const poppedValue = stack.pop();
  message.textContent = `${poppedValue} was popped out!`;
  updateStack();
}