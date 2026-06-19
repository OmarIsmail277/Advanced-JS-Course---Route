/*
=================================================
VITE #8 - VITE CONFIG FILE (vite.config.js) ⚙️
=================================================

📌 WHAT IS vite.config.js? 🧠

It is the configuration file for Vite.

👉 used to customize dev server + build behavior

-------------------------------------------------

📌 BASIC SETUP 🧩

import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  server: {
    port: 8888,
    open: true
  }
});

-------------------------------------------------

📌 SERVER CONFIG ⚡

server: {
  port: 8888,
  open: true
}

👉 port: changes default dev server port

Default is:
👉 5173

Now becomes:
👉 8888

-------------------------------------------------

👉 open: true
Automatically opens browser when server starts

-------------------------------------------------

📌 WHAT IS alias (@) ? 🧠

Sometimes you see:

@/components/Button

👉 This is called alias

-------------------------------------------------

📌 WHY USE ALIAS? ⚙️

Instead of writing long relative paths:

../../../components/Button

We use:

@/components/Button

👉 cleaner + easier imports

-------------------------------------------------

📌 HOW TO SET ALIAS IN VITE ⚡

resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src")
  }
}

-------------------------------------------------

📌 WHAT DOES THIS MEAN? 🧠

👉 @ = shortcut for src folder

So:

@/utils/math.js

means:

./src/utils/math.js

-------------------------------------------------

📌 WHY IT IS IMPORTANT 🚀

✔ avoids messy relative paths
✔ easier refactoring
✔ cleaner project structure
✔ used in real production apps

-------------------------------------------------

📌 SIMPLE FLOW 🧠

@  → maps to →  src/

So:

@/anything
   ↓
src/anything

-------------------------------------------------

📌 ONE-LINE INTERVIEW ANSWER 🎤

Vite config file allows customizing the dev server and build setup, such as changing the port or defining path aliases like @ to simplify imports from the src directory.
*/
