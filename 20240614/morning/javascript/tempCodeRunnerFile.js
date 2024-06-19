const stack = []; // Create an empty array to represent the stack
const stackDisplay = document.getElementById("stack");

function updateDisplay() {
  stackDisplay.textContent = stack.join(", ");
}

function push() {
  const value = prompt("Enter value to push:");
  stack.push(value);
  updateDisplay();
}

function pop() {
  if (stack.length === 0) {
    alert("Stack is empty!");
    return;
  }
  const poppedValue = stack.pop();
  alert("Popped value: " + poppedValue);
  updateDisplay();
}
