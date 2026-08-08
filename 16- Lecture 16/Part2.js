/* =================================================================================================
   ⚙️ Anatomy of the V8 JavaScript Engine
   =================================================================================================

📌 V8 is the JavaScript Engine developed by Google.

It powers:

✅ Google Chrome
✅ Microsoft Edge (Chromium)
✅ Node.js

Its primary goal is to execute JavaScript as fast and efficiently as possible.


/* ================================================================================================
   🏗️ High-Level Architecture
   ================================================================================================

                  JavaScript Source Code
                            │
                            ▼
                        📝 Parser
                            │
                            ▼
                  🌳 Abstract Syntax Tree (AST)
                            │
                            ▼
                 🔥 Ignition (Interpreter)
                            │
                            ▼
                       Bytecode
                            │
                            ▼
            🚀 TurboFan (Optimizing Compiler)
                            │
                            ▼
                     Machine Code
                            │
                            ▼
                           CPU


Meanwhile, V8 also manages:

🗂️ Heap
→ Stores objects and dynamically allocated memory.

📚 Call Stack
→ Keeps track of function execution.

🗑️ Garbage Collector
→ Frees memory that is no longer needed.
*/

/* ================================================================================================
   🔄 The Journey of JavaScript Code
   ================================================================================================

JavaScript Source Code
        │
        ▼
Parser
        │
        ▼
AST (Abstract Syntax Tree)
        │
        ▼
Ignition Interpreter
        │
        ▼
Bytecode
        │
        ▼
TurboFan Optimization (when beneficial)
        │
        ▼
Machine Code
        │
        ▼
CPU

💡 This is the general execution pipeline inside modern V8.

We'll study each stage separately in the upcoming lessons.
*/

/* ================================================================================================
   ❓ Why Doesn't V8 Convert Everything Directly to Machine Code?
   ================================================================================================

A common question is:

"If machine code is the fastest, why doesn't V8 immediately compile every
JavaScript file into machine code?"

Because JavaScript is a highly dynamic language.

Examples:

• Variable types can change.
• Functions can be reassigned.
• Objects can gain or lose properties at runtime.
• Code can even generate new code (e.g., eval()).

Compiling everything upfront would:

❌ Take more startup time.
❌ Waste CPU resources.
❌ Compile code that might never execute.

Instead, V8 follows a smarter strategy.
*/

/* ================================================================================================
   🚀 V8's Optimization Strategy
   ================================================================================================

The execution generally works like this:

1️⃣ Parse the JavaScript source code.
2️⃣ Convert it into an AST.
3️⃣ Ignition quickly generates Bytecode.
4️⃣ Execute the Bytecode immediately.
5️⃣ Monitor which functions run frequently ("hot" code).
6️⃣ TurboFan optimizes only the hot code.
7️⃣ Optimized Machine Code is executed for maximum performance.

💡 This approach gives:

✅ Fast startup
✅ Good memory usage
✅ Excellent runtime performance

Instead of optimizing everything, V8 optimizes only the code that benefits
from optimization.
*/

/* ================================================================================================
   🧠 Main Components (Brief Overview)
   ================================================================================================

📝 Parser
---------
Reads JavaScript source code and checks whether the syntax is valid.

🌳 AST (Abstract Syntax Tree)
-----------------------------
A tree-like representation of your code that is much easier for the engine
to analyze than plain text.

🔥 Ignition
-----------
V8's Interpreter.

Its job is to convert the AST into Bytecode and begin execution quickly.

🚀 TurboFan
-----------
V8's Optimizing Compiler.

It analyzes frequently executed code and converts it into highly optimized
Machine Code.

🗂️ Heap
--------
The memory area where objects, arrays, and other reference values are stored.

📚 Call Stack
-------------
Keeps track of function calls and the order in which they execute.

🗑️ Garbage Collector
--------------------
Automatically frees memory that is no longer reachable, helping prevent
memory leaks.
*/

/* ================================================================================================
   🎯 Interview Notes
   ================================================================================================

Q: What JavaScript Engine does Chrome use?

✅ V8.

--------------------------------------------------

Q: What are the main components of V8?

Typical answer:

• Parser
• AST
• Ignition (Interpreter)
• TurboFan (Optimizing Compiler)
• Heap
• Call Stack
• Garbage Collector

--------------------------------------------------

Q: Does V8 immediately compile every JavaScript file into Machine Code?

❌ No.

It first generates Bytecode using Ignition.

Only frequently executed ("hot") code is later optimized into Machine Code
by TurboFan.

--------------------------------------------------

Q: Why is this approach faster?

Because compiling everything immediately would waste time and resources.

V8 optimizes only the code that actually needs optimization.
*/

/* ================================================================================================
   ⚠️ Important Clarifications
   ================================================================================================

✔️ "99% of code is not directly converted into Machine Code."

This statement is conceptually correct for learning purposes.

More accurately:

JavaScript is generally executed as Bytecode first.

Only code that V8 identifies as "hot" is compiled into optimized Machine Code.

Some internal optimizations may occur depending on the engine version, but
this mental model is accurate for understanding modern V8.

💡 We'll later study each component (Parser, AST, Ignition, TurboFan, Heap,
Call Stack, and Garbage Collector) in much greater detail.
*/
