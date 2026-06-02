// Function constructor

// The Function constructor creates a new Function object. Calling the constructor directly can create functions dynamically,
// but suffers from security and performance issues similar to eval().
eval("function add(a, b) { return a + b; }"); // This will create a function named "add" that takes two parameters and returns their sum.
console.log(add(2, 3)); // Output: 5

const add = new Function("a", "b", "return a + b"); // parameters: "a", "b"; function body: "return a + b"

console.log(add(2, 3)); // Output: 5

// that is 100% equivalent to:
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5

// However, using the Function constructor is generally discouraged due to security risks and performance issues.
// It can execute arbitrary code if the input is not properly sanitized, and it is slower than defining functions using function declarations or expressions.

const userInput = document.getElementById("userInput").value; // Assume this is an input field where users can enter code (take cookies, steal data, etc.)
const dynamicFunction = new Function(userInput);
const userInput = "alert('Hello, World!')";
const dynamicFunction = new Function(userInput);

// that user input is not controlled, it can lead to security vulnerabilities such as code injection.
// In this case, the user input is an alert function that will be executed when dynamicFunction is called.

const maliciousInput = "alert('This is a malicious code!')";
const maliciousFunction = new Function(maliciousInput);
maliciousFunction(); // This will show an alert with "This is a malicious code!"

// This will execute the alert function, which can be a security risk if the user input is not controlled (not validated or sanitized).
dynamicFunction(); // This will show an alert with "Hello, World!"

// Additionally, using the Function constructor can lead to performance issues because it creates a new function object every time it is called,
// which can be inefficient compared to defining functions using function declarations or expressions.

// JS engines cannot optimize functions created with the Function constructor as well as they can optimize functions defined with function declarations or expressions,
// because the function body is treated as a string and needs to be parsed at runtime, which can lead to slower execution compared to functions defined in the usual way.

// In summary, while the Function constructor can be used to create functions dynamically, it should be used with caution due to potential security vulnerabilities
// and performance drawbacks. It is generally recommended to use function declarations or expressions for defining functions in JavaScript.

// So, when can I see it? legacy code, third-party libraries(written in pure JavaScript),
// or when you need to create a function dynamically based on user input (but be very careful with that).
