// 🔄 Event Loop — Putting Everything Together

console.log("1");

setTimeout(() => {
  // cb1
  console.log("2");

  Promise.resolve().then(() => {
    // cb11
    console.log("3");
  });
}, 0);

Promise.resolve().then(() => {
  // cb2
  console.log("4");

  setTimeout(() => {
    // cb21
    console.log("5");
  }, 0);
});

queueMicrotask(() => {
  // cb3
  console.log("6");
});

console.log("7");

/*
📤 OUTPUT:

1
7
4
6
2
3
5


🧠 Let's follow the queues:

Synchronous code:

console.log("1")
    ↓
1

setTimeout(cb1, 0)
    ↓
📥 Task Queue

Promise.then(cb2)
    ↓
🧹 Microtask Queue

queueMicrotask(cb3)
    ↓
🧹 Microtask Queue

console.log("7")
    ↓
7


At this point:

🧹 Microtask Queue:
[ cb2, cb3 ]

📥 Task Queue:
[ cb1 ]


────────────────────────────────────────

🧹 Process Microtasks first:

cb2
 ↓
console.log("4")
 ↓
4

Then cb2 schedules:

setTimeout(cb21, 0)

📥 Task Queue:
[ cb1, cb21 ]


Then:

cb3
 ↓
console.log("6")
 ↓
6


Microtask Queue is now empty ✅


────────────────────────────────────────

📥 Now we can move to the next Task:

cb1
 ↓
console.log("2")
 ↓
2

Then cb1 creates:

Promise.then(cb11)

🧹 Microtask Queue:
[ cb11 ]


⚠️ We do NOT immediately move to cb21.

Why?

Because after a Task finishes, we must process
Microtasks before moving to the next Task.


So:

cb1 finishes
   ↓
🧹 cb11
   ↓
console.log("3")
   ↓
3
   ↓
Microtask Queue empty ✅


────────────────────────────────────────

📥 Now the next Task:

cb21
 ↓
console.log("5")
 ↓
5


🎯 Final:

1 → 7 → 4 → 6 → 2 → 3 → 5


*/

/*
══════════════════════════════════════════════════════════════
🧠 THE MAIN RULES
══════════════════════════════════════════════════════════════

1️⃣ JS Engine ≠ Browser Runtime

The JS Engine (e.g. V8) executes JavaScript.

The Browser Runtime provides things such as:

🌐 Web APIs
📥 Task Queue
🧹 Microtask Queue
🔄 Event Loop
🎨 Rendering
...etc.


2️⃣ JavaScript execution on the Main Thread is single-threaded.

Only one piece of JavaScript can execute on that thread
at a time.


3️⃣ Async ≠ Multithreading

Promises and async/await do NOT automatically create
another JavaScript thread.

They allow us to continue execution without synchronously
blocking the current function/thread while waiting.


4️⃣ Web APIs are outside the JavaScript Call Stack.

Examples:

⏱️ Timer API
🖱️ DOM Events
🌐 Fetch
...etc.


5️⃣ Timer finishing ≠ callback executing immediately.

setTimeout(cb, 1000)

means approximately:

"After the delay expires, cb becomes eligible to be queued as a Task."

Then:

Timer finishes
   ↓
📥 Task Queue
   ↓
🔄 Event Loop
   ↓
📞 Call Stack
   ↓
cb executes


6️⃣ Promise callbacks are Microtasks.

Promise.then()
Promise.catch()
Promise.finally()
await continuation
queueMicrotask()

→ 🧹 Microtasks


7️⃣ Microtasks are processed before moving to the next Task.

Simplified:

📥 Task
   ↓
🧹 ALL Microtasks
   ↓
🎨 Rendering opportunity
   ↓
📥 Next Task


8️⃣ Heavy synchronous JavaScript blocks the Main Thread.

Therefore:

🔒 Heavy JS
   ↓
❌ Rendering delayed
❌ User interaction delayed
❌ Timers can't execute their callbacks
❌ Other Tasks can't execute


9️⃣ await does NOT block the Main Thread.

await pauses:

        ⏸️ current async function

It does NOT pause:

        ❌ the entire JavaScript thread


🔟 Promise does NOT execute on another thread.

The Promise itself is not a thread.

Its callbacks eventually execute as JavaScript on
the appropriate JavaScript thread, normally the Main Thread
in a browser.
*/

/*
══════════════════════════════════════════════════════════════
⏱️ WHAT IF THE FIRST TIMER BECOMES 1000ms?
══════════════════════════════════════════════════════════════

Suppose we change:

setTimeout(cb1, 0);

to:

setTimeout(cb1, 1000);


📤 Output:

1
7
4
6
5
2
3


🧠 Why?

The important thing is that a timer does NOT enter the
Task Queue immediately.

It first waits for its delay to expire.

So:

setTimeout(cb1, 1000);

        ↓
   🌐 Timer starts
        ↓
   ⏳ Wait ~1000ms
        ↓
   📥 cb1 becomes eligible


Meanwhile, the Microtasks execute immediately:

cb2
 ↓
4
 ↓
setTimeout(cb21, 0)
 ↓
cb21's timer starts


Then:

cb3
 ↓
6


Now compare the timers:

cb1:
   ⏳ 1000ms timer
   → still waiting

cb21:
   ⏱️ 0ms timer
   → becomes eligible almost immediately


Therefore:

📥 cb21
   ↓
   5


Then, after approximately 1000ms:

📥 cb1
   ↓
   2
   ↓
🧹 cb11 Microtask
   ↓
   3


So:

1 → 7 → 4 → 6 → 5 → 2 → 3


🔥 KEY IDEA:

The order of setTimeout() calls does NOT guarantee
the execution order.

The timer delay matters.

A timer with 0ms created later can execute before a
timer with 1000ms created earlier.


📌 Remember:

setTimeout(fn, delay)

does NOT mean:

"Run fn exactly after delay."

It means:

"After the delay expires, fn becomes eligible to be
queued as a Task."

Then fn still needs to wait for:

   ⏳ Timer to expire
        ↓
   📥 Task becomes eligible
        ↓
   🔄 Event Loop
        ↓
   📞 Call Stack available
        ↓
   ⚙️ Callback executes


🎯 INTERVIEW:

Q: If setTimeout(cb1, 1000) is written before
   setTimeout(cb2, 0), which callback runs first?

A: cb2 can run first because cb1 must wait approximately
   1000ms before becoming eligible, while cb2 becomes
   eligible almost immediately.


Q: Does setTimeout(fn, 1000) guarantee execution exactly
   after 1000ms?

A: No. It only guarantees that the callback won't be
   eligible before approximately that delay. It can execute
   later depending on the Call Stack, Tasks, and Microtasks.

*/
/*
🎯 INTERVIEW QUESTIONS

Q: Why does 4 execute before 6?

A: Both are Microtasks, but cb2 was added to the
   Microtask Queue before cb3.


Q: Why does 3 execute before 5?

A: cb11 is a Microtask created inside cb1.
   Microtasks are processed before moving to the next Task.


Q: Does setTimeout(fn, 0) execute immediately?

A: No. It schedules a Task that becomes eligible after
   the timer delay and must wait for the Event Loop and
   Call Stack.


Q: Does await create a new thread?

A: No. await suspends the current async function and
   allows other work to continue.


Q: Why can a heavy loop freeze the browser?

A: Because it occupies the Main Thread, preventing
   rendering, user interaction, and other JavaScript
   Tasks from executing.


Q: Is the Event Loop part of V8?

A: In the browser model we're studying, the Event Loop
   is part of the runtime environment, not the JS Engine
   itself.


*/
