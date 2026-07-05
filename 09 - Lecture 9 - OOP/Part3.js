/*
╔══════════════════════════════════════════════════════════════╗
║                 THE "this" KEYWORD IN OBJECTS 🎯            ║
╚══════════════════════════════════════════════════════════════╝

One of the most important concepts in OOP and JavaScript objects
is understanding the "this" keyword.

A simple rule to remember:

🔥 "this" depends on HOW the function is called.

It does NOT depend on where the function was created.
It depends on who calls it.

---

## EXAMPLE: OBJECT METHOD

*/

const product = {
  id: 1,
  title: "Toshiba",
  price: 2000,

  applyDiscount(discount) {
    this.price = this.price - discount;
  },
};

product.applyDiscount(10);

/*
When we write:

product.applyDiscount(10);

JavaScript sees:

product === caller

Therefore:

this === product

So the following line becomes:

product.price = product.price - discount;

Current price:
2000 → 1990 ✅

╔══════════════════════════════════════════════════════════════╗
║               WHY DO WE NEED "this"? 🤔                     ║
╚══════════════════════════════════════════════════════════════╝

Let's remove "this".
*/

const brokenProduct = {
  id: 1,
  title: "Toshiba",
  price: 2000,

  applyDiscount(discount) {
    price = price - discount;
  },
};

/*
When this method runs, JavaScript starts searching for a variable
named "price".

Where does it search?

1. Current scope
2. Parent scopes
3. Global scope

It does NOT automatically search inside the object itself.

Since no variable named "price" exists anywhere,
JavaScript throws:

❌ ReferenceError: price is not defined

Because "price" is an object property,
we must access it through:

this.price

or

product.price

╔══════════════════════════════════════════════════════════════╗
║               OLD JAVASCRIPT GOTCHA ⚠️                      ║
╚══════════════════════════════════════════════════════════════╝
*/

function test() {
  x = 10;
}

/*
In old JavaScript (non-strict mode):

Calling test() would create a global variable!

window.x === 10

This was considered a language mistake.

Today we usually use:

"use strict";

which turns it into:

❌ ReferenceError

instead of silently creating globals.

╔══════════════════════════════════════════════════════════════╗
║                  LOSING THE REFERENCE 😱                    ║
╚══════════════════════════════════════════════════════════════╝
*/

/*
Suppose we store the method in a variable.
*/

const discountFn = product.applyDiscount;

/*
Now we call:
*/

discountFn(20);

/*
What happened?

The method is no longer called through product.

❌ product.applyDiscount(20)

became

❌ discountFn(20)

There is no object before the dot anymore.

Therefore:

this is lost.

In strict mode:

this === undefined

and JavaScript throws an error when trying to access:

this.price

╔══════════════════════════════════════════════════════════════╗
║                  COMMON INTERVIEW TRAP 🎤                   ║
╚══════════════════════════════════════════════════════════════╝
*/

const laptop = {
  price: 2000,

  showPrice() {
    console.log(this.price);
  },
};

const fn = laptop.showPrice;

fn();

/*
Question:
What will be printed?

Answer:

In strict mode:
❌ Error

Because:

this === undefined

The original object reference was lost.

╔══════════════════════════════════════════════════════════════╗
║                   IMPORTANT CORRECTION ✅                   ║
╚══════════════════════════════════════════════════════════════╝

Your original note had:

let x = product.applyDiscount()
x(20);

This is not exactly what causes the reference loss.

The correct example is:
*/

const x = product.applyDiscount;

x(20);

/*
Because:

product.applyDiscount()

EXECUTES the function immediately and returns undefined.

So x becomes:

const x = undefined;

and then:

x(20);

would produce:

❌ TypeError: x is not a function

The real "lost reference" scenario is:

const x = product.applyDiscount;
x(20);

because the function is extracted from the object.

╔══════════════════════════════════════════════════════════════╗
║                    GOLDEN RULE ⭐                           ║
╚══════════════════════════════════════════════════════════════╝

Inside object methods:

✓ Use this.property
✓ Use this.method()

Remember:

🧠 "this" is determined at call time.

Who calls the function?
That object becomes "this".
*/
