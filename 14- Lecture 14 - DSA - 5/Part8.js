// ============================================================
//      Is a Binary Search Tree Always Faster than an Array?
// ============================================================

/*
Short answer:

No.

It depends on:

✔ Data size.
✔ Required operations.
✔ Whether the BST is balanced.

============================================================
Small Data
============================================================

For small arrays,

the performance difference is usually negligible.

In practice,

using a simple array is often faster because it has
less overhead and better memory locality.

============================================================
Random Access
============================================================

Arrays are much faster when accessing by index.

Example:

arr[500]

Time:

O(1)

A BST has no indexes.

To reach a node, we must compare values
and traverse the tree.

Balanced BST:

O(log n)

============================================================
Searching
============================================================

Array (unsorted)

find(), includes()

O(n)

----------------------------

Balanced BST

Search

O(log n)

BST wins for large datasets.

============================================================
Insertion
============================================================

Array

Inserting while keeping the array sorted
may require shifting many elements.

O(n)

----------------------------

Balanced BST

Insert

O(log n)

No shifting is required.

============================================================
Maintaining Order
============================================================

If your data must always remain sorted,

a Balanced BST is a great choice because
every insertion automatically keeps the order.

Arrays usually require:

Insert

↓

Shift elements

↓

Maintain order

============================================================
Important Condition
============================================================

The BST MUST be balanced.

Otherwise:

50
  \
   80
     \
      90
        \
        100

The tree becomes a Linked List.

Search

Insert

Delete

all degrade to

O(n)

============================================================
Does JavaScript Have a Built-in BST?
============================================================

No.

JavaScript provides built-in structures such as:

✔ Array
✔ Object
✔ Map
✔ Set

but NOT a Binary Search Tree.

If needed, we either:

• Implement it ourselves.
• Use a third-party library.

============================================================
Real-World Usage
============================================================

Binary Search Trees are commonly used behind
the scenes in systems such as:

✔ Database indexes.
✔ File systems.
✔ Search engines.
✔ Some in-memory indexing libraries.

============================================================
Interview Notes
============================================================

✔ Arrays are best for fast random access (O(1)).

✔ Balanced BSTs are better for repeated searching,
insertion, and deletion while maintaining sorted data.

✔ A BST is only efficient if it remains balanced.

✔ Don't assume "BST is always faster."
The best data structure depends on the operations
you perform most frequently.
*/
