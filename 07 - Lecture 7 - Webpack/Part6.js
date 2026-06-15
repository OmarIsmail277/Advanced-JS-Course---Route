/*
=================================================
WEBPACK #4 - FIRST REAL SETUP FROM SCRATCH 🧱📦
=================================================

📌 INTRO (WHY WE ARE DOING THIS STEP) 🧠

Let’s start completely from scratch.

We want to create a new folder containing:

- JS
- CSS
- HTML
- Images

Then we will use Webpack to see:

👉 How it takes these files
👉 How it processes them
👉 How it bundles them into final output

-------------------------------------------------

📌 IMPORTANT OBSERVATION 👀

If you open the Webpack official website:

👉 You will notice NO HTML as an input (on the left side)

Why?

Because Webpack does NOT start from HTML.

It starts from JavaScript and builds everything from it.

-------------------------------------------------

📌 MAIN IDEA 💡

Webpack takes JS files and:

- processes them (minify, optimize, etc.)
- builds dependency graph
- outputs bundled JS file

But now the question is:

❓ I also have index.html in another place…
❓ How do we connect HTML with the bundle?

-------------------------------------------------

📌 THE PROBLEM 🤯

If I import CSS inside JS:

import "./style.css";

Webpack will NOT understand it by default.

Because it treats everything as JavaScript first,
so this creates problems until we configure it.

-------------------------------------------------

📌 PROJECT SETUP 🧱

We don’t care about logic now.
We just want files so Webpack can process them.

Create:

src/
├── index.html
├── math.js
├── style.css
├── index.js

-------------------------------------------------

📌 STEP 1 - INIT PROJECT 📦

npm init -y

👉 creates package.json

"devDependencies": {
    "webpack": "^5.107.2",
    "webpack-cli": "^7.0.3"
  }

-------------------------------------------------

📌 STEP 2 - INSTALL WEBPACK ⚙️

npm install --save-dev webpack webpack-cli

📌 Why --save-dev?

Because:

- Webpack is NOT needed in production server
- It is only used before uploading to server
- It builds the final output

-------------------------------------------------

📌 STEP 3 - SIMPLE JS CODE ✍️

// math.js

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

-------------------------------------------------

📌 STEP 4 - ENTRY FILE 🎯

// index.js

import { add, multiply } from "./math.js";

👉 Don't forget .js please 😅

-------------------------------------------------

📌 STEP 5 - WEBPACK CONFIG ⚙️

Create:

webpack.config.js

-------------------------------------------------

📌 OUTPUT CONFIG 📤

output: {
  path: path.resolve(__dirname, "dist"),
  filename: "bundle.js",
}

-------------------------------------------------

📌 WHY resolve()? 🤔

Because:

- npm run build runs in Node.js
- We need an ABSOLUTE path

👉 __dirname + "dist"

So Webpack knows exactly where to output files.

-------------------------------------------------

📌 BUILD STEP 🚀

npm run build

👉 Output:

dist/
└── bundle.js

✔ All code is bundled
✔ Minified
✔ Imports resolved
✔ Dependency graph processed

-------------------------------------------------

📌 WEBPACK INTERNAL FLOW 🧠

Entry (index.js)
        ↓
imports math.js
        ↓
Dependency Graph 🕸️
        ↓
Parser 🔍
        ↓
AST 🌳
        ↓
Tree Shaking + Minification ✂️
        ↓
bundle.js (final output)

-------------------------------------------------

📌 HOLD ON 🤚 ⚠️

At this point:

👉 index.html knows NOTHING about bundle.js

 We we can manually link it:

<script src="../dist/bundle.js"></script>

-------------------------------------------------

📌 WHY THIS IS NOT GOOD ❌

- Manual linking is error-prone
- File name may change after rebuild
- Caching issues appear

Example:

bundle.js → bundle.v2.js → bundle.hash.js

👉 This is why hashing is introduced later

-------------------------------------------------

📌 TERMS 📦

src  = source files (development)
dist = distribution (production output)

-------------------------------------------------

📌 SUMMARY 🧠

Webpack flow:

Entry (index.js)
   ↓
Imports math.js
   ↓
Build Dependency Graph
   ↓
Parse + AST
   ↓
Optimize + Minify
   ↓
Output bundle.js in dist/

-------------------------------------------------

📦 FINAL IDEA:

Webpack takes many development files
and turns them into ONE optimized production bundle.
*/
