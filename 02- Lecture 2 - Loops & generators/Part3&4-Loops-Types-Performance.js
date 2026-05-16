// Loops Types

let nums = [10, 20, 15, 18, 25];

// For Loop - based on index
for (let i = 0; i < nums.length; i++) {
  console.log("For Loop", nums[i]);
}

// For...of Loop - based on value (element)
for (let element of nums) {
  console.log("For...of Loop", element);
}

// For ... each Loop - based on value (element) - using callback function
// it is a method of array and it takes a function as an argument and it will execute that function for each element of the array
nums.forEach(function (element) {
  console.log("For...each Loop with normal function", element);
});

nums.forEach((element) => {
  console.log("For...each Loop with Arrow Function", element);
});

// While Loop - based on condition
let i = 0;
while (i < nums.length) {
  console.log("While Loop", nums[i]);
  i++;
}

// Correct. When you use forEach, it behaves just like any other function call:
// it creates a new execution context for every single item in the array.

/*
Each time the loop moves to a new element, the following happens:
• Context Creation:  The JavaScript engine creates a new execution context to store the callback's arguments and local variables.
• Call Stack Push: This context is pushed onto the top of the call stack.
• Execution: The code inside your callback runs.
• Popping Off: Once that iteration finishes, the context is popped off the stack, and the process repeats for the next element
*/

/*
- Differences from Standard Loops
While forEach uses this functional approach, a traditional for or for...of loop works differently:

• for...of: Does not call a function for every iteration. It simply executes a block of code. 
While it creates a new lexical environment (scope) for each loop if using const or let, 
it doesn't incur the overhead of creating an entirely new execution context on the call stack.

• Synchronous Blocking: Unlike asynchronous callbacks (like setTimeout), forEach is synchronous. 
This means it will block the rest of your code until every callback for every element has been pushed to, executed in, 
and popped from the call stack

*/

// forEach is not suitable for asynchronous operations, as it does not wait for promises to resolve.
// If you need to perform asynchronous operations on each element, consider using a for...of loop with async/await or Promise.
// all with map instead.

// forEach does not support break or continue statements, which can be a limitation in certain scenarios.

// forEach is suitable for iterating over arrays when you want to perform side effects (like logging or modifying external variables)
// but is not ideal for transforming data or when you need more control over the iteration process.

// so it's suitable if you want to perform certain logic on each element of the array without needing to break out of the loop or
// skip iterations, but if you need more control over the flow of the loop, a traditional for or for...of loop might be a better choice.

// --------------

// High order functions
// A higher-order function is a function that takes another function as an argument or returns a function as a result.

// Example of a higher-order function that takes a function as an argument
function higherOrderFunction(callback) {
  console.log("Before calling the callback");
  callback();
  console.log("After calling the callback");
}

// Example of a higher-order function that returns a function
function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

// map, filter, reduce are examples of higher-order functions that take a callback function as an argument and perform operations
// on arrays.

// map - creates a new array with the results of calling a provided function on every element in the calling array.
let doubled = nums.map((num) => num * 2);
console.log("Doubled", doubled);

// also forEach can be considered a higher-order function since it takes a callback function as an argument and executes it
// for each element in the array, but it does not return a new array like map does.

// Higher order functions are a powerful tool in JavaScript that allow for more flexible and reusable code,
// enabling developers to abstract away common patterns of iteration and transformation on data structures like arrays.

// but higher order functions may result in an overhead of creating multiple execution contexts, which can lead to performance issues
// if the array is large or if the callback function is complex.

// Performance of Loops

let arr = Array(1_000_000).fill(1);

// backend may return a large array of data one-time and we need to process it, front-end pagination for example.

console.time("For Loop");
let sumFor = 0;
for (let i = 0; i < arr.length; i++) {
  sumFor += arr[i];
}
console.timeEnd("For Loop");

console.time("forEach Loop");
let sumForEach = 0;
arr.forEach((num) => {
  sumForEach += num;
});
console.timeEnd("forEach Loop");

