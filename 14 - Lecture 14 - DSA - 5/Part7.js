// ============================================================
//          Binary Search Tree (BST) Implementation
// ============================================================

/*
A Binary Search Tree consists of nodes.

Each node stores:

✔ value
✔ left child
✔ right child

Every insertion must preserve the BST rule:

left < root < right

============================================================
BST Node
============================================================
*/

class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*
============================================================
Binary Search Tree
============================================================
*/

class BinarySearchTree {
  constructor() {
    // Initially the tree is empty.
    this.root = null;
  }

  insert(value) {
    // Create the node that will be inserted.
    const newNode = new BSTNode(value);

    /*
    Empty tree?

    Make the new node the root.

            50
    */

    if (this.root === null) {
      this.root = newNode; // <- no parentheses
      return this; // ✅
    }

    // Start searching from the root.
    let current = this.root;

    while (true) {
      /*
      Ignore duplicates.

      (Some implementations count duplicates
      differently, but here we simply ignore them.)
      */
      if (value === current.value) return this; // ✅ duplicate

      /*
      Smaller value?

      Go LEFT.
      */
      if (value < current.value) {
        /*
        Empty position?

        Insert here.
        */
        if (current.left === null) {
          current.left = newNode;
          return this; // ✅ inserted
        }

        /*
        Otherwise keep searching.
        */
        current = current.left;
      } else {
        /*
      Greater value?

      Go RIGHT.
      */
        /*
        Empty position?

        Insert here.
        */
        if (current.right === null) {
          current.right = newNode;
          return this; // ✅ inserted
        }

        /*
        Otherwise continue searching.
        */
        current = current.right;
      }
    }
  }
}

/*
============================================================
Visualization
============================================================

Insert 50

Tree is empty.

root

↓

50

--------------------------------

Insert 30

30 < 50

Go left.

Left is empty.

Insert.

        50
       /
     30

--------------------------------

Insert 80

80 > 50

Go right.

        50
       /  \
     30    80

--------------------------------

Insert 20

20 < 50

↓

30

20 < 30

↓

Insert.

        50
       /  \
     30    80
    /
  20

--------------------------------

Insert 40

40 < 50

↓

30

40 > 30

↓

Insert.

        50
       /  \
     30    80
    / \
  20  40

============================================================
How does insert() work?
============================================================

Suppose we insert:

70

Start at root.

        50
       /  \
     30    80

Step 1

70 > 50

Go right.

↓

80

----------------------------

Step 2

70 < 80

Go left.

Left is empty.

Insert.

        50
       /  \
     30    80
          /
        70

Notice:

We NEVER search the entire tree.

At each comparison we eliminate
half of the possible locations.

============================================================
Complexity
============================================================

Balanced BST

Insert

Time  -> O(log n)

Space -> O(1)

----------------------------

Worst Case (Skewed Tree)

50
  \
   80
     \
      90
        \
        100

Insert/Search/Delete

Time -> O(n)

because the tree behaves like
a Linked List.

============================================================
Interview Notes
============================================================

✔ Start from the root.

✔ Compare the value.

✔ Smaller → go left.

✔ Greater → go right.

✔ Repeat until finding an empty position.

✔ The BST property is preserved after every insertion.

============================================================
Small Corrections in Your Code
============================================================

1.

❌ this.root = newNode();

newNode is already an object.

Use:

✅ this.root = newNode;

----------------------------

2.

Returning 'this' allows chaining.

Example:

tree
  .insert(50)
  .insert(30)
  .insert(80);

This is a common JavaScript pattern.
*/
