/*
╔══════════════════════════════════════════════════════════════╗
║            prototype 🆚 __proto__                           ║
╚══════════════════════════════════════════════════════════════╝

One of the most confusing topics in JavaScript OOP is the
difference between:

✓ prototype
✓ __proto__

Although they look similar, they serve completely different purposes.

Let's clear the confusion once and for all. 😄


╔══════════════════════════════════════════════════════════════╗
║                    prototype 🏗️                            ║
╚══════════════════════════════════════════════════════════════╝

"prototype" is a property that exists on FUNCTIONS
(Constructor Functions and Classes).

Its purpose is to store methods and properties that should be
shared among all objects created from that constructor.

Example:
*/

function User(name) {
  this.name = name;
}

User.prototype.login = function () {
  console.log(`${this.name} logged in`);
};

/*
Think of User.prototype as:

🏠 A shared storage area.

Every object created with "new User()"
will inherit from this object.
*/

/*
╔══════════════════════════════════════════════════════════════╗
║                     __proto__ 🔗                            ║
╚══════════════════════════════════════════════════════════════╝

"__proto__" exists on OBJECTS (instances).

It points to the object from which the instance inherits.
*/

const user1 = new User("Ahmed");

/*
user1 now has an internal prototype link.

Conceptually:

user1
   │
   ▼
User.prototype

When you inspect user1 in the browser console,
you'll see something similar to:

{
    name: "Ahmed"
    [[Prototype]]: User
}

Some developer tools expose this as:

__proto__

⚠️ Important:

__proto__ is mainly for debugging and inspection.

Modern JavaScript prefers methods like:

Object.getPrototypeOf()

instead of directly using __proto__.
*/

/*
╔══════════════════════════════════════════════════════════════╗
║                THE RELATIONSHIP 🤝                          ║
╚══════════════════════════════════════════════════════════════╝
*/

console.log(user1.__proto__ === User.prototype); // true

/*
Why is this true?

Because when we wrote:

const user1 = new User("Ahmed");

the "new" keyword automatically executed something conceptually
similar to:

const obj = {};

Object.setPrototypeOf(obj, User.prototype);

return obj;

So...

user1.__proto__

points to

User.prototype

They reference the SAME object.


╔══════════════════════════════════════════════════════════════╗
║               VISUAL REPRESENTATION 🎨                      ║
╚══════════════════════════════════════════════════════════════╝

                Constructor Function
                       │
                       ▼
              User.prototype
               │    login()
               │
        ┌──────┴──────┐
        │             │
        ▼             ▼
     user1         user2
        │             │
        └──────┬──────┘
               │
         __proto__

Notice:

prototype
belongs to the constructor.

__proto__
belongs to the object.


╔══════════════════════════════════════════════════════════════╗
║             INTERVIEW QUESTION 🎤                           ║
╚══════════════════════════════════════════════════════════════╝

Q: What's the difference between prototype and __proto__?

A:

prototype
→ A property on constructor functions.
→ Holds shared methods and properties for all instances.

__proto__
→ A property (actually an accessor) on objects.
→ Points to the prototype object from which the instance inherits.


╔══════════════════════════════════════════════════════════════╗
║                  GOLDEN RULE ⭐                             ║
╚══════════════════════════════════════════════════════════════╝

prototype

➡️ Lives on the constructor.
➡️ Used to define shared behavior.

__proto__

➡️ Lives on each object.
➡️ Points to the object's prototype.

Easy way to remember:

🏗️ prototype = "Where inheritance comes FROM."

🔗 __proto__ = "Where inheritance GOES TO."

And remember:

✅ user1.__proto__ === User.prototype


*/
