// SLIDE 27 with OR, older, not recommended
let userName;
let defaultUserName = "stranger";
let greetingName = userName || defaultUserName;
console.log(`Hi there, ${greetingName}!`);

// SLIDE 29 with nullish coalescing operator, more modern, recommended
let userName2;
let defaultUserName2 = "stranger";
let greetingName2 = userName ?? defaultUserName2;
console.log(`Hi there, ${greetingName2}!`);

// EQ. = OTHER OPTION, with ternary operator
greetingName = userName ? userName : defaultUserName;
console.log(`Hi there, ${greetingName}!`)

/* The second option using the nullish coalescing operator (??) is generally better than using the logical OR (||) operator.

With ||, defaultUserName would get used even if userName was set to any falsy value like 0, empty string, null, undefined etc.

But with ??, defaultUserName2 would only get used if userName2 is specifically null or undefined. Any other falsy value for userName2 would result in that value instead of the default. */