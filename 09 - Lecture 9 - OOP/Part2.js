/*
╔══════════════════════════════════════════════════════════════╗
║                 WHY DO WE USE OOP? 🚀                       ║
╚══════════════════════════════════════════════════════════════╝

One of the biggest reasons for using OOP is to simulate real-world entities.

When our application contains clear entities such as:

✓ User
✓ Product
✓ Order
✓ Payment
✓ Notification
✓ Employee
✓ Bank Account

it becomes natural to represent each entity as an object.

Why?

Because every real-world entity usually has:

1. State (Data)
2. Behavior (Actions)

This makes our code closer to reality and easier to understand. 😊

---

## ❌ Procedural Thinking

loginUser();
updateProduct();
deleteProduct();

The functionality is scattered across separate functions.

---

## ✅ OOP Thinking

Each entity becomes responsible for its own behavior.
Everything related to the product lives inside the product itself.
*/

const product = {
  title: "Laptop",
  price: 1500,

  update() {
    console.log("Product Updated");
  },

  delete() {
    console.log("Product Deleted");
  },
};

/*
Now the Product object contains:

## 📦 State

* title
* price

## ⚡ Behavior

* update()
* delete()

This creates a stronger connection between the data and the actions
that belong to that data.

Think of it as:

Object = Entity = Data + Behavior 🎯

╔══════════════════════════════════════════════════════════════╗
║                    IS OOP ALWAYS BETTER? 🤔                 ║
╚══════════════════════════════════════════════════════════════╝

No.

A common beginner mistake is believing that OOP is the best solution
for every problem.

OOP is a tool, not a rule.

Sometimes using OOP can introduce:

* More code
* More complexity
* More memory usage
* More abstraction than the project actually needs

This is commonly called "over-engineering".

Always choose the approach that solves the problem effectively.

╔══════════════════════════════════════════════════════════════╗
║                  WHEN IS OOP A GOOD FIT? ⭐                 ║
╚══════════════════════════════════════════════════════════════╝

OOP shines when:

✓ The application contains many entities.
✓ These entities have clear relationships.
✓ Data and behavior naturally belong together.
✓ The project is expected to grow over time.

Examples:

* E-Commerce Systems
* Banking Systems
* Hospital Management Systems
* Booking Systems
* ERP Systems

In these applications, entities constantly interact with each other.

╔══════════════════════════════════════════════════════════════╗
║                 OOP IN MODERN FRONTEND 🏗️                  ║
╚══════════════════════════════════════════════════════════════╝

You may hear people say:

"OOP is not used much nowadays."

This is partially true.

Modern frontend development often focuses on:

* Components
* Hooks
* Functional Programming
* State Management

However...

OOP concepts are still everywhere behind the scenes.

Examples:

* Angular heavily uses Classes.
* Inheritance is used through "extends".
* Libraries and frameworks often rely on encapsulation,
  abstraction, and inheritance.

So even if you don't write OOP every day,
understanding OOP remains an important skill.

╔══════════════════════════════════════════════════════════════╗
║                    INTERVIEW QUESTION 🎤                    ║
╚══════════════════════════════════════════════════════════════╝

Q: Why do we use OOP?

A:
We use OOP to model real-world entities by grouping related data
and behavior into objects. This improves organization,
maintainability, reusability, and scalability when dealing with
complex applications containing many related entities.

💡 Final Takeaway

OOP helps us think about software the same way we think about
real-world objects.

But remember:

"Use OOP when it makes the design simpler,
not simply because OOP exists." 😄
*/
