function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

/*
I have a call stack that contains execution contexts. 
When I call multiplier(2), it creates a new execution context for that function call. 
Inside that execution context, it defines the inner function (the closure) and returns it. 
The returned function retains access to the variables of the outer function (multiplier), 
even after the outer function has finished executing. 

HOW DOES THIS HAPPEN?

This is because the inner function forms a CLOSURE over the variables of the outer function, 
allowing it to access and use those variables whenever it is called.

What is a closure? A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.

Closures are created every time a function is created, at function creation time.

Closure = function + references to its surrounding state (the lexical environment) == 
(memory of the variables that were in scope at the time the closure was created)


In this case, when I call multiplier(2), it creates a closure that retains access to the variable 'factor'  with the value of 2.
When I assign the returned function to the variable 'doubler', it holds a reference to that closure. 
So when I call doubler(5), it can access the 'factor' variable from the closure and multiply it by 5, returning 10. 
*/

// Example usage:
const doubler = multiplier(2);
console.log(doubler(5)); // Output: 10

function CreateCounter() {
  let count = 0; // This variable is part of the closure and will be retained in memory as long as the returned function exists.
  let x = 10; // this variable will not be retained in memory because it is not used in the returned function,
  // so it will be garbage collected.
  return function increment() {
    count++; // This inner function has access to the 'count' variable and can modify it.
    return count; // It returns the updated count value.
  };
}

// This creates a new counter and returns the increment function, which forms a closure over the 'count' variable.
const count = createCounter();
console.log(count()); // Output: 1

console.dir(count); // This will show the closure and the variables it retains in memory.
// f increment(){ [[Scopes]]: createCounter -> Closure (counter: 1) }

console.log(count()); // Output: 2 - the count variable is retained in memory and updated with each call to the increment function.

// The Closure happens when there is an inner function that references variables from its outer function,
// even after the outer function has finished executing.
// because when the function finishes executing, its variables normally would be garbage collected,
// but since the inner function retains a reference to those variables,
// they are not garbage collected and remain in memory as part of the closure.

// ----------------------------
// When Closures can be useful?

// 💡 1. To “remember” data after a function finishes
// When you want a function to keep some private state.
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// 🔒 2. Data hiding / encapsulation (private variables)
// was used before Classes in ES6

function createBankAccount(initBalance) {
  let balance = initBalance;

  return {
    deposit(amount) {
      balance += amount;
    },
    withdraw(amout) {
      balance -= amount;
    },
    getBalance() {
      return balance;
    },
  };
}

// Here, the balance became private, If I want to use it, I will use getBalance, add = deposit, ...

const account = createBankAccount();

console.log(account.getBalance()); // 100
account.deposit(50);
console.log(account.getBalance()); // 150

// Why closure here?
// balance is NOT directly accessible
// only accessible through functions

// 👉 This is like “private variables”

// -----

// ⏳ 4. Async code (callbacks, timers, events)

// Closures are everywhere in asynchronous JavaScript.

function greet(name) {
  setTimeout(function () {
    console.log("Hello " + name);
  }, 1000);
}

greet("Omar");
// Why closure here?
// even after greet finishes
// the callback still remembers name

for (var i = 0; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

console.log(i);

// 4
// 4
// 4
// 4

// if used let

// 0
// 1
// 2
// 3

// The classic pre-ES6 fix was an IIFE to force a new scope per iteration:
for (var i = 0; i <= 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i); // pass i as an argument — now j is a fresh binding
}

// That's essentially what let does for you automatically — which is why let in loops was such a welcome addition.

// -------

// ===============================
// Why this happens (var vs let)
// ===============================
//
// With `var`:
// - `var` is function-scoped (NOT block-scoped)
// - There is only ONE shared variable `i` for the whole loop
// - The loop runs synchronously and finishes immediately
// - `setTimeout` callbacks are asynchronous:
//   they are sent to Web APIs → then to the callback queue
// - By the time callbacks execute, the loop has already finished
// - So `i` is already 4, and all callbacks print 4
//
// With `let`:
// - `let` is block-scoped
// - A NEW `i` is created for each loop iteration
// - Each iteration has its own separate lexical environment
// - Each setTimeout callback closes over its own `i` value
// - So when callbacks run later, they remember the correct value (0,1,2,3)
//
// Why setTimeout runs after the loop:
// - JavaScript is single-threaded (call stack)
// - The loop runs entirely in the call stack (synchronous code)
// - setTimeout is asynchronous (handled by Web APIs)
// - After the timer finishes, callbacks go to the task queue
// - Event loop only executes them when the call stack is empty
//   → which happens AFTER the loop completes
//
// Summary:
// - var → one shared variable → all callbacks see final value
// - let → separate variable per iteration → each callback preserves correct value

// ----------------------------

// 🧧 Real Interview question

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log("here", count);
  }
  inner();
}

outer();
outer();

// Here do you think that is a Closure? Great question — and the answer is technically yes, but practically no.
/*

Great question — and the answer is **technically yes, but practically no**. Let me explain.

`inner` does close over `count` — by the formal definition, that makes it a closure. 
But this example is **missing the key ingredient that makes closures useful and interesting**: `inner` never escapes `outer`.

Every time `outer()` runs:
1. A fresh `count = 0` is created
2. `inner` is defined, runs once, logs `"here 1"`, then both are garbage collected
3. On the next `outer()` call, same thing — brand new `count`, logs `"here 1"` again

So you get:

```
here 1
here 1
```

There's no memory between calls. `count` never reaches `2`. and we said before that closure = function + memory
*/

// **Compare that to the "real" closure pattern:**
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log("here", count);
  }
  return inner; // ← inner escapes
}

const fn = outer(); // outer() runs once, count = 0 stays alive
fn(); // here 1
fn(); // here 2
fn(); // here 3

/*
Now `count` survives because `inner` holds a reference to it — which prevents the garbage collector from cleaning it up. 
*That's* the power of closures: **keeping a variable alive beyond the lifetime of the function that created it.**

The rule of thumb: if the inner function never leaves the outer function, you have a closure technically, 
but it behaves no differently than a plain local variable. 
The magic only shows up when the inner function **outlives** its parent.
*/
