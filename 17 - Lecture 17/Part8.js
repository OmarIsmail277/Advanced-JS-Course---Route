// =================================================================================================
// 🗑️ GARBAGE COLLECTOR (GC)
// =================================================================================================

/*
The Garbage Collector is one of the MOST IMPORTANT components of the
JavaScript runtime to understand.

JavaScript automatically manages memory for us.

The basic question the Garbage Collector repeatedly needs to answer is:

🧠 "Can this value still be reached by my program?"

If:

✅ Reachable
→ Keep it.

❌ Unreachable
→ It can potentially be reclaimed.


⚠️ Important:

The GC does NOT simply ask:

"Is this variable still there?"

It asks whether the value/object is still reachable from the program's
GC roots through references.


// ================================================================================================
// 🌱 1. WHAT ARE GC ROOTS?
// ================================================================================================

/*
Garbage Collection starts from a set of special references called:

🌱 GC ROOTS


Conceptually, roots can include things such as:

🌍 Global references / global environment
📚 Active execution contexts / stack references
🔗 Active closures
🌐 Relevant host/runtime roots
🖥️ Live DOM-related references in the browser
🔄 Internal engine references


The exact set of roots is engine/runtime-dependent.

The important idea is:

🌱 ROOTS
   ↓
🔗 Follow references
   ↓
📦 Reachable values


If the GC can reach an object from a root, that object is considered
reachable and cannot simply be collected.


/* ================================================================================================
   🔗 2. REACHABILITY
   ================================================================================================

Example:

let user = {
  name: "Nourhan",
};


We have:

user
 │
 ▼
📦 Object
 ├── name
 └── "Nourhan"


The variable `user` provides a path to the object.

Therefore:

🌱 Root
  ↓
user
  ↓
📦 Object

The object is reachable.


// ================================================================================================
// ❌ 3. WHEN DOES AN OBJECT BECOME UNREACHABLE?
// ================================================================================================

let user = {
  name: "Nourhan",
};


user = null;


Now:

user
 │
 ▼
null


If there are no other references to the original object:

📦 { name: "Nourhan" }

there is no longer a path from the GC roots to that object.

So conceptually:

🌱 Roots
   │
   └── ❌ no path → 📦 unreachable object


The object becomes:

❌ UNREACHABLE


The GC may eventually reclaim the memory.


⚠️ "Eventually" is important.

The Garbage Collector decides WHEN to perform collection.

You do not normally control the exact moment an object is collected.


// ================================================================================================
// 🏷️ 4. MARK & SWEEP
// ================================================================================================

/*
One classic way of explaining garbage collection is:

🖊️ MARK
   ↓
🧹 SWEEP


1️⃣ MARK

The GC starts from its roots and follows references.

Every reachable object is marked as:

🟢 "Still reachable"


2️⃣ SWEEP

The GC looks for objects that were not marked.

Those objects are unreachable:

🔴 "No longer reachable"

Their memory can be reclaimed.


Conceptually:

🌱 Roots
   │
   ├──► 📦 A 🟢
   │      │
   │      └──► 📦 B 🟢
   │
   └──► 📦 C 🟢


📦 D 🔴
📦 E 🔴


After sweeping:

📦 D → 🗑️ reclaim
📦 E → 🗑️ reclaim


⚠️ Modern V8 garbage collection is considerably more sophisticated
than a simple one-shot Mark & Sweep algorithm.

V8 uses generational and incremental/concurrent techniques as well.

For now, Mark & Sweep is the fundamental mental model for
understanding reachability.


// ================================================================================================
// 🧬 5. REFERENCES MATTER
// ================================================================================================

let addr = {
  city: "Alex",
};

let user = {
  name: "Nourhan",
  address: addr,
};


The reference graph is conceptually:

🌱 Root
 │
 ▼
user
 │
 ├──► "Nourhan"
 │
 └──► addr
        │
        ▼
      📦 address object
        │
        └──► "Alex"


Because `user` can reach `addr`:

user
 ↓
address
 ↓
"Alex"


the address object is reachable too.


This is why the GC doesn't only look at direct variables.

It follows the entire reference graph.


// ================================================================================================
// ⚠️ IMPORTANT CORRECTION — WHAT EXACTLY IS "MARKED"?
// ================================================================================================

/*
A common simplified explanation says:

"GC marks the values."


A more accurate explanation is:

🧠 The GC traces and marks REACHABLE HEAP OBJECTS / managed entities.

For example:

let user = {
  name: "Nourhan",
};


The important thing is not that the string `"Nourhan"` is simply
"marked because it is a property."

The GC traces the object/reference graph and determines which managed
objects remain reachable.

Don't think of GC as:

"Mark every property individually."


Think:

🌱 Roots
   ↓
🔗 Follow references
   ↓
📦 Reachable objects
   ↓
🟢 Keep


// ================================================================================================
// 🧠 6. VARIABLES vs VALUES
// ================================================================================================

let user = {
  name: "Nourhan",
};


Think of:

user

as a binding that allows the program to reach the object.

Conceptually:

user
 │
 ▼
📦 { name: "Nourhan" }


Now:

user = null;


The variable still exists!

But its reference to that particular object is gone.

So:

user
 │
 ▼
null


while the old object may now be unreachable.

🎯 This is an important distinction:

Changing a variable's value/reference
≠
Deleting the variable itself


// ================================================================================================
// 🗑️ 7. THE `delete` KEYWORD
// ================================================================================================

/*
Another important distinction:

The `delete` operator removes a PROPERTY from an object.

Example:

const user = {
  name: "Nourhan",
  age: 30,
};


delete user.name;


Now the object no longer has the `name` property.

But:

user

still exists.


You are NOT deleting the variable `user`.

Also, because `const` bindings cannot be reassigned:

const user = {};

user = null; // ❌ TypeError


But:

delete user.name; // ✅ removes the property


🎯 Think of it like:

🍽️ Plate analogy

const user = {
  name: "Nourhan"
};


🍽️ Plate = object/reference structure
🍲 Food = property/value


`delete user.name`

→ remove the food

The plate/object itself still exists.


// ================================================================================================
// 🔗 8. OBJECTS CAN BE REACHED THROUGH OTHER OBJECTS
// ================================================================================================

let addr = {
  city: "Alex",
};

let user = {
  name: "Nourhan",
  address: addr,
};


Even if there isn't a separate variable directly pointing to the
address object, it can still be reached:

user
 ↓
address
 ↓
addr object


Therefore:

📦 address object → reachable


If we later do:

user.address = null;


and there are no other references to `addr`:

let addr = {
  city: "Alex",
};

let user = {
  name: "Nourhan",
  address: addr,
};

user.address = null;


There is still:

addr
 ↓
📦 address object


So the object is STILL reachable!

Only if:

addr = null;


as well, and no other references exist, could the object become
unreachable.


🔥 This is the key idea:

GC cares about the REFERENCE GRAPH, not simply whether an object is
"inside another object."


// ================================================================================================
// 📦 9. WHERE ARE OBJECTS STORED?
// ================================================================================================

/*
For our mental model, we commonly say:

📦 Objects → Heap
📍 Execution information → Stack


Example:

let user = {
  name: "Nourhan",
};


Conceptually:

STACK
┌─────────────┐
│ user ───────┼──────► HEAP
└─────────────┘         │
                        ▼
                   📦 Object
                   name: "Nourhan"


⚠️ This is a simplified model.

The exact memory representation used by a JavaScript engine is much
more complicated, and not every JavaScript value can be described
simply as "stack vs heap."


For learning GC, however:

🧠 "GC mainly manages reachable objects in the heap"

is a useful mental model.


// ================================================================================================
// 🔤 10. WHAT ABOUT STRINGS AND OTHER VALUES?
// ================================================================================================

/*
Garbage collection is NOT only about objects.

JavaScript engines manage many kinds of allocated values internally.

However, don't rely too heavily on the idea:

"Every string is an object in the heap."

Strings have specialized representations and engine-specific
optimizations.

You may hear about concepts such as:

🔤 String interning
🧵 String tables / internalized strings
📦 Shared representations


These can allow equal strings or string-related structures to be
represented efficiently.

But this is an engine implementation detail, not something you should
base normal JavaScript code on.

🎯 For now:

Focus on:

🌱 Reachability
🔗 References
📦 Managed objects
🗑️ Reclamation


// ================================================================================================
// 📞 11. WHAT HAPPENS WHEN A FUNCTION FINISHES?
// ================================================================================================

function calculate() {
  const temp = {
    value: 10,
  };

  return temp.value * 2;
}


calculate();


When `calculate()` finishes, its function execution context is no
longer active.

Its local bindings are no longer available through that execution
context.

If the object:

{
  value: 10
}

has no other references, it can eventually become unreachable and be
eligible for garbage collection.


Conceptually:

During execution:

📦 Function Context
│
└── temp ───► 📦 Object


After function returns:

📦 Function Context disappears
        │
        X
        │
        ▼
📦 Object


If nothing else can reach that object:

❌ Unreachable
→ eligible for collection


⚠️ The GC does not necessarily run immediately when the function
returns.

The object becomes ELIGIBLE for collection; the engine decides when
actual collection happens.


// ================================================================================================
// 🔒 12. CLOSURES — THE IMPORTANT EXCEPTION
// ================================================================================================

/*
This is where things become more interesting.

Consider:

function outer() {
  const user = {
    name: "Nourhan",
  };

  return function inner() {
    console.log(user.name);
  };
}


const fn = outer();


`outer()` has finished.

Normally, its execution context is gone.

But:

inner()
  ↓
references `user`


The returned function still needs access to `user`.

So the relevant lexical environment remains reachable through the
closure.

Conceptually:

🌱 Root
 │
 ▼
fn
 │
 ▼
🔒 Closure
 │
 ▼
user
 │
 ▼
📦 { name: "Nourhan" }


Therefore the object is NOT garbage collected simply because
`outer()` finished.


🎯 This is one of the most important ideas:

A function finishing does NOT automatically mean that all of its
local values can be garbage-collected.

If something still has a reachable reference to those values, they
must remain available.


// ================================================================================================
// 🚀 13. RETURNING A VALUE vs RETURNING AN OBJECT
// ================================================================================================

function calculate() {
  const temp = {
    value: 10,
  };

  return temp.value * 2;
}


Here we return:

20


We are NOT returning the `temp` object itself.

So after the function finishes, assuming nothing else references the
object, that object may become unreachable.


Compare:

function getUser() {
  const user = {
    name: "Nourhan",
  };

  return user;
}


Here the object itself is returned.

The caller can now hold a reference to it:

const user = getUser();


So:

🌱 Root
 ↓
user
 ↓
📦 Object


The object remains reachable.


🎯 The important factor is NOT "function finished."

The important factor is:

> "Is there still a path from a GC root to the object?"


// ================================================================================================
// 🛑 14. STOP-THE-WORLD
// ================================================================================================

/*
Garbage collection requires work.

Some GC phases may need the JavaScript execution to be paused.

This is commonly called:

🛑 STOP-THE-WORLD


Conceptually:

▶️ JavaScript execution
       ↓
🛑 Pause
       ↓
🗑️ GC work
       ↓
▶️ Continue


If a pause is noticeable, the application may appear to freeze
temporarily.


⚠️ IMPORTANT:

Don't imagine modern V8 as:

"Every garbage collection completely stops JavaScript."

Modern garbage collectors use techniques such as:

🔄 Incremental GC
⚡ Concurrent work
👥 Parallel GC


to reduce pause times and perform some work alongside JavaScript
execution or split work into smaller pieces.


The exact behavior depends on the engine and GC phase.


// ================================================================================================
// 🧠 15. GARBAGE COLLECTION IS AUTOMATIC
// ================================================================================================

/*
You normally don't tell JavaScript:

"Delete this object from memory now."


Instead:

JavaScript Engine
       ↓
🧠 Determines reachability
       ↓
🗑️ Decides when collection is worthwhile
       ↓
♻️ Reclaims memory


So:

❌ You don't manually free ordinary JavaScript objects.

The engine manages this automatically.


// ================================================================================================
// 🎯 INTERVIEW NOTES
// ================================================================================================

/*
Q: What is Garbage Collection?

A:

> Garbage Collection is the automatic process of reclaiming memory
> occupied by values/objects that are no longer reachable by the
> program.


--------------------------------------------------

Q: How does the GC know whether an object can be collected?

A:

> It starts from GC roots and follows references. If an object cannot
> be reached from the roots, it is considered unreachable and can
> eventually be reclaimed.


--------------------------------------------------

Q: What is Mark and Sweep?

A:

> Mark identifies reachable objects by tracing from roots. Sweep
> reclaims memory associated with objects that were not marked.


--------------------------------------------------

Q: Does an object become garbage immediately when there is no variable
pointing directly to it?

❌ Not necessarily.

Another object or closure may still reference it.


--------------------------------------------------

Q: When does an object become eligible for garbage collection?

A:

> When it becomes unreachable from the relevant GC roots.


--------------------------------------------------

Q: Does the GC run immediately after an object becomes unreachable?

❌ No.

> The engine decides when garbage collection should occur.


--------------------------------------------------

Q: What happens to local variables when a function finishes?

A:

> Their execution context is no longer active, but the values they
> reference can still remain alive if they are reachable through
> something else, such as a closure or another object.


--------------------------------------------------

Q: Can closures prevent garbage collection?

✅ Yes.

> A closure can keep references to outer variables alive after the
> outer function has finished, as long as the closure itself remains
> reachable.


--------------------------------------------------

Q: What is Stop-the-World GC?

A:

> A GC phase in which JavaScript execution is temporarily paused so
> the garbage collector can safely perform required work.


--------------------------------------------------

Q: Does modern GC always stop the entire application?

❌ No.

> Modern engines use incremental, concurrent, and parallel techniques
> to reduce pause times.


// ================================================================================================
// 🧠 THE MOST IMPORTANT MENTAL MODEL
// ================================================================================================

/*

                    🌱 GC ROOTS
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
           Global     Active      Closure
          bindings    context
              │          │          │
              └──────────┼──────────┘
                         │
                         ▼
                   🔗 References
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
           📦 Object A            📦 Object B
              │
              ▼
           📦 Object C


🟢 A, B, C are reachable
→ Keep them.


Now:

🌱 Roots
   │
   └── no path ──X──► 📦 Object D


🔴 Object D is unreachable
→ Eligible for garbage collection.


🎯 FINAL RULE:

Don't ask:

❌ "Is there a variable with this object?"

Ask:

✅ "Can this object still be reached from a GC root?"

That single question is the foundation of understanding JavaScript
Garbage Collection.


// ================================================================================================
// 🔥 AND THIS LEADS DIRECTLY TO THE NEXT TOPIC...
// ================================================================================================

/*
If an object is supposed to become unreachable...

but something accidentally keeps a reference to it...

then:

🌱 Root
 ↓
🔗 Unexpected reference
 ↓
📦 Object that we no longer need


The object is STILL reachable.

Therefore the GC cannot collect it.

This is the foundation of:

🚨 MEMORY LEAKS

➡️ Next topic: Memory Leaks
*/
