// =========================================
// Property Descriptors
// =========================================

/*
Objects are not just key-value pairs.

Each property has a descriptor (metadata)
that controls its behavior.
*/

const user = {
  name: "Ali",
};

const descriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(descriptor);

/*
Output:

{
  value: "Ali",
  writable: true,
  enumerable: true,
  configurable: true
}
*/

/*
-----------------------------------------
Descriptor Properties
-----------------------------------------

value
→ actual value

writable
→ can the value be changed?

enumerable
→ appears in loops and Object.keys()?

configurable
→ can be deleted or reconfigured?
*/

// 🍎 writable
// ---------------------------------------------
const user2 = {};

Object.defineProperty(user2, "name", {
  value: "Omar",
  writable: false,
});

user2.name = "Ahmed";

console.log(user2.name); // Omar

/*
Because writable is false.

In non-strict mode:
- assignment is silently ignored

In strict mode:
- TypeError is thrown
*/

// ---------------------------------------------
// 🍎 enumerable
// ---------------------------------------------

const user3 = {
  name: "Ali",
};

Object.defineProperty(user3, "password", {
  value: "123456",
  enumerable: false,
});

console.log(Object.keys(user3));
// ["name"]

console.log(user3.password); // still works and can be accessed normally
// "123456"

/*
enumerable: false

DOES NOT mean private.

It only means:

- hidden from Object.keys()
- hidden from for...in
- hidden from JSON.stringify()

The property can still be accessed directly.
*/

// ---------------------------------------------
// 🍎 configurable
// ---------------------------------------------

const user4 = {};

Object.defineProperty(user4, "id", {
  value: "1",
  configurable: false,
});

delete user4.id;

console.log(user4.id); // "1"

/*
configurable: false means:

❌ cannot delete the property

❌ cannot redefine descriptor options later

Example:

Object.defineProperty(user4, "id", {
  enumerable: true
});

TypeError
*/

// ----------------------------
// Very Important Gotcha 🤚⚠️⚠️

// Many developers don't know this: ‼️

const obj = {};

Object.defineProperty(obj, "name", {
  value: "Ali",
});

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// Output
// {
//   value: "Ali",
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// Why? 🤔💭
// Because when using defineProperty, omitted flags default to false.

// While in our normal use case

const obj = {
  name: "Ali",
};

// Descriptor:
// {
//   value: "Ali",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// defineProperties - It simply lets you define multiple properties at once.
Object.defineProperties(obj, {
  name: {
    value: "Ali",
    writable: true,
  },

  age: {
    value: 30,
    writable: false,
  },
});

/*
Property descriptors are one of the foundations
of JavaScript's object system.

Features such as:
- Object.freeze()
- Object.seal()
- Classes
- Getters & Setters

are built on top of property descriptors.
*/

// important note: writable controls whether the value of a property can be changed,
// while configurable controls whether the property itself can be deleted or redefined using Object.defineProperty.

/*
=========================================
writable vs configurable (IMPORTANT)
=========================================

writable:
→ controls whether the VALUE can be changed

Example:
obj.name = "Ahmed";

If writable: false → value cannot be changed


configurable:
→ controls whether the "PROPERTY" itself can be
  modified or deleted

It affects:
- delete obj.name ❌ (if false)
- redefining property using Object.defineProperty ❌
- changing writable/enumerable/configurable ❌

=========================================

Simple rule:

writable     → can I change the VALUE?
configurable → can I change/remove the PROPERTY?
=========================================

❌ configurable does NOT control value changes

It controls:
1- delete property
2- redefine descriptor

value change → controlled ONLY by writable
delete/modify property → controlled by configurable

configurable has nothing to do with changing the value. It only controls whether the property can be deleted or redefined. 
Value changes are controlled by writable.
*/
