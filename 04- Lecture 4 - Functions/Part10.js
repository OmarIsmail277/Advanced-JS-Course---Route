// function.length

function add(a, b, c) {
  console.log(a + b + c);
}

console.log(add.length); // 3 -> number of params

// Notice that is an evidence showing that the function is an Object in its origin, and it have some properties
// length are from them, and it returns the number of params passed

// some tricks and edge cases in that

// 1
function add(a, b = 10, c) {
  console.log(a + b);
}

console.log(add.length); // 1, because it stops till the default parameter (returns number of params before the first default param)

// 2
function add(...test) {
  console.log(test);
}

console.log(add.length); // 0, rest params are not counted as params when using .length

// 3

const x = function () {};

console.log(x.name); // x, concluded from the variable name

const x = function dates() {};

console.log(x.name); // dates, best dates on planet Earth! 😅

// ---------------------------------------------------------------------------

// What if used bind? 🤔‼️

function sayHi() {}

const x = sayHi.bind(null);

console.log(x.name); // bound sayHi

// bind() returns a new function.
// JavaScript automatically prefixes its name with "bound ".
// This helps identify bound functions during debugging.

// You can also verify that bind() creates a completely new function:
console.log(x === sayHi); // false

// Because bind() doesn't modify the original function—it returns a new one with the bound this
// (and optionally pre-filled arguments).

// bound جايه من كلمة boundary الي هي الحدود بتاعك
