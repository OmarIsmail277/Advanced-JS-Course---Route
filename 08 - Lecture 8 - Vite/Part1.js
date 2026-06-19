/*
=================================================
VITE #1 - WHY DID VITE APPEAR? ⚡
=================================================

📌 RECAP OF WEBPACK 📦

In the previous session, we learned that Webpack:

- Collects JS files
- Collects CSS files
- Collects images
- Collects other assets

Then:

👉 Bundles everything together

and produces:

📦 Bundle(s)

so the browser can understand and run the application correctly.

-------------------------------------------------

📌 WEBPACK'S CORE IDEA 🧠

Webpack flow:

Files
   ↓
Bundle
   ↓
Serve

In other words:

👉 Webpack bundles first
👉 Then starts serving

-------------------------------------------------

📌 THE PROBLEM 🤯

This works great...

But what if my application becomes very large?

Imagine:

- Hundreds of components
- Thousands of files
- Large dependency graph

Every time I start my development server:

👉 Webpack has to bundle first

Only after bundling finishes:

👉 It starts serving

-------------------------------------------------

📌 ANOTHER PROBLEM 😭

Suppose I change a very small file:

style.css
or
Button.js

Even though the change is tiny:

👉 Webpack may need to rebuild/rebundle a large part of the application again

Then:

Bundle
   ↓
Serve

Again and again...

-------------------------------------------------

📌 DEVELOPMENT PHASE NEEDS SPEED ⚡

During development:

We care about:

✔ Fast startup
✔ Fast updates
✔ Fast feedback

We are NOT focused on producing the final optimized bundle yet.

That's exactly why Vite was created.

-------------------------------------------------

📌 OLD DAYS VS TODAY 🕰️

A long time ago:

Browsers did NOT understand:

ES Modules

(import / export)

So tools like Webpack were amazing because they bundled everything into files that browsers could understand.

-------------------------------------------------

📌 TODAY'S BROWSERS 🌐

Modern browsers understand:

✔ ES Modules

Example:

import { add } from "./math.js";

Browser understands this directly.

-------------------------------------------------

📌 VITE'S BIG IDEA ⚡

Vite asked:

🤔 If browsers already understand ES Modules...

Why bundle the whole application first during development?

-------------------------------------------------

📌 WEBPACK THINKING 📦

Files
   ↓
Bundle everything
   ↓
Serve

-------------------------------------------------

📌 VITE THINKING ⚡

Files
   ↓
Serve immediately
   ↓
Browser requests modules when needed

-------------------------------------------------

📌 WHAT HAPPENS IN VITE?

Vite leaves files separated.

Example:

index.js
math.js
auth.js
style.css

remain separate.

When the browser requests:

math.js

👉 Vite sends math.js only

When the browser requests:

auth.js

👉 Vite sends auth.js only

No need to bundle everything first.

-------------------------------------------------

📌 SIMPLE COMPARISON ⚔️

Webpack:

Bundle First 📦
       ↓
Serve

Vite:

Serve First ⚡
       ↓
Send modules on demand

-------------------------------------------------

📌 RESULT 🚀

Because there is no initial bundling step:

✔ Faster startup
✔ Faster updates
✔ Better developer experience

Especially in large applications.

-------------------------------------------------

📌 OFFICIAL DOCUMENTATION IDEA 📖

Vite (French for "quick", pronounced like "veet")

is a build tool focused on providing:

⚡ Faster
⚡ Leaner

development experience for modern web projects.

-------------------------------------------------

📌 VITE HAS TWO MAJOR PARTS

1️⃣ Development Server ⚡

- Uses native ES Modules
- Starts instantly
- Provides very fast HMR

-------------------------------------------------

2️⃣ Build Command 📦

When it's time for production:

vite build

👉 Vite DOES bundle the application

using:

Rolldown

to generate highly optimized production assets.

-------------------------------------------------

📌 IMPORTANT IDEA ⚠️

Vite does NOT avoid bundling forever.

Development:
👉 Serve modules directly

Production:
👉 Bundle and optimize

-------------------------------------------------

📌 INTERVIEW COMPARISON 🎤

Webpack:
👉 Bundle first, then serve

Vite:
👉 Serve first, send modules on demand, bundle later for production

-------------------------------------------------

📌 ONE-LINE SUMMARY 🎯

Vite takes advantage of modern browsers supporting ES Modules, so during development it serves files directly instead of bundling the whole application first, resulting in a much faster development experience.
*/
