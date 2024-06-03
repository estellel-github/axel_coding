/* 3. Exercise: Weather Forecast Decision Maker:
● Description: Write a function forecastDecision() that takes two
parameters: temperature (number) and isSunny (boolean).
● If the temperature is above 25 degrees Celsius and it's sunny,
recommend going to the beach; if it's above 25 degrees but not
sunny, recommend having a picnic; otherwise, recommend
staying indoors.
● Implement this function twice:
○ Once using if-else statements.
○ Once using nested ternary operators.

● Which method do you prefer? */

// If else

function forecastDecision(temperature, isSunny) {
  let activity;
  if (temperature > 25 && isSunny) {
    activity = "going to the beach";
  } else if (temperature > 25 && !isSunny) {
    activity = "having a picnic";
  } else {
    activity = "staying indoors";
  }
  return console.log(`Based on the weather, we recommend ${activity}!`);
}

forecastDecision(28, false);
forecastDecision(5, true);
forecastDecision(3, false);
forecastDecision(28, true);

// Nested if else

function forecastDecision2(temperature, isSunny) {
  let activity;
  if (temperature > 25) {
    if (isSunny) {
      activity = "going to the beach";
    } else {
      activity = "having a picnic";
    }
  } else {
    activity = "staying indoors";
  }
  return console.log(`Based on the weather, we recommend ${activity}!`);
}

forecastDecision2(28, false);
forecastDecision2(5, true);
forecastDecision2(3, false);
forecastDecision2(28, true);

// Nested ternary

function forecastDecision3(temperature, isSunny) {
  let activity =
    temperature > 25
      ? isSunny
        ? "going to the beach (or the lake)"
        : "having a picnic in the park"
      : "staying indoors and drink hot cocoa";
  return console.log(`Based on the weather, we recommend ${activity}!`);
}

forecastDecision3(28, false);
forecastDecision3(5, true);
forecastDecision3(3, false);
forecastDecision3(28, true);
