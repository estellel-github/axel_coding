let temperature = showPrompt();
showTemperMessage(temperature);

function showPrompt() {
  let currentTemperature = prompt("What is the temperature now in °C?");
  return currentTemperature;
}

function showTemperMessage(temp) {
  if (!temp) {
    alert("Should enter a temperature");
    let newTemperature = showPrompt();
    showTemperMessage(newTemperature);
    return;
  }

  // Rest of the code...
  temp < 0
    ? alert(`Freezing`)
    : temp >= 0 && temp <= 15
    ? alert(`Cold`)
    : temp >= 16 && temp <= 25
    ? alert("Pleasant")
    : temp > 25
    ? alert("Hot")
    : alert("You should enter a number!");
}
