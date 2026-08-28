/*
 * ============================================================
 *  MODULE BUNDLING — WHY IT EXISTS & HOW IT WORKS
 * ============================================================
 *
 * This session is very important, why? because we will understand
 * how the browser works when it sees our files, not how it renders,
 * but how it reads them.
 *
 * Second, if you are using a framework like React, Angular, or Vue,
 * you will understand how you write a lot of files and at last it
 * gets you a bundle file (1, 2 or 3) based on the configuration.
 *
 *
 * WHAT WE WILL COVER
 * ------------------
 * We will explain module bundling — what is a module, what is
 * bundling, from where this idea came from, and what tools offer
 * that (the same tools frameworks use).
 *
 * For example in Angular, every component consists of html, css, js.
 * If my app has 500 components → 500 * 3 = 1500 files.
 * Is it possible or logical to have 1500 files? Sure no!
 * It only produces a bundle file at last: one for js, one for css,
 * one index.html, and some images.
 * We want to understand how that happens.
 *
 *
 * BUT BEFORE THAT — WHAT IS THE ORIGINAL PROBLEM?
 * ------------------------------------------------
 * Suppose we have an index.html and a js/ folder containing
 * 3 files: auth.js, cart.js, main.js
 * and then we add them in our html file:
 *
 *   <script src="auth.js"></script>
 *   <script src="cart.js"></script>
 *   <script src="main.js"></script>
 *
 * But we have to take care of the ORDER of files because it differs.
 *
 * Suppose you are inside auth.js and want to get something from
 * cart.js — when the browser/parser is inside auth and wants something
 * from cart, it's not yet loaded → resulting in an error.
 *
 * Also if you forgot a file in the middle and didn't add it in html,
 * it will show an error.
 *
 * If you have 50 files, adding them in html → 50 requests will
 * happen to fetch those files.
 *
 * If you want to minify those files, you will be forced to compress
 * 50 files by hand.
 *
 * If you want to use TypeScript, you will have 50 .ts files,
 * you need to convert them to 50 .js files and then minify them too.
 *
 * Every time you want to make a new version, you will feel a headache
 * moving around yourself.
 *
 *
 * ANOTHER PROBLEM — GLOBAL NAMESPACE POLLUTION
 * --------------------------------------------
 * Overriding variable names across separate files,
 * with the most bottom-added script having the priority:
 *
 *   var userName = "ahmed";  // auth.js
 *   var userName = "abdo";   // main.js
 *
 *   userName; // "abdo"  ← auth's value (ahmed) silently overwritten
 *
 * That is called Global Namespace Pollution.
 *
 *
 * THE SOLUTION — A NEW CONCEPT CALLED "MODULE"
 * --------------------------------------------
 * A module can be said as a part of my website.
 * e.g. → module for authentication, module for salary/financial,
 *         module for x, module for y
 *
 * What also came new is ES6 Modules.
 * The idea: import only ONE main.js file, and inside it import
 * any needed script/module and take whatever we want from it.
 *
 *   // auth.js
 *   export let userName = "ahmed";
 *
 *   // main.js
 *   import { userName } from "./auth.js";
 *   console.log(userName); // "ahmed"
 *
 * But we have to add type="module" in the script tag:
 *
 *   <script type="module" src="js/main.js"></script>
 *
 *
 * We can also export functions:
 *
 *   // auth.js
 *   let workingHours = 8; // NOT exported → private
 *   export function calcSalary(rate) {
 *     return rate * workingHours;
 *   }
 *
 *   // main.js
 *   import { calcSalary } from "./auth.js";
 *   console.log(calcSalary(400)); // 3200
 *
 * Anything that is not exported like workingHours cannot be seen
 * by other scripts — that is the idea mainly, initially.
 *
 * ============================================================
 */
