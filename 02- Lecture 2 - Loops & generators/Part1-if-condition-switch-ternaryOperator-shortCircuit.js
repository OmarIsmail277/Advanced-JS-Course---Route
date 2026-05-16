// if condition

let score = 85;

const age = 19;

if (score >= 95) {
  console.log("excellent");
} else if (score >= 80) {
  if (age >= 18) {
    console.log("need to improve");
  }
  console.log("good");
} else {
  console.log("try harder");
}

// switch case

const day = 2;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;

  default:
    console.log("Invalid day");
}
console.log(dayName);

let num = 1;

switch (num) {
  case 1:
    console.log("number");
    break;

  case "1":
    console.log("string");
    break;

  default:
    console.log("other");
}

// switch cases uses strict equality (===) for comparison, which means it checks both the value and
// the type of the variable. In the above example, the case 1 is a number, while case "1" is a string.
// Therefore, when num is assigned the value 1 (a number), it matches the first case and outputs "number".
// If num were assigned the string "1", it would match the second case and output "string".

// if break is removed from the first case, it will execute the code for both cases 1 and "1" when num is 1,
// resulting in both "number" and "string" being printed.
// This is known as "fall-through" behavior in switch statements.

// ternary operator

let age = 20;
let status = age >= 18 ? "adult" : "minor";

console.log(status);

// The ternary operator is a concise way to write an if-else statement.
// It takes three operands: a condition, a value to return if the condition is true,
// and a value to return if the condition is false. In the example above,
// if age is greater than or equal to 18, status will be assigned the value "adult".
// Otherwise, it will be assigned "minor".

let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade);

// In this example, we have a nested ternary operator to determine the grade based on the score.
// If score is greater than or equal to 90, grade will be "A". If score is between 80 and 89, grade will be "B".
// If score is between 70 and 79, grade will be "C". Otherwise, grade will be "F".

// The ternary operator can be useful for simple conditions,
// but it can become difficult to read and understand
// when nested or used for complex logic. In such cases, it's often better to use traditional
// if-else statements for clarity.

// switch cases are generally more efficient than if-else statements when there are multiple conditions to evaluate,
// especially when the cases are based on discrete values (like integers or strings). This is because switch statements
// can use a jump table for constant-time complexity, while if-else statements may require multiple comparisons,
// leading to linear time complexity in the worst case. However, for a small number of conditions, the performance difference is negligible,
// and readability should be the primary concern when choosing between the two.

// switch cases if for definite cases, where you know the exact values to compare against, while if-else statements are more flexible and can handle a wider
// range of conditions, including ranges and complex expressions. Switch cases are typically used when you have a fixed set of possible values for a variable,
// while if-else statements are better suited for situations where the conditions are more dynamic or involve multiple variables.

// like role-based access control, where you want to execute different code based on the user's role (e.g., admin, editor, viewer),
// a switch case can be more efficient and easier to read than multiple if-else statements. For example:

const userRole = "editor";

switch (userRole) {
  case "admin":
    console.log("Access granted to admin panel");
    break;
  case "editor":
    console.log("Access granted to editor dashboard");
    break;
  case "viewer":
    console.log("Access granted to view content");
    break;

  default:
    console.log("Access denied");
}

// short circuit evaluation

let isLoggedIn = true;
let hasPermission = false;

if (isLoggedIn && hasPermission) {
  console.log("Access granted");
}
// In this example, the condition isLoggedIn && hasPermission will evaluate to false because hasPermission is false.
// However, since the && operator uses short-circuit evaluation, it will not evaluate hasPermission at all if isLoggedIn is false.
// This can improve performance by avoiding unnecessary evaluations and can also prevent errors if hasPermission were to be undefined or cause an error when accessed.

let userName = "" || "Guest";
console.log(userName); // Output: "Guest"
// In this example, the || operator uses short-circuit evaluation. Since the first operand (an empty string) is falsy, it evaluates to false,
// and the second operand ("Guest") is returned as the value of userName. If the first operand were a non-empty string, it would be returned instead.

