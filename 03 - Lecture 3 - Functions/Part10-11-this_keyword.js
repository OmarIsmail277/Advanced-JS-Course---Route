// "this" keyword

const user = {
  name: "Ahmed",
  sayName: function () {
    console.log(this.name);
  },
};

user.sayName(); // Ahmed

const fn = user.sayName;
fn(); // undefined

// `user.sayName()` works because the function is called
// as a method of the `user` object, so:
// this === user
//
// But when we store the function in another variable:
//
// const fn = user.sayName; here I took its refernce only as if I made that

const fn = function () {
  console.log(this.name);
};

//
// and call:
//
// fn()
//
// the connection to `user` is lost.
// Now it's just a normal function call, not a method as before
// so `this` is determined by the default behavior
// (window in browsers, or undefined in strict mode).
//
// Important:
// In regular functions, `this` is NOT determined
// by where the function is defined,
// but by how the function is called.

// Now that was for regular functions, what about arrow functions?

const person = {
  name: "Omar",

  regularFunction: function () {
    console.log(this.name);
  },

  arrowFunction: () => {
    console.log(this.name);
  },
};

person.regularFunction(); // "Omar"
person.arrowFunction(); // undefined (in browser)

// regularFunction gets this from HOW it is called
// → person.regularFunction()
// → so this === person

// arrowFunction does NOT create its own this
// → it inherits this from WHERE it was created
// → here, the surrounding scope is the global scope (window in browser),
// → window.name is usually undefined

// in general the surrounding scope is the parent scope, does not have to be the global scope
// Example for that part:
const user = {
  name: "Ahmed",
  sayName: function () {
    console.log(this);
    const x = () => {
      console.log(this);
    };
    x(); // "Ahmed"
  },
};

user.sayName();
const fn = user.sayName;
fn();

// Arrow functions inherit `this` from the surrounding lexical scope.
// The surrounding scope is usually the parent function scope,
// not necessarily the global scope.

// Some books say that the arrow function should not be used as a method inside an object

// ----------------

// And yes — you can get a reference to x and call it outside.

// Example:

const user = {
  name: "Ahmed",

  sayName: function () {
    const x = () => {
      console.log(this);
    };

    return x;
  },
};

const fn = user.sayName();

fn();

// Output:
// { name: "Ahmed", sayName: f }

// Why?
// Because the arrow function permanently captured:
// this === user
// at the moment it was created.
// So even though fn() is called later as a normal function call, the arrow function does not care about the call site.
// Its this is already lexically bound.

// -------------------------------------------------------------------

function test() {
  console.log(this);
}

test(); // window (in browser) without strict mode, {} (in server)

("use strict"); // prevents you from writing spaghetti code 😁

// without use strict for example

var let = 10; // ✅

// it permitted that although "let" is a reserved keyword in JS

// Now, with strict mode
// Syntax Error: unexptected strict mode reserved word

// in case of functions and this

test(); // undefined

// ----

function test() {
  setTimeout(function () {
    console.log(this);
  }, 500);
}

test(); // Window

("use strict");

function test() {
  setTimeout(function () {
    console.log(this); // Logs: window (in a browser)
  }, 500);
}

test();

/*
 * "this" in setTimeout Callbacks:
 * 1. Regular functions/callbacks inside setTimeout ALWAYS have 'this' set to
 *    the global object (window/global).
 * 2. This happens because the native browser/Node API explicitly invokes the
 *    callback with the global context (akin to callback.call(window)).
 * 3. Adding "use strict" inside the callback does NOT change this, because
 *    the context is explicitly provided by the environment.
 * 4. To get 'this === undefined' or inherit an outer strict context,
 *    you MUST use an arrow function, which bypasses setTimeout's binding.
 */

// The Core Difference
// Arrow Function: Asks, "Where was I written?" It was written inside test(), so it copies test's this (undefined).

// Regular Function: Asks, "Who is calling me right now?" The browser is calling it 500ms later, so it gets forced into the window object
