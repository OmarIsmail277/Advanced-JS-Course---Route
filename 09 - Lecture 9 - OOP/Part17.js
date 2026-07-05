/*
╔══════════════════════════════════════════════════════════════╗
║          FINAL OOP EXAMPLE - E-COMMERCE CART 🛒             ║
╚══════════════════════════════════════════════════════════════╝

This example brings together almost everything we've learned
about OOP in JavaScript.

Concepts covered:

✅ Classes
✅ Constructors
✅ Objects (Entities)
✅ Encapsulation (#private fields)
✅ Composition ("has-a" relationship)
✅ Methods
✅ Getters/Behavior
✅ Array methods
✅ Default parameters

It's a small project, but it demonstrates how OOP is used
to model real-world systems. 🚀


╔══════════════════════════════════════════════════════════════╗
║                  ENTITY #1 - PRODUCT 📦                     ║
╚══════════════════════════════════════════════════════════════╝

A Product represents an item that can be purchased.

Every product has:

✓ id
✓ title
✓ price
*/

class Product {
  constructor(id, title, price) {
    this.id = id;
    this.title = title;
    this.price = price;
  }
}

/*
Examples:

Laptop
Mouse
Keyboard
Monitor

Each one is represented as a Product object.


╔══════════════════════════════════════════════════════════════╗
║                ENTITY #2 - CART ITEM 🧾                    ║
╚══════════════════════════════════════════════════════════════╝

A CartItem represents ONE row inside the shopping cart.

Notice:

A CartItem HAS A Product.

This relationship is called:

✨ Composition (Has-A Relationship)

A CartItem isn't a Product.

Instead...

A CartItem contains a Product.
*/

class CartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotal() {
    return this.product.price * this.quantity;
  }
}

/*
Example:

CartItem

{
    product: Laptop,
    quantity: 2
}

Its total price becomes:

price × quantity


╔══════════════════════════════════════════════════════════════╗
║                  ENTITY #3 - CART 🛒                        ║
╚══════════════════════════════════════════════════════════════╝

The Cart manages all cart items.

Notice the private field.
*/

class Cart {
  #items = [];

  addProduct(product, quantity = 1) {
    const existingItem = this.#items.find(
      (item) => item.product.id === product.id,
    );

    if (existingItem) {
      existingItem.quantity += quantity;
      return;
    }

    this.#items.push(new CartItem(product, quantity));
  }

  removeItem(productId) {
    this.#items = this.#items.filter((item) => item.product.id !== productId);
  }

  getTotalPrice() {
    return this.#items.reduce((total, item) => total + item.getTotal(), 0);
  }

  getItems() {
    return [...this.#items];
  }
}

/*
Notice the private field:

#items

Users cannot write:

cart.#items.push(...);

❌ SyntaxError

Instead, they MUST use the public methods:

✓ addProduct()
✓ removeItem()
✓ getItems()
✓ getTotalPrice()

This is Encapsulation in action. 🔒


╔══════════════════════════════════════════════════════════════╗
║                USING THE SYSTEM 🛍️                         ║
╚══════════════════════════════════════════════════════════════╝
*/

const laptop = new Product(1, "Laptop", 4000);
const mouse = new Product(2, "Mouse", 300);

const cart = new Cart();

cart.addProduct(laptop, 1);
cart.addProduct(mouse, 2);

console.log(cart.getTotalPrice());

/*
Calculation:

Laptop

4000 × 1 = 4000

Mouse

300 × 2 = 600

Total:

4600 ✅


╔══════════════════════════════════════════════════════════════╗
║          WHAT HAPPENS WHEN ADDING A PRODUCT? 🔍             ║
╚══════════════════════════════════════════════════════════════╝

Suppose we execute:

cart.addProduct(mouse, 2);

Step 1️⃣

Search for an existing CartItem
with the same product ID.

↓

Found?

YES ✅

↓

Increase its quantity.

↓

Done.

--------------------------------------------------------------

Not found?

↓

Create a new CartItem.

↓

Push it into #items.

This prevents duplicate rows
for the same product.


╔══════════════════════════════════════════════════════════════╗
║            WHY DOES getItems() RETURN A COPY? 🤔            ║
╚══════════════════════════════════════════════════════════════╝

Notice:

return [...this.#items];

instead of:

return this.#items;

Why?

Because we don't want outside code
to modify our private array directly.

If we returned:

this.#items

someone could do:

cart.getItems().push(...);

and modify the cart without using
our controlled methods.

Returning a shallow copy provides
an extra layer of protection.


╔══════════════════════════════════════════════════════════════╗
║          OOP CONCEPTS USED IN THIS PROJECT 🎯               ║
╚══════════════════════════════════════════════════════════════╝

📦 Classes

Product
CartItem
Cart

--------------------------------------------------------------

🏗 Constructors

Each class initializes its own state.

--------------------------------------------------------------

🔒 Encapsulation

#items

is private and can only be accessed
through public methods.

--------------------------------------------------------------

🧩 Composition

Cart HAS many CartItems.

CartItem HAS one Product.

--------------------------------------------------------------

⚙️ Behavior

addProduct()

removeItem()

getTotal()

getTotalPrice()

getItems()

--------------------------------------------------------------

🛡 Data Protection

Users interact with the cart through
its public API instead of modifying
internal data directly.


╔══════════════════════════════════════════════════════════════╗
║              INTERVIEW QUESTIONS 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: Why is #items private?

A:
To prevent external code from modifying the cart's internal
state directly, enforcing controlled access through methods.


Q: Why do we search for an existing product before adding it?

A:
To avoid duplicate cart items. If the product already exists,
we simply increase its quantity.


Q: What relationship exists between Cart and Product?

A:
Not inheritance.

It's Composition ("has-a" relationship):

Cart ➜ has many CartItems.

CartItem ➜ has one Product.


💡 Final Takeaway

This example models a real-world shopping cart using OOP.

Instead of writing random functions and variables,
we divide the system into meaningful entities:

📦 Product
🧾 CartItem
🛒 Cart

Each class has one clear responsibility, making the code
organized, maintainable, and easy to extend—the ultimate goal
of Object-Oriented Programming. 🎉🚀
*/
