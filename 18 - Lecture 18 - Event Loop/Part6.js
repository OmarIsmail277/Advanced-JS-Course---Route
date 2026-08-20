// 🧹 Microtask Queue — Promise vs queueMicrotask()

Promise.resolve().then(() => {
  console.log("A");
});

queueMicrotask(() => {
  console.log("B");
});

Promise.resolve().then(() => {
  console.log("C");
});

/*
📤 Output:

A
B
C


🧠 Why?

All three callbacks are Microtasks.

When the synchronous code runs:

1️⃣ Promise.resolve().then(...)
   → Microtask A is added

   Microtask Queue:
   [ A ]


2️⃣ queueMicrotask(...)
   → Microtask B is added

   Microtask Queue:
   [ A, B ]


3️⃣ Promise.resolve().then(...)
   → Microtask C is added

   Microtask Queue:
   [ A, B, C ]


🧹 Current Task finishes.

The Event Loop processes the Microtask Queue
in FIFO order:

   [ A, B, C ]
      ↓
   A → B → C


📌 Important:

Promise.then()       → Microtask
queueMicrotask()     → Microtask

And because they are added to the same Microtask Queue,
their execution order depends on the order in which
they were queued.


🎯 INTERVIEW:

Q: Which runs first: a Promise callback or queueMicrotask()?

A: Neither has an inherent priority over the other.
   Both are Microtasks.

   If they are queued in this order:

   Promise → queueMicrotask → Promise

   they execute:

   A → B → C
*/
