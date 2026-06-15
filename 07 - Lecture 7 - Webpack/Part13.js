/*
=================================================
WEBPACK DEV SERVER 🚀
=================================================

📌 IDEA

Webpack has a package called:
👉 webpack-dev-server

It creates a local server automatically so I don’t need to open files manually or use Live Server.

-------------------------------------------------

📌 WHY WE USE IT 🧠

Instead of:
- running build every time
- opening index.html manually
- refreshing the browser manually

👉 Dev server handles all of that automatically

-------------------------------------------------

📌 HOW IT WORKS ⚙️

- Starts a local server (localhost)
- Serves files from memory (NOT dist folder)
- Watches file changes
- Auto reloads the browser

-------------------------------------------------

📌 BASIC CONFIG 🧾

devServer: {
  static: {
    directory: path.join(__dirname, "public"),
  },
  compress: true,
  port: 9000,
}

-------------------------------------------------

📌 EXPLANATION 🧠

📁 static.directory
→ tells webpack where static files are (like index.html)

⚡ compress: true
→ enables gzip compression for faster loading

🌐 port: 9000
→ runs server on http://localhost:9000

-------------------------------------------------

📌 IMPORTANT IDEA ⚠️

Webpack Dev Server:
- does NOT create files in dist
- serves everything from memory

So output is virtual, not physical.

-------------------------------------------------

📌 NODE PART 🧠

We use this because __dirname is not available in ES modules:

import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

-------------------------------------------------

📌 FLOW 🚀

code change
   ↓
dev server detects change
   ↓
rebuilds in memory
   ↓
browser auto reloads

-------------------------------------------------

📌 ONE-LINE INTERVIEW ANSWER 🎤

Webpack Dev Server runs a local development server that serves files from memory and provides live reloading without manually rebuilding or refreshing the browser.
*/
