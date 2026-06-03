// Function Execution Context
// --------------------------
//
// Every time a function is called, JavaScript creates a new
// execution context for that function.
//
// The execution context contains:
//
// - Function parameters
// - Local variables and function declarations
// - The current value of `this`
// - A reference to the outer lexical environment (scope chain)
//   used for variable lookup
// - Information about where execution should continue after
//   the function finishes (the call stack keeps track of this)
//
// Each function call gets its own separate execution context.
//
// Example:
//
// function greet(name) {
//   const message = `Hello ${name}`;
//   console.log(message);
// }
//
// greet("Omar");
//
// JS creates an execution context containing:
// - name = "Omar"
// - message (local variable)
// - this
// - reference to outer scope
//
// When the function finishes, its execution context is removed
// from the call stack.

const globalName = "Global";

function outer() {
  const outerName = "Outer";

  function inner() {
    // inner can access all these variables due to the scope chain:
    // 1. innerName (local scope)
    // 2. outerName (lexical parent scope)
    // 3. globalName (global scope)

    const innerName = "Inner";

    console.log(globalName);
    console.log(outerName);
    console.log(innerName);
  }

  inner();
}

// Lexical Scope:
// ---------------
// A function does NOT look at "where it is called from".
// It looks at "where it is defined in the code".
//
// This is why inner() can access outerName even though it is called inside outer().

outer();

// ----------------------------------------------------------------------------------------------------------------

// Call Stack (Execution Flow)
// ---------------------------
//
// The call stack keeps track of function calls and where to return after each one finishes.
//
// Each function call is pushed onto the stack.
// When it finishes, it is popped off and execution returns to the previous function.

function one() {
  console.log("one start");
  two();
  console.log("one end");
}

function two() {
  console.log("two start");
  three();
  console.log("two end");
}

function three() {
  console.log("three");
}

one();

// JavaScript uses the call stack to remember where to return after each function finishes.
// It does not "store a reference in the function" — it is managed by the engine internally.

/// -------------------------------------------------------------------------------------------

// Lexical scope → decides what variables a function can access (where it is written)
// المكان الي انا كتبت الدالة فيه هو ال lexical scope بتاعي
// Call stack → controls execution flow (what function runs next and where to return)

/* 
// CALL STACK
// ──────────────

──────────────
one

──────────────
two
one

three
two
one

two
one

one

(empty)

🔥 How Chrome DevTools actually looks - In real DevTools (Sources tab), it appears like:

Call Stack
────────────
three (script.js:14)
two (script.js:8)
one (script.js:2)

*/

// Interview tricks

var x = 10;

function test() {
  console.log(x); // undefined

  var x = 20;

  function inner() {
    var x = 15;
  }

  console.log(x); // 20

  inner();
}

test();

// var  → ignores blocks, only sees function
// let  → respects blocks inside function or anywhere

// let is not function-scoped because it is restricted to the nearest
// enclosing block ({ }), not the entire function.
// Only var is function-scoped in JavaScript.

function inner() {
  let x = 15;
}

// Yes, inner is a function — but let is still scoped to:

// the block { } inside that function

// NOT to the function itself.

// Shadowing in JavaScript:
// ------------------------
// Shadowing happens when an inner scope declares a variable with the same name
// as a variable in an outer scope. The inner variable "hides" the outer one
// within that scope.
//
// Example:
// let x = 10;
// function test() {
//   let x = 20; // shadows outer x
//   console.log(x); // 20
// }
//
// -----------------------------------------------------------------------------
// Shadowing with `let` / `const` (safe behavior):
// -----------------------------------------------------------------------------
// - `let` and `const` are block-scoped.
// - Shadowing happens only inside the nearest block { }.
// - This is safe and predictable.
//
// Example:
// let x = 10;
// if (true) {
//   let x = 30; // new separate variable
//   console.log(x); // 30
// }
// console.log(x); // 10
//
// -----------------------------------------------------------------------------
// Shadowing with `var` (dangerous behavior):
// -----------------------------------------------------------------------------
// - `var` is function-scoped, NOT block-scoped.
// - Blocks like if / for / {} do NOT create a new scope for var.
// - This can cause accidental overwriting instead of true shadowing.
//
// Example:
// var x = 10;
// if (true) {
//   var x = 20; // NOT a new variable → overwrites outer x
// }
// console.log(x); // 20 (unexpected side effect)
//
// -----------------------------------------------------------------------------
// Function-level shadowing with var (safe case):
// -----------------------------------------------------------------------------
// var creates a new scope only inside functions.
//
// var x = 10;
// function test() {
//   var x = 20; // separate variable (safe shadowing)
// }
//
// -----------------------------------------------------------------------------
// Key differences:
// -----------------------------------------------------------------------------
// let/const → block-scoped → safe shadowing
// var        → function-scoped → risky shadowing in blocks
//
// -----------------------------------------------------------------------------
// Main takeaway:
// -----------------------------------------------------------------------------
// Shadowing itself is not bad.
// The danger comes from `var`, because it ignores block scope and can
// unintentionally overwrite outer variables.
