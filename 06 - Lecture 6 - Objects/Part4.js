// =========================================
// Checking if a property exists in an object
// =========================================

const user = {
  name: "Nour",
  age: 32,
  isInstructor: true,
};

/*
-----------------------------------------
1) "in" operator
-----------------------------------------

Checks if the property exists in:
- the object itself
- OR its prototype chain
*/

console.log("name" in user); // true
console.log("toString" in user); // true ❗ (from prototype)

/*
Why is "toString" true?

Because all objects inherit from Object.prototype
(unless explicitly removed)
*/

/*
-----------------------------------------
2) hasOwnProperty
-----------------------------------------

Checks ONLY the object itself (not prototype)
*/

console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("toString")); // false

/*
-----------------------------------------
3) Modern safe way
-----------------------------------------
*/

console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "toString")); // false

/*
-----------------------------------------
Why Object.hasOwn is better?
-----------------------------------------
*/

const obj = Object.create(null);

obj.name = "bl7";

/*
Now obj has NO prototype at all
So this will FAIL:
*/

// obj.hasOwnProperty("name"); ❌ TypeError

/*
Because:
obj -> null prototype
no Object.prototype inherited
*/

/*
But this works safely:
*/

console.log(Object.hasOwn(obj, "name")); // true

/*
-----------------------------------------
IMPORTANT INTERVIEW QUESTION
-----------------------------------------

Q: Difference between:
*/

"key" in obj;
Object.hasOwn(obj, "key");

/*
Answer:

1) "in"
- checks object + prototype chain

2) Object.hasOwn
- checks ONLY the object itself
- ignores prototype chain

-----------------------------------------
Prototype Insight
-----------------------------------------

All objects in JS (except Object.create(null))
inherit from:

Object.prototype

That's why methods like:
- toString
- hasOwnProperty

exist even if you didn't define them.
*/
