/*
=================================================
WEBPACK #10 - MODE (DEVELOPMENT vs PRODUCTION) 🚀
=================================================

📌 WHAT IS "mode" IN WEBPACK?

mode tells Webpack how to build your project:

- development 🛠️
- production 🚀

It controls how optimized the final output will be.

-------------------------------------------------

📌 DEVELOPMENT MODE 🛠️

Example:

"dev": "webpack --mode development"

What happens:

- Code is readable 👀
- NOT minified
- Easier debugging
- Faster build time
- Source maps enabled (usually)

👉 Goal: Developer experience

-------------------------------------------------

📌 PRODUCTION MODE 🚀

Example:

"build": "webpack --mode production"

What happens:

- Code is minified ✂️
- Unused code is removed
- Optimizations are applied
- Files are smaller
- Faster performance

👉 Goal: Performance & optimization

-------------------------------------------------

📌 KEY DIFFERENCE 🧠

Development:
👉 easy to read and debug

Production:
👉 optimized and ready for users

-------------------------------------------------

📌 DEAD CODE ELIMINATION 💀

In production mode:

Webpack removes code that is NOT used.

Example:

// math.js
export function add() {}
export function multiply() {}

In index.js:

import { add } from "./math";

👉 multiply is never used

So in production:

❌ multiply is removed completely

-------------------------------------------------

📌 TREE SHAKING 🌲✂️

Tree shaking = removing unused exports.

It happens during production build.

Why?

Because Webpack analyzes:

- imports
- exports
- dependency graph

If something is not used:

👉 it gets eliminated

-------------------------------------------------

📌 IMPORTANT NOTE ⚠️

Tree shaking works best when:

✔ using ES6 modules (import/export)
✔ in production mode

-------------------------------------------------

📌 WHERE DO WE SET MODE?

Option 1 (webpack.config.js):

mode: "production"

Option 2 (package.json scripts):

"build": "webpack --mode production"
"dev": "webpack --mode development"

👉 Both are valid

-------------------------------------------------

📌 SIMPLE SUMMARY 🧠

Mode controls how Webpack builds your app:

Development:
👉 fast, readable, unoptimized

Production:
👉 slow build, optimized output, minified, tree-shaken

-------------------------------------------------

📌 ONE-LINE INTERVIEW ANSWER 🎤

Webpack mode defines whether the build is optimized for development (readable and fast) or production (minified, optimized, and tree-shaken).


- Dead code elimination is a general optimization that removes code which is never executed, 
while tree shaking is a specific form of it that removes unused ES module exports by analyzing the import/export graph.

- If a function is not exported and not used anywhere in the module, it is usually removed during tree shaking in production builds, 
unless it has side effects that Webpack needs to preserve.
*/
