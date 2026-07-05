/*
╔══════════════════════════════════════════════════════════════╗
║                PROTOTYPE CHAIN & INHERITANCE 🔗             ║
╚══════════════════════════════════════════════════════════════╝

One of the most powerful features in JavaScript OOP is:

✨ Prototype Inheritance

Instead of copying properties and methods from one object
to another, JavaScript allows objects to inherit them
through the Prototype Chain.

This saves memory and promotes code reuse.

--------------------------------------------------------------
STEP 1: CREATE A PARENT OBJECT
--------------------------------------------------------------
*/

const human = {
  isAlive: true,

  eat() {
    console.log("🍕 Pizza!");
  },
};

/*
The "human" object represents our parent.

Anything inheriting from it will gain access to:

✓ isAlive
✓ eat()

--------------------------------------------------------------
STEP 2: CREATE A CHILD OBJECT
--------------------------------------------------------------
*/

const person = {
  name: "Ahmed",
  age: 33,
};

/*
At this point:

person only owns:

✓ name
✓ age

It knows nothing about:

❌ isAlive
❌ eat()

Let's fix that. 😎
*/

/*
--------------------------------------------------------------
STEP 3: LINK THEM TOGETHER
--------------------------------------------------------------
*/

Object.setPrototypeOf(person, human);

/*
Congratulations! 🎉

We just created a Prototype Inheritance relationship.

Think of it as saying:

person inherits from human.

Conceptually:

person
      │
      ▼
human

Notice:

❌ No properties were copied.

Instead...

JavaScript simply created a prototype link between them.
*/

/*
--------------------------------------------------------------
STEP 4: PROPERTY LOOKUP
--------------------------------------------------------------
*/

console.log(person.isAlive);

/*
How does JavaScript find isAlive?

Step 1️⃣

Search inside person.

↓

Not found.

Step 2️⃣

Move to person's prototype.

↓

human

↓

Found!

↓

Return true.

This lookup process is called:

✨ Prototype Chain
*/

/*
--------------------------------------------------------------
MULTI-LEVEL INHERITANCE 🚀
--------------------------------------------------------------
*/

const engineer = {
  dept: "Computer",
};

Object.setPrototypeOf(engineer, person);

/*
Now the chain becomes:

engineer
     │
     ▼
person
     │
     ▼
human
     │
     ▼
Object.prototype
     │
     ▼
null

Visual representation:

┌────────────────────┐
│ engineer           │
│--------------------│
│ dept               │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ person             │
│--------------------│
│ name               │
│ age                │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ human              │
│--------------------│
│ isAlive            │
│ eat()              │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Object.prototype   │
└─────────┬──────────┘
          │
          ▼
        null

Now engineer can access:

✓ dept
✓ name
✓ age
✓ isAlive
✓ eat()

Even though those properties are not directly inside engineer!

That's the beauty of inheritance. 😄

┌─────────────────────────────────┐
│ ENGINEER                        │
│   dept                          │
│                                 │
│   ┌─────────────────────────┐   │
│   │ PERSON                  │   │
│   │   name/age              │   │
│   │                         │   │
│   │   ┌─────────────────┐   │   │
│   │   │ HUMAN           │   │   │
│   │   │   (isAlive/eat) │   │   │
│   │   └─────────────────┘   │   │
│   └─────────────────────────┘   │
└─────────────────────────────────┘


/*
--------------------------------------------------------------
WHAT CAN BE A PROTOTYPE?
--------------------------------------------------------------
*/

Object.setPrototypeOf(engineer, person); // ✅

/*
A prototype can only be:

✓ Another object
✓ null

For example:
*/

// Object.setPrototypeOf(engineer, 10); // ❌ TypeError

/*
Numbers, strings, booleans, etc. cannot be prototypes.
*/

/*
--------------------------------------------------------------
WHY WOULD WE USE null?
--------------------------------------------------------------
*/

const arr = [];

Object.setPrototypeOf(arr, null);

/*
Normally, arrays inherit from:

Array.prototype

That's why arrays have:

✓ push()
✓ pop()
✓ map()
✓ filter()
✓ includes()

After replacing the prototype with null...

arr loses all of these methods!

For example:

arr.push(1);

❌ TypeError: x.push is not a function

because push() no longer exists.

You have completely disconnected the object
from its inheritance chain.


/*
--------------------------------------------------------------
STOPPING THE PROTOTYPE CHAIN 🛑
--------------------------------------------------------------

Normally the chain looks like:

Array
   │
   ▼
Array.prototype
   │
   ▼
Object.prototype
   │
   ▼
null

When we execute:

Object.setPrototypeOf(arr, null);

the chain becomes:

arr
 │
 ▼
null

There is nowhere else to search.

The lookup process stops immediately.

That's why null is used to explicitly terminate
the Prototype Chain.


╔══════════════════════════════════════════════════════════════╗
║                INTERVIEW QUESTIONS 🎤                       ║
╚══════════════════════════════════════════════════════════════╝

Q: What is Prototype Inheritance?

A:
Prototype Inheritance is JavaScript's mechanism that allows
one object to inherit properties and methods from another
object through the prototype chain.


Q: How does JavaScript search for a property?

A:

1. Search inside the object itself.
2. If not found, search its prototype.
3. Continue climbing the prototype chain.
4. Stop when the property is found or when null is reached.


Q: What values can be passed to Object.setPrototypeOf()?

A:

Only:

✓ An object
✓ null


💡 Golden Rule

JavaScript doesn't copy inherited properties.

It simply links objects together through the Prototype Chain,
allowing them to share behavior efficiently. 🚀
*/
