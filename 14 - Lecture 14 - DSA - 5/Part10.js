// ============================================================
//        Breadth-First Search (BFS) - Tree Traversal
// ============================================================

/*
A Tree does NOT have a fixed order like an array.

To visit every node, we need a traversal algorithm.

One of the most common traversals is:

Breadth-First Search (BFS)

Also called:

Level Order Traversal.

============================================================
Main Idea
============================================================

Visit the tree LEVEL BY LEVEL.

Finish one level completely before
moving to the next.

Example:

            50
          /    \
        30      80
       /  \    /  \
     20   40  70   90

Traversal:

50

↓

30 80

↓

20 40 70 90

Result:

[50, 30, 80, 20, 40, 70, 90]

============================================================
Why is a Queue used?
============================================================

BFS follows FIFO.

First In

↓

First Out

The first node discovered should be
the first one processed.

This is exactly how a Queue behaves.

Think of people waiting in line.

The first person to arrive

↓

gets served first.

============================================================
Code
============================================================
*/

function breadthFirstSearch(root) {
  if (!root) return [];

  // Queue starts with the root.
  const queue = [root];

  // Stores traversal order.
  const result = [];

  while (queue.length > 0) {
    // Remove the first node.
    const currentNode = queue.shift();

    // Visit it.
    result.push(currentNode.value);

    // Add its children to the queue.
    if (currentNode.left) queue.push(currentNode.left);

    if (currentNode.right) queue.push(currentNode.right);
  }

  return result;
}

/*
============================================================
Visualization
============================================================

            50
          /    \
        30      80
       /  \    /  \
     20   40  70   90

--------------------------------

Start

Queue

[50]

Result

[]

--------------------------------

Visit 50

Queue

[]

Add children

30

80

Queue

[30, 80]

Result

[50]

--------------------------------

Visit 30

Queue

[80]

Add

20

40

Queue

[80, 20, 40]

Result

[50, 30]

--------------------------------

Visit 80

Queue

[20, 40]

Add

70

90

Queue

[20, 40, 70, 90]

Result

[50, 30, 80]

--------------------------------

Visit 20

Queue

[40, 70, 90]

Result

[50, 30, 80, 20]

...

Continue until the queue becomes empty.

Final result:

[50, 30, 80, 20, 40, 70, 90]

============================================================
Problem with shift()
============================================================

queue.shift()

works...

but it's expensive.

Why?

Because every remaining element
must be shifted one position left.

Time:

O(n)

============================================================
Optimized BFS
============================================================

Instead of removing elements,

keep them inside the array
and move a pointer.

*/

function optimizedBreadthFirstSearch(root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  // Points to the current front of the queue.
  let head = 0;

  /*
  Continue while there are still
  unprocessed nodes.

  head = processed nodes

  queue.length = total nodes stored
  */
  while (head < queue.length) {
    // Read the current node.
    const currentNode = queue[head++];

    result.push(currentNode.value);

    if (currentNode.left) queue.push(currentNode.left);

    if (currentNode.right) queue.push(currentNode.right);
  }

  return result;
}

/*
============================================================
Visualization of the Optimized Queue
============================================================

Queue

[50]

head = 0

Read:

queue[0]

head++

↓

Queue

[50,30,80]

head = 1

Read:

queue[1]

head++

↓

Queue

[50,30,80,20,40]

head = 2

Notice:

Nothing is removed.

Nothing shifts.

The head pointer simply moves forward.

This is much more efficient than shift().

============================================================
Complexity
============================================================

Time

O(n)

Every node is visited exactly once.

----------------------------

Space

O(n)

The queue may contain an entire level
of the tree.

============================================================
Interview Notes
============================================================

✔ BFS = Breadth-First Search.

✔ Also called Level Order Traversal.

✔ Visits nodes level by level.

✔ Uses a Queue (FIFO).

✔ Every node is visited exactly once.

✔ Avoid using shift() for large datasets.

✔ A head pointer (or a custom Queue implementation)
is a better approach because it avoids repeatedly
shifting array elements.

*/