console.log(Boolean("")); // Output: false
console.log(Boolean("Guest")); // Output: true
// In JavaScript, certain values are considered falsy, meaning they evaluate to false in a boolean context. These include:
// - false
// - 0
// - "" (empty string)
// - null
// - undefined
// - NaN
// All other values are considered truthy, meaning they evaluate to true in a boolean context. This includes non-empty strings, numbers other than 0, objects, arrays,
// and functions.

console.log(Boolean([])); // Output: true
console.log(Boolean({})); // Output: true
// In JavaScript, both empty arrays ([]) and empty objects ({}) are considered truthy values. This means that when evaluated in a boolean context,
// they will evaluate to true. call by reference not by value
// This is because they are objects, and all objects in JavaScript are truthy, regardless of whether they are empty or not.
// That is because they are reference types, and their existence in memory is what makes them truthy, rather than their content.
// They hold a reference(address) to a location in memory, and as long as that reference exists, they are considered truthy.
// {} is an empty object, but it still exists in memory, so it is truthy. Similarly, [] is an empty array, but it also exists in memory, making it truthy as well.
// {} === {} // Output: false
// [] === [] // Output: false
// In JavaScript, when comparing objects (including arrays), the comparison is based on reference, not on the content of the objects.
// This means that even if two objects have the same properties and values, they are considered different if they are different instances in memory.
// Therefore, {} === {} will return false because they are two different object instances, and [] === [] will also return false for the same reason.

// {} === address ... That will be explained in the heap section, call by value, call by reference, and memory management.

// That's why when we want to compare the content of two objects or arrays, we need to use a method that checks for deep equality, such as JSON.stringify() or a library like Lodash's isEqual function. For example:

const obj1 = { name: "Alice" };
const obj2 = { name: "Alice" };

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // Output: true
// In this example, we convert both objects to their JSON string representation and then compare the strings. Since both obj1 and obj2 have the same properties and values, their JSON string representations will be identical, resulting in true.
// However, this method has limitations, such as not handling functions or circular references, so it's important to choose the appropriate method
// for deep equality checks based on the specific use case.

// also when checking if an array is empty, we can use the length property instead of relying on its truthiness:
const myArray = [];
if (myArray.length === 0) {
  console.log("The array is empty");
}
// In this example, we check if the length of myArray is equal to 0 to determine if it is empty. This is a more reliable way to check for an empty array than relying
// on its truthiness, since an empty array is still considered truthy in JavaScript.

// Logical Operators return the value of the last evaluated operand, not just a boolean. means they return truthy or falsy values based on the evaluation of the operands.
// This allows for more flexible and concise code, as you can use logical operators to return values directly without needing to wrap them in an
// if statement or ternary operator.
// This means that they can be used for more than just logical operations; they can also be used for control flow and default values. For example:

let userInput = "";
let defaultValue = "Default Value";
let result = userInput || defaultValue;
console.log(result); // Output: "Default Value"
// In this example, the || operator is used to provide a default value for userInput. Since userInput is an empty string (which is falsy),
// the expression evaluates to defaultValue, which is "Default Value".
// If userInput had a truthy value, it would be returned instead.
// This demonstrates how logical operators can return values directly based on their evaluation.

let res = (true && "") || "Fallback";
console.log(res); // Output: "Fallback"
// In this example, the expression true && "" evaluates to "", which is falsy. Then, the || operator evaluates "" || "Fallback", which returns "Fallback"
// because "" is falsy.
// If the first part of the expression had been truthy, it would have been returned instead.
// This shows how logical operators can be used to control the flow of values based on their truthiness.
// we start from left to right if no parentheses are used, and we evaluate each operand based on the rules of the logical operators
// until we find a truthy value or reach the end of the expression.
// why until we find a truthy value? because of short-circuit evaluation, which means that the evaluation will stop as soon as a truthy value is encountered
// in an || expression, or a falsy value is encountered in an && expression. This allows for more efficient code execution, as it avoids unnecessary evaluations
// once the outcome is determined.

let username = null;
let displayName = (username && username.toLowerCase()) || "Guest";

console.log(displayName); // Output: "Guest"
// if there is a username, then convert it to lowercase and assign it to displayName. However, if username is null (which is falsy),
// the expression will short-circuit and return "Guest" instead.
// This is a common pattern for providing default values when dealing with potentially null or undefined variables, allowing for more concise and readable code.
