// =========================================
// Order of Properties in JavaScript Objects
// =========================================

const obj = {
  b: "B",
  a: "A",
  2: "two",
  1: "one",
};

console.log(obj);
console.log(Object.keys(obj));

/*
Output:

{
  1: "one",
  2: "two",
  b: "B",
  a: "A"
}

["1", "2", "b", "a"]

-----------------------------------------
How JS Orders Object Properties
-----------------------------------------

JavaScript does NOT always preserve insertion order.

Properties are returned in this order:

1) Integer-like keys (ascending order)
2) String keys (in insertion order)
3) Symbol keys (in insertion order)

Example:

{
  b: "B",
  a: "A",
  2: "two",
  1: "one"
}

becomes:

1
2
b
a
*/

/*
-----------------------------------------
Interview Question
-----------------------------------------
*/

const obj2 = {};

obj2["z"] = 1;
obj2["a"] = 2;
obj2["10"] = 3;
obj2["2"] = 4;

console.log(Object.keys(obj2));

/*
Output:

["2", "10", "z", "a"]

Why?

Because:

"2" and "10" are integer-like keys.

Integer-like keys are sorted numerically.

Then string keys follow in insertion order.
*/

/*
-----------------------------------------
What about Symbols?
-----------------------------------------

Symbols come after strings.
*/

const sym = Symbol("id");

const obj3 = {
  b: 1,
  a: 2,
  [sym]: 3,
};

/*
Order:

1) Integer keys
2) String keys
3) Symbol keys
*/

Object.keys(obj3); // does not return Symbols at all.
// ["b", "a"]

// To get Symbol keys:
Object.getOwnPropertySymbols(obj3);

/*
-----------------------------------------
Chrome DevTools Message
-----------------------------------------

Sometimes you may see:

"This value was evaluated upon first expanding.
It may have changed since then."

Why?

The console logs object references.

If the object changes after logging,
expanding it later may show the updated state,
not necessarily the exact state at log time.
*/

/*
-----------------------------------------
How to Preserve Insertion Order?
-----------------------------------------

Use Map.
*/

const map = new Map();

map.set("z", 1);
map.set("a", 2);
map.set("10", 3);
map.set("2", 4);

console.log([...map.keys()]);

/*
Output:

["z", "a", "10", "2"]

Map always preserves insertion order.
*/

/*
-----------------------------------------
Important Interview Note
-----------------------------------------

Objects are not designed as ordered collections.

If order matters:
- Use Map
- Use Array

Do not rely on object property order
for application logic.
*/
