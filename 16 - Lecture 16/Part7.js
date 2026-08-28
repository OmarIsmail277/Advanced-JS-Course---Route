/* =================================================================================================
   ⚙️ PART 6 — INTERPRETER, COMPILER & JIT
   =================================================================================================

🎯 What we've reached so far:

📝 Source Code
      ↓
🔹 Tokenization
      ↓
🔍 Parsing
      ↓
🌳 AST

At this point, the JavaScript Engine has:

✅ Read the source code.
✅ Checked its syntax.
✅ Converted it into tokens.
✅ Understood the structure of the program.
✅ Built an AST representing that structure.

For example:

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


The AST can represent that:

• There is a function called `add`.
• It has parameters `a` and `b`.
• `a + b` is a BinaryExpression.
• `console.log(...)` is a function call.
• `add(10, 20)` is another function call.
• etc.


BUT...

💻 The CPU does NOT understand JavaScript syntax or the AST directly.

The CPU ultimately executes MACHINE CODE.

So now we need to answer:

> ❓ How does JavaScript actually become executable instructions?


There are two fundamental approaches:

1️⃣ Interpretation
2️⃣ Compilation

Modern JavaScript engines combine ideas from BOTH using:

🔥 JIT — Just-In-Time Compilation


/* ================================================================================================
   🧠 1. INTERPRETER
   ================================================================================================

📌 An interpreter is a program that reads instructions and executes them
while the program is running.

Conceptually:

Read instruction
      ↓
Understand instruction
      ↓
Execute instruction
      ↓
Read next instruction
      ↓
Execute...
      ↓
...


Example:

let x = 10;
let y = 20;
let res = x + y;

console.log(res);


Conceptually, the interpreter needs to perform operations such as:

let x = 10;
→ Create `x` and store 10.

let y = 20;
→ Create `y` and store 20.

let res = x + y;
→ Read `x`.
→ Read `y`.
→ Perform addition.
→ Store the result in `res`.

console.log(res);
→ Call `console.log` with the value of `res`.


/* ================================================================================================
   ⚡ WHY INTERPRETATION CAN START FAST
   ================================================================================================

An interpreter doesn't need to wait until the ENTIRE application has been
converted into highly optimized machine code before starting execution.

This gives an important advantage:

🚀 FAST STARTUP

Imagine a huge application.

If the engine had to:

Analyze EVERYTHING
      ↓
Optimize EVERYTHING
      ↓
Generate machine code for EVERYTHING
      ↓
Finally start execution

the user might wait a long time before anything runs.

With interpretation, execution can begin much earlier.


/* ================================================================================================
   ⚠️ THE PROBLEM WITH PURE INTERPRETATION
   ================================================================================================

Imagine:

function calcPrice(price, tax) {
    return price + tax;
}

for (let i = 0; i < 1_000_000; i++) {
    calcPrice(i, 10);
}


The same function is executed MANY times.

A simple interpreter may repeatedly perform the work required to execute
these instructions.

If the same code becomes extremely hot/frequent:

🔥 Hot Code
= Code that executes very frequently.


This creates an opportunity:

> "Why don't we optimize this frequently executed code?"


So interpretation provides:

🚀 Fast startup
❌ But potentially less optimized execution


/ * ================================================================================================
   🏗️ 2. COMPILER
   ================================================================================================

📌 A compiler takes source code and transforms it into another form that
can be executed.

The simplified traditional model is:

Source Code
    ↓
Compiler
    ↓
Machine Code
    ↓
CPU


The compiler can analyze a larger portion of the program BEFORE execution.

This gives it more opportunity to perform optimizations.


/* ================================================================================================
   🧠 COMPILER OPTIMIZATION — CONSTANT FOLDING
   ================================================================================================

Example:

const res = 10 + 20;


A compiler can determine:

10 + 20 = 30

BEFORE runtime execution.

So conceptually:

const res = 10 + 20;

can become something equivalent to:

const res = 30;


This optimization is called:

📌 Constant Folding

> Constant folding is a compiler optimization technique that evaluates
> constant expressions at compile time instead of calculating them at
> runtime.


Another example:

365 * 24 * 60

can be calculated ahead of time:

525,600


💡 The general idea:

Instead of making the CPU perform a calculation every time at runtime,
the compiler performs the calculation earlier when the result is already
known.


/* ================================================================================================
   ⚠️ THE PROBLEM WITH COMPILATION
   ================================================================================================

If we want the compiler to perform MORE analysis and MORE sophisticated
optimizations:

More analysis
      ↓
More optimization
      ↓
More compilation work
      ↓
⏳ Longer startup time


There can also be additional memory/work costs.

And there's another problem:

🤔 What if we spend time optimizing code that is never actually used?

For example:

A huge application
      ↓
Compiler analyzes everything
      ↓
Optimizes everything
      ↓
User only uses 10% of the application


Some optimization work may have been unnecessary.


So traditionally:

🏗️ Compilation

❌ Slower startup
✅ Potentially better optimized execution


/* ================================================================================================
   ⚖️ INTERPRETER vs COMPILER
   ================================================================================================

┌─────────────────────┬──────────────────────┬──────────────────────────┐
│                     │ 🔹 Interpreter       │ 🏗️ Compiler              │
├─────────────────────┼──────────────────────┼──────────────────────────┤
│ Startup             │ 🚀 Fast              │ 🐢 Slower                │
│ Optimization        │ Limited initially    │ More opportunity         │
│ Execution            │ Can be slower        │ Can be faster            │
│ Work                 │ During execution     │ Before/while execution  │
└─────────────────────┴──────────────────────┴──────────────────────────┘


🎯 Traditional mental model:

Interpreter
→ Fast startup, less optimization.

Compiler
→ More upfront work, potentially better optimized code.


/* ================================================================================================
   🇯🇸 SO... IS JAVASCRIPT INTERPRETED OR COMPILED?
   ================================================================================================

🎯 Popular interview question:

"Is JavaScript an interpreted language or a compiled language?"


❌ Don't simply answer:

"JavaScript is interpreted."


❌ And don't simply answer:

"JavaScript is compiled."


✅ Modern JavaScript engines use a combination of interpretation and
JIT compilation.


🔥 JIT = Just-In-Time Compilation


The key idea:

Compilation happens DURING runtime rather than requiring the entire
program to be compiled into optimized machine code before execution.


/* ================================================================================================
   🔥 JIT — JUST-IN-TIME COMPILATION
   ================================================================================================

Instead of:

📝 Source Code
      ↓
🏗️ Compile EVERYTHING
      ↓
⚙️ Execute


Modern engines can do something more dynamic:

📝 Source Code
      ↓
🔍 Parse
      ↓
🌳 AST
      ↓
⚡ Start executing quickly
      ↓
🔥 Identify frequently executed code
      ↓
🏗️ Compile/optimize hot code
      ↓
🚀 Faster execution


This gives the engine the ability to:

✅ Start relatively quickly.
✅ Observe what the program is actually doing.
✅ Focus optimization effort on frequently executed code.
✅ Avoid spending as much optimization effort on code that is never used.


/* ================================================================================================
   📖 JIT ANALOGY — TRANSLATING A BOOK
   ================================================================================================

Imagine you have a book written in another language.

Option 1️⃣ — Translate the entire book first:

📖 Entire Book
      ↓
🌍 Translate Everything
      ↓
📚 Complete Translation
      ↓
👤 User starts reading


✅ Advantage:
The entire book is ready.

❌ Disadvantage:
The user has to wait before reading anything.


--------------------------------------------------

Option 2️⃣ — Translate page by page:

📖 Page 1
      ↓
🌍 Translate
      ↓
👤 Read

📖 Page 2
      ↓
🌍 Translate
      ↓
👤 Read

...


✅ Advantage:
The user can start reading quickly.

❌ Disadvantage:
Translation work continues while the user is reading.


--------------------------------------------------

🔥 JIT — A smarter combination:

Start translating quickly
      ↓
Observe what gets read frequently
      ↓
Identify important/frequently used parts
      ↓
Spend more effort optimizing those parts
      ↓
🚀 Make frequently used parts faster


This is roughly the idea behind JIT compilation.


/* ================================================================================================
   🧠 JIT = INTERPRETATION + COMPILATION
   ================================================================================================

A simplified mental model:

🔹 Interpretation
→ Helps with relatively fast startup.

🏗️ Compilation
→ Allows more aggressive optimization.

🔥 JIT
→ Combines runtime execution with runtime compilation/optimization.


So:

📝 JavaScript
      ↓
🔍 Parse
      ↓
🌳 AST
      ↓
⚡ Start executing
      ↓
🔥 Detect hot code
      ↓
🏗️ Optimize/compile hot code
      ↓
🚀 Faster execution


💡 IMPORTANT:

JIT is not simply:

"Interpreter + Compiler running independently."

Modern engines have sophisticated pipelines involving multiple stages,
profiling, optimization, deoptimization, and different internal
representations.

This diagram is a learning model, not a complete implementation.


/* ================================================================================================
   🔥 WHY "HOT CODE" MATTERS
   ================================================================================================

Consider:

function calcPrice(price, tax) {
    return price + tax;
}

for (let i = 0; i < 1_000_000; i++) {
    calcPrice(i, 10);
}


The engine observes that:

calcPrice()

is being executed repeatedly.

Therefore, it becomes a good candidate for optimization.

📌 HOT CODE
→ Code that executes frequently enough to become a worthwhile
  optimization target.


This is one of the major advantages of JIT:

> The engine can use information gathered during actual execution to
> decide what code is worth optimizing.


/* ================================================================================================
   🎯 INTERVIEW NOTES
   ================================================================================================

Q: What is an interpreter?

✅ A program that executes instructions by reading and processing them
during runtime, allowing execution to start without compiling the entire
program into optimized machine code first.


--------------------------------------------------

Q: What is a compiler?

✅ A program that translates source code into another form, often machine
code or an intermediate representation, before or during execution.


--------------------------------------------------

Q: Why can interpretation provide faster startup?

Because the engine can begin executing without first spending a large
amount of time compiling and optimizing the entire program.


--------------------------------------------------

Q: Why can compilation produce faster execution?

Because the compiler can analyze code and apply optimizations before or
during execution, producing more efficient executable code.


--------------------------------------------------

Q: Is JavaScript interpreted or compiled?

✅ Modern JavaScript engines use a combination of interpretation and
JIT compilation.

The exact implementation differs between engines.


--------------------------------------------------

Q: What does JIT mean?

✅ Just-In-Time compilation.

It means code can be compiled/optimized during program execution,
allowing the engine to use runtime information to focus optimization
on code that is actually important or frequently executed.


--------------------------------------------------

Q: What is hot code?

🔥 Code that executes frequently and becomes a candidate for optimization.


--------------------------------------------------

Q: What is constant folding?

✅ A compiler optimization where an expression made entirely from known
constants is evaluated ahead of runtime.

Example:

10 + 20

→ 30


/* ================================================================================================
   🌳 WHERE WE ARE IN THE ENGINE
   ================================================================================================

We've now covered:

1️⃣ 🔍 Parser
   → Reads and analyzes the source code.

2️⃣ 🌳 AST
   → Represents the program's syntax as a tree.

3️⃣ ⚙️ Interpreter / Bytecode
   → Next step toward actually executing the program.

4️⃣ 🔥 JIT / Optimization
   → Frequently executed code can be optimized during runtime.


Our simplified journey is now:

📝 Source Code
      ↓
🔹 Tokenization
      ↓
🔍 Parsing
      ↓
🌳 AST
      ↓
⚡ Interpreter
      ↓
📦 Bytecode
      ↓
🔥 JIT / Optimization
      ↓
💻 Machine Code
      ↓
🧠 CPU


📌 The next major component to understand is:

🔥 IGNITION

In V8, Ignition is the interpreter responsible for generating and
executing bytecode.

We'll dive into exactly what bytecode is and why V8 uses it next,
Insha'Allah.
*/
