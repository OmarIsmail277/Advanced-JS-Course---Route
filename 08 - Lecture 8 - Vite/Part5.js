/*
=================================================
VITE #5 - NODE MODULES + PRE-BUNDLING ⚡📦
=================================================

📌 QUESTION 🧠

If I import a library from node_modules like:

lodash (debounce)

what will Vite do?

Will it pass through all node_modules?

👉 NO ❌

-------------------------------------------------

📌 IMPORTANT IDEA ⚠️

Vite does NOT let the browser crawl node_modules.

Because that would be:

❌ too slow
❌ too many requests
❌ not optimized

-------------------------------------------------

📌 VITE SPLITS THE CODE INTO TWO TYPES 🧠

-------------------------------------------------

1️⃣ DEPENDENCIES (node_modules) 📦

- Installed libraries (lodash, react, etc.)
- Rarely change
- Large number of small files inside

👉 Vite handles them differently

-------------------------------------------------

2️⃣ SOURCE CODE (src) 🧑‍💻

- Your own code
- Changes frequently
- Many ES modules

👉 Loaded on demand by browser

-------------------------------------------------

📌 PROBLEM WITH NODE_MODULES ❌

If browser directly loads node_modules:

👉 too many files
👉 too many network requests
👉 slow startup

-------------------------------------------------

📌 VITE SOLUTION ⚡

👉 PRE-BUNDLING (Dependency Optimization)

-------------------------------------------------

📌 WHAT IS PRE-BUNDLING? 🧠

Vite takes dependencies from node_modules and:

✔ bundles them internally
✔ converts them into ES Modules
✔ optimizes them for browser usage
✔ reduces number of requests

-------------------------------------------------

📌 WHY DOES IT DO THIS? 🤔

Because many node_modules packages:

- are NOT in ES Module format
- are too fragmented (many small files)
- are not browser-friendly directly

So Vite fixes this.

-------------------------------------------------

📌 RESULT 🚀

After pre-bundling:

👉 dependencies become optimized ES modules

So browser can load them efficiently.

-------------------------------------------------

📌 FINAL ARCHITECTURE 🧠

node_modules (dependencies)
        ↓
   PRE-BUNDLING ⚡
        ↓
optimized ES modules

src code
        ↓
loaded ON DEMAND (via browser)

-------------------------------------------------

📌 SIMPLE COMPARISON ⚔️

Dependencies (node_modules):
👉 pre-bundled once

Source code (src):
👉 served on demand

-------------------------------------------------

📌 KEY IDEA 🎯

Vite does NOT treat everything the same:

- dependencies → optimize first (pre-bundle)
- source code → load when requested

-------------------------------------------------

📌 WHY THIS IS FAST ⚡

✔ fewer network requests for dependencies
✔ faster browser loading
✔ faster dev startup
✔ efficient module format (ESM)

-------------------------------------------------

📌 ONE-LINE INTERVIEW ANSWER 🎤

Vite pre-bundles dependencies from node_modules to convert them into optimized ES modules and reduce network requests, while serving source code on demand using native ES modules in the browser.
*/
