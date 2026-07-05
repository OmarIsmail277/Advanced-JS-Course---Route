/*
╔══════════════════════════════════════════════════════════════╗
║              ES6 CLASSES - SYNTACTIC SUGAR 🍭               ║
╚══════════════════════════════════════════════════════════════╝

From the birth of JavaScript until ES6 (2015),
developers wrote OOP using:

✓ Constructor Functions
✓ Prototypes

JavaScript developers were comfortable with this...

BUT developers coming from languages like:

- Java
- C#
- C++

found it strange.

Many of them were asking:

"Where are the classes? 🤔"

The Prototype model was powerful,
but its syntax wasn't familiar to many programmers.

So...

✨ ES6 introduced Classes.

--------------------------------------------------------------
IMPORTANT!
--------------------------------------------------------------

Classes did NOT replace prototypes.

Classes are simply a cleaner, more familiar syntax
built on top of the exact same prototype system.

In other words:

🍭 Class = Syntactic Sugar over Constructor Functions + Prototypes

The JavaScript engine still uses prototypes internally.


╔══════════════════════════════════════════════════════════════╗
║           BEFORE ES6 (Constructor Function)                 ║
╚══════════════════════════════════════════════════════════════╝
*/

function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.login = function () {
  console.log("Logged in!");
};

const user1 = new User("Ahmed", "ahmed@mail.com");

user1.login();

/*
Nothing new here.

The object is created using:

✓ Constructor Function
✓ Prototype


╔══════════════════════════════════════════════════════════════╗
║                 AFTER ES6 (Class Syntax) ✨                 ║
╚══════════════════════════════════════════════════════════════╝
*/

class User {
  // Public instance field
  x = 10;

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log("Logged in!");
  }
}

const user2 = new User("Ahmed", "ahmed@mail.com");

user2.login();

console.log(user2);

/*
Notice how much cleaner the syntax looks.

No need to write:

User.prototype.login = ...

The class syntax does it for us automatically. 🎉


╔══════════════════════════════════════════════════════════════╗
║             WHAT DOES THE CLASS BECOME? 🤔                  ║
╚══════════════════════════════════════════════════════════════╝

Although we wrote:

class User { ... }

JavaScript internally creates something conceptually similar to:

function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.login = function () {
  console.log("Logged in!");
};

So...

Class syntax ≈ Constructor Function + Prototype

Same behavior.

Different syntax.


╔══════════════════════════════════════════════════════════════╗
║           WHAT GOES INTO THE PROTOTYPE? 🔗                  ║
╚══════════════════════════════════════════════════════════════╝

Inside a class:

Methods are automatically placed on the prototype.

Example:
*/

class Example {
  login() {}

  register() {}

  logout() {}
}

/*
Conceptually:

Example.prototype.login

Example.prototype.register

Example.prototype.logout

This means every object shares these methods.

Only ONE copy exists in memory. 🚀


╔══════════════════════════════════════════════════════════════╗
║          WHAT ABOUT x = 10 ? ⚠️                             ║
╚══════════════════════════════════════════════════════════════╝


Example:
*/

class Demo {
  x = 10;

  hello() {}
}

const obj = new Demo();

/*
Where do they go?

obj.x
✅ Instance property
(each object gets its own copy)

hello()
✅ Prototype method
(shared by all objects)

Conceptually:

obj
{
    x: 10
}

↓

Demo.prototype

{
    hello() {}
}

So:

❌ Class fields (x = 10) are NOT stored on the prototype.

✅ Methods are stored on the prototype.

This follows the same rule we've already learned:

👤 Unique data → Instance (this)

🤝 Shared behavior → Prototype


╔══════════════════════════════════════════════════════════════╗
║              DOES THE PROTOTYPE STILL EXIST? 🧬             ║
╚══════════════════════════════════════════════════════════════╝

Absolutely!

Let's inspect an instance.
*/

console.log(user2);

/*
You'll still find:

[[Prototype]]

or

__proto__

which points to:

User.prototype

Exactly the same behavior as Constructor Functions.

Classes never removed the prototype.

They simply made it easier to work with.


╔══════════════════════════════════════════════════════════════╗
║               INTERVIEW QUESTION 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: Are JavaScript Classes real classes like Java or C#?

A:

Not exactly.

JavaScript Classes are syntactic sugar over
Constructor Functions and Prototypes.

The prototype-based inheritance model is still
the underlying mechanism.


💡 Golden Rule

Class syntax changed the way we WRITE JavaScript.

It did NOT change the way JavaScript WORKS. 😄
*/
