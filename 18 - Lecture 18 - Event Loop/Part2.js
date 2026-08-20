/*
🔄 EVENT LOOP — WHAT HAPPENS BETWEEN TASKS?

A simplified view of the browser's Event Loop:

┌─────────────────────────────┐
│      Call Stack executes    │
│          current Task       │
└──────────────┬──────────────┘
               ↓
        ✅ Task completed
               ↓
┌─────────────────────────────┐
│   🧹 Microtask Queue        │
│   Run pending microtasks    │
└──────────────┬──────────────┘
               ↓
      🎨 Browser may render
      when appropriate
               ↓
        ▶️ Next Task


📌 Important:

Microtasks are processed after the current task finishes
and before the browser moves on to another task.

Examples of Microtasks:
- Promise callbacks
- queueMicrotask()
- MutationObserver callbacks


🎯 What is a "Tick" of the Event Loop?

A Tick is commonly used to describe one iteration/cycle
of the Event Loop.

In a simplified model:

One Tick ≈

Current Task
     ↓
Microtasks
     ↓
Browser may render
     ↓
Next Task


⚠️ "Tick" is an informal term rather than a precise
specification term with one universal definition.

*/

// ============================================================
// 1️⃣ Microtask vs Task
// ============================================================

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

/*
📤 Output:

Start
End
Promise
Timeout


Why?

1️⃣ "Start"
   → Synchronous code
   → Executes immediately

2️⃣ setTimeout(...)
   → Timer Web API
   → Callback will become a Task

3️⃣ Promise.then(...)
   → Promise callback goes to the Microtask Queue

4️⃣ "End"
   → Synchronous code
   → Executes immediately

5️⃣ Current Task finishes

6️⃣ 🧹 Event Loop processes the Microtask Queue
   → "Promise" executes

7️⃣ ▶️ Then the Event Loop can move to the next Task
   → "Timeout" executes


📌 Therefore:

Synchronous code
      ↓
Microtasks
      ↓
Tasks


🎯 INTERVIEW:

Q: Why does Promise execute before setTimeout(..., 0)?

A: Because Promise callbacks are Microtasks, while
   setTimeout callbacks are Tasks (Macrotasks).

   Microtasks are processed before the next Task.


Q: Does setTimeout(..., 0) execute immediately?

A: No. 0ms means there is no intentional timer delay,
   but the callback still has to wait to become eligible
   and then wait for the Event Loop to process it.

*/

// ============================================================
// 2️⃣ Multiple Tasks
// ============================================================

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

setTimeout(() => {
  console.log("3");
}, 0);

console.log("4");

/*
📤 Output:

1
4
2
3


Why?

1️⃣ "1"
   → Synchronous → Call Stack

2️⃣ First setTimeout()
   → Its callback is scheduled as a Task

3️⃣ Second setTimeout()
   → Its callback is scheduled as another Task

4️⃣ "4"
   → Synchronous → Call Stack

5️⃣ Current Task finishes

6️⃣ Event Loop takes the first Task
   → "2"

7️⃣ After that Task finishes, the Event Loop processes
   any pending Microtasks.

8️⃣ Then it can take the next Task
   → "3"


📌 The two timers don't execute at the same time.

Each callback is a separate Task.


🎯 INTERVIEW:

Q: Which timer runs first?

A: The first timer callback, so "2" runs before "3".

Q: Why?

A: Because the first timer was scheduled before the second one.


*/

// ============================================================
// 3️⃣ setTimeout vs setInterval
// ============================================================

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

setInterval(() => {
  console.log("3");
}, 1000);

console.log("4");

/*
📤 Initial output:

1
4
2


Then approximately every 1 second:

3
3
3
3
...


Why?

1️⃣ "1"
   → Synchronous

2️⃣ setTimeout(...)
   → Schedules a Task after the timer expires

3️⃣ setInterval(...)
   → Browser repeatedly schedules the callback
     approximately every 1000ms

4️⃣ "4"
   → Synchronous

5️⃣ Current Task finishes

6️⃣ "2"
   → setTimeout callback executes

7️⃣ After approximately 1 second:
   → Interval callback becomes eligible
   → "3" executes

8️⃣ The interval continues scheduling the callback
   approximately every 1 second.


📌 Important:

setTimeout()    → runs once
setInterval()  → repeatedly schedules its callback


⚠️ "Every 1000ms" does NOT mean the callback is guaranteed
to execute exactly every 1000ms.

If the Call Stack is busy, the callback has to wait.


🎯 INTERVIEW:

Q: What is the difference between setTimeout and setInterval?

A: setTimeout schedules a callback to run once after
   the specified delay.

   setInterval repeatedly schedules a callback at
   approximately the specified interval.


*/

// ============================================================
// 4️⃣ Blocking the Event Loop
// ============================================================

setInterval(() => {
  console.log("Tick");
}, 1000);

const startDate = Date.now();

while (Date.now() - startDate < 5000) {}

/*
⏳ What happens here?

The while loop is synchronous and blocks the Call Stack
for approximately 5 seconds.

During these 5 seconds:

❌ JavaScript cannot execute the interval callback.

Even though the interval keeps reaching its 1-second
schedule, its callback cannot enter the Call Stack
while the current synchronous code is still running.


After approximately 5 seconds:

→ while loop finishes
→ Call Stack becomes available
→ queued timer callbacks can finally execute


📌 This demonstrates one of the most important Event Loop ideas:

JavaScript can only execute one piece of JavaScript
on the Call Stack at a time.

A long-running synchronous task can therefore
"block the Event Loop."

The precise sequence, without implying any concurrent checking:

1- while loop starts → call stack occupied → the entire runtime, including the event loop, is frozen from JS's perspective — nothing else executes, checks, 
or updates during this time except the loop's own condition check.

2- The Web API timer itself is the one thing that keeps working independently — it's managed outside the JS thread (in the browser/Node's C++ layer), 
so it doesn't care that JS is blocked. It fires at 1000ms, 2000ms, 3000ms, 4000ms internally — but since nothing on the JS side is available to run the 
event loop's check-and-move step, none of those firings result in anything actually happening on the JS side yet.

3- while loop ends at 5000ms → call stack finally empties → now, for the first time since the script started, the event loop gets to run.

4-It checks: is there a due callback? Yes — the interval is overdue. It moves that one callback to the call stack, runs it → "Tick" logs.

5- setInterval then re-arms, counting the next 1000ms fresh from this moment (~6000ms).


🎯 INTERVIEW:

Q: What happens if a synchronous task blocks the Call Stack?

A: Other callbacks have to wait.

   Even if their timers have expired, their callbacks
   cannot execute until the Call Stack becomes available.


Q: Does setInterval create another JavaScript thread?

A: No.

   The timer is handled by the browser environment,
   but the JavaScript callback still has to execute
   on the JavaScript thread / Call Stack.


💡 KEY IDEA:

Web APIs can handle asynchronous work,
but JavaScript callbacks still need the Call Stack
to actually execute.

*/
