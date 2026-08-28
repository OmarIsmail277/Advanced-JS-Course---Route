// ============================================================
//          Choosing the Right Data Structure (Very Important)
// ============================================================

/*
One of the biggest mistakes beginners make is asking:

"Which data structure should I memorize?"

Instead, ask:

============================================================
1. What is the SHAPE of my data?
============================================================

Is my data:

✔ Linear?
✔ Hierarchical?
✔ Connected?
✔ Key-Value based?

The shape of the data is the first clue to choosing
the right data structure.

============================================================
2. What are the RELATIONSHIPS between the data?
============================================================

Do elements know each other?

Does one element have children?

Does one object point to another?

Understanding the relationships helps determine
how the data should be stored.

============================================================
3. What operations will I perform most?
============================================================

Examples:

- Fast search?
- Frequent insertions?
- Frequent deletions?
- Ordering?
- Traversing?

Different operations favor different data structures.

============================================================
Linear Data Structures
============================================================

Until now we've studied:

Array

[10, 20, 30, 40]

----------------------------

Linked List

HEAD
 ↓
10 → 20 → 30 → 40 → null

----------------------------

Stack (LIFO)

TOP
 ↓
30
20
10

----------------------------

Queue (FIFO)

Front

10 → 20 → 30

             Rear

All of these are LINEAR.

Every element has one logical next element.

============================================================
But... Is all data linear?
============================================================

No.

Real-world applications contain many different
shapes of data.

============================================================
Example 1 - Folder Structure
============================================================

src
├── components
│   ├── Navbar
│   └── Footer
├── pages
│   ├── Home
│   └── Product
└── services
    └── api

Is this linear?

No.

It is hierarchical.

------------------------------------------------------------

Could we store it like this?

const files = [
  "src",
  "components",
  "Navbar",
  "Footer",
  "pages",
  "Home",
  "Product",
  "services",
  "api"
];

No.

Why?

Because we've lost the relationships.

Questions we can no longer answer:

❌ Is Navbar inside components?
❌ Is Home inside pages?
❌ Where is api?
❌ Who is the parent of Product?

The names are stored...

The hierarchy is lost.

Arrays don't naturally represent parent-child
relationships.

The correct structure here is:

🌳 Tree

============================================================
Example 2 - Facebook Friends
============================================================

Ahmed
 /   \
Sara Omar
 |
Mona

Does every person know only ONE friend?

No.

Each person may connect to many others.

This is not a hierarchy.

It is a network of connections.

The suitable data structure is:

Graph

============================================================
Example 3 - Fast Lookup
============================================================

Imagine:

1,000,000 users

[
 { id: 1, ... },
 { id: 2, ... },
 ...
]

Suppose we want:

User with id = 982734

Using an array:

users.find(...)

Worst case:

Loop over every user.

Time:

O(n)

------------------------------------------------------------

But...

If the ID is already known,
why should we scan the entire array?

Instead we use a Hash Table.

Example:

users[982734]

Lookup is almost immediate.

Average complexity:

O(1)

============================================================
The Main Idea
============================================================

Not all data has the same shape.

Different shapes require different
data structures.

Linear data
↓

Array
Linked List
Stack
Queue

----------------------------

Hierarchy
↓

Tree 🌳

----------------------------

Connections
↓

Graph

----------------------------

Fast lookup by key
↓

Hash Table

============================================================
Interview Takeaway
============================================================

Before choosing a data structure, ask yourself:

✔ What is the shape of the data?

✔ How are the elements related?

✔ Which operations happen most often?

If you can answer these three questions,
choosing the correct data structure becomes much easier.
*/

/*
This is one of the most important concepts in DSA. 
Experienced developers don't think "I need to use a Tree." They first analyze the shape of the data, 
the relationships between the data, and the required operations, then the appropriate data structure usually becomes obvious.
*/
