// =================================================================================================
// 🚨 MEMORY LEAKS
// =================================================================================================

/*
Now that we understand Garbage Collection, we can understand:

🚨 MEMORY LEAKS


A memory leak happens when:

📦 Data is NO LONGER NEEDED by the application
        +
🔗 But something STILL keeps it reachable
        ↓
🗑️ GC cannot reclaim it


🎯 The key idea:

> A memory leak is NOT simply "memory that exists."

It is memory that the application no longer needs, but which remains
reachable because some reference is still keeping it alive.


// ================================================================================================
// 🧠 1. WHY DOES A MEMORY LEAK HAPPEN?
// ================================================================================================

/*
Remember our GC rule:

🌱 GC Roots
    ↓
🔗 References
    ↓
📦 Reachable Object
    ↓
🟢 Keep


A memory leak can look like:

🌱 GC Root
    ↓
🔗 Unnecessary reference
    ↓
📦 Object we no longer need


The object is still reachable.

Therefore:

🗑️ GC says:
"Sorry 😅 I can't collect this. I can still reach it."


⚠️ IMPORTANT:

The Garbage Collector is doing its job correctly.

The problem is that our application accidentally kept a reference
to something it no longer needs.


// ================================================================================================
// 🔥 2. COMMON SOURCES OF MEMORY LEAKS
// ================================================================================================

/*
Common causes include:

🌍 Unintentionally retained global data
⏰ Active timers
🎧 Event listeners that are no longer needed
🔒 Closures retaining unnecessary data
🌐 Detached DOM nodes that are still referenced
📦 Growing caches / collections that are never cleared


These are not automatically memory leaks.

They become a problem when they retain data that the application
no longer needs.


// ================================================================================================
// 🌍 3. GLOBAL REFERENCES
// ================================================================================================

/*
Global data can live for a very long time because it is reachable
through the global environment.

For example:

window.variable = "My name is Ahmed";


The value is attached to the global object.

As long as that reference remains:

🌍 Global Object
      ↓
variable
      ↓
"My name is Ahmed"


the value remains reachable.


⚠️ IMPORTANT:

A global variable is NOT automatically a memory leak.

The problem is:

> Keeping unnecessary data globally for longer than needed can
> prevent that data from being reclaimed.


For example, continuously adding large objects to a global array
without ever removing them can cause memory usage to grow.


// ================================================================================================
// 📦 4. GROWING ARRAYS / COLLECTIONS
// ================================================================================================

let users = [];

for (let i = 0; i < 500_000; i++) {
  users.push({
    id: i,
    name: `user ${i}`,
  });
}


Conceptually:

users
  │
  ▼
📦 Array
  │
  ├──► 👤 User 1
  ├──► 👤 User 2
  ├──► 👤 User 3
  ├──► ...
  └──► 👤 User 500,000


Every object is still reachable through:

users


Therefore the GC cannot remove those objects.

Why?

Because:

🌱 Root
 ↓
users
 ↓
Array
 ↓
User objects


They are still reachable.


// ================================================================================================
// 🧹 5. RELEASING THE ARRAY'S REFERENCE
// ================================================================================================

/*
If the array is no longer needed:

users = null;


Now, assuming there are no other references to the array or its
objects:

🌱 Root
   │
   X
   │
📦 Array
   │
   ├──► 👤 User
   ├──► 👤 User
   └──► 👤 ...


The whole structure can become unreachable.

Therefore:

🗑️ Eligible for Garbage Collection


⚠️ The memory is NOT necessarily freed immediately.

`users = null` removes your reference.

The GC decides when to actually reclaim the memory.


// ================================================================================================
// 🖥️ 6. HEAP SNAPSHOTS
// ================================================================================================

/*
Browser DevTools can help us investigate memory usage.

You can use:

🛠️ DevTools
   ↓
💾 Memory
   ↓
📸 Heap Snapshot


A Heap Snapshot gives you information about objects currently
represented in the JavaScript heap.


For example, after creating:

let users = [];

for (let i = 0; i < 500_000; i++) {
  users.push({
    id: i,
    name: `user ${i}`,
  });
}


a heap snapshot can show a very large amount of retained data. 😅


After:

users = null;


and after the relevant garbage collection has occurred, another
snapshot can help confirm that the objects are no longer being
retained.


⚠️ IMPORTANT:

Seeing something in a heap snapshot does NOT automatically mean:

🚨 "MEMORY LEAK!"


You need to determine:

1️⃣ Is this data still reachable?
2️⃣ Is it still needed?
3️⃣ Is something unexpectedly retaining it?
4️⃣ Is memory continuously growing over time?


// ================================================================================================
// 🌐 7. DETACHED DOM NODES
// ================================================================================================

/*
This is a very important browser-specific example.

Suppose:

let ele = document.querySelector("p");


Now:

ele
 │
 ▼
🌐 <p> DOM node


Then:

ele.remove();


The `<p>` element is removed from the DOM tree.

But:

console.log(ele);


can still log the element.

Why?

Because the JavaScript variable:

ele

still holds a reference to the DOM node.


So we can have:

🌍 JS Root
   │
   ▼
ele
   │
   ▼
🌐 Detached <p>


The node is no longer part of the DOM tree...

but JavaScript can still reach it.


This is called a:

🌐 DETACHED DOM NODE


// ================================================================================================
// ⚠️ IMPORTANT CORRECTION
// ================================================================================================

/*
Your original note said:

"the variable(node) itself needs to be deleted"

That's not quite accurate.

You don't need to "delete the variable."

You need to remove the unnecessary reference.

For example:

ele = null;


Now:

ele
 │
 ▼
null


If there are no other references to the detached DOM node:

🌐 Detached <p>
       ↑
       X
    no references


it can eventually become eligible for garbage collection.


🎯 So the important concept is:

❌ "Delete the variable."

✅ "Remove the unnecessary reference."


// ================================================================================================
// 🎧 8. EVENT LISTENERS
// ================================================================================================

/*
Event listeners are another common source of accidental retention.

For example:

const button = document.querySelector("button");

function handleClick() {
  console.log("clicked");
}

button.addEventListener("click", handleClick);


If the listener is no longer needed, it may be appropriate to remove it:

button.removeEventListener("click", handleClick);


⚠️ IMPORTANT:

Adding an event listener is NOT automatically a memory leak.

Modern browsers can correctly handle many listener situations.

The problem occurs when listeners or their associated references are
kept unnecessarily, especially in long-lived applications such as:

📱 Single-page applications
🔄 Components that repeatedly mount/unmount
📄 Dynamic pages


For example, repeatedly adding listeners without cleaning them up can
lead to unnecessary retained references and duplicated callbacks.


// ================================================================================================
// ⏰ 9. TIMERS
// ================================================================================================

/*
Timers can also keep references alive.

For example:

const hugeData = createHugeData();

setInterval(() => {
  console.log(hugeData);
}, 1000);


The callback closes over:

hugeData


The active interval keeps the callback alive.

The callback keeps its closure environment alive.

The closure keeps `hugeData` reachable.


Conceptually:

⏰ Active Timer
      ↓
📞 Callback
      ↓
🔒 Closure
      ↓
📦 hugeData


If the timer is no longer needed, clean it up:

const id = setInterval(...);

clearInterval(id);


🎯 This is another example of:

Reference still exists
→ object remains reachable
→ GC cannot collect it


// ================================================================================================
// 🔒 10. CLOSURES
// ================================================================================================

/*
Closures can also unintentionally retain large objects.

Example:

function createHandler() {
  const hugeData = createHugeData();

  return function () {
    console.log("clicked");
  };
}

const handler = createHandler();


Depending on what the closure actually references and what the engine
can optimize, unnecessary retained data can become an issue.

The important mental model is:

🔒 Closure
   ↓
references outer environment
   ↓
possibly keeps values alive


⚠️ Don't say:

"Closures always cause memory leaks."

❌ Incorrect.

Closures are a normal and extremely useful JavaScript feature.

They become a problem when they unintentionally keep large or
unnecessary data reachable for too long.


// ================================================================================================
// 🧠 11. MEMORY LEAK vs HIGH MEMORY USAGE
// ================================================================================================

/*
This distinction is VERY important for interviews.

High memory usage:

📈 Application currently uses a lot of memory.

That doesn't necessarily mean there's a leak.


Memory leak:

📈 Memory usage keeps growing because unnecessary objects remain
reachable and cannot be collected.


Example:

You temporarily create 500,000 objects:

→ High memory usage might be expected.


But if every operation adds another 500,000 objects to a collection
that is never cleared:

operation 1 → 📈
operation 2 → 📈📈
operation 3 → 📈📈📈
operation 4 → 📈📈📈📈


and the old data is no longer needed:

🚨 Potential memory leak


// ================================================================================================
// 🔍 12. HOW TO THINK ABOUT FINDING A MEMORY LEAK
// ================================================================================================

/*
A useful debugging process:

1️⃣ Notice abnormal memory growth
        ↓
2️⃣ Take a Heap Snapshot
        ↓
3️⃣ Perform the operation
        ↓
4️⃣ Take another Snapshot
        ↓
5️⃣ Compare retained objects
        ↓
6️⃣ Find what is keeping them reachable
        ↓
7️⃣ Remove the unnecessary reference
        ↓
8️⃣ Verify memory can eventually be reclaimed


In Chrome DevTools, tools such as:

📸 Heap Snapshots
📈 Allocation instrumentation
📊 Memory profiling

can help investigate this.


// ================================================================================================
// 🎯 INTERVIEW NOTES
// ================================================================================================

/*
Q: What is a memory leak in JavaScript?

A:

> A memory leak occurs when data is no longer needed by the
> application but remains reachable through references, preventing
> the Garbage Collector from reclaiming it.


--------------------------------------------------

Q: Does a memory leak mean the Garbage Collector is broken?

❌ No.

> Usually, the GC cannot collect the data because something in the
> application is still keeping a reference to it.


--------------------------------------------------

Q: Are global variables always memory leaks?

❌ No.

> Global data can be intentionally needed for the lifetime of the
> application. The problem is unintentionally retaining unnecessary
> data globally.


--------------------------------------------------

Q: Can event listeners cause memory leaks?

✅ They can contribute to memory leaks when unnecessary listeners or
their references are retained, especially in long-lived applications.


--------------------------------------------------

Q: Can closures cause memory leaks?

✅ They can retain data longer than intended.

❌ But closures themselves are not memory leaks.


--------------------------------------------------

Q: What is a detached DOM node?

A:

> A DOM node that has been removed from the document tree but is still
> reachable through JavaScript references.


--------------------------------------------------

Q: How can you investigate a memory leak in Chrome?

A:

> Use DevTools' Memory panel and Heap Snapshots to identify objects
> that remain retained unexpectedly and investigate their retaining
> paths.


--------------------------------------------------

Q: If I do this:

users = null;

does the memory immediately disappear?

❌ No.

> The reference is removed. If the objects become unreachable, they
> become eligible for garbage collection. The engine decides when the
> GC actually runs.


// ================================================================================================
// 🗺️ FINAL MENTAL MODEL
// ================================================================================================

/*

             🧠 GARBAGE COLLECTION

                  🌱 GC Roots
                       │
                       ▼
                  🔗 References
                       │
                       ▼
                  📦 Objects
                       │
                ┌──────┴──────┐
                ▼             ▼
             🟢 Needed      🔴 No longer
             & reachable    needed
                │             │
                ▼             ▼
              KEEP       ❌ BUT STILL
                           REACHABLE
                              │
                              ▼
                       🚨 MEMORY LEAK
                              │
                              ▼
                       GC CANNOT COLLECT


🎯 THE GOLDEN RULE:

> If the application doesn't need an object anymore,
> but something still makes it reachable,
> the Garbage Collector cannot reclaim it.

And that is the heart of understanding:

🚨 MEMORY LEAKS
*/
