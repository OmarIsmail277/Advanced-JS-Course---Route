// ============================================================
//           Load Factor, Resizing & Rehashing
// ============================================================

/*
Is a Hash Table always O(1)?

No.

Average

set()    O(1)

get()    O(1)

remove() O(1)

Worst Case

O(n)

This happens when many keys collide
and end up in the same bucket.

------------------------------------------------------------

A good hash function should:

1. Be deterministic.

The same key must always produce
the same hash (index).

Example

hash("Ahmed")

↓

5

Every time.

------------------------------------------------------------

2. Be fast.

Hashing is performed on every

set()

get()

remove()

operation.

------------------------------------------------------------

3. Minimize collisions.

A good hash function distributes
keys as evenly as possible across
the buckets.

------------------------------------------------------------

Load Factor

The load factor measures how full
the hash table is.

Formula

Load Factor = Number of Entries / Number of Buckets

Example

10 entries
20 buckets

Load Factor = 0.5

--------------------

100 entries
10 buckets

Load Factor = 10

Higher load factor

↓

More collisions

↓

Slower operations

------------------------------------------------------------

Resizing

When the load factor becomes too high
(commonly around 0.75),

the hash table grows by creating
a larger array.

Example

Old table

53 buckets

↓

New table

107 buckets

(usually a larger prime number)

------------------------------------------------------------

Rehashing

After resizing,

EVERY key must be hashed again.

Why?

Because the hash function depends
on the table size.

Example

Old table size = 53

hash("Ahmed") = 18

After resizing

New table size = 107

hash("Ahmed") = 72

The index changes.

Therefore every existing entry
must be inserted into the new table again.

This process is called Rehashing.

------------------------------------------------------------

Interview Notes

✔ Average operations are O(1).

✔ Worst case is O(n).

✔ A high load factor increases collisions.

✔ Resizing reduces collisions by creating
more buckets.

✔ After resizing, every key must be
rehashed because the table size changed.
*/
