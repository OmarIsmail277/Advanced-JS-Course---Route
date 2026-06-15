/*
=================================================
WEBPACK #8 - LOADERS vs PLUGINS 🎯⚙️
=================================================

📌 FLOW YOU DESCRIBED (CORRECT IDEA) 🧠

import "./style.css";

👉 AST is created
👉 Webpack sees import declaration
👉 Detects file type (.css)
👉 Checks webpack rules

test: /\.css$/

👉 Match found

Then loaders execute (RIGHT → LEFT):

style-loader
   ↓
css-loader

Final result:

style.css
   ↓
css-loader (CSS → JS module)
   ↓
style-loader (JS → injected <style> in DOM)
   ↓
main.hash.js

-------------------------------------------------

📌 IMPORTANT IDEA ⚠️

Webpack itself does NOT understand CSS.

It only understands:

✔ JavaScript
✔ JSON

Everything else needs a LOADER.

👉 Loader = “translator for file types”

-------------------------------------------------

📌 INTERVIEW QUESTION 🎤

Q: What is the difference between Loader and Plugin?

-------------------------------------------------

📌 1️⃣ LOADER ⚙️

👉 Works at FILE LEVEL (per module)

Used when Webpack encounters a specific file type.

Examples:
- .css
- .scss
- .ts
- images
- fonts

What it does:
👉 Transforms files before they enter the bundle

Example:

CSS → JS module → injected into DOM

👉 Loaders operate during module loading

-------------------------------------------------

📌 2️⃣ PLUGIN 🔌

👉 Works at BUNDLE LEVEL (whole build process)

Plugins can:

- Modify output bundle
- Inject files into HTML
- Clean dist folder
- Optimize assets
- Add hashing
- Control build lifecycle

Example:

HtmlWebpackPlugin:
👉 creates index.html + injects script

CleanWebpackPlugin:
👉 removes old dist files

-------------------------------------------------

📌 SIMPLE DIFFERENCE 🧠

Loader:
👉 transforms individual files (CSS, TS, images)

Plugin:
👉 works on the whole build output

-------------------------------------------------

📌 ONE-LINE INTERVIEW ANSWER 🎯

Loaders transform individual modules (file-level transformation),
while plugins operate on the entire build process and output.
*/