console.time("For...of Loop");
let sumForOf = 0;
for (const num of arr) {
  sumForOf += num;
}
console.timeEnd("For...of Loop");

// forEach creates a new execution context for each element (1_000_000), which can lead to performance issues when processing large arrays,
// as it involves more overhead compared to traditional loops that reuse the same execution context.

// while for exectues inline without new stack

/*

Why the Performance Gaps Exist

1) Traditional for Loop (8.77ms)
- Direct Access:
  It operates directly on the array index (array[i]).

- Compiler Optimization:
  JavaScript engines like V8 can easily optimize this
  pattern into highly efficient low-level machine code loops.

- No Extra Call Stacks:
  It introduces no new scopes or function executions.


2) forEach Loop (15.159ms)
- Callback Overhead:
  It requires passing a callback function that executes
  on every single iteration.

- Scope Creation:
  Each iteration creates a new function execution context,
  adding extra processing overhead.


3) for...of Loop (25.623ms)
- Iterator Protocol:
  Behind the scenes, for...of invokes the array's
  Symbol.iterator.

- Object Generation:
  It creates a temporary iterator object and repeatedly
  calls .next(), checking a { value, done } structure
  on every iteration.

- Additional Overhead:
  This introduces extra allocations, abstraction layers,
  and potential garbage collection costs.
*/

/*
When to Use Each Loop Type

1) Traditional for Loop
--------------------------------
Use when:
- Processing massive datasets
  (hundreds of thousands or millions of elements).

- When you don't need to return a new array (value) (like map or filter would do).

- Working in performance-critical code paths
  such as rendering engines, animations, or
  heavy computations.

- You need maximum control over:
  - index access
  - loop direction
  - breaking/skipping iterations

Why:
- Fastest and most optimized iteration pattern.
- Minimal abstraction and runtime overhead.


2) forEach / Array Methods (.map, .filter, .reduce)
--------------------------------
Use when:
- Readability and cleaner code are more important
  than micro-optimizations.

- Following a functional programming style.

- Avoiding manual index management (i++).

- Transforming or processing arrays declaratively. .toLowerCase, .toUpperCase, .trim, etc.

Why:
- Cleaner and easier to maintain.
- Reduces boilerplate code.
- Improves developer experience in most UI/business logic.


3) for...of Loop
--------------------------------
Use when:
- Readability is the top priority.

- Iterating over non-array iterables such as:
  - Map
  - Set
  - String
  - NodeList
  - Generators

- Using asynchronous operations with:
  for await...of

Why:
- Very clean and expressive syntax.
- Works naturally with the iterable protocol.
- Ideal for sequential async workflows.
*/

/*
Returning / Passing Data from a Loop

A loop itself does NOT return values.
To get data out of a loop, you typically:

1) Store results in an external variable.
2) Return early from the surrounding function.


--------------------------------
Approach 1: Using an External Variable
--------------------------------
*/

let sum = 0;

for (let i = 0; i < 5; i++) {
  sum += i; // Updating a variable declared outside the loop
}

console.log(sum); // 10

/*
Why it works:
- The loop modifies a variable that exists
  outside its own block scope.
- After the loop finishes, the variable
  still contains the final result.


--------------------------------
Approach 2: Early Function Return
--------------------------------
*/

function findTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      // Immediately exits BOTH:
      // 1) the loop
      // 2) the function itself
      return i;
    }
  }

  // Runs only if target was not found
  return -1;
}

/*
Example:
findTarget([10, 20, 30], 20)

Loop Trace:
i = 0 -> 10 !== 20
i = 1 -> 20 === 20 -> return 1

The function exits immediately,
so the remaining iterations never execute.
*/

