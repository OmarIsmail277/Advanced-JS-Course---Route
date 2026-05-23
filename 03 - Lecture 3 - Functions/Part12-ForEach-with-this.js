// forEach with this

const person = {
  name: "Abdo",
  hobbies: ["Coding", "Gaming"],
  printHobbies() {
    this.hobbies.forEach(function (hobby) {
      console.log(this.name, hobby);
    });
  },
};

person.printHobbies();

/*
==================== THIS KEYWORD SUMMARY ====================

1) REGULAR FUNCTIONS:
- `this` is NOT based on where the function is written
- `this` is based on HOW the function is called

Examples:
obj.method()  -> this = obj
fn()          -> this = undefined (strict mode) OR window (browser non-strict)

Key idea:
👉 "Who is calling me?"

------------------------------------------------------------

2) OBJECT METHODS:
const obj = {
  name: "Abdo",
  say() { console.log(this.name); }
};

obj.say()
-> this = obj (because call is obj.say())

BUT:
const fn = obj.say;
fn()
-> lost the object → this becomes undefined/window

------------------------------------------------------------

3) ARROW FUNCTIONS:
- Arrow functions do NOT have their own `this`
- They inherit `this` from the surrounding lexical scope
- IMPORTANT: objects are NOT scopes!

Example:
const obj = {
  name: "Abdo",
  say: () => console.log(this.name)
};

-> this does NOT refer to obj
-> it refers to outer scope (global/module)

Key idea:
👉 "Where was I defined?"

------------------------------------------------------------

4) CALLBACKS (e.g. forEach, setTimeout):
- Regular function callbacks lose `this`
- Because they are called as plain functions: callback()

Example:
array.forEach(function () {
  console.log(this); // undefined/window
});

Fix:
✔ use arrow function (inherits this) - ✅
✔ or pass thisArg (for forEach) - OLD

------------------------------------------------------------


// Why arrow function works in forEach:

const person = {
  name: "Abdo",
  hobbies: ["Coding", "Gaming"],

  printHobbies() {
    this.hobbies.forEach((hobby) => {
      console.log(this.name, hobby);
    });
  },
};

// Arrow function does NOT get its own `this`.
// It inherits `this` from printHobbies(), where this === person.
//
// So even though forEach calls it like a normal function,
// it still uses `this` from the surrounding scope.

FINAL RULE:

- Regular function → dynamic this (call-site based)
- Arrow function   → lexical this (definition-site based)

============================================================
*/
