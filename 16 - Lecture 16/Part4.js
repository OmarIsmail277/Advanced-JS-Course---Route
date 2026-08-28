/* =================================================================================================
   ⚠️ Syntax Error vs Runtime Error
   =================================================================================================

🎯 A very popular interview question:

"What is the difference between a Syntax Error and a Runtime Error?"


/* ================================================================================================
   ❌ Syntax Error
   ================================================================================================

A Syntax Error happens during the Parsing phase, BEFORE the code starts
executing.

Example:

console.log("start");

const user = ;

❌ SyntaxError

Why?

The Parser examines the source code and discovers that:

const user = ;

does not follow JavaScript's grammar.

Therefore:

Source Code
    ↓
Tokenization
    ↓
Parsing
    ↓
❌ Syntax Error
    ↓
🚫 Execution never starts

Even though:

console.log("start");

appears before the error, "start" will NOT be logged.

💡 The entire script must successfully pass the parsing phase before
execution can begin.
*/

/* ================================================================================================
   💥 Runtime Error
   ================================================================================================

A Runtime Error happens AFTER the code has successfully passed parsing
and execution has already started.

Example:

console.log("start"); // ✅ "start" is logged

const user = null;

console.log(user.name); // ❌ TypeError

console.log("After"); // ❌ Never reached

Why?

The syntax is completely valid:

const user = null;
console.log(user.name);

So the Parser doesn't find a Syntax Error.

The code starts executing normally:

console.log("start");
        ↓
"start" is logged

Then:

user.name
   ↓
user is null
   ↓
❌ TypeError


📌 The error occurs at RUNTIME because the problem can only be discovered
when this particular line is actually executed.
*/

/* ================================================================================================
   🔄 The Main Difference
   ================================================================================================

❌ Syntax Error
----------------

When?
→ During Parsing

Before or after execution?
→ BEFORE execution

What happens to previous code?
→ Nothing executes

Example:

console.log("start");
const user = ;

❌ "start" is NOT logged.


💥 Runtime Error
----------------

When?
→ During Execution

Before or after execution?
→ AFTER execution has started

What happens to previous code?
→ It executes normally until the error is reached.

Example:

console.log("start");
const user = null;
console.log(user.name);

✅ "start" is logged.
❌ Then TypeError occurs.
*/

/* ================================================================================================
   🎯 Interview-Friendly Answer
   ================================================================================================

Q: What is the difference between a Syntax Error and a Runtime Error?

✅ Syntax Error:
An error detected during the parsing phase because the code doesn't follow
JavaScript's syntax/grammar. Execution of the script doesn't begin.

✅ Runtime Error:
An error that occurs while valid JavaScript code is being executed.
The code before the error can execute normally, but execution stops when
the error is encountered.


/* ================================================================================================
   🧠 Important Example
   ================================================================================================

Syntax Error:

console.log("A");
const x = ;
console.log("B");

Output:

❌ Nothing

Because parsing fails before execution begins.


Runtime Error:

console.log("A");
const x = null;
console.log(x.name);
console.log("B");

Output:

A
❌ TypeError

"B" is never reached because execution stopped at the error.


/* ================================================================================================
   📚 Summary — Parser Section
   ================================================================================================

We've now covered the first major stage of the JavaScript Engine:

                    📝 Source Code
                          │
                          ▼
                🔹 Tokenization
                          │
                          ▼
                🧩 Typed Tokens
                          │
                          ▼
                   🔍 Parsing
                (Syntax Analysis)
                          │
                  ┌───────┴───────┐
                  │               │
              ❌ Error           ✅ Valid
                  │               │
            SyntaxError           ▼
                              🌳 AST
                                  │
                                  ▼
                           🔥 Ignition


📌 Tokenization
→ Converts source code from plain text into tokens.

📌 Token Description / Classification
→ Each token is identified by its role, such as Keyword, Identifier,
  Operator, Literal, etc.

📌 Parsing
→ Checks the relationships between tokens against JavaScript grammar.

📌 Syntax Error
→ Found during parsing → execution does not begin.

📌 AST
→ If parsing succeeds, the source code is represented as an
  Abstract Syntax Tree.

🚀 The AST is what we'll explore next.
*/
