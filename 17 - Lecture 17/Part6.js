// =================================================================================================
// 🧩 OBJECT OPTIMIZATION — HIDDEN CLASSES & MAPS
// =================================================================================================

/*
We said that JavaScript objects are dynamic.

Unlike many statically typed languages, we can change an object while
the program is running:

• ➕ Add properties
• ✏️ Change property values
• 🗑️ Delete properties
• 🔄 Add/remove properties dynamically


Example:

const user = {
  name: "Nourhan",
  age: 30,
};

user.city = "Alexandria";   // ➕ add property
user.age = 31;              // ✏️ change value
delete user.name;           // 🗑️ remove property


This flexibility is powerful, but it creates a challenge for the
JavaScript engine.

The engine wants property access to be as fast as possible.

So V8 uses an internal mechanism called:

🧠 HIDDEN CLASSES
(also commonly referred to as "Maps" in V8)


/* ================================================================================================
   🧠 WHAT IS THE "SHAPE" OF AN OBJECT?
   ================================================================================================

When we talk about an object's "shape", we are NOT talking about the
actual values.

The shape describes the object's structure:

👉 Which properties does it have?
👉 In what property layout/order were they added?


Example:

const user1 = {
  name: "Nourhan",
  age: 30,
};

const user2 = {
  name: "Abdo",
  age: 22,
};


The values are different:

user1.name → "Nourhan"
user2.name → "Abdo"

user1.age → 30
user2.age → 22


But their structure is the same:

name → age


So conceptually:

user1 ──┐
        ├──► same shape
user2 ──┘

           ↓
       🧠 Same Map


V8 can potentially use the same hidden class / Map for objects that
have the same property structure.


/* ================================================================================================
   🗺️ WHAT IS A HIDDEN CLASS / MAP?
   ================================================================================================

A hidden class is an internal structure used by V8 to describe the
layout/shape of an object.

It is NOT something you normally see in JavaScript.

You write:

const user = {
  name: "Nourhan",
  age: 30,
};


But internally, V8 can maintain information conceptually similar to:

🗺️ Map
 ├── name → property location
 └── age  → property location


Then the object can conceptually point to that Map:

user
  │
  ▼
🗺️ Map
 ├── name
 └── age


⚠️ "Map" here means V8's internal Map/hidden-class concept.

It is NOT the same thing as JavaScript's:

new Map()


These are two completely different things.


/* ================================================================================================
   🚀 WHY DOES V8 DO THIS?
   ================================================================================================

Consider:

user.name


Normally, because JavaScript is dynamic, the engine cannot simply
assume everything about the object.

But if V8 knows:

🗺️ "This object has this particular shape"

it can make property access much more efficient.

And if many objects share the same shape:

user1
user2
user3
user4
...


they may be able to share the same hidden class / Map.

Conceptually:

user1 ──┐
user2 ──┤
user3 ──┼──► 🗺️ Same Hidden Class
user4 ──┘


Instead of creating a completely separate structural description
for every object.


/* ================================================================================================
   ⚠️ VALUES ARE NOT THE SHAPE
   ================================================================================================

This is VERY important.

These objects:

const user1 = {
  name: "Nourhan",
  age: 30,
};

const user2 = {
  name: "Abdo",
  age: 22,
};


have different values:

"Nourhan" ≠ "Abdo"
30 ≠ 22


But the same structure:

name
age


So:

📌 Shape → properties / layout

📌 Values → actual data stored in those properties


Changing a value does NOT necessarily change the object's shape.

Example:

user1.age = 31;


The shape is still:

name
age


Only the value changed:

age → 31


So conceptually:

🗺️ Same Hidden Class
       │
       ├── name → "Nourhan"
       └── age  → 31


/* ================================================================================================
   🔄 CHANGING THE SHAPE
   ================================================================================================

Now imagine:

const user = {
  name: "Nourhan",
  age: 30,
};


Then:

user.city = "Alexandria";


The structure changed:

Before:

name
age


After:

name
age
city


V8 may transition the object to another hidden class.

Conceptually:

🗺️ Map A
 ├── name
 └── age
      │
      │ add city
      ▼
🗺️ Map B
 ├── name
 ├── age
 └── city


So V8 can maintain a chain of transitions between object shapes.


/* ================================================================================================
   🔀 PROPERTY ORDER MATTERS
   ================================================================================================

Consider:

const user1 = {
  name: "Nourhan",
  age: 30,
};


and:

const user2 = {
  age: 22,
  name: "Abdo",
};


Both contain:

name
age


But they were created in a different property order:

user1:

name → age


user2:

age → name


For V8's hidden-class system, different property creation order can
lead to different internal Maps/shapes.

Conceptually:

user1 → 🗺️ Map A
          name → age


user2 → 🗺️ Map B
          age → name


So consistently creating objects with the same property structure and
order can help objects share hidden classes.


/* ================================================================================================
   ⚡ WHY DOES SHARING SHAPES HELP PERFORMANCE?
   ================================================================================================

Suppose we have:

function getAge(user) {
  return user.age;
}


And we repeatedly call it with objects that have the same shape:

const user1 = {
  name: "Nourhan",
  age: 30,
};

const user2 = {
  name: "Abdo",
  age: 22,
};


Because the objects have the same structure, the engine can gather
stable runtime information.

This can help later optimizations such as:

🔥 Inline caching
🔥 Speculative optimization


The engine can become more confident about how `user.age` should be
accessed.


/* ================================================================================================
   🧠 HIDDEN CLASSES + DYNAMIC JAVASCRIPT
   ================================================================================================

This is one of the clever things V8 does.

JavaScript allows:

➕ Dynamic properties
🗑️ Deleting properties
🔄 Changing object structure


But V8 still wants:

⚡ Fast property access


So it creates internal structures that allow it to treat dynamic
objects more efficiently.


Conceptually:

        JavaScript
            │
            ▼
     Dynamic Objects
            │
            ▼
      🧠 Hidden Classes
            │
            ▼
       📊 Runtime Info
            │
            ▼
     🚀 Optimizations
            │
            ▼
        Fast Access


/* ================================================================================================
   ⚠️ IMPORTANT: DON'T MEMORIZE "ADDING A PROPERTY = BAD"
   ================================================================================================

This is an important correction.

Don't think:

❌ "Adding properties is always bad."

or:

❌ "Changing the order always makes my application slow."


The real idea is:

> V8 performs best when it can recognize stable object structures and
> make effective optimizations based on them.


Object shapes can become more complicated when you frequently create
objects with inconsistent structures or mutate their properties in
ways that prevent stable optimization.

Modern V8 is highly sophisticated, so don't treat hidden classes as a
simple rule that guarantees a particular performance result.


/* ================================================================================================
   🎯 INTERVIEW NOTES
   ================================================================================================

Q: What is a hidden class in V8?

A:

> A hidden class is an internal V8 structure used to describe the
> property layout/shape of JavaScript objects, allowing V8 to optimize
> property access.


--------------------------------------------------

Q: Do two objects with different values necessarily have different
hidden classes?

❌ No.

If they have the same property structure, they may share the same
hidden class.

Example:

{ name: "Nourhan", age: 30 }

{ name: "Abdo", age: 22 }

Same shape → potentially same hidden class.


--------------------------------------------------

Q: Does changing a property value change the object's shape?

Usually, changing only the value does not change the property
structure.

Example:

user.age = 31;

The shape is still:

name
age


--------------------------------------------------

Q: Can adding a property change the hidden class?

✅ Yes.

Adding a new property changes the object's structure and can cause a
transition to another hidden class.


--------------------------------------------------

Q: Does property order matter?

✅ It can.

Objects with the same properties created in different orders can end
up with different hidden classes.


--------------------------------------------------

Q: Why does V8 use hidden classes?

A:

> To efficiently represent object structure and enable optimizations
> such as fast property access and inline caching.


/* ================================================================================================
   🗺️ BIG PICTURE
   ================================================================================================

const user1 = {
  name: "Nourhan",
  age: 30,
};

const user2 = {
  name: "Abdo",
  age: 22,
};


             user1                     user2
               │                         │
               │                         │
               └──────────┬──────────────┘
                          │
                          ▼
                    🗺️ Same Shape
                          │
                          ▼
                    🧠 Hidden Class
                          │
                          ▼
                 📊 Runtime Feedback
                          │
                          ▼
                    🚀 Optimization
                          │
                          ▼
                  ⚡ Fast Property
                     Access


🎯 FINAL IDEA:

JavaScript objects are dynamic.

V8 uses internal hidden classes / Maps to keep track of their
structure.

Objects with the same structure can potentially share that internal
representation.

Stable object shapes give V8 useful information that can contribute
to efficient property access and further JIT optimizations.

🔥 The key distinction:

OBJECT VALUE
→ "Nourhan", 30

OBJECT SHAPE
→ "name", "age"

HIDDEN CLASS / MAP
→ V8's internal representation of that shape.
*/
