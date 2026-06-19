// ============================================================
//  VITE — CONCEPTS & INTERVIEW QUESTIONS
// ============================================================
//
// PLUGINS
// -------
// Does Vite have plugins? Yes.
//
// Plugins are used to extend or customize Vite’s behavior.
//
// They can:
// - transform files during dev/build (e.g. .js, .ts, .vue)
// - hook into build steps
// - modify output or add custom logic (debugging, etc.)
//
// 👉 Not required for basic usage, but powerful when needed.
//
//
// ============================================================
//  DEV PHASE ⚡
// ============================================================
//
// Browser --- request main.js ---> Vite Dev Server (up & running)
//                                        |
//                                        ↓
//                                    main.js
//                             (served + transformed if needed)
//
// main.js may import:
//  → style.css
//  → math.js
//  → assets
//
// 👉 Vite DOES NOT bundle in dev.
// 👉 It serves files as native ES modules.
// 👉 Each module is requested by the browser separately.
//
//
//
// ============================================================
//  PRODUCTION PHASE 🏗️
// ============================================================
//
// main.js → build → optimization → dist/ folder
//
// In production Vite uses Rollup under the hood:
//
// ✔ bundles modules
// ✔ minifies code
// ✔ tree-shakes unused code
// ✔ adds hashed filenames for caching
//
// Result: optimized static files ready for deployment.
//
//
//
// ============================================================
//  INTERVIEW QUESTIONS 🎤
// ============================================================
//
// Q: Is Vite a bundler?
// A:
// - In dev → NO (it is a dev server using native ES modules)
// - In production → YES (it bundles using Rollup)
//
//
//
// Q: Why is Vite fast?
// A:
// Because in dev it:
// - does NOT bundle the whole app upfront
// - uses native ES modules (browser loads modules on demand)
// - serves only requested files
//
// Webpack must bundle everything before starting the dev server,
// which slows startup in large apps.
//
//
//
// Q: Does Vite replace Webpack?
// A:
// Not completely.
//
// Vite is better for modern dev experience,
// but Webpack is still widely used and highly configurable.
//
//
//
// Q: Is .env secure on the frontend?
// A:
// No ❌
//
// Anything in frontend .env is exposed to the browser,
// so it is NOT secure.
//
// Sensitive data must stay in the backend.
//
//
// Q: What is the difference between npm run dev and npm run build?
//
// - npm run dev
//   → starts dev server
//   → no bundling
//   → uses native ES modules
//   → fast HMR
//
// - npm run build
//   → bundles the app (Rollup)
//   → minifies + optimizes code
//   → generates dist/ for production
//
//
//
// Q: Why does Vite pre-bundle node_modules?
// A:
// Because dependencies:
// - are large
// - change rarely
// - are not always ESM format
//
// So Vite uses esbuild to:
// ✔ convert them to ESM
// ✔ reduce network requests
// ✔ improve startup speed
//
// (NOT because of HMR)
//
//
//
// SUMMARY 🧠
//
// Vite serves source code directly in development using native ES modules,
// and only bundles in production for optimization,
// making it significantly faster in development compared to Webpack.
//
// In development Vite does not bundle and serves files as native ES modules,
// but in production it bundles and optimizes everything into static files using Rollup.
// ============================================================

/*
📌 Webpack vs Vite (Cheat Sheet)

1️⃣ Webpack bundles everything before starting dev server, Vite serves files instantly using native ES Modules.
2️⃣ Webpack dev = full bundling, Vite dev = module-based loading (no bundling).
3️⃣ Both bundle in production, but Vite uses Rollup (Webpack uses its own bundler).
4️⃣ Vite is faster in dev because it uses on-demand transforms + HMR at module level.
5️⃣ Webpack is more configurable and mature, Vite is simpler and faster for modern apps.

*/
