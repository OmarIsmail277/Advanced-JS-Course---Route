/* =================================================================================================
   📝 Parser — The First Stage of the JavaScript Engine
   =================================================================================================

📌 The Parser is the first component that processes your JavaScript code.

❌ Its job is NOT to execute the code.
❌ Its job is NOT to convert JavaScript into Machine Code.

Instead, its responsibilities are:

✅ Read the source code.
✅ Break it into meaningful pieces (Tokens).
✅ Check whether the syntax follows JavaScript grammar.
✅ Build an AST (Abstract Syntax Tree) if the code is valid.

Only after all of this can the next stage begin.


/* ================================================================================================
   📄 Source Code
   ================================================================================================

Example:

const username = "Route";

At this point, JavaScript is simply plain text.

The Parser's job is to understand the meaning of this text before execution.
*/

/* ================================================================================================
   🔹 Step 1: Tokenization (Lexical Analysis)
   ================================================================================================

📌 The first job of the Parser is called:

• Tokenization
• Lexical Analysis

Both terms refer to the same process.

The source code is broken into small meaningful units called Tokens.

Example:

const age = 33;

becomes:

const
age
=
33
;

Instead of one long string of text, the engine now has individual pieces that
it can understand.
*/

/* ================================================================================================
   🧩 What is a Token?
   ================================================================================================

📌 A Token is the smallest meaningful unit in JavaScript syntax.

Example:

const age = 33;

Produces these tokens:

const  → Keyword
age    → Identifier
=      → Assignment Operator
33     → Numeric Literal
;      → Punctuation (Semicolon)

💡 The engine doesn't treat these as plain text.

Instead, each token carries metadata describing:

• Its type
• Its role
• Its position in the source code

This metadata helps later stages understand the code structure.

*/
/*
📌 Tokenization (Lexical Analysis)

The Parser converts the source code from plain text into a sequence of
typed tokens.

Each token is not just text—it also has a description (metadata), such as:

• Keyword
• Identifier
• Operator
• Literal
• Punctuation

This allows the Parser to understand what each piece of code represents
before checking their relationships during the Parsing phase.
*/

/* ================================================================================================
   🎯 Example
   ================================================================================================

function add(a, b) {
    return a + b;
}

Generated tokens:

function   → Keyword
add        → Identifier
(          → Punctuation
a          → Identifier
,          → Punctuation
b          → Identifier
)          → Punctuation
{          → Punctuation
return     → Keyword
a          → Identifier
+          → Arithmetic Operator
b          → Identifier
;          → Punctuation
}          → Punctuation
*/

/* ================================================================================================
   ⚪ What About Spaces?
   ================================================================================================

Example:

const age = 33;

The spaces improve readability for humans.

However, most whitespace (spaces, tabs, line breaks) is NOT represented as
tokens because it has no meaning for JavaScript syntax.

These are usually ignored during tokenization.

💡 There are exceptions.

Certain line breaks can affect JavaScript behavior because of:

👉 Automatic Semicolon Insertion (ASI)

We'll study ASI in detail later.
*/

/* ================================================================================================
   ⚠️ Why Semicolons Matter (IIFE Example)
   ================================================================================================

Consider two consecutive Immediately Invoked Function Expressions (IIFEs):

(function () {})();

(function () {})();

Without a semicolon between them, JavaScript may treat them as one continuous
expression, leading to a SyntaxError.

Example:

(function () {})()
(function () {})();

❌ SyntaxError

Correct:

(function () {})();
(function () {})();

💡 This happens because the parser needs clear boundaries between statements.

This is one of the classic situations where semicolons prevent parsing issues.
*/

/* ================================================================================================
   🔹 Step 2: Parsing (Syntactic Analysis)
   ================================================================================================

After tokenization, the Parser still doesn't understand the relationships
between the tokens.

It now performs:

📌 Parsing (Syntactic Analysis)

Its job is to verify that the token order follows JavaScript grammar and to
build the code structure.

Example:

const result = 10 + 20;

The parser understands that:

• const result = ...
        ↓
Variable Declaration

• 10 + 20
        ↓
Expression

• 10 and 20
        ↓
Operands

• +
        ↓
Operator

It now understands how every token relates to the others.
*/

/* ================================================================================================
   🌳 AST (Abstract Syntax Tree)
   ================================================================================================

After successful parsing, the Parser produces an:

🌳 Abstract Syntax Tree (AST)

The AST is a tree representation of your program.

Instead of storing plain text, it stores the logical structure of the code.

Example:

const result = 10 + 20;

The AST understands something like:

VariableDeclaration
│
├── Identifier (result)
│
└── BinaryExpression
      ├── 10
      ├── +
      └── 20

💡 Later stages (Ignition and TurboFan) work with the AST, NOT with the raw
source code.
*/

/* ================================================================================================
   ❌ Syntax Errors
   ================================================================================================

The Parser also validates JavaScript grammar.

Valid:

const age = 33;

Invalid:

const = age 33;

❌ SyntaxError

Another example:

if (true {
    console.log("Hello");
}

❌ Missing closing parenthesis.

The parser detects the error before execution starts.
*/

/* ================================================================================================
   🚫 Parsing Happens BEFORE Execution
   ================================================================================================

Consider:

console.log("Start");

function test() {
    console.log("Inside");
}

console.log("End");

Suppose there is a syntax error inside the file:

function test() {
    console.log("Inside")
}

)

Even though "Start" appears first...

❌ Nothing will be printed.

Why?

Because JavaScript first parses the ENTIRE file.

If parsing fails anywhere:

❌ No execution begins.
❌ The Call Stack is never created for this script.
❌ Execution Contexts are never entered.

The engine stops immediately and throws a SyntaxError.
*/

/* ================================================================================================
   📈 Complete Flow So Far
   ================================================================================================

Source Code
      │
      ▼
Tokenization (Lexical Analysis)
      │
      ▼
Tokens
      │
      ▼
Parsing (Syntactic Analysis)
      │
      ▼
AST (Abstract Syntax Tree)
      │
      ▼
Next Stage (Ignition Interpreter)

We're still in the parsing phase.

Nothing has been executed yet.
*/

/* ================================================================================================
   🎯 Interview Notes
   ================================================================================================

Q: What is the Parser's main job?

✅ Read the source code, tokenize it, validate its syntax, and generate the AST.

--------------------------------------------------

Q: Does the Parser execute JavaScript?

❌ No.

Execution begins later in the engine pipeline.

--------------------------------------------------

Q: What is Tokenization?

Breaking source code into meaningful tokens.

--------------------------------------------------

Q: What is Parsing (Syntactic Analysis)?

Checking whether the token sequence follows JavaScript grammar and building
the AST.

--------------------------------------------------

Q: What happens if the Parser encounters a SyntaxError?

The engine immediately stops.

No code in that script is executed.

--------------------------------------------------

Q: What is an AST?

A tree representation of the program that describes its structure and
relationships instead of raw text.
*/

/* ================================================================================================
   💡 Summary
   ================================================================================================

✅ JavaScript source code starts as plain text.
✅ The Parser is the first stage of the JavaScript Engine.
✅ Step 1: Tokenization (Lexical Analysis) creates tokens.
✅ A Token is the smallest meaningful unit in JavaScript.
✅ Step 2: Parsing (Syntactic Analysis) validates JavaScript grammar.
✅ If the syntax is valid, the Parser builds an AST.
✅ If a SyntaxError is found, execution never starts.
✅ The AST is passed to the next stage of the engine (Ignition).
*/
