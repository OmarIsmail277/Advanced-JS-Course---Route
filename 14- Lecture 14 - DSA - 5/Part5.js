// ============================================================
//                      Binary Tree
// ============================================================

/*
A Binary Tree is a special type of Tree.

Rule:

Every node can have AT MOST two children.

Possible cases:

0 children

      A

----------------------------

1 child

      A
     /
    B

or

      A
       \
        B

----------------------------

2 children

      A
     / \
    B   C

Unlike a General Tree:

Node
├── Child 1
├── Child 2
├── Child 3
└── Child 4

a Binary Tree limits each node to only:

left
right

============================================================
Implementation
============================================================
*/

class BinaryTree {
  constructor(value) {
    // Data stored inside the node.
    this.value = value;

    // Left child.
    this.left = null;

    // Right child.
    this.right = null;
  }
}

/*
Example

        10
       /  \
      5    20
     / \
    2   8

*/

const root = new BinaryTree(10);

root.left = new BinaryTree(5);
root.right = new BinaryTree(20);

root.left.left = new BinaryTree(2);
root.left.right = new BinaryTree(8);

/*
============================================================
Why limit each node to only two children?
============================================================

This restriction allows us to build more
specialized and powerful data structures.

Examples:

✔ Binary Search Tree (BST)

Fast searching, insertion and deletion.

----------------------------

✔ Binary Heap

Used to implement Priority Queues.

----------------------------

✔ Decision Trees

Used in AI and Machine Learning.

Without this constraint,
these structures wouldn't work.

============================================================
Types of Binary Trees
============================================================

------------------------------------------------------------
1. Full Binary Tree
------------------------------------------------------------

Every node has either:

✔ 0 children
or
✔ 2 children

Never exactly one child.

Example

        A
      /   \
     B     C
    / \
   D   E

Valid.

----------------------------

        A
       /
      B

Not Full.

Because A has only one child.

============================================================
2. Perfect Binary Tree
============================================================

Rules:

✔ Every internal node has exactly two children.

✔ Every leaf is on the same level.

Example

          A
        /   \
       B     C
      / \   / \
     D  E  F  G

This is perfect.

Properties:

Very symmetrical.

Every level is completely filled.

============================================================
3. Complete Binary Tree
============================================================

All levels are completely filled,

except possibly the last.

The last level is filled

from LEFT to RIGHT.

Example

        A
      /   \
     B     C
    / \   /
   D  E  F

Valid Complete Tree.

----------------------------

        A
      /   \
     B     C
      \     \
       E     G

Not Complete.

There are gaps on the left.

============================================================
4. Balanced Binary Tree
============================================================

A tree whose height stays reasonably small.

The left and right subtrees have similar heights.

Example

        10
      /    \
     5      20
    / \    / \
   2   8  15 30

Searching remains fast.

============================================================
5. Unbalanced Binary Tree
============================================================

One side becomes much deeper
than the other.

Example

10
 \
 20
   \
   30
     \
     40

Looks almost like a Linked List.

This is bad because many operations
become slower.

Time complexity may degrade from

O(log n)

to

O(n).

============================================================
Skewed Trees
============================================================

Left-Skewed Tree

      10
      /
     8
    /
   5
  /
 2

Every node only has a left child.

----------------------------

Right-Skewed Tree

10
  \
   20
     \
      30
        \
         40

Every node only has a right child.

These are extreme cases of
unbalanced trees.

They are also called:

✔ Degenerate Trees
✔ Pathological Trees

because they behave almost exactly
like Linked Lists.

============================================================
Interview Notes
============================================================

✔ Binary Tree:
   Each node has at most two children.

✔ Full Tree:
   Every node has either 0 or 2 children.

✔ Perfect Tree:
   Full tree + all leaves on the same level.

✔ Complete Tree:
   Last level filled from left to right.

✔ Balanced Tree:
   Height remains small, giving good performance.

✔ Degenerate (Skewed) Tree:
   Looks like a Linked List and leads to poor performance.

Most interviews focus much more on:

• Binary Search Trees (BST)
• Tree Traversals
• Binary Heaps

than on memorizing all of these definitions.
Understanding the concepts is usually enough.
*/
