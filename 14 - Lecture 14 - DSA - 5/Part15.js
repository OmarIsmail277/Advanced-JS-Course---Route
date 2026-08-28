// ============================================================
//          Common Tree Interview Questions
// ============================================================

/*
These questions are very common because they test
your understanding of recursion on trees.

Notice the pattern:

1. Handle the base case.
2. Solve the left subtree.
3. Solve the right subtree.
4. Combine the answers.

============================================================
1) Count Nodes
============================================================
*/

function countNodes(root) {
  // Empty tree contributes 0 nodes.
  if (!root) return 0;

  /*
  Count:

  1 -> current node

  +

  nodes in left subtree

  +

  nodes in right subtree
  */
  return 1 + countNodes(root.left) + countNodes(root.right);
}

/*
Example

            50
          /    \
        30      80
       /  \    /  \
     20   40  70   90

Tracing

countNodes(50)

=

1

+

countNodes(30)

+

countNodes(80)

----------------------------

countNodes(30)

=

1

+

countNodes(20)

+

countNodes(40)

=

1 + 1 + 1

=

3

----------------------------

countNodes(80)

=

1

+

countNodes(70)

+

countNodes(90)

=

3

----------------------------

Final

1 + 3 + 3

=

7 nodes

============================================================
Complexity
============================================================

Time

O(n)

Space

O(h)
*/

/*
============================================================
2) Sum of Tree Values
============================================================
*/

function sumTree(root) {
  // Empty subtree contributes 0.
  if (!root) return 0;

  /*
  Sum:

  current value

  +

  left subtree

  +

  right subtree
  */
  return root.value + sumTree(root.left) + sumTree(root.right);
}

/*
Example

            5
          /   \
         3     8
        / \   / \
       2  4  7  9

sumTree(5)

=

5

+

sumTree(3)

+

sumTree(8)

=

5

+

9

+

24

=

38

============================================================
Complexity
============================================================

Time

O(n)

Space

O(h)
*/

/*
============================================================
3) Search for a Value
============================================================
*/

function treeIncludes(root, target) {
  // Empty tree.
  if (!root) return false;

  // Found it.
  if (root.value === target) return true;

  /*
  Search left.

  If not found,

  search right.
  */
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
}

/*
Example

Search for 70

            50
          /    \
        30      80
       /  \    /  \
     20   40  70   90

treeIncludes(50)

↓

Not found

↓

Search left

↓

30

↓

Not found

↓

20

↓

Not found

↓

40

↓

Not found

↓

Back to 50

↓

Search right

↓

80

↓

Not found

↓

70

↓

Found!

Return true.

Notice:

The OR operator immediately stops
once one recursive call returns true.

============================================================
Complexity
============================================================

Time

Worst Case

O(n)

Space

O(h)

============================================================
Common Recursion Pattern
============================================================

Almost every recursive tree problem follows:

if (!root)
    return baseValue;

Solve left subtree.

Solve right subtree.

Combine both answers.

============================================================
Interview Notes
============================================================

✔ countNodes()

Base case -> 0

Current node contributes 1.

----------------------------

✔ sumTree()

Base case -> 0

Current node contributes its value.

----------------------------

✔ treeIncludes()

Base case -> false

Return true as soon as the target is found.

----------------------------

Time

O(n)

because every node may be visited once.

Space

O(h)

because recursion uses the call stack,
where h is the tree height.
*/
