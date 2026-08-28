/* =================================================================================================
   🚨 Parsing ≠ Execution
   =================================================================================================

🧠 For the 100,000th time:

                    ❌ Parsing is NOT Execution.

The Parser analyzes the source code BEFORE the JavaScript code starts
executing.

One of the strongest pieces of evidence is a SyntaxError.

If the Parser finds an error:

❌ Execution never starts.
❌ Previous statements are not executed.


/* ================================================================================================
   🧪 Example 1 — Runtime Error
   ================================================================================================

const x = 10;

if (x > 5) {
    console.log(y);
}

🤔 Will the Parser stop because `y` was never declared?

❌ No.

Why?

Because this is syntactically valid JavaScript.

The Parser can understand the structure:

if (condition) {
    console.log(identifier);
}

It does NOT need to know during parsing whether `y` actually exists.

The code can successfully pass parsing:

Source Code
     ↓
Tokenization
     ↓
Parsing
     ↓
🌳 AST
     ↓
Execution
     ↓
`y` is evaluated
     ↓
❌ ReferenceError


📌 `y` being undeclared is a runtime problem, not a syntax problem.

The engine only discovers the problem when execution reaches:

console.log(y);


/* ================================================================================================
   ❌ Example 2 — Duplicate Lexical Declaration
   ================================================================================================

const x = 10;
const x = "Nour";

❌ SyntaxError: Identifier 'x' has already been declared.


Why is this a SyntaxError?

Because the code violates JavaScript's rules for lexical declarations.

The problem can be detected before the code executes.

Therefore:

Parsing / early validation
        ↓
❌ SyntaxError
        ↓
🚫 Execution doesn't begin


💡 Notice that this is different from:

const x = 10;

console.log(y);

The second example has valid syntax, but the problem is discovered when
the code is executed.


/* ================================================================================================
   ❌ Example 3 — Illegal `return`
   ================================================================================================

return 10;

❌ SyntaxError: Illegal return statement


Why?

A `return` statement is only valid inside a function body.

For example:

function test() {
    return 10; // ✅
}


But:

return 10; // ❌

is not valid in a normal Script at the top level.

The parser recognizes that the code violates JavaScript's grammar/rules
for where a `return` statement can appear.

Therefore, execution does not begin.


/* ================================================================================================
   🔍 Parsing Errors Aren't Only "Missing Tokens"
   ================================================================================================

It's important not to think that parsing only catches things like:

❌ Missing `)`
❌ Unexpected token
❌ Missing `}`

It can also detect code that violates JavaScript's syntactic rules.

Examples:

❌ Invalid declaration structure
❌ Invalid statement placement
❌ Duplicate lexical declarations
❌ Illegal `return`
❌ Other grammar-related violations


So:

📝 Tokenization
→ Breaks source code into tokens and classifies them.

🔍 Parsing / Syntactic Analysis
→ Checks whether those tokens form valid JavaScript according to the
  language grammar and constructs the AST.


/* ================================================================================================
   ⚠️ Important Distinction
   ================================================================================================

Not every error that happens "before execution" is necessarily produced by
the exact same sub-step.

The JavaScript specification has several kinds of early validation/errors,
and engines may perform some checks at different internal stages.

For our mental model:

📝 Source Code
     ↓
🔹 Tokenization
     ↓
🔍 Parsing / Syntax Analysis
     ↓
🌳 AST
     ↓
⚙️ Execution


Think of parsing as:

> "Is this code structurally and syntactically valid JavaScript?"

Not:

> "Will this code successfully run with every value?"

That second question belongs largely to execution/runtime behavior.


/* ================================================================================================
   📦 Script vs ES Module
   ================================================================================================

Another important detail:

JavaScript can be loaded as different types of code, including:

📄 Script
📦 ES Module


They have different rules.

One major difference:

📄 ES Modules are ALWAYS in Strict Mode.

Example:

"use strict";

Strict-mode rules apply automatically inside ES modules.

This means some code can behave differently, or produce an error in a
Module that would not produce the same error in a classic Script.

💡 Therefore, when analyzing JavaScript, the engine also needs to know
what kind of source it is dealing with:

Script
   vs
Module

This affects how the source code is parsed and validated.


/* ================================================================================================
   🎯 Interview Notes
   ================================================================================================

Q: Does parsing execute JavaScript?

❌ No.

Parsing analyzes the source code and builds the AST.
Execution happens later.

--------------------------------------------------

Q: If a variable is not defined, will the Parser catch it?

Usually ❌ no.

Example:

console.log(username);

The syntax is valid.

If `username` doesn't exist when execution reaches it:

❌ ReferenceError

This is a runtime error.

--------------------------------------------------

Q: Is duplicate `const` declaration a runtime error?

❌ No.

const x = 10;
const x = 20;

This is a SyntaxError because the declaration violates the rules for
lexical declarations.

--------------------------------------------------

Q: Why is `return 10;` at the top level a SyntaxError?

Because `return` is only valid in an appropriate function context.
A top-level `return` in a normal Script is illegal.

--------------------------------------------------

Q: Are Scripts and ES Modules parsed under exactly the same rules?

❌ No.

ES Modules have module-specific semantics and are always strict mode.


/* ================================================================================================
   🧠 The Big Picture — What We've Covered So Far
   ================================================================================================

We've now covered TWO major blocks:

1️⃣ 🔍 Parser
----------------

The Parser:

• Receives JavaScript source code.
• Tokenizes it.
• Classifies the tokens.
• Performs syntactic analysis.
• Validates the structure according to JavaScript grammar.
• Produces an AST when parsing succeeds.


2️⃣ 🌳 AST
-----------

The AST:

• Represents the structure of the JavaScript program as a tree.
• Allows the engine to process the program.
• Is also useful to external tools such as Babel, ESLint, Prettier,
  bundlers, and minifiers.

📌 Important:

Different tools/engines may create different AST representations.


/* ================================================================================================
   🔥 The Mental Model to Keep
   ================================================================================================

                    📝 JavaScript Source
                            │
                            ▼
                    🔹 Tokenization
                            │
                            ▼
                    🔍 Parsing
                   (Syntax Analysis)
                            │
                  ┌─────────┴─────────┐
                  │                   │
              ❌ Invalid            ✅ Valid
                  │                   │
             SyntaxError              ▼
                                  🌳 AST
                                      │
                                      ▼
                               Next Engine Stage
                                      │
                                      ▼
                                  ⚙️ Execution


🎯 The golden rule:

> Parsing determines whether the code can be structurally understood.
> Execution determines what happens when that code actually runs.

🚀 Next: We move beyond the Parser + AST and into the execution pipeline.
*/
