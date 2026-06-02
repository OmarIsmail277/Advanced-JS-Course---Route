// Pure functions are functions that always produce the same output for the same input and have no side effects.
function add(a, b) {
  return a + b;
}

add(2, 3); // 5
add(2, 3); // 5
add(2, 3); // 5
// same input -> same output

// Impure functions are functions that may produce different outputs for the same input or have side effects.
// بتعمل دوشة كتير 😅

let tax = 0.14;

function calcPrice(price) {
  return price + price * tax;
}

// If I changed the value of tax, the output will change for the same price input.
console.log(calcPrice(100)); // 114

tax = 0.2;
console.log(calcPrice(100)); // 120
// same input -> different output

// Solution? pass tax as a parameter to the function to make it pure.

function calcPriceWithTax(price, tax) {
  return price + price * tax;
}

// ------------------------------------------

// What is a side effect? my function changes something outside of its own scope, or depend on something outside of its own scope,
// or make an interaction with the outside world.

// A side effect is any change that a function makes to the outside world or to its own state. This can include modifying a global variable,
// changing the value of an object passed as an argument, or performing I/O operations like logging to the console or writing to a file.

// A side effect is anything a function does besides computing and returning a value.
// In other words, if a function affects something outside of itself, it has a side effect.

function activateUser(user) {
  user.isActive = true;
  return user;
}

const user = {
  isActive: false,
  name: "Ahmed",
};

const res = activateUser(user);
console.log(res); // { isActive: true, name: 'Ahmed' }
console.log(user); // { isActive: true, name: 'Ahmed' }
// The function activateUser has a side effect because it modifies the user object that is passed as an argument.
// This means that the function is not pure, as it changes the state of the user object outside of its own scope,
// and as a result, it can lead to unexpected behavior if the user object is used elsewhere in the code.

// that is one of the most famous bugs in the frontend state management, where a component modifies the state of another component without proper isolation,
// leading to unpredictable behavior and bugs in the application.

// Solution

function activateUserPure(user) {
  return {
    ...user,
    isActive: true,
  };
}

const user = {
  isActive: false,
  name: "Ahmed",
};

const res = activateUserPure(user);
console.log(res); // { isActive: true, name: 'Ahmed' }
console.log(user); // { isActive: false, name: 'Ahmed' }

// SO IN SUMMARY: IS THE SOLUTION TO MAKE ALL FUNCTIONS PURE? NO, NOT NECESSARILY. IT DEPENDS ON THE CONTEXT AND THE REQUIREMENTS OF YOUR APPLICATION.
// Pure functions are easier to test and reason about, but they may not always be practical or efficient in certain situations.
// In some cases, you may need to use impure functions to interact with external systems or manage state, but it's important to be mindful of their side effects
// and try to minimize them as much as possible.
// Any app must have some impure functions to interact with the outside world, such as handling user input, making API calls, or updating the DOM.
// But the idea is to keep the core logic of your application as pure as possible, and isolate the impure functions to specific areas of your codebase,
// such as controllers or services, while keeping the rest of your codebase pure and testable. ✅

// Never ever make a side effect like in activateUser, it may cause a lot of bugs in your app, and it will be hard to track down the source of the bug,
// especially if you have a large codebase with many components interacting with each other.
