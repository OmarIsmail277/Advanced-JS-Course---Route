/*
╔══════════════════════════════════════════════════════════════╗
║            🎯 THIS vs PROTOTYPE - THE GOLDEN RULE           ║
╚══════════════════════════════════════════════════════════════╝

This is one of the MOST IMPORTANT concepts in JavaScript OOP.
If you understand this, you've understood a huge part of how
Constructor Functions and Prototypes work. 🚀

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
① Anything stored using "this"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Properties assigned using "this" belong to EACH object individually.

Example:
*/

function User(name, email) {
  this.name = name;
  this.email = email;
}

/*
Every time we create a new user:

const user1 = new User(...);
const user2 = new User(...);

JavaScript creates:

user1
{
    name: "...",
    email: "..."
}

user2
{
    name: "...",
    email: "..."
}

Each object gets its OWN copy of:

✓ name
✓ email

because every user has different data.

Think of it as:

👤 Ahmed has his own name.
👤 Ali has his own name.

It wouldn't make sense for everyone to share one name. 😄


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
② Anything stored on the Prototype
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

User.prototype.login = function () {
  console.log(`${this.name} logged in`);
};

/*
Now login() is NOT copied for every user.

Instead...

There is only ONE login() function in memory,
and every user shares it through the Prototype Chain.

Visualize it like this:

                 login()
                    ▲
                    │
          User.prototype
            ▲        ▲
            │        │
         user1     user2

✓ One function
✓ Shared by everyone
✓ Memory efficient


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
③ Shared Objects on the Prototype ⚠️
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Be careful!

Everything on the prototype is SHARED.

Example:
*/

User.prototype.friends = [];

/*
Now every user points to the SAME array.
*/

const user1 = new User("Ahmed", "ahmed@test.com");
const user2 = new User("Ali", "ali@test.com");

user1.friends.push("Abdo");

console.log(user1.friends);
console.log(user2.friends);

/*
Output:

["Abdo"]
["Abdo"]

😲 Wait... why did user2 get "Abdo" too?

Because there is only ONE friends array,
stored on the prototype.

Both objects reference the exact same array.


Visual representation:

                User.prototype
             ┌───────────────────┐
             │ friends = []      │
             └─────────▲─────────┘
                       │
             ┌─────────┴─────────┐
             │                   │
          user1              user2

Both objects point to the SAME array.


╔══════════════════════════════════════════════════════════════╗
║                 WHEN TO USE EACH ONE? 🤔                    ║
╚══════════════════════════════════════════════════════════════╝

Use "this" when the value should be DIFFERENT
for every object.

Examples:

✓ name
✓ email
✓ age
✓ salary
✓ id

--------------------------------------------------------------

Use the Prototype when the value should be SHARED
among all objects.

Examples:

✓ login()
✓ logout()
✓ register()
✓ calculateSalary()
✓ printInvoice()

These methods don't need separate copies.


╔══════════════════════════════════════════════════════════════╗
║                EASY MEMORY TRICK 🧠                         ║
╚══════════════════════════════════════════════════════════════╝

Ask yourself one simple question:

"Should every object have its own copy?"

If YES ➜ use this.

If NO ➜ use the prototype.

Or even shorter:

📦 Different data  ➜ this

🤝 Shared behavior ➜ prototype


⚠️ Bonus Tip

Avoid storing mutable objects (arrays or objects)
on the prototype unless you intentionally want them
to be shared by every instance.

Otherwise, unexpected side effects may occur!


💡 Golden Rule

Shared ➜ Prototype 🤝

Unique ➜ this 👤

*/
