// 🔄 Event Loop

/*

🧠 JS Engine != JS Runtime


🧠 JS Engine
============

The JS Engine is responsible for executing JavaScript.

JS Engine === Call Stack + Heap
           + Parser
           + Ignition
           + JIT Compilers
           + Garbage Collector
           + ... etc.


🌐 Browser Runtime Environment
==============================

The Browser Runtime Environment provides everything JavaScript needs
to interact with the outside world.

Browser Runtime Environment === JS Engine
                             + Web APIs
                             + Task Queues
                             + Event Loop
                             + Rendering Pipeline


🔌 Web APIs include:
- Timers (setTimeout / setInterval)
- Fetch API
- DOM APIs
- Browser Events
- ... etc.


*/

console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);

/*
⏱️ What happens when setTimeout() is called?

setTimeout(callback, 2000)

        ↓

📞 Callback is registered with the Browser's Timer Web API

        ↓

⏳ Browser starts the 2-second timer

        ↓

✅ After 2 seconds, the callback becomes eligible for execution

        ↓

📥 Callback is placed in the Task Queue
   (Macrotask Queue)

        ↓

🔄 The Event Loop eventually moves it to the Call Stack
   when the Call Stack is empty.


⚠️ Important:

setTimeout() does NOT mean:

"Execute this callback exactly after 2 seconds."

It means:

"After at least 2 seconds, make this callback eligible
for execution."

The callback still has to wait for the Call Stack
and the Event Loop's rules.


*/

console.log("C");

/*
📤 Output:

A
C
B


Why?

1️⃣ console.log("A")
   → Executes immediately on the Call Stack

2️⃣ setTimeout(...)
   → Timer is handled by the Browser's Timer Web API
   → JavaScript continues executing

3️⃣ console.log("C")
   → Executes immediately on the Call Stack

4️⃣ ⏳ After 2 seconds:
   → Timer expires
   → Callback is placed in the Task Queue

5️⃣ 🔄 Event Loop eventually moves the callback
   → Task Queue → Call Stack

6️⃣ console.log("B")
   → Finally executes


❓ But what exactly determines when a task moves
   from the queue to the Call Stack?

👉 That's what we'll discuss in the next part, insha'Allah.



🎯 INTERVIEW QUESTIONS
======================

Q: What is the difference between a JS Engine and a JS Runtime?

A: The JS Engine executes JavaScript, while the JS Runtime
   provides the environment around the engine, such as Web APIs,
   queues, the Event Loop, and the rendering pipeline.


Q: Where does setTimeout() come from?

A: It is provided by the Browser's Web APIs, not by the JS Engine.


Q: What happens when setTimeout(callback, 2000) is called?

A: The browser handles the timer. After 2 seconds, the callback
   is placed in the Task Queue, and the Event Loop eventually
   moves it to the Call Stack.


Q: Does setTimeout(callback, 2000) execute the callback
   exactly after 2 seconds?

A: No. 2000ms is the minimum delay before the callback becomes
   eligible for execution.


Q: Does the callback move directly from the Timer API
   to the Call Stack?

A: No.

   Timer Web API → Task Queue → Event Loop → Call Stack


Q: Why does the code print A → C → B?

A: Because A and C execute synchronously on the Call Stack,
   while B's callback must wait for the timer and then go
   through the Task Queue and Event Loop before executing.


Q: What happens if the Call Stack is busy when the timer expires?

A: The callback waits in the Task Queue until the Call Stack
   becomes available.


Q: What is the role of the Event Loop?

A: It coordinates the movement of callbacks from the queues
   to the Call Stack when they are allowed to execute.

*/
