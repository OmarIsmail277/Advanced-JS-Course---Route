// ============================================================
//                 Hash Table (Hash Map)
// ============================================================

/*
A Hash Table (also called a Hash Map)

is a data structure used to store

Key → Value

pairs.

Given a key,

we can retrieve its associated value

VERY quickly.

------------------------------------------------------------

Example

Country Code -> Country

"eg"  -> "Egypt"

"usa" -> "United States"

"fr"  -> "France"

Instead of searching through all elements,

we use the key directly.

------------------------------------------------------------

Don't we already have Objects in JavaScript?

Yes.

A JavaScript Object is a built-in implementation
based on the idea of a hash table.

Example

const person = {
  name: "Ahmed",
  age: 25
};

person.name

returns

"Ahmed"

------------------------------------------------------------

Then why do we have Map?

Objects have some limitations.

For example,

Objects inherit properties from their prototype.

Some keys may conflict with inherited properties.

Maps solve these issues.

Advantages of Map

✔ Any data type can be used as a key.

✔ No inherited keys.

✔ Better API

set()

get()

has()

delete()

For most modern JavaScript applications,

Map is usually the preferred choice.

------------------------------------------------------------

Why learn Hash Tables then?

Because interviewers often ask you
to implement one yourself.

The goal is to understand

HOW Map and Object work internally.

------------------------------------------------------------

How does a Hash Table work?

Internally,

a Hash Table stores data inside
a fixed-size array.

Example

Index

0
1
2
3
4
5
6
7

But...

Arrays are indexed using NUMBERS.

Our keys are usually STRINGS.

Example

"Ahmed"

"age"

"country"

How do we convert

a String

↓

into

a Number?

Answer

A Hash Function.

------------------------------------------------------------

Hash Function

A Hash Function

takes a key,

then converts it into
a numeric index.

Example

"Ahmed"

↓

Hash Function

↓

5

Now the value can be stored at

table[5].

------------------------------------------------------------

Simple Hash Function

function simpleHash(key, tableSize) {
  let total = 0;

  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }

  return total % tableSize;
}

Example

key

"ABC"

ASCII values

65 + 66 + 67

=

198

Suppose

tableSize = 10

198 % 10

=

8

Store the value at

table[8].

------------------------------------------------------------

How do we retrieve a value?

Exactly the same way.

Suppose we want

"ABC"

Run the SAME hash function.

↓

Index 8

↓

Return

table[8]

The same key always produces
the same index.

------------------------------------------------------------

Hash Collision

Ideally,

every key should produce
a different index.

But in reality,

different keys may generate
the same hash value.

Example

"abc"

and

"cab"

Our simple hash function

adds character codes,

so both produce the same total.

Both keys map to the same index.

This is called

Collision.

------------------------------------------------------------

How are collisions solved?

There are several techniques.

The two most common are

1. Chaining

Every array index stores
a Linked List (or another collection).

Example

Index 5

↓

("abc", 100)

↓

("cab", 200)

↓

null

------------------------------------------------

2. Open Addressing

Instead of storing multiple values
in the same position,

we search for another empty position
inside the array.

------------------------------------------------------------

A good Hash Function should

✔ Be deterministic.

The same key always produces
the same hash.

✔ Distribute keys evenly.

✔ Minimize collisions.

------------------------------------------------------------

UUID

You may hear about UUIDs when discussing
unique identifiers.

UUID stands for

Universally Unique Identifier.

Example

550e8400-e29b-41d4-a716-446655440000

A UUID is designed to be practically unique,
making collisions extremely unlikely.

However,

a UUID is NOT a hash function.

Difference

Hash Function

✔ Converts a key into a numeric index.

Used to determine where data should be
stored inside the hash table.

----------------------------

UUID

✔ Generates a unique identifier.

Used to uniquely identify objects,
users, orders, files, etc.

It is NOT used to calculate
an array index in a hash table.

----------------------------

Main Operations

1.

set(key, value)

Store a key-value pair.

----------------------------

2.

get(key)

Retrieve a value using its key.

----------------------------

3.

remove(key)

Delete a key-value pair.

------------------------------------------------------------

Average Complexity

Search

O(1)

Insertion

O(1)

Deletion

O(1)

Worst Case

O(n)

if many collisions occur and multiple
keys end up in the same bucket.

Worst-case O(n) can happen for all three main operations if many collisions occur.

Why do we say O(n)?

Because in the worst case, every element could end up in the same bucket.

Imagine there are 1,000 elements:

Index

0

1

2

3 → 1000 elements

4

5

6

7

------------------------------------------------------------

Applications

✔ Database indexing.

✔ Caching.

✔ Dictionaries.

✔ Frequency Counters.

✔ Storing user sessions.

✔ Compilers & Symbol Tables.

------------------------------------------------------------

Interview Notes

✔ JavaScript Object is based on the
idea of a Hash Table.

✔ Map is generally preferred over Object
when implementing hash tables.

✔ Hash Tables provide extremely fast lookup.

✔ The biggest challenge is handling collisions.
*/
