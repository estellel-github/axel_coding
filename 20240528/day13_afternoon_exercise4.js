/* 4. Exercise: Meal Time Decision Maker:
● Description: Create a function mealDecision() that takes a
parameter mealTime (string).
● Recommend a meal based on the time of day: breakfast in the
morning, lunch in the afternoon, and dinner in the evening.
● Implement this function twice:
○ Once using if-else statements.
○ Once using nested ternary operators.
● Which one do you prefer? */

// IF ELSE

function mealDecision(mealTime) {
  if (mealTime > 5 && mealTime < 10) {
    message = "Time for breakfast!";
  } else if (mealTime > 12 && mealTime < 14) {
    message = "Time for lunch!";
  } else if (mealTime > 18 && mealTime < 22) {
    message = "Time for dinner!";
  } else {
    message = `It's ${mealTime}:00! Not really an appropriate time to have a full meal yet. Maybe have a snack instead!`;
  }
  return console.log(`${message}`);
}

mealDecision(2);
mealDecision(9);
mealDecision(13);
mealDecision(17);
mealDecision(20);

// NESTED TERNARY

function mealDecision2(...mealTimes) {
  for (const mealTime of mealTimes) {
    let message =
      mealTime > 5 && mealTime < 10
        ? "Time for breakfast!"
        : mealTime > 12 && mealTime < 14
        ? "Time for lunch!"
        : mealTime > 18 && mealTime < 22
        ? "Time for dinner!"
        : `It's ${mealTime}:00! Not really an appropriate time to have a full meal yet. Maybe have a snack instead!`;
    console.log(message);
  }
}

mealDecision2(2);
mealDecision2(9);
mealDecision2(13);
mealDecision2(17);
mealDecision2(20);
