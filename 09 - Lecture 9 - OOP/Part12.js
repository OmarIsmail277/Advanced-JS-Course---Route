/*
╔══════════════════════════════════════════════════════════════╗
║              OOP PILLAR #2 - INHERITANCE 🧬                 ║
╚══════════════════════════════════════════════════════════════╝

The second pillar of OOP is:

✨ Inheritance

Inheritance allows one class to reuse the properties
and methods of another class.

Instead of rewriting the same code,
we simply inherit it.

Think of it like a real family. 👨‍👩‍👧

A child inherits characteristics from a parent,
but can also have its own unique characteristics.


╔══════════════════════════════════════════════════════════════╗
║                  THE PARENT CLASS 👨                        ║
╚══════════════════════════════════════════════════════════════╝
*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(`${this.name} has logged in successfully!`);
  }
}

/*
User is our base (parent) class.

Every User has:

✓ name
✓ email
✓ login()

Now suppose we want an Admin.

An Admin is still a User...

but with extra abilities.

This is the perfect use case for inheritance.


╔══════════════════════════════════════════════════════════════╗
║                 THE CHILD CLASS 👶                          ║
╚══════════════════════════════════════════════════════════════╝
*/

class Admin extends User {
  constructor(name, email, role) {
    super(name, email); // Must be called first.
    this.role = role;
  }

  deleteUser(user) {
    console.log(`${this.name} deleted ${user.name}`);
  }

  // Method Overriding
  login() {
    console.log(`Admin ${this.name} has logged in successfully!`);
  }
}

const admin = new Admin("Ahmed", "admin@admin.com", "Super Admin");

admin.login();

admin.deleteUser({
  name: "Ali",
  age: 33,
});

/*
Admin now has access to:

Inherited from User:

✓ name
✓ email

Own properties:

✓ role

Inherited methods:

✓ login()  (overridden here)

Own methods:

✓ deleteUser()


╔══════════════════════════════════════════════════════════════╗
║                 WHAT DOES "extends" DO? 🤔                  ║
╚══════════════════════════════════════════════════════════════╝

The keyword:

extends

creates an inheritance relationship.

Conceptually:

Admin
   │
   ▼
User

Meaning:

Admin automatically inherits everything
that User exposes.

This includes:

✓ Properties initialized by the parent constructor.
✓ Prototype methods.
✓ Future shared behavior.


╔══════════════════════════════════════════════════════════════╗
║                  WHAT DOES super() DO? 🚀                   ║
╚══════════════════════════════════════════════════════════════╝

Inside a child constructor,
JavaScript requires us to call:

super(...)

BEFORE using "this".

Example:
*/

class Admin extends User {
  constructor(name, email, role) {
    super(name, email);

    this.role = role;
  }
}

/*
Why?

Because:

super()

calls the parent constructor.

It's responsible for initializing:

✓ this.name
✓ this.email

Only after the parent constructor finishes
can we safely use "this".

If we write:

this.role = role;

before calling super(),

JavaScript throws a ReferenceError.


╔══════════════════════════════════════════════════════════════╗
║          WHAT IF THE CHILD HAS NO CONSTRUCTOR? 🤔           ║
╚══════════════════════════════════════════════════════════════╝

Suppose we write:
*/

class Moderator extends User {
  banUser() {
    console.log("User banned.");
  }
}

/*
Notice:

There is no constructor.

That's perfectly fine. ✅

JavaScript automatically behaves as if we wrote:

constructor(...args) {
    super(...args);
}

So the parent constructor is still executed.

No need to write it yourself unless
the child needs extra initialization.


╔══════════════════════════════════════════════════════════════╗
║                METHOD OVERRIDING 🔄                         ║
╚══════════════════════════════════════════════════════════════╝

A child class can replace a method inherited
from its parent.

Example:
*/

class Admin2 extends User {
  login() {
    console.log(`Admin ${this.name} logged in.`);
  }
}

/*
Now:

admin.login();

executes the Admin version,

NOT

the User version.

This is called:

✨ Method Overriding

It allows child classes to customize inherited behavior.


╔══════════════════════════════════════════════════════════════╗
║            VISUAL REPRESENTATION 🎨                         ║
╚══════════════════════════════════════════════════════════════╝

                User
          ┌─────────────────┐
          │ name            │
          │ email           │
          │ login()         │
          └────────▲────────┘
                   │
             extends
                   │
                   ▼
               Admin
          ┌─────────────────┐
          │ role            │
          │ deleteUser()    │
          │ login()         │ ← overridden
          └─────────────────┘


╔══════════════════════════════════════════════════════════════╗
║              INTERVIEW QUESTIONS 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: What is Inheritance?

A:
Inheritance allows one class to acquire the properties
and methods of another class, promoting code reuse and
reducing duplication.


Q: What does "extends" do?

A:
It creates an inheritance relationship between two classes.


Q: Why do we call super()?

A:
super() invokes the parent constructor and initializes
the inherited part of the object.
In a derived class constructor, it must be called before
using "this".


Q: What is Method Overriding?

A:
Method Overriding occurs when a child class provides
its own implementation of a method that already exists
in the parent class.


💡 Golden Rule

👨 Parent class → Common features.

👶 Child class → Parent features + its own features
(or customized behavior through overriding). 🚀
*/
