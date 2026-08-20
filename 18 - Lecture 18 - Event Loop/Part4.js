// ⚠️ Microtask Starvation

function loop() {
  queueMicrotask(loop);
}

loop();

/*
🧠 What happens here?

1️⃣ loop() executes.

2️⃣ Inside loop(), we call queueMicrotask(loop).

   → loop is added to the Microtask Queue.

3️⃣ The current task finishes.

4️⃣ The Event Loop starts processing Microtasks.

   → loop() executes
   → schedules another loop() Microtask

5️⃣ The Event Loop processes the new Microtask.

   → loop() executes again
   → schedules another Microtask

6️⃣ And this continues forever 🔄


Microtask Queue:

[ loop ]
   ↓
[ loop ]
   ↓
[ loop ]
   ↓
[ loop ]
   ↓
  ... ♾️


⚠️ Why is this dangerous?

The Event Loop keeps processing Microtasks until the
Microtask Queue is empty.

But here, every Microtask creates another Microtask.

Therefore:

Microtask Queue → never becomes empty ❌

As a result, the Event Loop never gets the opportunity
to move on to the next Task.

This can prevent:

❌ setTimeout callbacks
❌ setInterval callbacks
❌ other Tasks
❌ browser rendering

from getting a chance to run.


🔥 This is called:

Microtask Starvation

A continuously growing/never-ending Microtask Queue
can starve other Tasks and prevent the browser from
moving on to them.


⚠️ IMPORTANT:

queueMicrotask() should NOT be used recursively like this.

Use Microtasks for short, finite pieces of work,
not for an endless chain of Microtasks.


🎯 INTERVIEW:

Q: What happens if a Microtask continuously creates
   another Microtask?

A: The Event Loop keeps processing Microtasks and may
   starve the Task Queue, preventing other Tasks and
   potentially rendering from getting a chance to run.

*/

/*
🅰️ Angular & Microtasks

In Angular, microtasks can sometimes be used to schedule
work to happen after the current synchronous execution
but before the browser moves to the next Task.

However, manually using microtasks to force Angular-related
updates is generally NOT the preferred approach.

👉 Prefer letting Angular follow its normal change-detection
   and scheduling cycle instead of manually forcing work
   through microtasks.


⚠️ Why?

Microtasks have high priority.

The browser keeps processing Microtasks before moving on
to the next Task.

So if code continuously creates new Microtasks:

Microtask
    ↓
New Microtask
    ↓
New Microtask
    ↓
New Microtask
    ↓
       ... ♾️

The Microtask Queue may never become empty.

This can cause:

❌ Task starvation
❌ Delayed timers/events
❌ Delayed rendering
❌ Browser becoming unresponsive/frozen


📌 KEY IDEA:

Don't use Microtasks to continuously force work.

Let the framework/browser follow its normal scheduling
cycle whenever possible.

*/
