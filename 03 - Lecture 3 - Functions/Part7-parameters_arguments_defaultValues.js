// default values for parameters allow you to specify a default value for a parameter
// if no argument is provided when the function is called.
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet(); // Output: Hello, Guest!
greet("Ahmed"); // Output: Hello, Ahmed

function test(a = b, b = 10) {
  console.log("a:", a);
  console.log("b:", b);
}

// Will that work?
// No, it will throw a ReferenceError because `b` is not defined when `a` is being initialized.
// Default parameters are evaluated from left to right, so `a` cannot reference `b` before `b` has been defined.

test(); // ReferenceError: Cannot access 'b' before initialization

// To fix this, we can rearrange the parameters so that `b` is defined before `a`:
function testFixed(a = 10, b = 10) {
  console.log("a:", a);
  console.log("b:", b);
}
testFixed(); // Output: a: 10, b: 10
testFixed(5); // Output: a: 5, b: 10
testFixed(20, 30); // Output: a: 20, b: 30
testFixed(undefined, 20); // Output: a: 10, b: 20
