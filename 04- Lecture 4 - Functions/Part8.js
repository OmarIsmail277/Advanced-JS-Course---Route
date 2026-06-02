// function composition

function formateTitle(title) {
  const trimTitle = title.trim();
  const lowered = trimTitle.toLowerCase();
  const res = `<h1> ${lowered}</h1>`;
  return res;
}

// But here, all are in one function, we can break it down into smaller functions
// and compose them together to make the whole function
// this is called function composition

const trim = (str) => str.trim();
const lowered = (str) => str.toLowerCase();
const htmlWrap = (str) => `<h1>${str}</h1>`;
const htmlDesc = (str) => `<p>${str}</p>`;

const res = htmlWrap(lowered(trim(" BL7 HELLOOOO   ")));
const desc = htmlDesc(lowered(trim(" BL7 HELLOOOO   ")));

console.log(res);
console.log(desc);

// What we made here is single responsibility

// Function composition = building complex behavior by combining small single-purpose functions.
// Benefit: reuse, readability, testability, and flexibility.

// -------------------------------------------------------------------------------------------------------------

// Detailed Summary

// Function Composition:
// ----------------------
// Function composition is a technique where we build complex logic
// by combining small, pure, single-purpose functions together.
//
// Instead of writing one big function that does everything step by step,
// we split the logic into independent functions and "compose" them.
//
// Example idea:
//   input → trim → lowercase → wrap in HTML → output
//
// Each function does ONE responsibility:
// - trim(str)       → removes extra spaces
// - lowered(str)    → converts string to lowercase
// - htmlWrap(str)   → wraps string inside HTML tags
// - htmlDesc(str)   → wraps string in a paragraph tag
//
// Then we combine them like a pipeline:
//
//   htmlWrap(lowered(trim(" BL7 HELLOOOO   ")))
//
// Benefits of function composition:
//
// 1. Single Responsibility Principle (SRP)
//    Each function has one clear job, making code easier to understand.
//
// 2. Reusability
//    Small functions can be reused in different combinations without rewriting logic.
//
// 3. Easier Testing
//    Each function can be tested independently instead of testing one large function.
//
// 4. Better Maintainability
//    If behavior changes, you only modify one small function instead of a big block.
//
// 5. Flexibility
//    You can create multiple pipelines using the same building blocks:
//    htmlWrap(lowered(trim(str)))
//    htmlDesc(lowered(trim(str)))
//
// 6. Readability (Declarative Style)
//    The code reads like a sequence of transformations:
//    "trim → lowercase → wrap"
//
// In short:
// Function composition = building complex behavior by chaining small functions
// together instead of writing one large function.
//
// This is a core concept in functional programming and is widely used in
// modern frameworks like React, Redux, and RxJS.

// Yes — we are not required to use built-in methods directly in a chain.
// We can choose exactly what we need and wrap it inside our own functions.
//
// Instead of relying on a long built-in chain like:
//   str.trim().toLowerCase().slice(...)
//
// We can break the logic into small reusable functions and use only the
// transformations we actually want.
//
// This gives us full control over the flow of data:
//
// - We decide which steps exist
// - We decide the order of execution
// - We can skip or replace steps easily
//
// Example:
//
// const trim = (str) => str.trim();
// const lower = (str) => str.toLowerCase();
// const wrap = (str) => `<h1>${str}</h1>`;
//
// We can use only what we need:
//
// wrap(lower(trim("  HELLO  ")));
//
// Or we can skip steps entirely:
//
// wrap(trim("  HELLO  "));
//
// This is powerful because:
//
// 1. We are not locked into one built-in chain
// 2. We control the transformation pipeline
// 3. We can reuse or replace any step easily
// 4. Our code becomes more flexible and readable
//
// In short:
// We use only the methods/functions we need, and ignore everything else.
// Composition gives us freedom to design our own flow instead of depending
// on a fixed built-in chain.
