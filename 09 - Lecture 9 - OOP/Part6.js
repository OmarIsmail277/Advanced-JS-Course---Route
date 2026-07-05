/*
╔══════════════════════════════════════════════════════════════╗
║                 THE PROTOTYPE 🧬                            ║
╚══════════════════════════════════════════════════════════════╝

Our Constructor Function solved one problem:

✅ Creating multiple objects easily.

But...

We still need to add shared behavior such as:

✓ login()
✓ logout()
✓ register()

Where should these methods live?

--------------------------------------------------------------
❌ BAD APPROACH
--------------------------------------------------------------

Putting methods inside the constructor.
*/

function User(name, email) {
  this.name = name;
  this.email = email;

  this.login = function () {
    console.log(`${this.name} logged in`);
  };
}

/*
This works...

BUT...

Every new User gets its own copy of login().

user1 ---> login() (Memory A)
user2 ---> login() (Memory B)
user3 ---> login() (Memory C)

❌ Duplicate functions
❌ Wasted memory

This is exactly the same problem we had with Factory Functions.


╔══════════════════════════════════════════════════════════════╗
║                  THE SOLUTION 💡                            ║
╚══════════════════════════════════════════════════════════════╝

Instead of storing methods inside every object,

we store them ONCE inside the constructor's prototype.

Every object will then share the same method.
*/

function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.login = function () {
  console.log(`${this.name} logged in`);
};

const user1 = new User("Ahmed", "ahmed@asd.com");
const user2 = new User("Abdo", "abdo@asd.com");

user1.login();
user2.login();

/*
Now there is only ONE login function in memory.

Both objects simply reference it.

Let's verify that.
*/

console.log(user1.login === user2.login); // true

/*
🎉 Success!

Both objects share exactly the same function.


╔══════════════════════════════════════════════════════════════╗
║                 WHAT IS A PROTOTYPE? 🤔                     ║
╚══════════════════════════════════════════════════════════════╝

Every JavaScript object has an internal prototype.

You can inspect it in the browser console.
*/

const x = {};

console.log(x);

/*
Console:

{}
[[Prototype]]: Object

The prototype contains methods and properties that every
object can inherit.

Examples:

✓ hasOwnProperty()
✓ isPrototypeOf()
✓ toString()
✓ valueOf()

Notice:

These methods are NOT stored directly inside x.

They come from Object.prototype.


╔══════════════════════════════════════════════════════════════╗
║              PROTOTYPES EXIST EVERYWHERE 🌍                 ║
╚══════════════════════════════════════════════════════════════╝

Objects are not the only data type that has a prototype.

Arrays have one too.
*/

const numbers = [1, 2, 3];

/*
Why can we write?

numbers.push(4);
numbers.pop();
numbers.includes(2);

Did we define those methods ourselves?

No.

They come from:

Array.prototype

--------------------------------------------------------------

Strings inherit from:

String.prototype

Example:
*/

const message = "Hello";

message.toUpperCase();
message.includes("H");

/*
--------------------------------------------------------------

Functions inherit from:

Function.prototype

Booleans inherit from:

Boolean.prototype

Objects inherit from:

Object.prototype

Every built-in JavaScript type has its own prototype.


╔══════════════════════════════════════════════════════════════╗
║                THE PROTOTYPE CHAIN 🔗                       ║
╚══════════════════════════════════════════════════════════════╝

Suppose we write:
*/

const person = {
  name: "Ahmed",
};

person.hasOwnProperty("name");

/*
How does JavaScript find hasOwnProperty()?

Step 1️⃣

Search inside person.

↓

Not found.

Step 2️⃣

Go to person's prototype.

↓

Found inside Object.prototype.

↓

Execute it.

This searching mechanism is called:

✨ Prototype Chain


Visual representation:

person
   │
   ▼
Object.prototype
   │
   ▼
null

JavaScript keeps climbing the chain until:

✓ The property is found.

or

✓ It reaches null.


╔══════════════════════════════════════════════════════════════╗
║                WHY IS THIS AWESOME? 😎                      ║
╚══════════════════════════════════════════════════════════════╝

Instead of storing the same methods inside every object,

JavaScript stores them once in the prototype.

Benefits:

✅ Less memory usage
✅ Better performance
✅ Shared behavior
✅ Cleaner object creation


╔══════════════════════════════════════════════════════════════╗
║                INTERVIEW QUESTIONS 🎤                       ║
╚══════════════════════════════════════════════════════════════╝

Q: Why do we add methods to the prototype instead of
inside the constructor?

A:
Because methods on the prototype are shared among all
instances, avoiding duplicated functions in memory.


Q: What is the Prototype Chain?

A:
The Prototype Chain is JavaScript's mechanism for searching
for properties and methods. If a property isn't found on the
object itself, JavaScript continues searching through its
prototype chain until it finds the property or reaches null.


💡 Golden Rule

Data belongs to each object.

Shared behavior belongs to the prototype. 🚀
*/
