/*
╔══════════════════════════════════════════════════════════════╗
║              OOP PILLAR #4 - ABSTRACTION 🎩                 ║
╚══════════════════════════════════════════════════════════════╝

The fourth (and final) pillar of OOP is:

✨ Abstraction

Encapsulation was about:

🔒 Hiding data.

Abstraction is about:

🎯 Hiding implementation details.

In simple words:

"The user should know WHAT to do,
not HOW it is done."

We expose a simple interface,
while hiding all the complex work happening behind the scenes.

Think about a coffee machine ☕.

You simply press:

▶ Make Coffee

You don't care about:

- Heating the water
- Grinding the beans
- Controlling the pressure
- Filtering the coffee

All of that complexity is hidden.

That's Abstraction.


╔══════════════════════════════════════════════════════════════╗
║                 PAYMENT EXAMPLE 💳                          ║
╚══════════════════════════════════════════════════════════════╝
*/

class PaymentService {
  pay(amount) {
    this.validateAmount(amount);
    this.connectToGateway();
    this.charge(amount);
    this.sendReceipt();
  }

  validateAmount(amount) {
    if (amount <= 0) {
      throw new Error("Invalid amount.");
    }
  }

  connectToGateway() {
    console.log("Connecting to payment gateway...");
  }

  charge(amount) {
    console.log(`Charging ${amount}...`);
  }

  sendReceipt() {
    console.log("Sending receipt...");
  }
}

const payment = new PaymentService();

payment.pay(4000);

/*
Look at the user code.

It's incredibly simple:

payment.pay(4000);

That's all the user needs to know.

The user doesn't care about:

✓ Validation
✓ Connecting to the payment gateway
✓ Charging the card
✓ Sending the receipt

Those implementation details are hidden inside the class.

This is Abstraction. 🎉


╔══════════════════════════════════════════════════════════════╗
║             WHAT HAPPENS INTERNALLY? 🔍                     ║
╚══════════════════════════════════════════════════════════════╝

When we call:

payment.pay(4000);

The class secretly performs:

1️⃣ Validate the amount.

↓

2️⃣ Connect to the payment gateway.

↓

3️⃣ Charge the customer.

↓

4️⃣ Send the receipt.

The caller doesn't need to know
or manually execute these steps.

Everything is wrapped inside one simple method.


╔══════════════════════════════════════════════════════════════╗
║           WHY IS ABSTRACTION IMPORTANT? 🤔                  ║
╚══════════════════════════════════════════════════════════════╝

Without abstraction, users would need to write:

payment.validateAmount(4000);
payment.connectToGateway();
payment.charge(4000);
payment.sendReceipt();

😵 Too much work.
😵 Easy to misuse.
😵 Easy to forget a step.

Instead, we expose only:

payment.pay(4000);

Simple.
Clean.
Safe. 😎


╔══════════════════════════════════════════════════════════════╗
║         ENCAPSULATION vs ABSTRACTION 🤝                     ║
╚══════════════════════════════════════════════════════════════╝

These two concepts are often confused.

🔒 Encapsulation

Focuses on:

"Hiding data."

Example:

#balance

Users cannot access it directly.

--------------------------------------------------------------

🎩 Abstraction

Focuses on:

"Hiding implementation."

Example:

payment.pay(4000);

The caller doesn't need to know
how payment processing actually works.


╔══════════════════════════════════════════════════════════════╗
║             REAL-WORLD EXAMPLES 🌍                          ║
╚══════════════════════════════════════════════════════════════╝

📱 Smartphone

You tap:

Call

You don't think about:

✓ Network communication
✓ Signal encoding
✓ Audio compression

--------------------------------------------------------------

🚗 Car

You press:

Start Engine

You don't manually:

✓ Inject fuel
✓ Ignite the engine
✓ Synchronize the pistons

--------------------------------------------------------------

💳 Payment API

You call:

payment.pay()

You don't manually:

✓ Validate
✓ Connect
✓ Charge
✓ Send receipt

That's abstraction everywhere!


╔══════════════════════════════════════════════════════════════╗
║              INTERVIEW QUESTIONS 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: What is Abstraction?

A:
Abstraction is the process of hiding implementation details
while exposing only the functionality that users need.


Q: What problem does Abstraction solve?

A:
It reduces complexity by providing a simple interface
for performing complex operations.


Q: What's the difference between Encapsulation and Abstraction?

A:

Encapsulation
→ Hides data and protects it from unauthorized access.

Abstraction
→ Hides implementation details and exposes only
the essential functionality.


💡 Golden Rule

🔒 Encapsulation says:

"You can't touch my data."

🎩 Abstraction says:

"You don't need to know how I do my job."

Together, they make software safer, cleaner,
and much easier to use. 🚀
*/
