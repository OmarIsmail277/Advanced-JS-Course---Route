/*
=================================================
WEBPACK #2 - MODULE BUNDLING
=================================================

📌 What is Module Bundling?

Module Bundling is the process of taking all the files
of your project and preparing them for the browser.

A project may contain:

- JavaScript files
- CSS files
- HTML files
- Images
- Fonts
- TypeScript files
- Sass/SCSS files

Instead of sending all these files separately,
a bundler processes them and produces optimized
files for production.

-------------------------------------------------
WHAT DOES A BUNDLER DO?
-------------------------------------------------

Imagine buying a bunch of Arugula 😁 🍃 => حِزمة جرجير

Many leaves ➜ One bundle

Same idea:

Many project files ➜ Few optimized bundles

-------------------------------------------------
MAIN RESPONSIBILITIES OF A BUNDLER
-------------------------------------------------

1️⃣ Bundling

Collects multiple files and combines them into
one file (or a few files).

Example:

auth.js
cart.js
salary.js
main.js

↓

bundle.js

-------------------------------------------------
2️⃣ Minification
-------------------------------------------------

Removes unnecessary things such as:

- Spaces
- New lines
- Comments
- Extra formatting

Before:

function calcSalary(rate) {
  return rate * 8;
}

After:

function calcSalary(r){return r*8}

Result:
✅ Smaller file size
✅ Faster download

-------------------------------------------------
3️⃣ Code Splitting
-------------------------------------------------

Instead of creating one huge file,
the bundler can split code into smaller chunks
based on optimization strategies.

Example:

bundle.js
admin.chunk.js
profile.chunk.js

Benefit:

✅ Load only what the user needs
✅ Better performance

-------------------------------------------------
4️⃣ Production-Ready Build
-------------------------------------------------

The bundler prepares a version suitable for deployment.

This may include:

- Minification
- Optimization
- Asset processing
- Performance improvements

Result:

✅ Ready to upload to production

-------------------------------------------------
5️⃣ Tree Shaking
-------------------------------------------------

Removes code that is never used.

Example:

// math.js

export function add() {}
export function subtract() {}
export function multiply() {}

// main.js

import { add } from "./math.js";

Only "add" is used.

The unused exports can be removed from
the final bundle.

Result:

✅ Smaller bundle size
✅ Less code shipped to the browser

-------------------------------------------------
WHY IS THIS IMPORTANT?
-------------------------------------------------

Before Bundling:

❌ Many files
❌ Many requests
❌ Larger codebase sent to browser
❌ Manual optimization

After Bundling:

✅ Fewer files
✅ Fewer requests
✅ Minified code
✅ Better performance
✅ Easier browser workload

As a result, the browser has a much easier job:

- Less files to load
- Less code to parse
- Less code to execute

-------------------------------------------------
POPULAR MODULE BUNDLERS
-------------------------------------------------

- Webpack
- Rollup
- Vite (currently the most popular)

-------------------------------------------------
WHY ARE WE LEARNING WEBPACK?
-------------------------------------------------

Today many developers use Vite because it
makes things much easier.

However, Webpack is where most of these
concepts became popular.

Learning Webpack helps you understand:

- Bundling
- Loaders
- Plugins
- Code Splitting
- Tree Shaking
- Build Pipelines

Once you understand Webpack,
understanding tools like Vite becomes much easier.

-------------------------------------------------
SUMMARY
-------------------------------------------------

Module Bundler =
A tool that takes all project resources
(JS, CSS, HTML, Images, Fonts, TS, Sass...)

and produces optimized bundles that are:

✅ Smaller
✅ Faster
✅ Production-ready
✅ Easier for browsers to handle

Think:

Many files 🍃
        ↓
   Module Bundler
        ↓
 Few optimized bundles 📦
*/
