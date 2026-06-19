/*
=================================================
VITE #10 - CSS + MODULE CSS + ASSETS HANDLING ⚡📦
=================================================

📌 WHAT WE SAW SO FAR 🧠

In Vite:

👉 CSS works out of the box
👉 no need to install loaders (unlike Webpack)

-------------------------------------------------

📌 CSS IMPORT IN JS 🎯

Example:

import "./style.css";

👉 just works automatically in main.js

-------------------------------------------------

📌 WHY DOES IT WORK? 🤔

Because Vite already understands:

- CSS handling
- module graph
- browser ES modules flow

👉 no manual loader setup needed

-------------------------------------------------

📌 CSS MODULES (React style) ⚛️

Example:

home.module.css

👉 also supported directly

So you can do:

import styles from "./home.module.css";

✔ scoped CSS
✔ no naming conflicts
✔ works out of the box

-------------------------------------------------

📌 IMPORTANT IDEA ⚠️

Unlike Webpack:

❌ no css-loader
❌ no style-loader
❌ no configuration needed

Vite handles it internally.

-------------------------------------------------

📌 ASSETS HANDLING 🖼️

Images, fonts, etc:

👉 also work automatically

Example:

import img from "./logo.png";

✔ no extra setup
✔ no plugins needed

-------------------------------------------------

📌 WHAT VITE DOES BEHIND THE SCENES 🧠

It automatically:

- detects file type
- applies internal transforms
- serves it correctly to browser

-------------------------------------------------

📌 SIMPLE FLOW ⚡

CSS / Images / Modules
        ↓
Vite detects type
        ↓
internal handling (no manual config)
        ↓
served to browser

-------------------------------------------------

📌 WEBPACK vs VITE ⚔️

Webpack:
👉 you must configure loaders/plugins

Vite:
👉 works instantly with zero config

-------------------------------------------------

📌 ONE-LINE INTERVIEW ANSWER 🎤

Vite supports CSS, CSS Modules, and assets out of the box without requiring loaders or plugins, 
unlike Webpack, because it has built-in handling for these file types during development.
*/
