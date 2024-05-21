// TEST 11 One pound (lb) is approximately equal to 0.45 kilograms (kg), write a simple function that will take single parameter in kgs, and give output in lbs.

let weightKg = 5;

function converter(inputKg) {
  let result = inputKg * 2.20462;
  return result;
}

console.log(converter(weightKg));