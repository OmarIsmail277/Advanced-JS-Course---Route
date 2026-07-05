// ============================================================
// OOP (Object-Oriented Programming) - Introduction
// ============================================================
//
// OOP IS A MENTALITY
// ------------------
// OOP is a way of thinking and organizing code.
//
// In programming, there are usually multiple ways to solve the same problem
// ("all roads lead to Rome"), but some approaches are more maintainable,
// scalable, and easier for other developers to understand.
//
// The goal is not only to make code work, but also to make it readable
// and organized.
//
// ============================================================
// OOP IN JAVASCRIPT
// ============================================================
//
// JavaScript's OOP model is different from languages such as Java and C#.
//
// Java & C#:
// - Primarily class-based.
//
// JavaScript:
// - Prototype-based.
// - Built on Objects + Prototype Chain.
//
// Although JavaScript supports Classes, they are only syntactic sugar.
// Under the hood, classes are still implemented using objects and the
// prototype chain.
//
// ============================================================
// THINKING IN OBJECTS
// ============================================================
//
// Procedural Thinking:
// --------------------
// loginUser();
// updateUser();
// deleteUser();
//
// OOP Thinking:
// -------------
// Group related data and functionality into a single object.
//
// const user = {
//   login() {},
//   update() {},
//   delete() {},
// };
//
// Instead of thinking in terms of functions, we think in terms of entities
// (objects) that contain both data and behavior.
//
// ============================================================
// ENTITY CONCEPT
// ============================================================
//
// Object = Entity
//
// An entity represents an independent thing in the application,
// such as:
//
// - User
// - Product
// - Order
// - Car
// - Bank Account
//
// Each entity contains information about itself and actions it can perform.
//
// ============================================================
// OBJECT = DATA + BEHAVIOR
// ============================================================

const user = {
  name: "Ahmed",
  email: "[ahmed@example.com](mailto:ahmed@example.com)",

  login() {
    console.log("Logged in!");
  },

  eat() {
    console.log("Pizza");
  },
};

// State (Data)
// ------------
// name
// email
//
// Behavior (Methods)
// ------------------
// login()
// eat()
//
// General Rule:
// Object = State + Behavior
//
// State  => What the object knows.
// Behavior => What the object does.
//
// ============================================================
// INTERVIEW QUESTIONS
// ============================================================
//
// Q: What is an Object in JavaScript?
//
// A:
// An object is a collection of related data (properties)
// and behavior (methods) that represent a specific entity.
//
// OR
//
// An object is a structure that groups related state and
// behavior into a single unit.
//
// ============================================================
// IMPORTANT NOTES
// ============================================================
//
// - Objects are the foundation of OOP in JavaScript.
// - Classes in JavaScript are syntactic sugar over prototypes.
// - OOP encourages grouping related data and functionality together.
// - A well-designed object should represent a single meaningful entity.
// - One of the main goals of OOP is improving code organization,
//   readability, and maintainability.
//
