/* =================================================================================================
   🚀 FUNCTION INLINING & CONSTANT FOLDING
   =================================================================================================

These are examples of optimizations that a JavaScript engine's
optimizing compiler may perform.

⚠️ Important:

These optimizations happen on the engine's INTERNAL representation /
generated machine code.

❌ The original JavaScript file is NOT modified.


/* ================================================================================================
   🔹 1. FUNCTION INLINING
   ================================================================================================

❓ What is Function Inlining?

Function inlining is an optimization where the compiler replaces a
function call with the function's body.

Example:

function multiply(number) {
  return number * 2;
}

function calculate(price) {
  return multiply(price) + 10;
}


Conceptually, the optimizer can transform the optimized version into:

function calculate(price) {
  return price * 2 + 10;
}


So instead of:

calculate(price)
      ↓
call multiply(price)
      ↓
enter multiply()
      ↓
return number * 2
      ↓
continue calculate()


the optimized code can conceptually behave like:

calculate(price)
      ↓
price * 2
      ↓
+ 10


🎯 Why?

To avoid the overhead associated with a separate function call.

A function call can involve work such as:

📦 Creating/setting up an execution frame
📍 Passing arguments
🔄 Transferring control to the function
↩️ Returning to the caller


So if a small function is called very frequently, removing that
overhead can improve performance.


⚠️ IMPORTANT:

The above is a CONCEPTUAL representation.

The optimizer does not necessarily literally rewrite your JavaScript
source file from:

multiply(price)

to:

price * 2


Instead, it optimizes its internal representation / generated code.


/* ================================================================================================
   🧠 WHY IS INLINING AN OPTIMIZATION?
   ================================================================================================

Original:

function multiply(number) {
  return number * 2;
}

function calculate(price) {
  return multiply(price) + 10;
}


Without inlining:

📞 Function call
      ↓
multiply()
      ↓
number * 2
      ↓
return
      ↓
+ 10


With inlining:

price * 2 + 10


💡 The optimizer has effectively removed the function-call overhead.

This can also give the optimizer more context, potentially allowing
additional optimizations afterward.

🔥 Inlining is therefore not only about "saving a function call."

It can expose more code to the optimizer and enable further
optimizations.


/* ================================================================================================
   ⚠️ DOES V8 ALWAYS INLINE FUNCTIONS?
   ================================================================================================

❌ No.

Inlining is an optimization decision, not a rule.

The engine considers many factors, such as:

📏 Function size
🔥 How frequently the function is used
📊 Runtime feedback
🧠 Type information
💰 Compilation cost
🎯 Expected performance benefit
⚠️ Whether inlining is safe


So don't memorize:

"Small function = always inline."

Instead:

✅ "The optimizing compiler may inline a function when it determines
that doing so is beneficial and safe."


/* ================================================================================================
   🔹 2. CONSTANT FOLDING
   ================================================================================================

Another compiler optimization is:

🧮 Constant Folding


Example:

const res = 10 * 20 + 10;


The expression contains values that are known constants.

The optimizer/compiler can calculate:

10 * 20 + 10
    ↓
200 + 10
    ↓
210


Conceptually, the optimized representation can use:

const res = 210;


instead of performing the calculation again at runtime.


🎯 Definition:

> Constant folding is a compiler optimization that evaluates an
> expression whose operands are known constants ahead of runtime.


Another example:

const seconds = 60 * 60;

can conceptually become:

const seconds = 3600;


This saves the runtime from performing that calculation.


/* ================================================================================================
   🕐 WHEN DOES CONSTANT FOLDING HAPPEN?
   ================================================================================================

Conceptually:

Without constant folding:

📝 Code
 ↓
⚙️ Runtime
 ↓
10 * 20 + 10
 ↓
210


With constant folding:

📝 Code
 ↓
🔍 Compiler / Optimizer
 ↓
10 * 20 + 10 → 210
 ↓
⚙️ Runtime uses the computed result


⚠️ In a modern JIT engine, don't interpret "during compilation" as
necessarily meaning "before the JavaScript program starts."

Remember:

🔥 JIT compilation happens during runtime.

So an optimization such as constant folding can happen as part of
JIT compilation while the program is running.


/* ================================================================================================
   ❓ DOES THE ENGINE MODIFY THE ORIGINAL JS FILE?
   ================================================================================================

❌ NO.


Suppose your source file contains:

const res = 10 * 20 + 10;


V8 does NOT open your `.js` file and change it to:

const res = 210;


Your original source code remains:

const res = 10 * 20 + 10;


Instead:

📝 Original JS
      ↓
🔍 Parse
      ↓
🌳 AST / Internal representations
      ↓
📜 Bytecode
      ↓
🔥 Runtime execution
      ↓
🚀 Optimization
      ↓
💻 Optimized machine code


The optimization happens internally inside the engine.


🎯 This is a VERY important distinction:

SOURCE CODE ≠ OPTIMIZED INTERNAL CODE


Your JavaScript file stays untouched.


/* ================================================================================================
   ⚠️ DOES EVERY CONSTANT EXPRESSION GET FOLDED?
   ================================================================================================

❌ Not necessarily.

You should NOT think:

"Every expression containing constants MUST be constant-folded."


Optimization decisions depend on the engine and the specific situation.

The optimizer may consider:

🧠 What information is known?
📊 Runtime behavior
⚠️ Possible side effects
💰 Cost of optimization
🎯 Expected benefit
🔒 Whether the transformation is safe


For example, an expression involving a function call may have side
effects:

const result = getValue() + 10;


The engine cannot simply assume:

getValue() → some fixed value


because calling the function itself may change program state.


/* ================================================================================================
   🧠 FUNCTION INLINING vs CONSTANT FOLDING
   ================================================================================================

They are different optimizations:


📌 FUNCTION INLINING

Original:

function double(x) {
  return x * 2;
}

double(10);


Conceptually:

10 * 2


The optimizer removes the need for the separate function call.


--------------------------------------------------

📌 CONSTANT FOLDING

Original:

10 * 2


Optimized:

20


The optimizer evaluates a constant expression ahead of the point
where it would otherwise be calculated.


--------------------------------------------------

🔥 They can also work TOGETHER.

Example:

function double(x) {
  return x * 2;
}

const result = double(10) + 5;


Conceptually:

1️⃣ Inline `double(10)`

      ↓

10 * 2 + 5

2️⃣ Constant fold

      ↓

20 + 5

3️⃣ Result:

25


⚠️ This is a conceptual example of what an optimizer may be able to
achieve. The actual V8 optimization pipeline is more complicated.


/* ================================================================================================
   🎯 INTERVIEW NOTES
   ================================================================================================

Q: What is function inlining?

A:

> Function inlining is an optimization where the compiler replaces a
> function call with the function's body, when doing so is considered
> beneficial and safe.


--------------------------------------------------

Q: Why does function inlining improve performance?

A:

> It can remove function-call overhead and can expose more code to the
> optimizer, potentially enabling additional optimizations.


--------------------------------------------------

Q: Does function inlining modify the original JavaScript source code?

❌ No.

> The engine optimizes its internal representation/generated code;
> the original source file remains unchanged.


--------------------------------------------------

Q: What is constant folding?

A:

> Constant folding is an optimization that evaluates expressions made
> from known constants ahead of the point where they would otherwise be
> evaluated at runtime.


Example:

10 * 20 + 10

↓

210


--------------------------------------------------

Q: Does constant folding always happen?

❌ No.

> It is an optimization decision. The engine applies it when the
> transformation is safe and worthwhile.


--------------------------------------------------

Q: Does "during compilation" mean before the application starts?

⚠️ Not necessarily in JavaScript.

> Modern engines use JIT compilation, so compilation and optimization
> can happen during runtime.


/* ================================================================================================
   🧩 BIG PICTURE
   ================================================================================================

JavaScript source:

function multiply(number) {
  return number * 2;
}

function calculate(price) {
  return multiply(price) + 10;
}


             📝 Source Code
                   │
                   ▼
                🌳 AST
                   │
                   ▼
              📜 Bytecode
                   │
                   ▼
            🔥 Runtime Execution
                   │
                   ▼
             📊 Feedback
                   │
                   ▼
            🔥 Hot Code
                   │
                   ▼
          🚀 Optimizing Compiler
                   │
            ┌──────┴────────┐
            │               │
            ▼               ▼
      📞 Function       🧮 Constant
        Inlining           Folding
            │               │
            └──────┬────────┘
                   ▼
          💻 Optimized Machine Code
                   │
                   ▼
                  CPU


🎯 MAIN IDEA:

The JavaScript engine doesn't change your source code.

It builds internal representations and may optimize those internal
representations/generated machine code to make frequently executed
code faster.

🔥 Examples:

Function Inlining
→ Remove unnecessary function-call overhead.

Constant Folding
→ Pre-compute expressions whose values are known.

And these optimizations are only two examples of the many optimizations
a modern JavaScript engine can perform.
*/
