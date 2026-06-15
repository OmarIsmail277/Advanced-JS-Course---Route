// What is the relation of tree shaking with the AST?
//
// Bundle tools like Webpack need to understand what is imported
// and what is exported — that's where the AST comes in.
//
// The AST will know that I am using "add", and will know that
// "multiply" is not used, so it can be removed from the bundle
// completely.
//
// That is one of the reasons why we use import/export —
// to know whether things are used or not:
//  - if something is imported → it's used
//  - if something is exported only → check if it's imported anywhere,
//    if not → remove it
//
// If everything was in the same file, it would have to search
// whether the function is called or not — harder to track.
//
// Summary:
//  - Tree shaking = removing unused code
//  - Is the AST important here? YES, absolutely —
//    because through it we know what is imported and exported,
//    and that's what makes the decision to keep or remove possible.

/*
--- Flow --- 

// YOUR CODE (math.js)
// ───────────────────────────────────────
// export function add() {}
// export function multiply() {}
//
// YOUR CODE (index.js)
// ───────────────────────────────────────
// import { add } from "./math";
//
//
//          ↓ Webpack reads your files
//
//
// AST ANALYSIS
// ───────────────────────────────────────
// Webpack parses the code into an AST
// and can now clearly see:
//  - "add"      → exported from math.js, imported in index.js  ✔ KEEP
//  - "multiply" → exported from math.js, never imported        ✗ REMOVE
//
//
//          ↓ Tree Shaking kicks in
//
//
// BUNDLE OUTPUT
// ───────────────────────────────────────
// function add() {}
//
// "multiply" is gone — never made it into the bundle.

*/
