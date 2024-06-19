/* <button onclick="push()">Push</button>
<button onclick="pop()">Pop</button>
<p>Stack:<span id="stack"></span></p> */

const stack = [];

const stackElement = document.querySelector("#stack");

function displayStack () {
  stackElement.textContent = stack.join(", ");
}

function push () {
  const pushValue = prompt("Please enter a value to push");
  stack.push(pushValue);
  displayStack();
}

function pop () {
  if (stack.length === 0) {
    alert("Cannot pop, stack is empty!");
    return;
  }
  const popValue = stack.pop();
  alert(`Popped value: ${popValue}`);
  displayStack();
}