/*
Why React Remains Highly Performant Despite Using .map()

1) DOM Manipulation is the Real Bottleneck
--------------------------------
- JavaScript execution is extremely fast compared
  to browser DOM operations.

- Updating, repainting, and recalculating layouts
  in the browser is far more expensive than running
  a .map() callback.

- React focuses on minimizing expensive DOM updates,
  so tiny loop-performance differences become negligible.


2) Virtual DOM Optimization
--------------------------------
- .map() in React usually creates lightweight
  Virtual DOM objects (plain JavaScript objects).

- These objects exist only in memory and do NOT
  immediately touch the real browser DOM.

- Because of this, React can calculate UI changes
  efficiently before performing any real rendering.


3) The key Prop Minimizes DOM Updates
--------------------------------
- React uses the key prop to uniquely identify elements.

- During reconciliation, React compares old and new
  Virtual DOM trees and updates ONLY the elements
  that actually changed.

- This avoids unnecessary:
  - DOM removals
  - DOM recreations
  - layout recalculations
  - repaints


4) Modern JavaScript Engine Optimizations
--------------------------------
- Engines like V8 use JIT (Just-In-Time) compilation.

- Frequently executed callback patterns such as:
  - .map()
  - .forEach()
  - arrow functions

  are heavily optimized into efficient machine code.

- This significantly reduces:
  - callback overhead
  - execution context costs
  - function invocation delays


Conclusion
--------------------------------
In React applications, performance is usually limited by:
- DOM rendering
- layout calculations
- painting
- network requests

NOT by tiny differences between:
- for loops
- .map()
- .forEach()

That is why React can safely prioritize:
- readability
- declarative UI patterns
- maintainability

while still delivering excellent performance.
*/

/*
Why React Uses .map() So Heavily

React is built around declarative programming:

UI = f(state)

Meaning:
- The UI is simply a visual representation of data/state.
- React prefers describing "what the UI should look like"
  instead of manually controlling DOM operations.


==================================================
Expression vs Statement
==================================================

1) .map() → Expression
--------------------------------
- .map() RETURNS a brand new array.

- In React, that returned array usually contains JSX elements.

- React can immediately read and render that array
  directly inside JSX.


Example:
users.map(user => (
  <li key={user.id}>{user.name}</li>
))

Result:
[
  <li>...</li>,
  <li>...</li>,
  <li>...</li>
]


2) forEach() → Statement
--------------------------------
- forEach() performs actions but RETURNS undefined.

- React cannot render undefined as UI elements.

- Therefore, directly placing forEach() inside JSX
  produces nothing on the screen.


==================================================
Why forEach Fails in JSX
==================================================

❌ Incorrect:

return (
  <ul>
    {
      users.forEach(user => (
        <li key={user.id}>{user.name}</li>
      ))
    }
  </ul>
);


What actually happens:
- forEach iterates correctly.
- BUT it returns undefined.
- React receives:

  <ul>{undefined}</ul>

So nothing renders.


==================================================
Why .map() Works Perfectly
==================================================

✅ Correct:

return (
  <ul>
    {
      users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))
    }
  </ul>
);


What React receives:
[
  <li key="1">Omar</li>,
  <li key="2">Ali</li>,
  <li key="3">Sara</li>
]

React can directly transform this array
into Virtual DOM nodes.


==================================================
The Imperative Workaround with forEach
==================================================

You CAN make forEach work,
but you leave the declarative style.

Example:

const listItems = [];

users.forEach(user => {
  listItems.push(
    <li key={user.id}>{user.name}</li>
  );
});

return (
  <ul>
    {listItems}
  </ul>
);


Why this is considered worse:
- More verbose
- More manual steps
- Less readable
- Breaks declarative flow
- Harder to scan quickly


==================================================
Why React Prioritizes .map()
==================================================

React values:
- readability
- predictability
- declarative rendering
- maintainability

more than tiny micro-optimizations.

Even if a manual for loop can sometimes benchmark faster,
the real bottleneck is usually:
- DOM rendering
- reconciliation
- layout calculations
- painting

NOT array iteration itself.


==================================================
Mental Model
==================================================

Think of JSX like this:

JSX wants VALUES.

- .map() gives React a value (an array).
- forEach() only performs actions and gives no value.

That is the architectural reason .map()
fits React naturally.
*/
