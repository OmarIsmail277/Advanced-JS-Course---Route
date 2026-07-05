/*
╔══════════════════════════════════════════════════════════════╗
║                 PRIVATE METHODS 🔒                          ║
╚══════════════════════════════════════════════════════════════╝

Earlier, we learned about:

✓ Private Fields

Example:

#balance

Now JavaScript also allows us to create:

✨ Private Methods

using the exact same syntax:

#

Just like private fields,
private methods can ONLY be accessed from
inside the class itself.


╔══════════════════════════════════════════════════════════════╗
║                 WHY DO WE NEED THEM? 🤔                     ║
╚══════════════════════════════════════════════════════════════╝

Sometimes a class contains helper methods that are only
part of its internal implementation.

They are NOT meant to be called by other developers.

Example:

An authentication service.

From the outside, users only care about:

login()

They shouldn't be able to manually call:

validate()

Validation is an internal implementation detail.

This is another great example of both:

🔒 Encapsulation
🎩 Abstraction


╔══════════════════════════════════════════════════════════════╗
║                     EXAMPLE 🚀                              ║
╚══════════════════════════════════════════════════════════════╝
*/

class AuthService {
  login(email, password) {
    this.#validate(email, password);

    console.log("Logged in!");
  }

  #validate(email, password) {
    if (!email || !password) {
      throw new Error("Invalid credentials.");
    }
  }
}

const auth = new AuthService();

auth.login("omar@gmail.com", "123456");

/*
Output:

Logged in!

Everything works perfectly.

Notice that:

login()

can access

#validate()

because both are inside the same class.


╔══════════════════════════════════════════════════════════════╗
║            CAN WE CALL A PRIVATE METHOD? ❌                 ║
╚══════════════════════════════════════════════════════════════╝
*/

// auth.#validate();

/*
❌ SyntaxError

Private method '#validate' must be declared
in an enclosing class.

It won't even appear in autocomplete!

That's because private methods are completely
hidden from code outside the class.


╔══════════════════════════════════════════════════════════════╗
║            HOW DOES THE FLOW LOOK? 🔍                       ║
╚══════════════════════════════════════════════════════════════╝

User code:

auth.login(email, password);

           │
           ▼
      login()
           │
           ▼
    #validate()
           │
           ▼
  Validation succeeds
           │
           ▼
   "Logged in!"

Notice:

The caller only knows about:

login()

Everything else remains hidden.


╔══════════════════════════════════════════════════════════════╗
║        PRIVATE METHODS vs PUBLIC METHODS ⚖️                ║
╚══════════════════════════════════════════════════════════════╝

Public Method

login()

✔ Accessible from anywhere.

Example:

auth.login(...);

--------------------------------------------------------------

Private Method

#validate()

✔ Accessible ONLY inside the class.

Example:

this.#validate(...);

❌ Cannot be called from outside.


╔══════════════════════════════════════════════════════════════╗
║             WHEN SHOULD WE MAKE A METHOD PRIVATE? 🤔        ║
╚══════════════════════════════════════════════════════════════╝

Use a private method when it:

✓ Is only a helper for other methods.
✓ Should never be called directly by users.
✓ Contains implementation details.
✓ Is part of the class's internal logic.

Examples:

✓ validate()
✓ calculateTax()
✓ connectToDatabase()
✓ encryptPassword()
✓ formatData()

These methods support the public API but are not
part of it.


╔══════════════════════════════════════════════════════════════╗
║              INTERVIEW QUESTIONS 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: What is a private method?

A:
A private method is a method prefixed with '#'
that can only be accessed from within the class
where it is declared.


Q: Why use private methods?

A:
To hide internal implementation details and prevent
external code from calling helper methods directly.


Q: Can a private method be accessed outside the class?

A:
No.

Attempting to access it results in a SyntaxError.


💡 Golden Rule

🌍 Public methods define the class's API.

🔒 Private methods support that API behind the scenes.

Users should interact with what the class exposes,
not with how it works internally. 🚀
*/
