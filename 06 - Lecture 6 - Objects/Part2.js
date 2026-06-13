/*
=========================================
Part 1 - Object Basics & Dynamic Keys
=========================================

In simple terms, an object is a data structure that stores data
as key-value pairs.

object => structure => data as key : value

Objects are non-primitive data types.

Unlike primitive values (string, number, boolean, null, undefined,
bigint, symbol), objects can contain multiple values grouped together.

An object stores values as key-value pairs, where values can be:
- Primitive values
- Arrays
- Other objects
- Functions
*/

const user = {
  name: "Nourhan",
  age: 32,
  isInstructor: true,
};

/*
-----------------------------------------
Accessing Object Properties
-----------------------------------------

There are two common ways to access object values:

1) Dot Notation
2) Bracket Notation

Dot notation is the most common and readable approach when
the property name is known ahead of time.

Bracket notation is used when the key is dynamic.
*/

console.log(user.age);
console.log(user["age"]);

/*
-----------------------------------------
Dynamic Keys
-----------------------------------------

JavaScript will literally look for the property name written
after the dot.

It will NOT use the value stored inside a variable.
*/

const userInput = window.prompt(
  "Enter the key you want (name, age, isInstructor)",
);

console.log(user.userInput); // looks for key "userInput" ❌
console.log(user[userInput]); // looks for the value stored inside userInput ✅

/*
Example:

If userInput = "name"

user.userInput  => user["userInput"] ❌
user[userInput] => user["name"] ✅

This is one of the most important differences between
dot notation and bracket notation.

-----------------------------------------
Computed Property Names
-----------------------------------------

Bracket notation can also be used when creating objects.

[field] is called a Computed Property Name.
*/

const field = "email";

const user2 = {
  name: "Ali",
  [field]: "ali@gmail.com",
};

/*
Result:

{
  name: "Ali",
  email: "ali@gmail.com"
}

This pattern is heavily used in forms and dynamic data.
*/

const user3 = {};

function updateUser(key, value) {
  user3[key] = value;
}

updateUser("name", "Ahmed");
updateUser("age", 33);

/*
-----------------------------------------
What Is The Type Of Object Keys?
-----------------------------------------

Interview Question:

What are the types of object keys?

Answer:

Object keys are either:
- Strings
- Symbols

Non-string keys are automatically converted to strings.
*/

const x = {
  1: "one",
  true: "yes",
};

console.log(Object.keys(x));
// ["1", "true"]

/* 
1      => "1"
true   => "true"
*/

/*
-----------------------------------------
Famous Interview Question
-----------------------------------------

Objects used as keys inside normal objects are converted
into strings.
*/

const obj = {};

const a = {};
const b = {};

obj[a] = "A";
obj[b] = "B";

console.log(obj);

/*
Output:

{
  "[object Object]": "B"
}

Internally:

obj[a] = "A";

becomes:

obj["[object Object]"] = "A";

Then:

obj[b] = "B";

becomes:

obj["[object Object]"] = "B";

The second assignment overwrites the first one because
both generated the same string key.
*/

/*
-----------------------------------------
Why Map Exists
-----------------------------------------

Map was introduced to solve many limitations of objects,
especially key handling.

Map stores the actual reference as the key instead of
converting it to a string.
*/

const map = new Map();

map.set(a, "A");
map.set(b, "B");

console.log(map);

/*
Result:

Map(2) {
  {} => "A",
  {} => "B"
}

Because:

a !== b

Each object has a different reference.
*/

/*
-----------------------------------------
Objects In Memory
-----------------------------------------

Objects are stored in the Heap.

Variables store references that point to those objects.

This avoids copying potentially large objects every time
they are assigned to another variable.
*/

const personA = { name: "Ali" };
const personB = personA;

/*
Conceptually:

Stack:
personA ---->
personB ---->

Heap:
{ name: "Ali" }

Both variables point to the same object.
*/

/*
-----------------------------------------
Reference Behavior
-----------------------------------------

Interview Question:
*/

const userA = { name: "Ali" };
const userB = userA;

userB.name = "Ahmed";

console.log(userA.name); // "Ahmed"

/*
Why?

Because both variables point to the same object.

userA === userB // true

No new object was created.

This concept leads us to:
- Copy by reference
- Shallow copy
- Deep copy

which are some of the most important object concepts
in JavaScript.
*/
