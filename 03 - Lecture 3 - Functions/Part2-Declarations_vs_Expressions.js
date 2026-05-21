// Declarations vs Expressions

// Function Declaration
function text() {
  console.log("This is a function declaration");
}

// Function Expression
// Any function that does not start with the function keyword is a function expression.
// like the !function and the self invoked function
const text2 = function () {
  console.log("This is a function expression with const");
};

// If declared with var

console.log(text2); // undefined
text2(); // ❌ TypeError: text2 is not a function

var text2 = function () {
  console.log("This is a function expression with var");
};

// var is hoisted and initialized with undefined.
// JavaScript knows text2 exists, but at that moment it only contains undefined.
// So calling text2() is like doing:
undefined(); // ❌ TypeError: undefined is not a function

// If declared with let or const
console.log(text3); // ❌ ReferenceError: Cannot access 'text3' before initialization
text3(); // ❌ ReferenceError: Cannot access 'text3' before initialization

let text3 = function () {
  console.log("This is a function expression with let");
};

// let is hoisted too, but it stays inside the TDZ (Temporal Dead Zone) until execution reaches its declaration.
// Before initialization, the variable cannot be accessed at all.
// JavaScript does not yet allow usage of text3.

console.log(typeof text); // function

// before it was object but now it's function because now there is a constructor function in JS that creates a function object
// and assigns it to the variable text. So, text is now a reference to that function object, and its type is "function".
// like the Boolean, Array, ... -> Function

console.log(typeof hello); // ReferenceError: Cannot access 'hello' before initialization

const hello = function () {
  console.log("Hello");
};

console.log(typeof hello1); // undefined

var hello1 = function () {
  console.log("Hello1");
};

// Summary:
// Function declarations and function expressions behave differently during the creation phase
// of the execution context.

// Function Declarations:
// The entire function is hoisted, so it can be accessed and invoked before its declaration.
// Its type is already "function" during execution.

// Function Expressions:
// Only the variable declaration is hoisted, not the function value itself.

// With `var`:
// The variable is initialized with `undefined` during hoisting.
// Therefore, before assignment:
// - typeof variable === "undefined"
// - calling it throws a TypeError because `undefined` is not a function.

// With `let` and `const`:
// The variable is hoisted but remains in the Temporal Dead Zone (TDZ)
// until the declaration line is reached.
// Therefore, accessing it before initialization throws a ReferenceError.

console.log(age); // ❌ ReferenceError

let age = 25;

/* So, That means:
During the creation phase:

- JS creates the age variable in memory.
- But unlike var, it does NOT initialize it with undefined.
- Instead, it stays in a special state called the TDZ (Temporal Dead Zone).

*/

// Then during execution:
let age = 25;

/*
When execution reaches this exact line:

1. The TDZ ends for the age variable.
2. The age variable is now initialized with the value 25.
3. From this point onward, you can access age and it will return 25.

*/
// So:
console.log(age); // ❌ before declaration line
let age = 25;

console.log(age); // ✅ after declaration line

/*
The phrase: "until the declaration line is reached"

means: until JavaScript executes the line where the variable gets initialized and becomes usable.
*/
