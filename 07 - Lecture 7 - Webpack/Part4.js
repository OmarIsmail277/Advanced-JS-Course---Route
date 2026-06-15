/*
=================================================
WEBPACK #3 - HOW A MODULE BUNDLER THINKS 🧠📦
=================================================

📌 Important Note

Before Webpack, there was a tool called:

👉 Gulp.js

Gulp was mainly a "Task Runner".

Meaning:
You manually configure tasks and Gulp executes them.

Examples:

- Compile TypeScript
- Optimize Images
- Convert Markdown to HTML
- Minify CSS
- Minify JavaScript

💡 The tools may change, but the concepts stay the same.

Webpack, Rollup, Vite, Parcel, etc...

If you understand the core idea, moving from one tool
to another becomes much easier.

-------------------------------------------------
THE MOST IMPORTANT IDEA IN THIS SESSION 🧵
-------------------------------------------------

Imagine your bundler is holding the:

🧵 "Tip of the Thread" (طرف الخيط)

The place where the bundler starts reading
your application is called:

🎯 Entry Point

Most commonly:

src/index.js

or

src/main.js

-------------------------------------------------
WHAT IS AN ENTRY POINT? 🚪
-------------------------------------------------

Entry Point = Starting Point

It is the first file the bundler enters from.

From there it starts discovering:

- Imports
- Exports
- Dependencies
- Assets
- Styles

Example:

main.js

import "./auth.js";

The bundler enters main.js first.

Then sees:

⬇️

auth.js

Then checks:

"Does auth.js import anything else?"

If yes:

⬇️

cart.js

And continues following the chain step by step.

-------------------------------------------------
REAL EXAMPLE OF A BUILD PIPELINE ⚙️
-------------------------------------------------

Imagine a project contains:

TypeScript Files
PNG Images
Markdown Files

The bundler can transform them into:

TypeScript
    ↓
JavaScript

PNG
    ↓
Optimized WebP

Markdown
    ↓
HTML

💡 Different input formats can become browser-friendly output.

-------------------------------------------------
STEP #1 - BUILD DEPENDENCY GRAPH 🕸️
-------------------------------------------------

After entering the Entry Point,
the bundler creates something called:

📊 Dependency Graph

This graph answers:

"Which file depends on which?"

Example:

main.js
   │
   └──► auth.js
            │
            └──► cart.js

Meaning:

main.js depends on auth.js

auth.js depends on cart.js

The graph may also include:

- Images 🖼️
- CSS 🎨
- Fonts 🔤
- Other assets 📦

Everything becomes connected.

-------------------------------------------------
STEP #2 - PARSING 🔍
-------------------------------------------------

After discovering files,
Webpack starts reading them.

This process is called:

👉 Parsing

It analyzes every file line by line.

-------------------------------------------------
STEP #3 - GENERATE AST 🌳
-------------------------------------------------

After parsing, Webpack creates:

AST

(Abstract Syntax Tree)

Code:

const userName = "Ahmed";

Becomes:

🌳 Tree Structure

Instead of plain text.

-------------------------------------------------
WHY IS AST IMPORTANT? 🤔
-------------------------------------------------

AST allows Webpack to understand code deeply.

It can identify:

✅ Variables
✅ Functions
✅ Imports
✅ Exports
✅ Identifiers
✅ Expressions
✅ Dependencies

Example Questions AST Can Answer:

- Is this variable used?
- Is this function used?
- What is imported?
- What is exported?
- Can this code be removed?
- Can this code be minified?

-------------------------------------------------
TREE SHAKING 🌲✂️
-------------------------------------------------

Using the AST, Webpack can find:

💀 Dead Code

Meaning:

Code that exists but is never used.

Example:

export function login() {}
export function logout() {}
export function deleteAccount() {}

If only login() is imported:

✅ Keep login()

❌ Remove logout()

❌ Remove deleteAccount()

This process is called:

🌲 Tree Shaking

-------------------------------------------------
MINIFICATION ✂️
-------------------------------------------------

AST also helps with:

Code Minification

Before:

function calcSalary(rate) {
  return rate * 8;
}

After:

function calcSalary(r){return r*8}

Result:

📦 Smaller bundle
⚡ Faster download

-------------------------------------------------
THE COMPLETE FLOW 🚀
-------------------------------------------------

1️⃣ Enter through Entry Point 🎯

main.js

        ↓

2️⃣ Follow imports and dependencies 🔗

main.js
   ↓
auth.js
   ↓
cart.js

        ↓

3️⃣ Build Dependency Graph 🕸️

        ↓

4️⃣ Parse every file 🔍

        ↓

5️⃣ Generate AST 🌳

        ↓

6️⃣ Detect dead code 💀

(Tree Shaking)

        ↓

7️⃣ Minify and optimize ✂️

        ↓

8️⃣ Generate final bundle 📦

-------------------------------------------------
INTERVIEW SUMMARY 🎤
-------------------------------------------------

Q: What is the Entry Point?

A:
The first file Webpack starts reading from
(often src/index.js or src/main.js).

-------------------------------------------------

Q: What is a Dependency Graph?

A:
A graph showing which files depend on
other files.

-------------------------------------------------

Q: What is Parsing?

A:
Reading and analyzing source code
line by line.

-------------------------------------------------

Q: What is AST?

A:
Abstract Syntax Tree.

A tree representation of source code used
to understand variables, functions,
imports, exports, and optimization opportunities.

-------------------------------------------------

Q: Why is AST important?

A:
Because Webpack uses it for:

✅ Tree Shaking
✅ Dead Code Elimination
✅ Minification
✅ Dependency Analysis

📌 If you understand:
Entry Point ➜ Dependency Graph ➜ Parsing ➜ AST

Then you've understood the most important
mental model behind how modern bundlers work.
*/
