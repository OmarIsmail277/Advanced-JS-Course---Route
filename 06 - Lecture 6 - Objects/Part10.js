/*
=========================================
Object.keys(), Object.values(),
Object.entries(), Object.fromEntries()
=========================================

These methods are commonly used when we want to
work with objects as collections of data.

Objects do not have methods like:
- map()
- filter()
- reduce()

So we often convert objects into arrays first.

-----------------------------------------
1) Object.keys()
-----------------------------------------

Returns an array containing all enumerable keys.
*/

const user = {
  name: "Ali",
  age: 25,
};

console.log(Object.keys(user));
// ["name", "age"]

/*
-----------------------------------------
2) Object.values()
-----------------------------------------

Returns an array containing all enumerable values.
*/

console.log(Object.values(user));
// ["Ali", 25]

/*
-----------------------------------------
3) Object.entries()
-----------------------------------------

Returns an array of [key, value] pairs.

Each element in the returned array is itself
a two-element array:

[key, value]

This allows us to use array methods such as:
- map()
- filter()
- reduce()
*/

console.log(Object.entries(user));

/*
Output:

[
  ["name", "Ali"],
  ["age", 25]
]
*/

/*
-----------------------------------------
Understanding Destructuring
-----------------------------------------

Without destructuring:
*/

Object.entries(user).forEach((item) => {
  const key = item[0];
  const value = item[1];

  console.log(key);
  console.log(value);
});

/*
With destructuring:
*/

Object.entries(user).forEach(([key, value]) => {
  console.log(key);
  console.log(value);
});

/*
[key, value]

is simply shorthand for:

const key = item[0];
const value = item[1];

-----------------------------------------
Example: Transform Object Values
-----------------------------------------
*/

const prices = {
  apple: 100,
  banana: 50,
  mango: 200,
};

/*
Object.entries(prices)

returns:

[
  ["apple", 100],
  ["banana", 50],
  ["mango", 200]
]
*/

const updatedEntries = Object.entries(prices).map(([key, value]) => {
  return [key, value * 3];
});

console.log(updatedEntries);

/*
Result:

[
  ["apple", 300],
  ["banana", 150],
  ["mango", 600]
]
*/

/*
-----------------------------------------
4) Object.fromEntries()
-----------------------------------------

Converts an array of [key, value] pairs
back into an object.
*/

const updated = Object.fromEntries(updatedEntries);

console.log(updated);

/*
Result:

{
  apple: 300,
  banana: 150,
  mango: 600
}
*/

/*
Think of it as:

Object
   ↓
Object.entries()
   ↓
Array
   ↓
map/filter/reduce
   ↓
Object.fromEntries()
   ↓
Object
*/

/*
-----------------------------------------
Example: Filtering Object Properties
-----------------------------------------
*/

const scores = {
  ali: 90,
  sara: 40,
  aya: 60,
};

const passedEntries = Object.entries(scores).filter(
  ([name, score]) => score >= 50,
);

console.log(passedEntries);

/*
Result:

[
  ["ali", 90],
  ["aya", 60]
]
*/

const passed = Object.fromEntries(passedEntries);

console.log(passed);

/*
Result:

{
  ali: 90,
  aya: 60
}
*/

/*
-----------------------------------------
Common Pattern
-----------------------------------------

1) Convert object to array

Object.entries(obj)

2) Perform array operations

map()
filter()
reduce()

3) Convert back to object

Object.fromEntries(...)

=========================================
INTERVIEW NOTE
=========================================

Object.entries() returns:

[
  [key1, value1],
  [key2, value2]
]

Each item is a two-element array, which is why
we commonly use array destructuring:

([key, value])

instead of:

(entry) => {
  const key = entry[0];
  const value = entry[1];
}
----------------------------------
So whenever you see:

([key, value])

Read it as:

"Take each [key, value] array and unpack it
into two variables called key and value."

Example:

["apple", 100]

becomes:

key = "apple"
value = 100
*/
