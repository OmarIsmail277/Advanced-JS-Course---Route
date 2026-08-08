/* =================================================================================================
   💤 PART 8 — LAZY PARSING / LAZY COMPILATION
   =================================================================================================

❓ Does V8 immediately parse and generate bytecode for EVERY function?

Not necessarily.

Modern JavaScript engines try to avoid doing unnecessary work.

Consider:

function usedImmediately() {
  console.log("used now");
}

function neverUsed() {
  console.log("never used");
}

usedImmediately();


We have two functions:

🔥 usedImmediately()
→ Actually called.

💤 neverUsed()
→ Never called.


It would be wasteful to spend the same amount of work fully preparing
code that might never execute.


/* ================================================================================================
   💤 LAZY PARSING
   ================================================================================================

📌 Lazy parsing means the engine can postpone fully parsing/compiling
the body of a function until it becomes necessary.

Conceptually:

📝 Source Code
      ↓
🔍 Initial parsing
      ↓
📦 Identify functions
      ↓
      ├── Function needed now
      │       ↓
      │    🔍 Parse more fully
      │       ↓
      │    📦 Generate bytecode
      │       ↓
      │    ⚙️ Execute
      │
      └── Function not needed yet
              ↓
          💤 Stay lazy
              ↓
       Don't do unnecessary work yet


So:

function usedImmediately() {
  console.log("used now");
}

function neverUsed() {
  console.log("never used");
}

usedImmediately();


The engine can avoid fully processing the body of `neverUsed()` until
there is a reason to need it.


/* ================================================================================================
   🎯 WHY DOES LAZY PARSING EXIST?
   ================================================================================================

The main idea:

> Don't spend expensive work on code that may never be executed.


Imagine a huge application containing:

• 1,000 functions
• Many features
• Code for pages the user never visits
• Functions that are rarely called

If the engine fully processed everything immediately:

📝 Entire application
      ↓
🔍 Fully parse everything
      ↓
📦 Generate bytecode for everything
      ↓
⚙️ Start execution


That can waste:

⏳ Time
💾 Memory
⚙️ CPU work


Instead:

📝 Application
      ↓
🔍 Initial processing
      ↓
💤 Keep unnecessary function bodies lazy
      ↓
🚀 Start execution faster
      ↓
🔥 Fully process functions when needed


This helps improve startup performance.


/* ================================================================================================
   🧠 IMPORTANT DISTINCTION — PARSING vs BYTECODE GENERATION
   ================================================================================================

Don't think:

"V8 doesn't parse the function at all."

It's more accurate to understand that V8 can perform enough initial
parsing/preparation to recognize the function and its surrounding
structure, while postponing the expensive full parsing/compilation of
the function body.

So:

❌ "The function is completely invisible to the parser."

is not the right mental model.

Instead:

✅ "The engine can parse enough to know about the function and defer
full processing of its body until needed."


/* ================================================================================================
   🔥 WHEN DOES THE LAZY FUNCTION BECOME NEEDED?
   ================================================================================================

Suppose:

function neverUsed() {
  console.log("never used");
}


Later:

neverUsed();


Now the function actually needs to execute.

Conceptually:

💤 Lazy function
      ↓
📞 Function gets called
      ↓
🔍 Fully parse/compile as needed
      ↓
📦 Generate bytecode
      ↓
🔥 Execute


So the engine can postpone work until it becomes useful.


/* ================================================================================================
   🎯 INTERVIEW NOTE
   ================================================================================================

Q: Does V8 immediately compile every function to bytecode?

A good answer:

> Not necessarily. V8 uses lazy parsing/compilation techniques to avoid
> doing unnecessary work for functions that may never execute. Function
> bodies can be processed more fully when they become needed.

--------------------------------------------------

Q: Why does lazy parsing improve performance?

Because it can reduce:

⏳ Startup time
💾 Memory usage
⚙️ Unnecessary parsing/compilation work

especially in large applications containing code that may never execute.


/* ================================================================================================
   🧩 CONNECTING EVERYTHING WE HAVE LEARNED
   ================================================================================================

So far:

📝 JavaScript Source
        ↓
🔹 Tokenization
        ↓
🔍 Parsing
        ↓
🌳 AST
        ↓
💤 Lazy processing when possible
        ↓
📦 Bytecode Generation
        ↓
📜 Bytecode
        ↓
🔥 Ignition
        ↓
⚙️ Execution
        ↓
📊 Runtime Feedback
        ↓
🔥 Hot Code
        ↓
🏗️ JIT Optimization
        ↓
💻 Machine Code


🎯 The big principle:

> JavaScript engines try to avoid doing unnecessary work.

This idea appears repeatedly in the engine:

💤 Lazy parsing
→ Don't fully process code until needed.

🔥 JIT optimization
→ Don't aggressively optimize every piece of code; focus on hot code.

Together, these techniques help balance:

🚀 Fast startup
        +
⚡ Fast execution
        +
💾 Reasonable memory usage


⚠️ Exact parsing, bytecode generation, and optimization behavior is
implementation-dependent and can change between V8 versions.
*/
