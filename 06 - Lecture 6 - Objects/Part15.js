/*
====================================================
INTERVIEW TOPIC: Spread Operator Gotchas with (OBJECTS)
====================================================

Spread operator looks simple:
→ but it hides multiple tricky behaviors

We’ll break it down with some “fun variable names” 😄

----------------------------------------------------
1) SHALLOW COPY PROBLEM
----------------------------------------------------
*/

const tacoBoss = {
  name: "Ahmed",
  address: {
    city: "Alex",
  },
};

const cloneNinja = { ...tacoBoss };

cloneNinja.address.city = "Cairo";

console.log(tacoBoss);
console.log(cloneNinja);

/*
What happened?

→ spread only copies FIRST LEVEL
→ nested objects are STILL shared by reference

So:
tacoBoss.address === cloneNinja.address   // true

This is why both changed.
*/

/*
----------------------------------------------------
2) enumerable = false PROBLEM
----------------------------------------------------
*/

const secretVault = {};

Object.defineProperty(secretVault, "password", {
  value: "1234",
  enumerable: false,
});

const spyCopy = { ...secretVault };

console.log(spyCopy.password);

/*
Why undefined?

→ spread uses enumeration (looping)
→ non-enumerable properties are SKIPPED

So password never got copied.
*/

/*
----------------------------------------------------
3) PROTOTYPE PROBLEM
----------------------------------------------------
*/

const magicBook = {
  sayHi() {
    console.log("hello");
  },
};

const wizard = Object.create(magicBook);
wizard.name = "Ali";

const flatCopy = { ...wizard };

console.log(flatCopy.sayHi);

/*
Why undefined?

→ spread ONLY copies OWN properties
→ prototype properties are ignored

So sayHi lives in prototype → not copied.
*/

/*
----------------------------------------------------
4) GETTER SIDE EFFECT PROBLEM
----------------------------------------------------
*/

const dramaUser = {
  firstName: "Ahmed",

  get name() {
    console.log("🔥 Getter activated!");
    return this.firstName;
  },
};

const snapshotUser = { ...dramaUser };

console.log(snapshotUser);

/*
Why did getter run?

→ spread reads property values
→ getters execute during "reading"

So getters are NOT just copied — they are INVOKED.
*/

/*
----------------------------------------------------
5) LAST VALUE WINS
----------------------------------------------------
*/

const baseUser = {
  name: "Ali",
  age: 25,
};

const upgradedUser = {
  ...baseUser,
  name: "Ahmed",
};

console.log(upgradedUser);

/*
Result:

{
  name: "Ahmed",
  age: 25
}

Why?

→ order matters
→ later values overwrite earlier ones
→ "last write wins"
*/

/*
====================================================
INTERVIEW SUMMARY
====================================================

Spread operator pitfalls:

1) Shallow copy only
2) Skips non-enumerable properties
3) Ignores prototype chain
4) Triggers getters while reading
5) Later properties override earlier ones

====================================================
*/
