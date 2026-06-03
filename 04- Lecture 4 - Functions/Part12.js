//

// Object with two methods:
// 1. normal function → has its own `this`
// 2. arrow function  → does NOT have its own `this` (lexical this)

const obj = {
  name: "JS",

  normal: function () {
    // `this` depends on how the function is called
    // here it's called as obj.normal() → this = obj
    console.log(this.name); // "JS"
  },

  arrow: () => {
    // arrow function does NOT get `this` from obj
    // it takes `this` from its surrounding scope (global/module)
    console.log(this.name); // undefined
  },
};

// normal function: `this` refers to obj
obj.normal(); // JS

// arrow function: `this` is NOT obj, so it cannot access obj.name
obj.arrow(); // undefined

// ------------------------------------------------------------------------------------

// Object with a method that uses setTimeout

const user = {
  name: "Ahmed",

  sayName() {
    // `sayName` is called as a method → this = user
    // but inside setTimeout we use a normal function

    setTimeout(function () {
      // ❌ this is NOT user here
      // because setTimeout calls this function on its own
      // so `this` becomes global object (window) or undefined (strict mode)

      console.log(this.name); // undefined
    }, 1000);
  },
};

user.sayName();

/*
🧠 What is happening (important idea)

Inside sayName():

this = user ✔

But inside setTimeout(function () { ... }):

the callback is a normal function
it loses the user context
so this is NOT preserved
*/

// Fixes

// 1. Arrow function (BEST)

const user = {
  name: "Ahmed",

  sayName() {
    setTimeout(() => {
      console.log(this.name); // Ahmed
    }, 1000);
  },
};

// 👉 Arrow function inherits this from sayName → user

// 2. bind
const user = {
  name: "Ahmed",

  sayName() {
    setTimeout(
      function () {
        console.log(this.name);
      }.bind(this),
      1000,
    );
  },
};

// 3. store this
const user = {
  name: "Ahmed",

  sayName() {
    const that = this;

    setTimeout(() => {
      console.log(that.name); // Ahmed
    }, 1000);
  },
};

// Normal functions inside setTimeout lose `this`,
// because setTimeout calls them independently.
// Arrow functions or bind() preserve the outer `this`.

/// ------------------------------------------------------------

// Object method demonstrating how `this` changes in nested functions

const user = {
  name: "Ahmed",

  sayName() {
    // Here `sayName` is called as a method → this = user
    console.log(this); // user

    function test() {
      // ❌ This is a normal function call (not a method call)
      // so `this` is NOT inherited from sayName
      // it defaults to:
      // - global object (window) in non-strict mode
      // - undefined in strict mode

      console.log(this); // global object / undefined
    }

    test(); // plain function call → loses `this` - this depends on HOW the function is called, not where it is written.
  },
};

user.sayName();

/*
⚠️ Why people get confused

Because test() is written inside sayName(), people assume:

“it should inherit this”

❌ Wrong — only arrow functions inherit this lexically
*/

// Nested normal functions lose `this` because they are called as plain functions.
// Only arrow functions preserve `this` because they capture it lexically.
