/*
╔══════════════════════════════════════════════════════════════╗
║          OOP PILLAR #1 - ENCAPSULATION 🔒                   ║
╚══════════════════════════════════════════════════════════════╝

One of the four pillars of Object-Oriented Programming is:

✓ Encapsulation
✓ Inheritance
✓ Polymorphism
✓ Abstraction (covered later)

Today we'll start with...

✨ Encapsulation


╔══════════════════════════════════════════════════════════════╗
║                 WHAT IS ENCAPSULATION? 🤔                   ║
╚══════════════════════════════════════════════════════════════╝

Encapsulation means:

📦 "Keep the internal implementation hidden,
and expose only a safe public interface."

In other words:

✔ Protect your data.
✔ Prevent invalid modifications.
✔ Allow access only through controlled methods.

Think of a TV remote 📺.

You can press:

✓ Volume Up
✓ Volume Down
✓ Power

But...

You cannot directly modify the electrical circuits inside the TV.

The internal implementation is hidden,
while a safe interface is exposed.

That's exactly what Encapsulation does.


╔══════════════════════════════════════════════════════════════╗
║            THE PROBLEM WITHOUT ENCAPSULATION ❌             ║
╚══════════════════════════════════════════════════════════════╝
*/

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
}

const acc = new BankAccount(1000);

/*
Nothing stops someone from writing:
*/

acc.balance = -5000;

/*
😨 Oops!

The account now has a negative balance.

Anyone can modify the balance directly.

This breaks our business rules.

The object is no longer protecting its own data.


╔══════════════════════════════════════════════════════════════╗
║                  THE SOLUTION 🔒                            ║
╚══════════════════════════════════════════════════════════════╝

JavaScript provides:

✨ Private Fields

Private fields begin with:

#

Only code INSIDE the class can access them.
*/

class BankAccount2 {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Amount must be positive.");
    }

    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error("Insufficient balance.");
    }

    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount2(1000);

/*
Trying to access a private field directly:
*/

// account.#balance = 2000;

/*
❌ SyntaxError

Private field '#balance' must be declared
in an enclosing class.

JavaScript won't even allow the code to run.


╔══════════════════════════════════════════════════════════════╗
║            HOW DO WE ACCESS THE BALANCE? 💰                 ║
╚══════════════════════════════════════════════════════════════╝

Instead of exposing the balance directly,

we expose SAFE methods.
*/

account.deposit(500);

account.withdraw(200);

console.log(account.getBalance());

/*
Notice:

Users cannot modify the balance directly.

They MUST go through:

✓ deposit()
✓ withdraw()
✓ getBalance()

This guarantees that every operation
passes our validation rules.

That's Encapsulation. 🎉


╔══════════════════════════════════════════════════════════════╗
║               GETTERS & SETTERS ⚙️                          ║
╚══════════════════════════════════════════════════════════════╝

JavaScript provides another elegant way
to control access to data:

✓ getter
✓ setter

They look like properties,
but execute functions behind the scenes.
*/

class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  get finalPrice() {
    return this.price * 1.14;
  }

  set updatePrice(value) {
    if (value <= 0) {
      throw new Error("Price must be positive.");
    }

    this.price = value;
  }
}

const product = new Product("Toshiba", 3000);

/*
--------------------------------------------------------------
GETTER
--------------------------------------------------------------
*/

console.log(product.finalPrice);

/*
Notice:

No parentheses!

We write:

product.finalPrice

instead of:

product.finalPrice()

because getters behave like normal properties.

Behind the scenes,
JavaScript actually executes the getter function.


--------------------------------------------------------------
SETTER
--------------------------------------------------------------
*/

product.updatePrice = 6000;

console.log(product.finalPrice);

/*
Again...

It looks like a normal assignment.

But JavaScript secretly executes:

set updatePrice(value)

allowing us to validate the input first.

Very clean! 😎


╔══════════════════════════════════════════════════════════════╗
║           WHY USE GETTERS & SETTERS? 🤔                     ║
╚══════════════════════════════════════════════════════════════╝

Benefits:

✓ Validation before updating data.
✓ Computed (derived) properties.
✓ Cleaner syntax.
✓ Better encapsulation.
✓ Hide implementation details.

Example:

Instead of writing:

product.calculateFinalPrice();

we simply write:

product.finalPrice

Much nicer to read.


╔══════════════════════════════════════════════════════════════╗
║              INTERVIEW QUESTIONS 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: What is Encapsulation?

A:
Encapsulation is the practice of hiding an object's internal
state and exposing only a controlled public interface for
interacting with it.


Q: What is the purpose of private fields (#)?

A:
Private fields prevent code outside the class from directly
accessing or modifying sensitive data.


Q: What's the difference between a getter and a normal method?

A:
A getter is accessed like a property (without parentheses),
while a normal method must be called using ().


Q: Why use setters?

A:
Setters allow us to validate or transform values before
updating an object's state.


💡 Golden Rule

🔒 Hide the data.

🚪 Expose only safe operations.

That's the heart of Encapsulation.
*/
