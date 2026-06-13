/*
=========================================
Virtual Properties (Getters & Setters)
=========================================

Objects in JavaScript can have "virtual properties"
using getters and setters.

These are properties that do NOT store a value directly,
but instead compute or control access to a value.

-----------------------------------------
1) GETTER
-----------------------------------------

A getter allows you to define a property that is
computed dynamically when accessed.

Example:

const user = {
  firstName: "Ali",
  lastName: "Ahmed",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

Usage:
user.fullName  // no parentheses

Important:
- Looks like a property
- Internally runs a function
- Used for derived/computed values

-----------------------------------------
2) SETTER
-----------------------------------------

A setter allows you to control how a property is set.

Example:

const user = {
  firstName: "Ali",
  lastName: "Ahmed",

  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0] || "";
    this.lastName = parts[1] || "";
  }
};

Usage:
user.fullName = "Omar Ahmed";

This will automatically update:
- firstName
- lastName

-----------------------------------------
3) DEFINEPROPERTY VERSION
-----------------------------------------

Object.defineProperty(product, "total", {
  get() {
    return this.price * this.quantity;
  }
});

This creates a virtual computed property:
product.total

-----------------------------------------
4) WHEN TO USE GETTERS
-----------------------------------------

Use getters when:
- Value is derived from other values
- You want computed state
- Example: fullName, totalPrice, ageInDays

DO NOT use getters for:
- Heavy logic
- Side effects (API calls, logging, etc.)
   
-----------------------------------------
5) GETTER vs METHOD (IMPORTANT)
-----------------------------------------

Getter:
- accessed like a property → user.fullName
- no parentheses
- represents computed VALUE

Method:
- called like a function → user.fullName()
- represents ACTION or BEHAVIOR
- may have side effects

Simple rule:
- Getter → data (state)
- Method → action (behavior)

=========================================
*/
