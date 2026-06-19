/*
=================================================
VITE #6 - ESBUILD + ROLLDOWN ⚡🚀
=================================================

📌 PRE-BUNDLING IN VITE 🧠

When Vite does pre-bundling of dependencies,
it uses:

👉 esbuild ⚡

-------------------------------------------------

📌 WHAT IS ESBUILD? ⚙️

- Extremely fast bundler
- Written in Go (Golang) 🟢
- One of the fastest compiled languages

👉 Very fast compared to traditional JS bundlers

-------------------------------------------------

📌 WHAT DOES ESBUILD DO IN VITE? 🧠

It is used for:

✔ pre-bundling dependencies (node_modules)
✔ transforming TypeScript → JavaScript
✔ fast build tasks

👉 Goal: speed

-------------------------------------------------

📌 IMPORTANT IDEA ⚠️

Vite is NOT only esbuild.

It is a combination of tools:

👉 It picks the fastest tool for each job

-------------------------------------------------

📌 VITE IN DEVELOPMENT MODE ⚡

In dev phase Vite uses:

✔ Native ES Modules (browser)
✔ HMR (Hot Module Replacement)
✔ esbuild (for fast transforms & pre-bundling)

👉 Focus: ultra fast dev experience

-------------------------------------------------

📌 VITE IN PRODUCTION MODE 🚀

For production builds:

Vite uses:

✔ esbuild (for some fast optimizations)
✔ Rollup / Rolldown (bundler)

-------------------------------------------------

📌 WHAT IS ROLLUP / ROLDOWN? 📦 ===> Performance + Features + Ecosystem

- Bundler for production
- Creates optimized final output
- Handles code splitting, optimization, etc.

👉 Vite uses a Rollup-based system (Rolldown is newer direction)

-------------------------------------------------

📌 IMPORTANT IDEA 🧠

Vite separates concerns:

Development:
👉 speed + instant updates

Production:
👉 optimization + bundling

-------------------------------------------------

📌 SIMPLE SUMMARY ⚡

Vite combines multiple tools:

- esbuild → speed (dev + pre-bundling)
- native ES modules → browser loading
- HMR → instant updates
- rollup/rolldown → production bundling

-------------------------------------------------

📌 ONE-LINE INTERVIEW ANSWER 🎤

Vite uses esbuild for extremely fast pre-bundling and transformations in development, 
while relying on Rollup-based tooling for optimized production builds, combining multiple tools to achieve both speed and efficiency.
*/

/*
Vite doesn’t rely only on esbuild because esbuild is optimized for speed and transformations, 
but lacks advanced production bundling features, 
so Vite uses esbuild for fast dev tasks and Rollup/Rolldown for production-grade bundling

-------------------

Rolldown’s performance advantage is mainly in production bundling scenarios, 
where it focuses on advanced optimization and architecture, 
while esbuild is primarily optimized for extremely fast transformations and development tasks.

So benchmarks like:

Rolldown: 1.61s
esbuild: 1.70s

👉 refer to bundling scenarios, not dev server work
*/
