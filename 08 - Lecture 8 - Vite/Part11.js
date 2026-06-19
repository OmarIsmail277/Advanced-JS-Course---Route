/*
=================================================
VITE #11 - DEV vs BUILD (PRODUCTION) ⚡📦
=================================================

📌 IMPORTANT IDEA 🧠

So far everything we did was in:

👉 DEVELOPMENT phase only

NOT production.

-------------------------------------------------

📌 DEV MODE 🚀

Run:

npm run dev
(vite dev server)

👉 What happens?

- NO full bundling
- Uses native ES Modules
- HMR works
- Fast startup
- Files served separately

Example:

main.js
math.js
style.css

👉 all loaded individually

-------------------------------------------------

📌 BUILD MODE 🏗️

Run:

npm run build
(vite build)

👉 What happens?

- Bundling happens
- Code is optimized
- Files are minified
- Tree shaking applied
- Hashing added

-------------------------------------------------

📌 OUTPUT 📦

Inside dist folder:

- index.html
- assets/
   → one JS file
   → one CSS file
   → optimized images/fonts

👉 everything is production-ready

-------------------------------------------------

📌 IMPORTANT DIFFERENCE ⚠️

DEV:
👉 many separate modules (no bundling)

BUILD:
👉 optimized bundled output

-------------------------------------------------

📌 WHY BUILD IS DIFFERENT? 🤔

Because production needs:

✔ fast loading
✔ fewer requests
✔ optimized code
✔ caching support (hashing)

-------------------------------------------------

📌 PREVIEW MODE 👀

After build:

npm run preview

👉 runs production build locally

You can:

- inspect network tab
- see final bundled files
- test real production behavior

-------------------------------------------------

📌 IMPORTANT OBSERVATION 🧠

In production:

❌ no math.js
❌ no separate modules

👉 only final bundled output exists

-------------------------------------------------

📌 DEV vs BUILD SUMMARY ⚔️

DEV MODE:
👉 fast
👉 no bundling
👉 ES Modules
👉 HMR

BUILD MODE:
👉 optimized
👉 bundled
👉 minified
👉 hashed files
👉 production-ready

-------------------------------------------------

📌 ONE-LINE INTERVIEW ANSWER 🎤

Vite dev mode uses native ES modules with HMR for fast development without bundling, 
while build mode generates optimized, minified, and hashed bundled files ready for production.

👉 In production, both Webpack and Vite end up doing the same job:
They produce optimized static files (HTML, CSS, JS) that the browser can efficiently run.


---------------------------------------------------

📦 What both do in production

Both tools:

bundle modules
minify code
remove unused code (tree-shaking)
generate hashed filenames (caching)
optimize assets

So output looks like:

dist/
  index.html
  assets/
    main.8f3a1.js
    style.4c2d9.css


🎯 Interview-ready answer

In production, Vite and Webpack are similar because both produce optimized, bundled, minified, and cached static assets. 
The main difference is that Webpack uses bundling in both development and production, 
while Vite uses native ES modules in development and only bundles for production using Rollup-based tooling.
*/
