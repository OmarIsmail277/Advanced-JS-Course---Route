/*
╔══════════════════════════════════════════════════════════════╗
║              OOP PILLAR #3 - POLYMORPHISM 🎭                ║
╚══════════════════════════════════════════════════════════════╝

The third pillar of OOP is:

✨ Polymorphism

The word comes from:

Poly = Many
Morph = Forms

➡️ "Many Forms"

In programming, it means:

"The same method name can have different behaviors
depending on the object that calls it."

This is usually achieved through:

✅ Method Overriding

(Not Method Overloading in JavaScript. We'll discuss that below.)


╔══════════════════════════════════════════════════════════════╗
║                 THE BASE CLASS 📩                           ║
╚══════════════════════════════════════════════════════════════╝
*/

class Notification {
  send() {
    console.log("Sending notification...");
  }
}

/*
Every notification can be "sent".

But...

Different notification types send messages differently.

Instead of writing:

sendEmail()
sendSMS()
sendPushNotification()

we keep one common method name:

send()

and allow each child class to implement
its own version.

That's Polymorphism. 😎


╔══════════════════════════════════════════════════════════════╗
║               DIFFERENT IMPLEMENTATIONS 🎭                  ║
╚══════════════════════════════════════════════════════════════╝
*/

class EmailNotification extends Notification {
  send() {
    console.log("📧 Sending Email...");
  }
}

class SMSNotification extends Notification {
  send() {
    console.log("📱 Sending SMS...");
  }
}

/*
Notice:

Both classes have a method named:

send()

Same name.

Different behavior.

That's exactly what Polymorphism means.


╔══════════════════════════════════════════════════════════════╗
║                  POLYMORPHISM IN ACTION 🚀                  ║
╚══════════════════════════════════════════════════════════════╝
*/

const notifications = [new EmailNotification(), new SMSNotification()];

notifications.forEach((notification) => {
  notification.send();
});

/*
Output:

📧 Sending Email...

📱 Sending SMS...

Look carefully...

We never asked:

if (Email)

or

if (SMS)

We simply called:

notification.send()

JavaScript automatically executed
the correct implementation based on
the object's actual type.

🎉 That's the magic of Polymorphism.


╔══════════════════════════════════════════════════════════════╗
║             WHY IS THIS USEFUL? 🤔                          ║
╚══════════════════════════════════════════════════════════════╝

Imagine adding another notification type.

Easy!

*/

class PushNotification extends Notification {
  send() {
    console.log("🔔 Sending Push Notification...");
  }
}

/*
Now we simply write:

notifications.push(new PushNotification());

No other code needs to change.

The loop still works:

notifications.forEach(notification => notification.send());

This makes applications:

✓ Easier to extend
✓ Easier to maintain
✓ More flexible

This is one of the biggest strengths of OOP.


╔══════════════════════════════════════════════════════════════╗
║        POLYMORPHISM vs METHOD OVERRIDING 🤝                 ║
╚══════════════════════════════════════════════════════════════╝

Method Overriding is the mechanism.

Polymorphism is the result.

Example:

Notification.send()

↓

EmailNotification.send()

↓

SMSNotification.send()

Each child overrides the parent's implementation,
allowing the same method call to behave differently.


╔══════════════════════════════════════════════════════════════╗
║         OVERRIDING vs OVERLOADING ⚠️                        ║
╚══════════════════════════════════════════════════════════════╝

A common interview question!

✅ JavaScript supports:

✔ Method Overriding

Example:

class Animal {
  speak() {}
}

class Dog extends Animal {
  speak() {}
}

--------------------------------------------------------------

❌ JavaScript does NOT support traditional
Method Overloading like Java or C#.

For example, this does NOT work as expected:
*/

class Calculator {
  add(a) {
    return a;
  }

  // This replaces the previous method!
  add(a, b) {
    return a + b;
  }
}

/*
JavaScript keeps only the LAST method definition.

Unlike Java or C#, you cannot have:

add(a)

and

add(a, b)

as separate methods.

If you need different behaviors,
you typically use:

✓ Optional parameters
✓ Default parameters
✓ Rest parameters (...args)


╔══════════════════════════════════════════════════════════════╗
║              INTERVIEW QUESTIONS 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: What is Polymorphism?

A:
Polymorphism allows the same method name to perform
different actions depending on the object that invokes it.


Q: How is Polymorphism commonly achieved in JavaScript?

A:
Through Method Overriding using inheritance.


Q: Does JavaScript support Method Overloading?

A:
No.

JavaScript supports Method Overriding,
but not traditional Method Overloading found
in languages like Java or C#.


💡 Golden Rule

🎭 Same method name.

🎬 Different implementation.

That's Polymorphism.
*/
