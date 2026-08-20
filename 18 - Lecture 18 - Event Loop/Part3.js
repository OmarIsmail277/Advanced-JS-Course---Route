// 🔄 Event Loop — Microtasks & Tasks

console.log("Start");

Promise.resolve().then(() => {
  console.log("Micro 1");

  setTimeout(() => {
    console.log("Timer 222");
  }, 0);

  Promise.resolve().then(() => {
    console.log("Micro 2");
  });
});

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");

/*
📤 Output:

Start
End
Micro 1
Micro 2
Timer
Timer 222


🧠 Let's break it down:


1️⃣ console.log("Start")
   → Synchronous code
   → Executes immediately

   Output: Start


2️⃣ Promise.resolve().then(...)
   → The .then() callback is a Microtask
   → Added to the Microtask Queue

   Microtask Queue:
   [ Micro 1 ]


3️⃣ setTimeout(... "Timer")
   → Callback is registered with the Timer Web API
   → After the timer becomes eligible, its callback
     will be placed in the Task Queue


4️⃣ console.log("End")
   → Synchronous code
   → Executes immediately

   Output:

   Start
   End


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧹 Current Task finishes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now the Event Loop processes the Microtask Queue
BEFORE moving to the next Task.


5️⃣ Micro 1 executes

   console.log("Micro 1")
   → Output: Micro 1

   Then inside Micro 1:

   setTimeout(... "Timer 222")
   → Timer is registered with the Timer Web API

   Promise.resolve().then(...)
   → Creates another Microtask
   → Micro 2 is added to the Microtask Queue


   Microtask Queue:
   [ Micro 2 ]


6️⃣ Micro 2 executes

   console.log("Micro 2")
   → Output: Micro 2


⚠️ Important:

The Event Loop does NOT stop processing microtasks
just because it started processing one.

If a Microtask creates another Microtask,
the new Microtask is added to the queue and will
also be processed before moving to the next Task.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▶️ Microtask Queue is now empty
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7️⃣ Now the Event Loop can move to the Task Queue.

There are two timer callbacks:

   Task Queue:
   [ Timer ] [ Timer 222 ]


Why does "Timer" come first?

Because the first setTimeout() was registered earlier:

   setTimeout("Timer")
          ↓
   setTimeout("Timer 222")


So the first timer callback is processed first.


8️⃣ "Timer"
   → Output: Timer


9️⃣ "Timer 222"
   → Output: Timer 222


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📤 FINAL OUTPUT:

Start
End
Micro 1
Micro 2
Timer
Timer 222


🎯 KEY RULES:

1. Synchronous code executes first.

2. After the current Task finishes,
   Microtasks are processed.

3. Microtasks can create more Microtasks.

4. The Event Loop keeps processing Microtasks
   until the Microtask Queue is empty.

5. Only then can the next Task execute.

6. setTimeout(..., 0) does NOT execute immediately.
   It schedules a Task.


🎯 INTERVIEW QUESTION:

Q: Why does "Micro 2" execute before "Timer"?

A: Because Micro 2 is a Microtask, while Timer is a Task.
   Microtasks are processed before the Event Loop moves
   to the next Task.

*/
