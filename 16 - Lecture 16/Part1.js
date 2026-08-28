/* =================================================================================================
   🚀 JavaScript Engine (Part 1) — Introduction
   =================================================================================================

📌 Why are we studying the JavaScript Engine?

In this session (and possibly the next one), we'll dive deep into how the
JavaScript Engine works.

Instead of just writing JavaScript code, we'll understand what actually
happens behind the scenes when the engine executes our code.

Example:

console.log("Hello from the other side");

🤔 What actually happens after writing this line?

- Does the computer understand `console`?
- Does it understand `log()`?
- Does it understand the string we wrote?

❌ No.

Computers only understand Machine Code (binary: 0s and 1s).

So the important question becomes:

➡️ How is JavaScript (a human-readable language) converted into Machine Code?


/* ================================================================================================
   🤔 Who Executes JavaScript?
   ================================================================================================

Many beginners think that JavaScript executes itself.

❌ That's not true.

JavaScript (ECMAScript) is only a specification.

ECMAScript is simply a document that defines the language rules, such as:

• let / const / var
• if / else
• loops
• functions
• classes
• objects
• promises
• modules
• ...etc.

It defines:
✅ Syntax
✅ Language behavior
✅ Built-in objects
✅ Rules

But it DOES NOT execute code.

💡 Think of ECMAScript as a recipe or rulebook.
Someone still has to read those rules and execute them.

That "someone" is the JavaScript Engine.
*/

/* ================================================================================================
   ⚙️ The JavaScript Engine
   ================================================================================================

The JavaScript Engine is the actual program responsible for executing
JavaScript code.

Its job is to:

1. Read JavaScript source code.
2. Parse it.
3. Convert it into Machine Code
   (or another optimized representation, depending on the engine).
4. Execute it on the CPU.

Flow:

JS File
   │
   ▼
JavaScript Engine
   │
   ▼
Machine Code
   │
   ▼
CPU

💡 The CPU never understands JavaScript directly.

It only understands Machine Code (binary instructions).
*/

/* ================================================================================================
   🌐 Is the Browser Responsible?
   ================================================================================================

Many developers initially think the browser executes JavaScript.

❌ Not exactly.

The browser provides the environment.

Inside the browser lives a JavaScript Engine, and THAT engine executes
the JavaScript.

A simple proof:

JavaScript also runs in Node.js, where there is no browser.

Therefore:

Browser ❌
JavaScript Engine ✅
*/

/* ================================================================================================
   🖥️ JavaScript Runs in Different Environments
   ================================================================================================

The same JavaScript language can run in different environments.

Example:

🌍 Browser Environment
----------------------

Provides extra features like:

• DOM
• BOM
• Fetch API
• Timers (setTimeout, setInterval)
• Browser APIs
• Web APIs

These are NOT part of JavaScript itself.

The JavaScript Engine communicates with these APIs when needed.


🖥️ Node.js Environment
----------------------

Provides different capabilities such as:

• File System (fs)
• Operating System APIs
• Network APIs
• Process APIs
• Streams
• Buffers

Node.js also uses a JavaScript Engine to execute JavaScript.

💡 The language is the same.
The environment is what changes.
*/

/* ================================================================================================
   🌍 Different Browsers, Different Engines
   ================================================================================================

Every major browser has its own JavaScript Engine.

Google Chrome
Microsoft Edge
Node.js
        ▼
       V8

Firefox
        ▼
   SpiderMonkey

Safari
        ▼
JavaScriptCore (JSC)

💡 Although all engines implement the ECMAScript specification,
their internal implementation and optimizations are different.

As a result, execution speed and performance can differ between browsers.
*/

/* ================================================================================================
   🎯 Interview Question
   ================================================================================================

Q:
Why can the exact same JavaScript code run faster in Chrome than in Firefox?

Answer:

Because each browser has its own JavaScript Engine.

Each engine has its own:

• Parser
• Compiler
• Optimizer
• Garbage Collector
• Internal optimizations

Even though they all follow the ECMAScript specification,
their implementation details are different.

Therefore, performance can vary.
*/

/* ================================================================================================
   ⚠️ Important Clarification
   ================================================================================================

You may hear statements like:

"JavaScript is interpreted."

or

"JavaScript is compiled."

Modern JavaScript Engines are more sophisticated than that.

Most modern engines (such as V8) use:

🚀 Just-In-Time (JIT) Compilation

We'll study this process in detail later.

For now, it's enough to know that:

JavaScript Engine
        ▼
Transforms JavaScript into executable machine instructions.
*/

/* ================================================================================================
   🔍 Keep This in Mind
   ================================================================================================

The JavaScript Engine does NOT work alone.

Later, when studying:

• Execution Context
• Call Stack
• Memory Heap
• Web APIs
• Callback Queue
• Microtask Queue
• Event Loop

You'll see how the Engine communicates with the surrounding environment to
execute both synchronous and asynchronous JavaScript.

Everything starts with understanding the Engine first.
*/

/* ================================================================================================
   🧠 Summary
   ================================================================================================

✅ JavaScript (ECMAScript) is only a language specification.
✅ JavaScript does NOT execute itself.
✅ A JavaScript Engine executes the code.
✅ The engine converts JavaScript into machine instructions the CPU can execute.
✅ Every browser has its own JavaScript Engine.
✅ Chrome, Edge, and Node.js use V8.
✅ Firefox uses SpiderMonkey.
✅ Safari uses JavaScriptCore.
✅ The JavaScript language stays the same, but the environment (Browser vs Node.js) provides different APIs.
*/
