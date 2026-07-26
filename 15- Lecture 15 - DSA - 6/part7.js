// ============================================================
//                 Solving Collisions
// ============================================================

/*
A collision happens when two different keys
produce the same array index.

Example

hash("Ahmed") = 5

hash("Omar") = 5

Both keys want to be stored at

table[5].

Since only one position exists,

we need a strategy to store both values.

------------------------------------------------------------

There are two main collision resolution techniques.

1. Separate Chaining

Each array index stores a collection
(usually a Linked List, but it can also
be an Array or another data structure).

Example

Index

5

↓

[
  { key: "Ahmed", value: 25 },
  { key: "Omar", value: 30 }
]

When retrieving "Omar",

we hash the key,

go directly to bucket 5,

then search only inside that bucket.

------------------------------------------------------------

2. Open Addressing

Instead of storing multiple entries
in the same bucket,

we look for another empty position
inside the array.

Example

hash("Ahmed") = 5

↓

table[5] = { Ahmed, 25 }

Later

hash("Omar") = 5

Position 5 is occupied.

Check the next position.

↓

table[6] = { Omar, 30 }

Different probing techniques determine
which next position to check
(linear probing, quadratic probing,
double hashing, etc.).

rule of Open Addressing

Whatever rule set() uses to find an empty slot, get() must use the exact same rule to find the stored key.

If set() uses:

Linear probing → get() uses linear probing.
Quadratic probing → get() uses quadratic probing.
Double hashing → get() uses double hashing.

Both operations must follow the same sequence of indexes.

------------------------------------------------------------

Interview Notes

✔ Separate Chaining is easier to implement
and is very common.

✔ Open Addressing stores all entries
directly inside the array.

✔ Both techniques aim to resolve collisions
while keeping average operations close to O(1).
*/
