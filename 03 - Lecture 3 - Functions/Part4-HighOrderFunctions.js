// High-order functions are functions that 1️⃣- take other functions as arguments OR 2️⃣- return functions as their result.
// They are a powerful tool in functional programming and can be used to create more flexible and reusable code.

// Example 1: A high-order function that takes another function as an argument
const numbers = [1, 2, 3, 4, 5];

const double = numbers.map(function (num) {
  return num * 2;
});

console.log(double); // Output: [2, 4, 6, 8, 10]

// Here, the `map` function is a high-order function that takes a callback function as an argument and
// applies it to each element in the `numbers` array, returning a new array with the results.

// Example 2: A high-order function that returns another function
function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// if I logged double and triple, I would see that they are both functions that have been returned by the createMultiplier function.
console.log(double); // Output: [Function (anonymous)]
console.log(triple); // Output: [Function (anonymous)]

// as If saved that all in double, like that:

const double = function (num) {
  return num * multiplier;
};

// But How does multiplier still exist after createMultiplier finishes?

// This is because of a concept called closures.
// A closure is a function that has access to its own scope, the outer function's scope, and the global scope.
// In this case, the inner function (the one returned by createMultiplier) has access to the multiplier variable defined
// in the outer function (createMultiplier), even after createMultiplier has finished executing.
// This allows the inner function to use the multiplier variable when it is called later on.

/*
// 🧠 The answer: Closure

// When you return this function:

function (num) {
  return num * multiplier;
}

JavaScript does NOT just return the function.

It also “remembers” the surrounding variables it needs — in this case:

👉 multiplier

That memory bundle is called a closure.
*/
