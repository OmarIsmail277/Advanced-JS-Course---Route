// ============================================================
//                 Binary Search Tree (BST)
// ============================================================

/*
A Binary Search Tree (BST) is a Binary Tree
with one additional rule:

Every node follows an ORDER.

============================================================
BST Rule
============================================================

For every node:

Left Subtree  <  Current Node  <  Right Subtree

or simply:

left < root < right

This rule must be true for EVERY node,
not only the root.

============================================================
Example
============================================================

                50
              /    \
            30      80
           /  \    /  \
         20   40  70   90

Check every node:

--------------------------------

Root = 50

Left side:

20, 30, 40

All < 50 ✅

Right side:

70, 80, 90

All > 50 ✅

--------------------------------

Node = 30

Left:

20 < 30 ✅

Right:

40 > 30 ✅

--------------------------------

Node = 80

Left:

70 < 80 ✅

Right:

90 > 80 ✅

Every node satisfies the BST rule.

============================================================
Important Note
============================================================

The rule applies to the ENTIRE subtree,
not just the direct children.

Example:

        50
       /  \
     30    80
       \
        60 ❌

This is NOT a BST.

Why?

Although:

60 > 30 ✅

it is inside the LEFT subtree of 50.

Everything on the left side of 50
must be LESS than 50.

Since:

60 > 50

the BST property is violated.

============================================================
Why is this ordering important?
============================================================

Because it allows us to eliminate
half of the remaining tree
at every comparison.

Example:

Search for 70.

                50
              /    \
            30      80
                   /  \
                 70   90

Step 1

70 > 50

Ignore the entire left subtree.

Go right.

----------------------------

Step 2

70 < 80

Ignore the right subtree of 80.

Go left.

----------------------------

Step 3

Found 70.

Only three comparisons were needed.

============================================================
Complexity
============================================================

Balanced BST

Search  -> O(log n)

Insert  -> O(log n)

Delete  -> O(log n)

----------------------------

Unbalanced BST

Search  -> O(n)

Insert  -> O(n)

Delete  -> O(n)

If the tree becomes skewed,
it behaves almost like a Linked List.

============================================================
Interview Notes
============================================================

✔ A BST is simply a Binary Tree
   with an ordering rule.

✔ Rule:

Left < Root < Right

✔ The rule applies recursively to every subtree.

✔ The ordering allows efficient searching,
   insertion, and deletion.

✔ BST performance depends on the tree
   remaining balanced.
*/

// ----------------------------------------------------------------------------

// EXTRA 🪔

// The difference is mainly about the height of the tree, which directly affects performance.

// ============================================================
//          Balanced vs Unbalanced Binary Tree
// ============================================================

/*
Balanced Binary Tree

The left and right subtrees have roughly
the same height.

Example:

          50
        /    \
      30      80
     / \     / \
   20  40  70  90

Height is small.

Searching:

50
↓

80
↓

70

Only a few comparisons.

Time Complexity

Search  -> O(log n)
Insert  -> O(log n)
Delete  -> O(log n)

============================================================

Unbalanced Binary Tree

One side becomes much deeper
than the other.

Example:

50
  \
   80
     \
      90
        \
        100

The tree almost becomes a Linked List.

Searching for 100:

50
↓

80
↓

90
↓

100

We visit almost every node.

Time Complexity

Search  -> O(n)
Insert  -> O(n)
Delete  -> O(n)

============================================================

Easy Way to Remember

Balanced
↓

🌳 Short and wide

Fast (O(log n))

----------------------------

Unbalanced
↓

🌲 Tall and skinny

Slow (O(n))

The goal of self-balancing trees (like AVL Trees and Red-Black Trees)
is to keep the tree balanced so operations remain fast.
*/
