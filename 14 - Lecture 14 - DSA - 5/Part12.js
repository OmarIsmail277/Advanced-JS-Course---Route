// ============================================================
//          Depth-First Search (DFS) Traversals
// ============================================================

/*
Unlike BFS,

DFS goes as DEEP as possible into one branch
before coming back.

It uses:

Recursion

(or an explicit Stack)

Think of it as:

"I'll finish this path first,
then come back."

Example Tree

            50
          /    \
        30      80
       /  \    /  \
     20   40  70   90

============================================================
1) Preorder
============================================================

Order:

Root

↓

Left

↓

Right

Mnemonic:

"Parent first."

Traversal:

50

↓

30

↓

20

↓

40

↓

80

↓

70

↓

90

Result:

[50, 30, 20, 40, 80, 70, 90]
*/

function preOrder(node, results = []) {
  if (!node) return results;

  // Visit the current node first.
  results.push(node.value);

  // Traverse the left subtree.
  preOrder(node.left, results);

  // Traverse the right subtree.
  preOrder(node.right, results);

  return results;
}

/*
Tracing

preOrder(50)

Visit 50

↓

Go left

Visit 30

↓

Go left

Visit 20

↓

No children

Go back

↓

Visit 40

↓

Go back

↓

Visit 80

↓

Visit 70

↓

Visit 90

============================================================
When is Preorder useful?
============================================================

✔ Copying a tree.

✔ Saving the tree structure.

✔ Folder structures.

You visit the parent BEFORE its children.

============================================================
2) Inorder
============================================================

Order:

Left

↓

Root

↓

Right

Mnemonic:

"Middle comes in the middle."

Traversal

20

↓

30

↓

40

↓

50

↓

70

↓

80

↓

90

Result:

[20, 30, 40, 50, 70, 80, 90]
*/

function inOrder(node, results = []) {
  if (!node) return results;

  // Left subtree first.
  inOrder(node.left, results);

  // Then visit the current node.
  results.push(node.value);

  // Finally the right subtree.
  inOrder(node.right, results);

  return results;
}

/*
Tracing

Start at 50

↓

Go left until possible

↓

20

Visit 20

↓

Back to 30

Visit 30

↓

Visit 40

↓

Back to 50

Visit 50

↓

Go to right subtree

70

80

90

============================================================
Special Property
============================================================

For a Binary Search Tree (BST),

Inorder traversal ALWAYS returns
the values in ascending order.

Example:

            50
          /    \
        30      80
       /  \    /  \
     20   40  70   90

Output:

[20,30,40,50,70,80,90]

============================================================
3) Postorder
============================================================

Order:

Left

↓

Right

↓

Root

Mnemonic:

"Children before parent."

Traversal

20

↓

40

↓

30

↓

70

↓

90

↓

80

↓

50

Result:

[20,40,30,70,90,80,50]
*/

function postOrder(node, results = []) {
  if (!node) return results;

  postOrder(node.left, results);

  postOrder(node.right, results);

  // Visit the parent LAST.
  results.push(node.value);

  return results;
}

/*
Tracing

Go all the way left

↓

20

Visit

↓

40

Visit

↓

30

Visit

↓

70

↓

90

↓

80

↓

Finally visit 50

============================================================
When is Postorder useful?
============================================================

✔ Deleting a tree.

✔ Deleting folders.

✔ Freeing memory.

Children must be processed
before removing the parent.

Example

Folder

Projects
│
├── Images
├── Videos

Wrong

Delete Projects first ❌

Correct

Delete Images

↓

Delete Videos

↓

Delete Projects ✔

============================================================
Complexity
============================================================

Time

O(n)

Every node is visited exactly once.

----------------------------

Space

O(h)

h = tree height.

Balanced Tree

O(log n)

Worst Case (Skewed Tree)

O(n)

because recursion uses the call stack.

Very deep trees may cause:

Maximum Call Stack Size Exceeded.

============================================================
Interview Notes
============================================================

Preorder

Root → Left → Right

Parent before children.

----------------------------

Inorder

Left → Root → Right

BST → returns sorted values.

----------------------------

Postorder

Left → Right → Root

Children before parent.

Useful for deleting trees/folders.
*/

/*
🧠 Easy memory trick

Imagine you're visiting a company:

Preorder → 👋 Say hello to the manager first, then visit the teams.
Inorder → 👈 Visit the left team, greet the manager, then the right team.
Postorder → 👥 Finish with all employees first, then finally meet the manager before leaving.

So remember:

Pre = Parent first
In = Parent in the middle
Post = Parent last
*/
