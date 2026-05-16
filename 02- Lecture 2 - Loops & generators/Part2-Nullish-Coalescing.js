// Nullish Coalescing Operator (??)

// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined,
// and otherwise returns its left-hand side operand.

// That is needed when we want to assign a default value to a variable that may be null or undefined,
// but we want to allow other falsy values (like 0, '', NaN, false) to be used as valid values.

// Example:
let userInput = null;
let defaultValue = "Default Value";
let result = userInput ?? defaultValue;
console.log(result); // Output: "Default Value"

let input = "";

let userName = input || "Anonymous";
console.log(userName); // Output: "Anonymous"

let userName2 = input ?? "Anonymous";
console.log(userName2); // Output: "" (empty string is not null or undefined)

let count = 0;
let totalCount = count || 10;
console.log(totalCount); // Output: 10

let count2 = 0;
let totalCount2 = count2 ?? 10;
console.log(totalCount2); // Output: 0

// In the above examples, the nullish coalescing operator (??) allows us to assign default values only when the left-hand side operand is null or undefined,
// while the logical OR operator (||) assigns default values for any falsy value, including 0, '', and false.

let isOnline = false;
let status = isOnline || true;
console.log(status); // Output: true

let isOnline2 = false;
let status2 = isOnline2 ?? true;
console.log(status2); // Output: false (false is not null or undefined)

function createUser(config) {
  let darkMode = config.darkMode || true;
  let retries = config.retries || 3;
  return { darkMode, retries };
}

function createUser2(config) {
  let darkMode = config.darkMode ?? true;
  let retries = config.retries ?? 3;
  return { darkMode, retries };
}

console.log(createUser({ darkMode: false, retries: 0 })); // Output: { darkMode: true, retries: 3 }
console.log(createUser2({ darkMode: false, retries: 0 })); // Output: { darkMode: false, retries: 0 }

// In the createUser function, the logical OR operator (||) assigns default values for any falsy value,
// which means that if config.darkMode is false or config.retries is 0, it will assign the default values of true and 3, respectively.
// In contrast, the createUser2 function uses the nullish coalescing operator (??),
// which only assigns default values when the left-hand side operand is null or undefined,
// allowing false and 0 to be valid values.
