/*
=================================================
WEBPACK #6 - CSS + LOADERS EXPLAINED 🎨⚙️
=================================================

📌 IDEA OF THIS STEP

Let's add a CSS file and import it inside JS:

style.css  ➜  index.js

Why?

Because when Webpack parses the code:

👉 It builds the AST
👉 It detects dependencies
👉 It knows what is used / unused
👉 It includes everything in the bundle

This is the same idea we saw before.

📌 IMPORTANT NOTE 💡

If CSS is imported inside JS:

React example:

App.js
→ imports styles

This is exactly why React works this way.

-------------------------------------------------
THE PROBLEM ❌

If you try to build now:

npm run build

👉 ERROR will appear

Why?

Because Webpack does NOT understand CSS by default.

Webpack only understands:

✔ JavaScript
✔ JSON

Anything else needs extra setup.

-------------------------------------------------
WHY ERROR HAPPENS 🤯

When Webpack parses:

index.js
   ↓
imports style.css

It opens:

style.css
body { ... }
h1 { ... }

Then it tries to treat it as JS ❌

Result:

💥 ERROR

Because CSS is not JavaScript.

-------------------------------------------------
SOLUTION: LOADERS ⚙️

📌 What is a Loader?

A Loader = Transformer 🔁

It takes files Webpack doesn't understand
and converts them into something Webpack CAN understand.

-------------------------------------------------
WE NEED TWO LOADERS 📦

npm install --save-dev css-loader style-loader

✔ css-loader
✔ style-loader

(dev dependencies only)

-------------------------------------------------
WEBPACK CONFIG ⚙️

module: {
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    },
  ],
}

-------------------------------------------------
IMPORTANT ORDER ⚠️

use: ["style-loader", "css-loader"]

BUT execution happens RIGHT → LEFT:

style.css
   ↓
css-loader
   ↓
style-loader

-------------------------------------------------
WHAT DOES EACH ONE DO? 🧠

-------------------------------------------------
1️⃣ css-loader 🎯

Takes CSS file and converts it into JavaScript

Example transformation:

body { background: teal; }

→ becomes something like:

const styles = {
  body: { background: "teal" }
};

📌 In simple words:
👉 Turns CSS into JS module

-------------------------------------------------
2️⃣ style-loader 🔌

Takes that JS result and injects it into the page

It does:

const style = document.createElement("style");
style.innerHTML = "body { background: teal }";
document.head.append(style);

📌 In simple words:
👉 Injects CSS into HTML <head>

📌 ONE-LINE IDEA

css-loader transforms CSS into JS, style-loader injects that JS-generated CSS into the HTML page.

-------------------------------------------------
FINAL RESULT 🚀

Webpack successfully builds:

✔ CSS is parsed
✔ CSS is converted into JS
✔ CSS is injected into HTML at runtime
✔ No errors

-------------------------------------------------
WHAT YOU WILL SEE IN DIST 📦

Your CSS will NOT appear as a separate file.

Instead, it will be inside:

main.hash.js

Because:

👉 CSS became part of JS bundle

-------------------------------------------------
SUMMARY 🧠

CSS handling flow:

style.css
   ↓
css-loader (CSS → JS)
   ↓
style-loader (JS → injected <style> in HTML)
   ↓
Browser sees styled page 🎨

-------------------------------------------------
INTERVIEW IDEA 🎤

Q: Why do we need loaders in Webpack?

A:
Because Webpack only understands JavaScript and JSON.
Loaders transform other file types (like CSS) into JS modules
so Webpack can include them in the dependency graph and bundle them.
*/
