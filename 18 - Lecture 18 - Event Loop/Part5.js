// 🔮 Promises

/*
Promises were introduced in ES2015 (ES6) to provide a cleaner
way to handle asynchronous operations and avoid "Callback Hell".

Instead of deeply nested callbacks:

callback
   ↓
callback
   ↓
callback
   ↓
callback 😵

Promises allow us to chain asynchronous operations.


🔄 Promise States

A Promise starts as:

        ⏳ Pending
          /    \
         /      \
        ↓        ↓
   ✅ Fulfilled  ❌ Rejected


Pending    → the operation is still in progress
Fulfilled  → the operation completed successfully
Rejected   → the operation failed


📌 Once a Promise becomes Fulfilled or Rejected,
   its state is settled and cannot change again.



// ============================================================
// 1️⃣ Promise.resolve()
// ============================================================

// If fulfilled → resolve

const promise = Promise.resolve("data");

promise.then(() => {

  console.log("hello");

});


/*
Promise.resolve("data")
        ↓
   Fulfilled Promise
        ↓
   .then() callback
        ↓
   🧹 Microtask Queue
        ↓
   Call Stack
        ↓
   "hello"


📌 The .then() callback is a Microtask.

*/

// ============================================================
// 2️⃣ Promise vs async/await
// ============================================================

/*
⚠️ Important:

async/await does NOT make asynchronous operations blocking.

Instead, await pauses the execution of the current async
function until the Promise settles.

The JavaScript thread is still free to execute other work.

So:

❌ "async/await turns Promises into blocking code"

✅ "async/await provides a synchronous-looking syntax
   for working with Promises without blocking the
   JavaScript thread."

*/

// ============================================================
// 3️⃣ Promises are Eager
// ============================================================

const x = new Promise((resolve, reject) => {
  console.log("Hello");
});

/*
📤 Output:

Hello


🧠 Why?

The Promise executor function:

(resolve, reject) => {
  console.log("Hello");
}

runs IMMEDIATELY when the Promise is created.

It does NOT wait for:

❌ .then()
❌ .catch()
❌ await


For example:

const x = new Promise(() => {
  console.log("Hello");
});


"Hello" is printed immediately.


That's why Promises are often described as:

🔥 Eager to execute

The Promise executor starts executing as soon as
the Promise is created.


📌 Important distinction:

Creating the Promise:

new Promise(...)
      ↓
Executor runs immediately ⚡

Using the Promise:

.then(...)
.catch(...)
.await
      ↓
Handles the result later


*/

// ============================================================
// 4️⃣ Why use Axios / HttpClient / Observables?
// ============================================================

/*
When dealing with HTTP requests, we may want more control
over the operation, such as:

- cancellation
- retrying
- interceptors
- request/response handling
- transformation
- error handling


📌 In Angular, HttpClient returns Observables, which provide
   useful features such as cancellation through unsubscription.

📌 Axios provides additional HTTP-request functionality,
   including request cancellation.


⚠️ Important:

Don't say:

"Promises cannot be cancelled."

A Promise itself does not provide a standard cancellation
mechanism.

The underlying operation may still be cancellable depending
on the API being used.


*/

// ============================================================
// 5️⃣ Promise Chaining
// ============================================================

Promise.resolve()

  .then(() => {
    console.log("1");
  })

  .then(() => console.log("2"));

console.log("3");

/*
📤 Output:

3
1
2


🧠 Why?

1️⃣ Promise.resolve()
   → Creates an already fulfilled Promise.

2️⃣ First .then()
   → Its callback is scheduled as a Microtask.

3️⃣ Second .then()
   → It waits for the Promise returned by the first .then().

4️⃣ console.log("3")
   → Synchronous code
   → Executes immediately.

   Output: 3


5️⃣ Current Task finishes.

6️⃣ 🧹 Microtask Queue:

   → First .then() executes
   → Output: 1

7️⃣ The first .then() returns/fulfills its Promise.

   → This allows the second .then() callback
     to be scheduled as another Microtask.

8️⃣ Second .then() executes.
   → Output: 2


📌 Final:

Synchronous code
      ↓
Microtask 1
      ↓
Microtask 2


🎯 KEY IDEA:

Promise callbacks (.then / .catch / .finally)
run as Microtasks.

And when a Microtask creates/resolves another Promise
whose .then() is chained, the next callback is scheduled
as another Microtask.

*/

// 🔄 async/await does NOT block JavaScript

async function getData() {
  console.log("1");

  const data = await Promise.resolve("data");

  console.log("2");
}

getData();

console.log("3");

/*
📤 Output:

1
3
2


🧠 Why?

1️⃣ getData() starts executing.

2️⃣ console.log("1")
   → Synchronous
   → Output: 1

3️⃣ await Promise.resolve("data")
   → The Promise is already fulfilled.
   → The async function pauses HERE.

   ⚠️ But JavaScript itself is NOT blocked.

   The Call Stack becomes available for other work.

4️⃣ console.log("3")
   → Executes normally
   → Output: 3

5️⃣ The Promise settles.
   → The rest of the async function:

       console.log("2");

   is scheduled as a Microtask.

6️⃣ Microtask executes.
   → Output: 2


📌 So:

await
  ↓
pauses the async function ⏸️
  ↓
does NOT block the JS thread ❌
  ↓
other JavaScript can execute
  ↓
Promise settles
  ↓
rest of async function continues as a Microtask


🔥 Compare this with a synchronous blocking operation:

while (...) {
  // blocks the Call Stack 🔒
}

vs.

await promise;

// pauses only this async function ⏸️
// JavaScript can continue doing other work


🎯 INTERVIEW:

Q: Does await block JavaScript?

A: No. await pauses the execution of the current async
   function, but it does not block the JavaScript thread.
   The rest of the function continues later as a Microtask.
*/
