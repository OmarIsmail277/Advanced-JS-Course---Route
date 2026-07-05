/*
╔══════════════════════════════════════════════════════════════╗
║          ADVANCED TOPIC - ARROW FUNCTIONS IN CLASSES 🏹     ║
╚══════════════════════════════════════════════════════════════╝

This is a very common interview question. 🎤

"What happens if we use an arrow function
instead of a normal class method?"

Let's find out!


╔══════════════════════════════════════════════════════════════╗
║              NORMAL CLASS METHOD ✅                         ║
╚══════════════════════════════════════════════════════════════╝
*/

class Counter {
  count = 0;

  increment() {
    this.count++;
    console.log(this.count);
  }
}

/*
Where does increment() go?

➡️ Counter.prototype

That means:

✓ One copy is created.
✓ Every Counter object shares it.

Visual representation:

Counter.prototype
      ▲
      │
 increment()
      ▲
 ┌────┴────┐
 │         │
x1        x2

✔ Memory efficient
✔ Recommended for most methods


╔══════════════════════════════════════════════════════════════╗
║             ARROW FUNCTION AS A CLASS FIELD ⚠️              ║
╚══════════════════════════════════════════════════════════════╝
*/

class Counter2 {
  count = 0;

  increment = () => {
    this.count++;
    console.log(this.count);
  };
}

const x = new Counter2();

console.log(x);

/*
If you inspect x, you'll notice something surprising!

x

{
    count: 0,
    increment: () => {}
}

Notice:

increment appears directly on the object.

It is NOT inside:

Counter2.prototype

😲 Why?


╔══════════════════════════════════════════════════════════════╗
║                  WHY DOES THIS HAPPEN? 🤔                   ║
╚══════════════════════════════════════════════════════════════╝

Remember what we learned earlier:

Inside a class:

✅ Methods

go to the prototype.

Example:

login() {}

↓

User.prototype.login

--------------------------------------------------------------

But...

Class fields

Example:

count = 0;

are instance properties.

Each object gets its own copy.

Now look again:

increment = () => {}

This is NOT a method.

It's actually a class field whose value happens
to be an arrow function.

Conceptually, JavaScript treats it like:

constructor() {
    this.count = 0;

    this.increment = () => {
        this.count++;
    };
}

💡 That's the key idea!

The arrow function is assigned to "this",
so every instance gets its own copy.


╔══════════════════════════════════════════════════════════════╗
║             MEMORY COMPARISON 📊                            ║
╚══════════════════════════════════════════════════════════════╝

Normal method:

Counter.prototype.increment()

Memory:

✓ One function

--------------------------------------------

Arrow function:

this.increment = () => {}

Memory:

x1 → increment() (Memory A)

x2 → increment() (Memory B)

x3 → increment() (Memory C)

...

Every object owns its own function.

❌ More memory usage.
❌ Slightly worse performance for many instances.


╔══════════════════════════════════════════════════════════════╗
║          THEN WHY DO PEOPLE USE ARROW FUNCTIONS? 🤔         ║
╚══════════════════════════════════════════════════════════════╝

Because arrow functions have one very useful feature:

✨ They don't have their own "this".

Instead,

they lexically capture "this"
from the surrounding scope.

This prevents losing the object reference.

Example:
*/

class Counter3 {
  count = 0;

  increment = () => {
    this.count++;
    console.log(this.count);
  };
}

const counter = new Counter3();

const fn = counter.increment;

fn(); // ✅ Works!

/*
Why?

Because the arrow function permanently remembers
the instance as its "this".

Compare that to a normal method:
*/

class Counter4 {
  count = 0;

  increment() {
    this.count++;
  }
}

const counter2 = new Counter4();

const fn2 = counter2.increment;

// fn2(); // ❌ this is undefined (in strict mode)

/*
This is one of the biggest reasons React class components
historically used arrow functions for event handlers.


╔══════════════════════════════════════════════════════════════╗
║           SHOULD WE ALWAYS USE ARROW FUNCTIONS? 🤔          ║
╚══════════════════════════════════════════════════════════════╝

Generally...

❌ No.

Use normal methods by default.

Use arrow functions only when you specifically
need lexical "this".

Otherwise, you'll create unnecessary copies
for every instance.


╔══════════════════════════════════════════════════════════════╗
║               INTERVIEW QUESTION 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: Why isn't an arrow function inside a class
placed on the prototype?

A:
Because it is a class field, not a class method.

JavaScript assigns it to each instance as:

this.increment = () => { ... }

Therefore, every object gets its own copy.


Q: Which is more memory efficient?

A:

✅ Normal methods

because they are stored once on the prototype.

❌ Arrow function class fields

because every instance gets its own function.


💡 Golden Rule

🧩 Normal method

→ Shared through the prototype.

🏹 Arrow function class field

→ Stored on each instance.

Choose wisely depending on whether you need
shared behavior or lexical "this". 🚀
*/
