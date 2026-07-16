// ============================================================
//                  Searching in a General Tree
// ============================================================

/*
Unlike arrays,

Trees do NOT have indexes.

So we cannot directly access a node like:

tree[5] ❌

Instead, we must traverse the tree until
we find the node we are looking for.

============================================================
Code
============================================================
*/

function findNode(root, target) {
  // Empty tree (or reached beyond a leaf).
  if (!root) return null;

  // Found the target.
  if (root.value === target) return root;

  // Search recursively inside each child.
  for (const child of root.children) {
    const foundNode = findNode(child, target);

    // Stop immediately if found.
    if (foundNode) return foundNode;
  }

  // Target doesn't exist in this subtree.
  return null;
}

const res = findNode(company, "FE");

/*
============================================================
Visualization
============================================================

Search for "FE"

                CEO
              /     \
           CTO      HR Manager
          /   \
        FE    BE

------------------------------------------------

Step 1

CEO

Is CEO == FE ?

No.

Search its children.

------------------------------------------------

Step 2

CTO

Is CTO == FE ?

No.

Search its children.

------------------------------------------------

Step 3

FE

Is FE == FE ?

YES ✅

Return FE.

The recursion immediately stops.

============================================================
What if we search for "Payroll"?
============================================================

CEO
↓

CTO
↓

FE
↓

Back

↓

BE
↓

Back

↓

HR Manager
↓

Recruitment
↓

Back

↓

Payroll ✅

Notice:

We visit nodes one by one until we find
the target.

============================================================
What traversal is this?
============================================================

This is Depth-First Search (DFS).

We completely explore one branch before
moving to the next.

CEO
↓

CTO
↓

FE

(back)

↓

BE

(back)

↓

HR Manager

...

============================================================
Complexity
============================================================

Time Complexity

Worst Case:

O(n)

Why?

In the worst case, the target is:

• the last node
or
• not in the tree at all.

So we may visit every node once.

❌ It is NOT O(log n).

O(log n) applies to balanced structures like
Binary Search Trees, not a general tree.

------------------------------------------------------------

Space Complexity

O(h)

where h = height of the tree.

Why?

Because recursion stores function calls
on the call stack.

The deepest the recursion can go
is the height of the tree.

Worst case:

If the tree looks like a linked list,

A
|
B
|
C
|
D

Height = n

Space = O(n)

------------------------------------------------------------

Best case (balanced tree):

Height ≈ log n

Space = O(log n)

============================================================
Interview Notes
============================================================

✔ This is a recursive DFS.

✔ Time = O(n).

✔ Space = O(h), where h is the tree height.

✔ General Trees cannot guarantee O(log n)
for searching because they have no ordering
like Binary Search Trees.
*/
