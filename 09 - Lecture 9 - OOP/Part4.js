/*
╔══════════════════════════════════════════════════════════════╗
║                FACTORY FUNCTIONS 🏭                         ║
╚══════════════════════════════════════════════════════════════╝

Before learning Classes and Constructors, there is an important
pattern that JavaScript developers used for years:

✨ Factory Functions

The name comes from the idea of a factory.

Just like a factory produces cars, phones, or laptops,
a Factory Function produces objects.

---

## THE PROBLEM 🤔

Suppose our application has:

* 10 users
* 1,000 users
* 1,000,000 users 😅

Every user should have:

✓ The same properties
✓ The same behavior

Creating each object manually would be repetitive and painful.

Instead, we create a function responsible for creating users.
*/

function createUser(name, email) {
  return {
    name,
    email,

    login() {
      console.log(`${this.name} logged in`);
    },
  };
}

const user1 = createUser("Ahmed", "ahmed@example.com");

const user2 = createUser("Abdo", "abdo@example.com");

user1.login();
user2.login();

/*

## WHAT DID WE DO HERE? 🎯

createUser() returns a brand-new object every time it is called.

Think about it like this:

createUser(...)
↓
creates object
↓
returns object

Therefore:

🏭 Factory Function = A function that creates and returns an object.

This is actually one of the earliest patterns used to create
multiple objects that belong to the same entity.

╔══════════════════════════════════════════════════════════════╗
║                    WHY IS IT GOOD? ✅                       ║
╚══════════════════════════════════════════════════════════════╝

✓ Readable
✓ Easy to understand
✓ Reusable
✓ Reduces duplicated code
✓ Great for creating similar objects

Instead of writing 100 user objects manually,
we write the creation logic once.

╔══════════════════════════════════════════════════════════════╗
║                  THE HIDDEN PROBLEM 😬                      ║
╚══════════════════════════════════════════════════════════════╝

At first glance, everything looks perfect...

But there is a cost.

Every time we create a new user,
JavaScript creates a NEW login function.
*/

console.log(user1.login === user2.login);

/*
Output:

false

Why?

Because each object gets its own copy of login().

Visualize it like this:

user1
└── login() ---> Memory Address A

user2
└── login() ---> Memory Address B

user3
└── login() ---> Memory Address C

Each function is identical in code,
but each one occupies a separate location in memory.

That means:

❌ More memory consumption
❌ Unnecessary duplication
❌ Not ideal when creating thousands of objects

╔══════════════════════════════════════════════════════════════╗
║                 INTERVIEW QUESTION 🎤                       ║
╚══════════════════════════════════════════════════════════════╝

Q: What is a Factory Function?

A:
A Factory Function is a function that creates and returns
an object.

Q: What is the main drawback of Factory Functions?

A:
Every created object gets its own copy of methods,
which leads to duplicated functions in memory.

╔══════════════════════════════════════════════════════════════╗
║                    NEXT STEP 🚀                             ║
╚══════════════════════════════════════════════════════════════╝

Factory Functions solve the problem of object creation.

However, they introduce another problem:

⚠️ Method duplication.

The next question becomes:

"Can multiple objects share the same methods
instead of creating new copies every time?"

And that's exactly the problem that
Prototypes were designed to solve. 😎
*/
