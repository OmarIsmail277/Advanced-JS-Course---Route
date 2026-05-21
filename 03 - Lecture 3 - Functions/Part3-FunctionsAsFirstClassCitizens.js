// Functions as First-Class Citizens
// In JavaScript, functions are first-class citizens, which means they can be treated like any other value.
// They can be assigned to variables, passed as arguments to other functions, and returned from functions.

// Example 1: Assigning a function to a variable
const greet = function (name) {
  return `Hello, ${name}!`;
};
console.log(greet("Alice")); // Output: Hello, Alice!

// Example 2: Passing a function as an argument
function sayHello(name) {
  return `Hello, ${name}!`;
}

function greetUser(greetingFunction, name) {
  return greetingFunction(name);
}

console.log(greetUser(sayHello, "Bob")); // Output: Hello, Bob!

// map, filter, and reduce are higher-order functions because they accept other functions
// as arguments to process and transform arrays.
//
// This concept is possible because functions in JavaScript are first-class citizens,
// meaning functions can be stored in variables, passed as arguments, and returned from other functions.
//
// Promises and async/await also rely heavily on this concept,
// enabling powerful asynchronous programming patterns in JavaScript.

// Example 3: Returning a function from another function - used in closures and higher-order functions
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// Example 4: Using functions as callbacks
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" };
    callback(data);
  }, 1000);
}

fetchData(function (data) {
  console.log("Data received:", data);
}); // Output after 1 second: Data received: { id: 1, name: "John Doe" }

// Example 5: Using arrow functions as first-class citizens
const add = (a, b) => a + b;
console.log(add(3, 4)); // Output: 7

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// In summary, functions in JavaScript can be treated as first-class citizens, allowing for greater flexibility
// and enabling powerful programming patterns such as higher-order functions, callbacks, and functional programming techniques.

// also, functions can be stored in data structures like arrays and objects
// Example: Storing functions in an object
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};
console.log(operations.add(5, 3)); // Output: 8
console.log(operations.subtract(5, 3)); // Output: 2
console.log(operations.multiply(5, 3)); // Output: 15
console.log(operations.divide(5, 3)); // Output: 1.6666666666666667

// will discuss it again because it is related to "this" keyword in JavaScript,
// which can be tricky when using functions as first-class citizens, especially in the context of objects and classes.

// Example: Storing functions in an array
const functionArray = [(x) => x * 2, (x) => x * 3, (x) => x * 4];
const arr = [function () {}, function () {}, function () {}];

functionArray.forEach((func, index) => {
  console.log(`Function ${index + 1} applied to 5:`, func(5));
});
// Output:
// Function 1 applied to 5: 10
// Function 2 applied to 5: 15
// Function 3 applied to 5: 20

// This demonstrates the versatility of functions in JavaScript, allowing them to be used in various contexts and
// enabling powerful programming paradigms.
