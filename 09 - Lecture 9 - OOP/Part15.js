/*
╔══════════════════════════════════════════════════════════════╗
║                  STATIC METHODS ⚡                          ║
╚══════════════════════════════════════════════════════════════╝

Normally...

Methods belong to OBJECTS (instances).

Example:

const user = new User(...);

user.login();

Here, login() belongs to the object.

But sometimes...

A method doesn't need any object at all.

It performs a general task related to the class itself.

That's where:

✨ static methods

come in.


╔══════════════════════════════════════════════════════════════╗
║                 FIRST EXAMPLE ➕                            ║
╚══════════════════════════════════════════════════════════════╝
*/

class MathUtilities {
  static add(a, b) {
    return a + b;
  }
}

/*
Notice the keyword:

static

Now we call it using the class itself.
*/

console.log(MathUtilities.add(2, 3));

/*
Output:

5

No object was created.

No "new" keyword.

We simply called:

ClassName.method()


╔══════════════════════════════════════════════════════════════╗
║           WHY CAN'T AN INSTANCE USE IT? 🤔                  ║
╚══════════════════════════════════════════════════════════════╝
*/

const math = new MathUtilities();

// math.add(2, 3);

/*
❌ TypeError

Why?

Because static methods belong to the CLASS,
not to the objects created from it.

Visual representation:

           MathUtilities
           ┌─────────────┐
           │ static add()│
           └──────▲──────┘
                  │
          called directly
                  │
                  ▼

      MathUtilities.add()

--------------------------------------------

           MathUtilities
                 │
                 ▼
              math

math does NOT receive static methods.

Only instance methods are inherited by objects.


╔══════════════════════════════════════════════════════════════╗
║            WHEN SHOULD WE USE STATIC METHODS? 🤔            ║
╚══════════════════════════════════════════════════════════════╝

Use a static method when the operation:

✅ Doesn't depend on a specific object.

Examples:

✓ Math helpers
✓ Validation helpers
✓ Formatting utilities
✓ Factory methods
✓ Parsing methods

In other words...

If a method doesn't need "this",
it might be a good candidate for static.


╔══════════════════════════════════════════════════════════════╗
║              FACTORY METHOD EXAMPLE 🏭                      ║
╚══════════════════════════════════════════════════════════════╝
*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  static fromAPI(userData) {
    return new User(userData.fullName, userData.fullEmail);
  }
}

const apiUser = {
  fullName: "Ali",
  fullEmail: "ali@example.com",
};

const user = User.fromAPI(apiUser);

console.log(user);

/*
Notice what happened.

Instead of writing:

const user = new User(
    apiUser.fullName,
    apiUser.fullEmail
);

we simply write:

User.fromAPI(apiUser);

The class knows how to transform
API data into a User object.

Very clean! 😎

This pattern is called:

✨ Factory Method

because it creates objects
using a static method.


╔══════════════════════════════════════════════════════════════╗
║          STATIC vs INSTANCE METHODS ⚖️                      ║
╚══════════════════════════════════════════════════════════════╝

Instance Method

class User {
    login() {}
}

Usage:

const user = new User(...);

user.login();

--------------------------------------------

Static Method

class User {
    static fromAPI() {}
}

Usage:

User.fromAPI(...);

No object is required.


╔══════════════════════════════════════════════════════════════╗
║            STATIC METHODS CAN'T USE INSTANCE DATA ⚠️        ║
╚══════════════════════════════════════════════════════════════╝

Since static methods belong to the class,

they don't have access to instance properties like:

this.name
this.email

because no object exists yet.

Example:
*/

class Demo {
  constructor(name) {
    this.name = name;
  }

  static test() {
    // console.log(this.name); ❌

    console.log("I belong to the class!");
  }
}

/*
Inside a static method,

this refers to the class itself,
NOT to an instance.

So:

this === Demo

not

this === demoObject


╔══════════════════════════════════════════════════════════════╗
║               INTERVIEW QUESTIONS 🎤                        ║
╚══════════════════════════════════════════════════════════════╝

Q: What is a static method?

A:
A static method belongs to the class itself rather than
its instances. It is called using the class name instead
of an object.


Q: When should we use a static method?

A:
When the method doesn't depend on instance data and
performs a general task, helper function, or factory
operation.


Q: Can an object call a static method?

A:
No.

Static methods belong to the class,
not to instances.


💡 Golden Rule

👤 Instance methods → Work with one object.

🏛️ Static methods → Work with the class itself.

If your method doesn't need a specific object,
make it static. 🚀
*/
