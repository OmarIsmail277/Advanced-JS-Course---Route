/*
╔══════════════════════════════════════════════════════════════╗
║          ⭐ MOST COMMON OOP INTERVIEW QUESTIONS ⭐           ║
╚══════════════════════════════════════════════════════════════╝

This is a quick revision of the most frequently asked OOP
questions in JavaScript interviews.

If you understand these topics well,
you're in a very good position for frontend interviews. 💪


╔══════════════════════════════════════════════════════════════╗
║ 1️⃣ Constructor Function vs Class                           ║
╚══════════════════════════════════════════════════════════════╝

Q: What's the difference between a Constructor Function
and a Class?

A:

Practically...

✅ There is no difference in the underlying mechanism.

Classes are simply:

🍭 Syntactic Sugar

over

✓ Constructor Functions
✓ Prototypes

Both ultimately rely on the Prototype Chain.

Conceptually:

class User {}

↓

becomes something similar to:

function User() {}

User.prototype...

The syntax changed.

The engine didn't. 😄


╔══════════════════════════════════════════════════════════════╗
║ 2️⃣ prototype vs __proto__                                  ║
╚══════════════════════════════════════════════════════════════╝

prototype

✓ Belongs to constructor functions/classes.
✓ Stores shared methods and properties.
✓ Becomes the prototype of every created instance.

--------------------------------------------------------------

__proto__ (or [[Prototype]])

✓ Belongs to object instances.
✓ Points to the object's prototype.
✓ Used by JavaScript during property lookup.

Relationship:

instance.__proto__ === Constructor.prototype

(Modern code prefers Object.getPrototypeOf() over directly
using __proto__.)


╔══════════════════════════════════════════════════════════════╗
║ 3️⃣ Is JavaScript Class-Based or Prototype-Based?           ║
╚══════════════════════════════════════════════════════════════╝

Q: Is JavaScript class-based?

A:

❌ No.

JavaScript is fundamentally:

✅ Prototype-Based

Classes only provide a cleaner syntax.

Behind every class is:

✓ Constructor Function
✓ Prototype
✓ Prototype Chain

Always remember:

Prototype is the real engine behind JavaScript OOP.


╔══════════════════════════════════════════════════════════════╗
║ 4️⃣ What is Encapsulation? 🔒                               ║
╚══════════════════════════════════════════════════════════════╝

Q: What is Encapsulation?

A:

Encapsulation means:

🔒 Hiding an object's internal state
and exposing only safe, controlled ways
to interact with that state.

Example:

Instead of:

account.balance = -5000;

we expose:

account.deposit(500);

account.withdraw(200);

The object protects its own data and
enforces business rules.


╔══════════════════════════════════════════════════════════════╗
║          🎯 THE BIGGEST LESSON OF THIS COURSE               ║
╚══════════════════════════════════════════════════════════════╝

OOP is NOT about memorizing:

❌ class
❌ extends
❌ super

OOP is much bigger than syntax.

It's a way of thinking.

It's about modeling your application
using real-world entities.

Instead of asking:

"What functions should I write?"

Ask yourself:

"What objects exist in my system?"

Examples:

👤 User

📦 Product

🛒 Cart

📄 Order

💳 Payment

Each object should represent ONE meaningful entity.


╔══════════════════════════════════════════════════════════════╗
║              OBJECT = STATE + BEHAVIOR 🎯                  ║
╚══════════════════════════════════════════════════════════════╝

Every object consists of:

📦 State (Data)

Examples:

✓ name
✓ email
✓ price
✓ balance

--------------------------------------------------------------

⚙️ Behavior (Methods)

Examples:

✓ login()
✓ deposit()
✓ addProduct()
✓ send()

Golden Rule:

Object = State + Behavior


╔══════════════════════════════════════════════════════════════╗
║           THE FOUR PILLARS OF OOP 🏛️                        ║
╚══════════════════════════════════════════════════════════════╝

🔒 Encapsulation

Hide internal state and expose only a safe public interface.

--------------------------------------------------------------

🧬 Inheritance

Reuse properties and methods from another class.

--------------------------------------------------------------

🎭 Polymorphism

The same method name behaves differently depending
on the object.

--------------------------------------------------------------

🎩 Abstraction

Hide implementation details and expose only
the necessary functionality.


╔══════════════════════════════════════════════════════════════╗
║          ⭐ MUST-KNOW JAVASCRIPT CONCEPTS ⭐                 ║
╚══════════════════════════════════════════════════════════════╝

If you truly understand these topics,
OOP in JavaScript becomes much easier.

✅ "this" keyword

Know that:

"this" depends on HOW a function is called.

--------------------------------------------------------------

✅ Prototype

Understand why shared methods live there.

--------------------------------------------------------------

✅ Prototype Chain

Understand how JavaScript searches
for properties and methods.

--------------------------------------------------------------

✅ new keyword

Remember the 4 hidden steps:

1. Creates a new empty object.
2. Binds "this" to that object.
3. Links the object to the constructor's prototype.
4. Returns the new object.

--------------------------------------------------------------

✅ Class Syntax

Understand that it is simply a cleaner way
to write Constructor Functions and Prototypes.


╔══════════════════════════════════════════════════════════════╗
║               🎤 FINAL INTERVIEW ADVICE                     ║
╚══════════════════════════════════════════════════════════════╝

If an interviewer asks about JavaScript OOP,
don't jump straight into talking about classes.

Start from the foundation:

1️⃣ JavaScript is Prototype-Based.

2️⃣ Classes are syntactic sugar.

3️⃣ Explain "this".

4️⃣ Explain the Prototype Chain.

5️⃣ Explain how "new" works.

6️⃣ Then discuss the four OOP pillars.

That shows you understand HOW JavaScript works,
not just HOW to write it.


╔══════════════════════════════════════════════════════════════╗
║                    🚀 FINAL TAKEAWAY                        ║
╚══════════════════════════════════════════════════════════════╝

✨ JavaScript OOP is built on two core ideas:

🧭 this

+

🧬 Prototype

Everything else...

Constructor Functions
Classes
Inheritance
Methods
Instances
Polymorphism

...is built on top of these two concepts.

Master "this" and the Prototype Chain,
and the rest of JavaScript OOP will make perfect sense,
Insha'Allah. 
*/
