// =================================================================================================
// 🔄 DE-OPTIMIZATION
// =================================================================================================

/*
We previously talked about:

🚀 Speculative Optimization

V8 observes how our code behaves at runtime and may make assumptions
based on that behavior.

Example:

function add(a, b) {
  return a + b;
}


for (let i = 0; i < 1_000_000; i++) {
  add(i, i + 1);
}


V8 repeatedly observes:

a → Number
b → Number

So, if the code becomes hot and optimization is worthwhile, V8 may
create optimized code based on the assumption that `a` and `b` will
behave numerically.


But then...

console.log(add("hello ", "route"));


Now the observed behavior changes:

Previously:

a → Number
b → Number

Now:

a → String
b → String


The assumption behind the optimized code may no longer be valid.


/* ================================================================================================
   ⚠️ FAILED ASSUMPTION
   ================================================================================================

The optimizer essentially had an assumption based on runtime feedback:

🧠 "This function is consistently being used with Numbers."


But later:

add("hello ", "route");


Now:

❌ The previous assumption is no longer valid.


This is called:

🔄 DE-OPTIMIZATION
or
🔄 DEOPT


/ * ================================================================================================
   🔄 WHAT HAPPENS DURING DEOPTIMIZATION?
   ================================================================================================

Conceptually:

🔥 Hot function
      ↓
📊 Runtime feedback
      ↓
🧠 "a and b behave like Numbers"
      ↓
🚀 Optimized machine code
      ↓
⚠️ New behavior doesn't match assumption
      ↓
🔄 DEOPTIMIZATION
      ↓
🔧 Return to a more general/suitable execution path


The engine can then continue executing the code correctly.

Later, if the new behavior becomes stable and optimization is
worthwhile, the engine may optimize again based on the new information.


⚠️ The exact behavior is more complicated than this simplified model,
but this is the right mental model for now.


/* ================================================================================================
   🚨 DEOPTIMIZATION IS NOT AN ERROR
   ================================================================================================

This is VERY important.

❌ Deoptimization does NOT mean:

• Your JavaScript code has an error.
• Your application crashed.
• V8 failed.
• You wrote bad code.


Instead:

✅ Deoptimization is a NORMAL mechanism used by the engine.


Its purpose is to preserve:

✔️ Correctness
✔️ Performance
✔️ Flexibility


The optimizer made an assumption because it had evidence.

When that assumption becomes invalid, V8 can safely abandon that
optimized path and continue using a more general path.


🎯 Think of it like:

"Based on what I've observed, this shortcut is safe."

Then later:

"Something changed. The shortcut is no longer valid."

So:

🔄 "I'll stop using the shortcut and continue safely."


/* ================================================================================================
   🧠 WHY DOES V8 DO THIS?
   ================================================================================================

Because JavaScript is dynamically typed.

V8 cannot always know beforehand what values will appear at runtime.

So instead of refusing to optimize:

❌ "I don't know the types, therefore I can't optimize."


V8 can do:

👀 Observe behavior
      ↓
📊 Collect runtime feedback
      ↓
🧠 Make an informed assumption
      ↓
🚀 Optimize
      ↓
⚠️ Assumption changes?
      ↓
🔄 Deoptimize


This allows V8 to get the benefits of optimization while still
supporting JavaScript's dynamic nature.


/* ================================================================================================
   🎯 INTERVIEW NOTES
   ================================================================================================

Q: What is deoptimization?

A:

> Deoptimization is the process of abandoning optimized code when
> assumptions made by the optimizer are no longer valid, allowing the
> engine to continue execution using a more general path.


--------------------------------------------------

Q: Why does deoptimization happen?

A:

> It can happen when runtime behavior violates assumptions made during
> speculative optimization.


Example:

A function consistently receives Numbers
        ↓
Optimized based on that behavior
        ↓
Later receives Strings
        ↓
Previous assumption may no longer be valid
        ↓
🔄 Deoptimization


--------------------------------------------------

Q: Is deoptimization an error?

❌ No.

> Deoptimization is a normal runtime mechanism of a JIT engine.


--------------------------------------------------

Q: Does deoptimization mean there is a bug in my code?

❌ No.

> It simply means that an optimization assumption was no longer valid.


--------------------------------------------------

Q: Why is deoptimization important?

A:

> It allows the engine to use aggressive optimizations while still
> remaining correct when runtime behavior changes.


/* ================================================================================================
   🗺️ SPECULATIVE OPTIMIZATION + DEOPTIMIZATION
   ================================================================================================

                    🔥 Hot Code
                        │
                        ▼
                📊 Runtime Feedback
                        │
                        ▼
                 🧠 Assumption
              "a and b are Numbers"
                        │
                        ▼
                🚀 Optimization
                        │
                        ▼
               💻 Optimized Code
                        │
                        ▼
              👀 Runtime continues
                        │
                ┌───────┴────────┐
                │                │
          Same behavior      New behavior
                │                │
                ▼                ▼
          🚀 Keep using       ⚠️ Assumption
          optimized code       invalid
                                 │
                                 ▼
                           🔄 DEOPTIMIZE
                                 │
                                 ▼
                        🔧 General Path


🎯 FINAL IDEA:

Speculative optimization says:

> "Based on what I've observed, I'll optimize this code."


Deoptimization says:

> "The behavior changed, so that optimization is no longer valid.
> I'll safely fall back to another execution path."

🔥 Together, they allow V8 to aggressively optimize dynamic JavaScript
without sacrificing correctness.
*/
