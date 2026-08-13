// =================================================================================================
// 🎯 JAVASCRIPT ENGINE — INTERVIEW QUESTIONS
// =================================================================================================

/*
These are some of the important interview questions we covered so far.

⚠️ Some of the original answers were simplified, so the technically
more accurate answers are included here.


// ================================================================================================
// 1️⃣ Is the JavaScript engine the same as the browser?
// ================================================================================================

/*
❌ No.

The JavaScript engine is only ONE part of the environment.

For example, in Chrome:

🌐 Chrome Browser
│
├── 🔥 V8 → JavaScript engine
├── 🌳 DOM APIs
├── 🌐 Web APIs
├── 📡 Fetch
├── ⏱️ Timers
└── ...other browser functionality


In Node.js:

🟢 Node.js
│
├── 🔥 V8 → JavaScript engine
├── 📁 File System APIs
├── 🌐 Networking APIs
├── ⏱️ Timers
└── ...Node.js functionality


🎯 Important:

The JavaScript language itself doesn't provide the whole environment.

The:

🧠 JavaScript Engine
→ executes JavaScript.

The:

🌐 Host Environment
→ provides additional capabilities such as DOM, timers,
   networking, file system, etc.


INTERVIEW ANSWER:

> No. The JavaScript engine is a component of the host environment.
> For example, Chrome uses V8, while Node.js also uses V8 but provides
> a different set of host APIs around it.


// ================================================================================================
// 2️⃣ Is every unused object deleted immediately?
// ================================================================================================

/*
❌ No.

When an object becomes unreachable, it becomes:

🟡 Eligible for garbage collection


The Garbage Collector decides when it is actually collected.

Example:

let user = {
  name: "Nourhan",
};

user = null;


The reference is removed.

But:

❌ This does NOT mean:

"the object is immediately deleted from memory."


Instead:

📦 Object
   ↓
❌ Unreachable
   ↓
🟡 Eligible for GC
   ↓
🗑️ Eventually reclaimed


⚠️ Also:

Setting a variable to `null` is NOT normally something you need to
do just to "help GC" in ordinary code.

It can be useful when you intentionally want to release a reference
while the surrounding scope is still alive.


INTERVIEW ANSWER:

> No. When an object becomes unreachable, it becomes eligible for
> garbage collection. The engine decides when to reclaim its memory.


// ================================================================================================
// 3️⃣ Is JavaScript pass-by-value or pass-by-reference?
// ================================================================================================

/*
This question is a classic interview trap. 😈


✅ JavaScript is PASS-BY-VALUE.


Even when passing an object, the value being passed is the object's
reference.


Example:

const user = {
  name: "Nour",
};

function changeUser(obj) {
  obj.name = "Ahmed";
}

changeUser(user);


The function receives a COPY OF THE VALUE stored in `user`.

That value is a reference to the same object.


Conceptually:

user
 │
 │ reference value
 ▼
📦 Object
   name: "Nour"


changeUser(obj)

obj
 │
 │ copied reference value
 ▼
📦 SAME Object


Therefore:

obj.name = "Ahmed";


changes the same object.


But:

function changeUser(obj) {
  obj = {
    name: "Ahmed",
  };
}


does NOT change what `user` refers to.

Because:

user ─────► 📦 Original Object

obj ──────► 📦 New Object


The parameter `obj` received a COPY of the reference value.


🎯 So the technically accurate answer is:

> JavaScript is always pass-by-value. For objects, the value being
> passed is a reference to the object.


⚠️ Don't simply say:

❌ "Primitive = pass by value, objects = pass by reference."

That's a common simplification, but technically inaccurate.


// ================================================================================================
// 4️⃣ Can closures cause memory leaks?
// ================================================================================================

/*
❌ "Closures don't cause memory leaks" is too absolute.

Closures themselves are NOT memory leaks.

But a closure can KEEP DATA ALIVE if it remains reachable.


Example:

function createHandler() {
  const hugeData = createHugeData();

  return function () {
    console.log(hugeData);
  };
}

const handler = createHandler();


The returned function closes over:

hugeData


So:

handler
  ↓
🔒 Closure
  ↓
hugeData
  ↓
📦 Large data


As long as the closure is reachable, that data may remain reachable.


🎯 The problem is not:

"Closure = memory leak"


The problem is:

"An unnecessarily retained closure/reference keeps data alive."


Closures are actually extremely useful and commonly used for:

🔒 Encapsulation
📦 Private state
🏭 Factory functions
⏳ Callbacks
💾 Maintaining state


INTERVIEW ANSWER:

> Closures don't inherently cause memory leaks. However, if a closure
> remains reachable while retaining large or unnecessary data, that
> data can remain in memory longer than intended and contribute to a
> memory leak.


// ================================================================================================
// 5️⃣ Is deoptimization (deOPT) an error?
// ================================================================================================

/*
❌ No.

Deoptimization is an INTERNAL ENGINE MECHANISM.


Example:

function add(a, b) {
  return a + b;
}


Suppose V8 observes:

add(10, 20)
add(30, 40)
add(50, 60)
...


It may make an optimization based on runtime feedback:

🧠 "a and b appear to consistently be numbers."


It can generate specialized optimized machine code.


But later:

add("hello ", "Route");


The previous assumption may no longer be valid.


So V8 may:

🔄 DEOPTIMIZE


meaning it falls back to a less-specialized execution path and may
re-optimize later if appropriate.


🎯 Deoptimization:

❌ Is not a JavaScript error
❌ Does not mean your code is broken
❌ Does not mean the application crashed

✅ It is part of the engine's optimization strategy.


INTERVIEW ANSWER:

> Deoptimization is an internal mechanism where the engine abandons
> optimized code because assumptions made during optimization are no
> longer valid.


// ================================================================================================
// 6️⃣ What is a Hidden Class?
// ================================================================================================

/*
A Hidden Class is an internal V8 structure used to efficiently
represent the SHAPE of an object.


Example:

const user1 = {
  name: "Nour",
  age: 30,
};

const user2 = {
  name: "Ahmed",
  age: 25,
};


Both objects have the same shape:

name
age


V8 can use the same internal shape information for them.


🎯 Important:

The hidden class describes the object's STRUCTURE/SHAPE.

It is NOT the actual values.


Same shape:

{
  name: "Nour",
  age: 30
}

{
  name: "Ahmed",
  age: 25
}


Different values ✅
Same shape ✅


⚠️ The exact internal implementation is V8-specific and can change
between engine versions.


INTERVIEW ANSWER:

> A hidden class is a V8 internal structure that represents the
> shape of an object, such as its properties and their layout, helping
> V8 optimize property access.


// ================================================================================================
// 7️⃣ What are Inline Caches (ICs)?
// ================================================================================================

/*
Inline Caches are an optimization technique used by JavaScript
engines to make repeated operations faster.

One important use case is PROPERTY ACCESS.


Example:

function getName(user) {
  return user.name;
}


The engine repeatedly sees:

user.name


Initially, the engine needs to figure out how to access `name` for
the given object shape.


After seeing the same pattern repeatedly, it can cache information
about the operation.


Conceptually:

user.name
   ↓
🔍 What is the object's shape?
   ↓
🧠 Remember the result/path
   ↓
⚡ Faster future access


Inline caches can be used for things such as:

📦 Property access
📞 Calls
➕ Operations
...depending on the engine and operation.


🎯 They are closely related to runtime feedback and JIT optimization.

INTERVIEW ANSWER:

> An inline cache is an engine optimization that caches information
> about a previously observed operation, such as property access, so
> repeated operations can be performed more efficiently.


// ================================================================================================
// 8️⃣ JavaScript is single-threaded. How can it handle asynchronous
//     operations?
// ================================================================================================

/*
This is one of the MOST IMPORTANT JavaScript interview questions.


First:

🧠 JavaScript execution is traditionally described as single-threaded
for a given JavaScript execution context.

That means it executes JavaScript code on one main thread in a
sequential manner.


But the JavaScript engine does NOT provide all asynchronous
capabilities by itself.


The HOST ENVIRONMENT provides additional APIs/mechanisms.


For example, in a browser:

🌐 Browser
│
├── 🔥 JavaScript Engine
│      └── Call Stack
│
├── 🌐 Web APIs
│      ├── setTimeout
│      ├── DOM Events
│      ├── Fetch
│      └── ...
│
└── 🔄 Event Loop
       └── Coordinates when callbacks/jobs can run


So if we do:

setTimeout(() => {
  console.log("Hello");
}, 1000);


JavaScript doesn't sit on the call stack for one second doing nothing.

The host environment handles the timer.

Later, when the callback is ready, the event-loop machinery helps
coordinate when it can be executed by JavaScript.


⚠️ We'll go much deeper into:

🔄 Event Loop
📚 Call Stack
📦 Task Queue
⚡ Microtask Queue
🌐 Web APIs


later in the course.


INTERVIEW ANSWER:

> JavaScript execution is single-threaded, but asynchronous behavior
> is enabled by the host environment, such as browser APIs and the
> event loop. The host handles operations such as timers or network
> requests, and their callbacks/jobs are scheduled to run when the
> JavaScript thread is available.


// ================================================================================================
// 🏆 QUICK INTERVIEW CHEAT SHEET
// ================================================================================================

/*

❓ JS Engine vs Browser?
→ Engine is a component of the host environment.

❓ Unreachable object immediately deleted?
→ No. It becomes eligible for GC; the engine decides when to collect.

❓ Pass-by-value or pass-by-reference?
→ JavaScript is pass-by-value. Object references are values.

❓ Closures cause memory leaks?
→ Not inherently. A reachable closure can unnecessarily retain data.

❓ Is deOPT an error?
→ No. It's an internal optimization/deoptimization mechanism.

❓ Hidden Class?
→ V8's internal representation of an object's shape.

❓ Inline Cache?
→ Caches information about repeated operations to make them faster.

❓ How does JS handle async operations?
→ Host environment + asynchronous APIs + event-loop mechanisms.


🎯 The next major topic:

🔄 EVENT LOOP

This will connect a LOT of what we've learned:

🧠 Execution Context
📚 Call Stack
🌐 Web APIs
⏰ Timers
📡 Fetch
📦 Queues
🔄 Event Loop
⚡ Microtasks
*/
