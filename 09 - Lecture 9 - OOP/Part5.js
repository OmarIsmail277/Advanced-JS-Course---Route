/*
╔══════════════════════════════════════════════════════════════╗
║               CONSTRUCTOR FUNCTIONS 🏗️                     ║
╚══════════════════════════════════════════════════════════════╝

Before ES6 introduced Classes, JavaScript developers used
Constructor Functions to create objects.

In fact...

✨ Classes are just syntactic sugar over Constructor Functions.

--------------------------------------------------------------
FROM A NORMAL FUNCTION...
--------------------------------------------------------------
*/

function User(name, email) {
  // At this point, this is just a normal function.

  this.name = name;
  this.email = email;
}

/*
The function itself is NOT automatically a constructor.

It becomes a constructor when we call it using the "new" keyword.
*/

const user1 = new User("Ahmed", "ahmed@asd.com");
const user2 = new User("Abdo", "abdo@asd.com");

/*
--------------------------------------------------------------
WHAT DOES "new" DO? 🤔
--------------------------------------------------------------

The "new" keyword performs four important steps behind the scenes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
① Creates a new empty object
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const obj = {};

--------------------------------------------------------------

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
② Makes "this" point to that new object
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

this = obj;

Now every property assigned using "this"
is actually added to the newly created object.

Example:

this.name = name;

becomes conceptually:

obj.name = name;

--------------------------------------------------------------

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
③ Links the object to the constructor's prototype
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Object.setPrototypeOf(obj, User.prototype);

// Conceptually (modern equivalent)
//
// Older explanations often show:
//
// obj.__proto__ = User.prototype;
//
// but __proto__ is deprecated for direct use.
// JavaScript internally links the prototype for us.

This is the magic that allows every object created
with User() to share methods from User.prototype.

We'll see this in the next lecture. 😎

--------------------------------------------------------------

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
④ Returns the new object
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

return obj;

So after all these steps:

const user1 = new User(...);

user1 now refers to the newly created object.


╔══════════════════════════════════════════════════════════════╗
║              WHAT DOES "this" REALLY MEAN? 🎯              ║
╚══════════════════════════════════════════════════════════════╝

Inside a constructor:

this === the newly created object.

Therefore:

this.name = name;

is conceptually equivalent to:

user1.name = name;

(assuming user1 is the object currently being created)

Every property assigned through "this"
becomes part of that object.


--------------------------------------------------------------
EXAMPLE
--------------------------------------------------------------
*/

function Employee(name, email) {
  this.name = name;
  this.email = email;
  this.salary = 200;
}

const employee = new Employee("Ali", "ali@company.com");

/*
employee becomes:

{
    name: "Ali",
    email: "ali@company.com",
    salary: 200
}

Notice:

We never manually created an object.

The "new" keyword created it for us. ✨


╔══════════════════════════════════════════════════════════════╗
║             WHO CREATES THE OBJECT? 🤔                      ║
╚══════════════════════════════════════════════════════════════╝

❌ The constructor function does NOT create the object.

✅ The "new" keyword creates the object.

The constructor's job is simply to initialize it
by assigning values using "this".


╔══════════════════════════════════════════════════════════════╗
║             IMPORTANT NOTE ⚠️                               ║
╚══════════════════════════════════════════════════════════════╝

So far, our constructor only initializes data.

Example:

✓ name
✓ email
✓ salary

We haven't added any behavior (methods) yet.

The next question naturally becomes:

"Where should methods like login() or logout() live?"

Adding them inside the constructor would recreate them
for every object (the same problem Factory Functions had).

➡️ The solution is the Prototype.

That's exactly what we'll learn next. 🚀


╔══════════════════════════════════════════════════════════════╗
║                INTERVIEW QUESTIONS 🎤                       ║
╚══════════════════════════════════════════════════════════════╝

Q: What is a Constructor Function?

A:
A Constructor Function is a regular function that is intended
to create and initialize objects when called with the "new" keyword.


Q: What are the four things the "new" keyword does?

A:

1. Creates a new empty object.
2. Binds "this" to the new object.
3. Links the object to the constructor's prototype.
4. Returns the newly created object.


💡 Quick Reminder

Constructor Function ➜ Initializes the object.

new ➜ Creates and returns the object.

*/
