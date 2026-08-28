// ============================================================
//              Self-Balancing Binary Search Trees
// ============================================================

/*
One weakness of a normal BST is that it may
become unbalanced.

Example:

Insert:

10, 20, 30, 40, 50

Result:

10
  \
   20
     \
      30
        \
         40
           \
            50

This is no longer an efficient tree.

It behaves almost like a Linked List.

Search, Insert and Delete become:

O(n) ❌

============================================================
The Solution
============================================================

Use a Self-Balancing Binary Search Tree.

Its goal is simple:

Keep the tree balanced automatically
after every insertion and deletion.

============================================================
How?
============================================================

It performs rotations whenever the tree
starts becoming unbalanced.

Example

Before Rotation

10
  \
   20
     \
      30

After Rotation

      20
     /  \
   10    30

The values don't change.

Only the connections between nodes change.

The BST ordering rule is still preserved.

============================================================
Why Balance Matters
============================================================

Balanced Tree

        20
      /    \
    10      30

Height ≈ log n

Search

Insert

Delete

↓

O(log n)

----------------------------

Unbalanced Tree

10
  \
   20
     \
      30

Height ≈ n

Search

Insert

Delete

↓

O(n)

============================================================
The Main Goal
============================================================

A Self-Balancing Tree continuously tries
to keep the tree height close to:

log n

instead of:

n

This guarantees good performance even
after many insertions and deletions.

============================================================
Red-Black Tree
============================================================

One of the most famous Self-Balancing BSTs
is the Red-Black Tree.

It assigns each node a color:

🔴 Red

⚫ Black

Using a set of balancing rules,
the tree automatically performs rotations
and recoloring whenever needed.

You don't usually implement these rules
from scratch unless you're studying
advanced data structures.

============================================================
Real-World Usage
============================================================

Red-Black Trees are widely used in:

✔ Java (TreeMap, TreeSet)
✔ C++ (std::map, std::set)
✔ Linux Kernel
✔ Database engines
✔ Many operating systems

JavaScript does NOT provide a built-in
Binary Search Tree or Red-Black Tree.

Instead, JavaScript mainly provides:

✔ Array
✔ Object
✔ Map
✔ Set

If needed, you either:

• Implement one yourself.
• Use a library.

============================================================
Interview Notes
============================================================

✔ A normal BST can become unbalanced.

✔ An unbalanced BST behaves like a Linked List.

✔ Self-Balancing Trees solve this problem
by performing rotations.

✔ The goal is to keep the tree height close
to O(log n), so Search, Insert, and Delete
remain O(log n).

✔ Red-Black Trees are among the most widely
used self-balancing trees in programming
languages and system implementations.
*/

/*
🥰🤗😚
Don't worry about memorizing the rotation algorithms. In most frontend interviews, 
it's enough to understand why self-balancing trees exist: to prevent a BST from degenerating into a linked list 
and to preserve O(log n) performance.

*/
