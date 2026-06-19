/*
=================================================
VITE #7 - WEBPACK HMR vs VITE HMR 🔥⚡
=================================================

📌 HMR COMPARISON 🎯

Webpack HMR:
👉 works on the whole bundle (or larger parts of it)

Vite HMR:
👉 works on the specific module that changed

-------------------------------------------------

📌 SIMPLE IDEA 🧠

Webpack:
👉 “rebuild more, update bigger part”

Vite:
👉 “update only what changed”

-------------------------------------------------

📌 EXAMPLE 🎨

If you change:

h1 color in style.css
or
something in main.js

-------------------------------------------------

📌 WHAT HAPPENS IN VITE? ⚡

👉 ONLY that module is updated
👉 No full page reload
👉 App state is preserved
👉 Browser stays as it is

Because Vite uses:

👉 native ES Modules + HMR

-------------------------------------------------

📌 IMPORTANT IDEA ⚠️

Vite HMR works at module level:

style.css → only CSS module updates
main.js   → only JS module updates

-------------------------------------------------

📌 RESULT 🚀

✔ No full reload
✔ No state loss
✔ Faster updates
✔ Very smooth dev experience

-------------------------------------------------

📌 CONFIG IDEA 🧠

Vite works out of the box:

✔ no complex config needed
✔ supports HTML, CSS, JS automatically

BUT:

👉 you can still customize config if needed

-------------------------------------------------

📌 WEBPACK vs VITE SUMMARY ⚔️

Webpack:
👉 HMR at bundle level (bigger updates)

Vite:
👉 HMR at module level (fine-grained updates)

-------------------------------------------------

📌 ONE-LINE INTERVIEW ANSWER 🎤

Webpack HMR updates larger parts of the bundle, while Vite HMR updates only the changed ES module, resulting in faster and more precise updates without full page reloads.
*/
