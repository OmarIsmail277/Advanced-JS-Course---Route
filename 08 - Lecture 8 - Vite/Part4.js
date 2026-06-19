/*
=================================================
VITE #4 - index.html + ES MODULES + NO BUNDLING ⚡📄
=================================================

📌 IMPORTANT CHANGE IN VITE 🧠

In Vite:

👉 index.html is OUTSIDE src folder

In Webpack:

👉 index.html was usually inside src or handled via plugin

-------------------------------------------------

📌 WHY index.html IS OUTSIDE NOW? 🤔

Because in Vite:

👉 index.html is the ENTRY POINT of the app

Not JS.

So it becomes a core file of the project structure.

-------------------------------------------------

📌 WHAT DOES index.html DO IN VITE? ⚙️

Inside index.html, Vite automatically injects:

<script type="module" src="/main.js"></script>

-------------------------------------------------

📌 IMPORTANT IDEA ⚠️

type="module" means:

👉 Browser understands ES Modules directly
👉 So it can use import/export

-------------------------------------------------

📌 HOW THE BROWSER WORKS NOW 🌐

When browser sees:

main.js (module)

It:

✔ understands import/export
✔ loads dependencies automatically
✔ requests only needed files

-------------------------------------------------

📌 EXAMPLE FLOW 🧠

index.html
   ↓
main.js
   ↓
math.js

Simple chain:

👉 index → main → math

-------------------------------------------------

📌 ADDING NEW FILE 📁

If you create:

math.js
export function sum() {}

Then import it in main.js:

import { sum } from "./math.js";

-------------------------------------------------

📌 WHAT HAPPENS IN NETWORK TAB? 🔍

You will see:

✔ main.js loaded
✔ math.js loaded separately

NOT bundled together.

-------------------------------------------------

📌 KEY IDEA 🚀

👉 No big bundle in development
👉 Each file is requested separately
👉 Each module is loaded independently

-------------------------------------------------

📌 WHY IS THIS FASTER? ⚡

Because:

✔ No initial bundling step
✔ No dependency graph build before server starts
✔ Only requested modules are loaded
✔ Browser handles module linking

-------------------------------------------------

📌 COMPARISON ⚔️

Webpack:
index → bundle.js (everything combined)

Vite:
index → main.js → math.js (separate modules) -> much faster than before!

-------------------------------------------------

📌 IMPORTANT CONCLUSION 🧠

Vite in development does NOT bundle files.
It uses native ES Modules so the browser loads each module individually when needed.

-------------------------------------------------

📌 ONE-LINE INTERVIEW ANSWER 🎤

In Vite, index.html is the entry point and uses native ES Modules, so each JavaScript file is loaded separately by the browser instead of being bundled, making development faster.
*/
