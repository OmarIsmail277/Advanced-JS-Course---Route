// Arrow Function

const add = (a, b) => {
  return a + b;
};

// If the function body has only one statement, we can omit the curly braces and the return keyword
const addShort = (a, b) => a + b;
// If the function has only one parameter, we can omit the parentheses
const square = (x) => x * x;
// If the function has no parameters, we need to use empty parentheses
const greet = () => console.log("Hello!");

console.log(add(2, 3)); // 5
console.log(addShort(2, 3)); // 5
console.log(square(4)); // 16
greet(); // Hello!

// Arrow function are not only different syntax,
// but they also have different behavior when it comes to the this keyword. In a regular function,
// the value of this is determined by how the function is called.
// In an arrow function, the value of this is lexically bound, meaning it takes the value of this from the surrounding code
// where the arrow function is defined.
// This makes arrow functions particularly useful for callbacks and methods that need to access the this value of their parent scope.

// All the array methods that take a callback function, such as map, filter, and reduce,
// work well with arrow functions because they do not have their own this value.
// Instead, they use the this value of the surrounding code, which is often what we want when working with arrays.

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((num) => num * num);
console.log(squares); // [1, 4, 9, 16, 25]
