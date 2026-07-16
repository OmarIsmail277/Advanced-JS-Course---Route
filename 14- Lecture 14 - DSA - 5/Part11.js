// ============================================================
//           BFS by Level (Level Order Traversal)
// ============================================================

/*
A common interview question is:

Instead of returning:

[50, 30, 80, 20, 40, 70, 90]

Return each level separately.

Expected output:

[
  [50],
  [30, 80],
  [20, 40, 70, 90]
]

============================================================
Idea
============================================================

We still use BFS.

The only difference is:

Instead of storing all nodes in one array,

we collect the nodes of EACH LEVEL
into a separate array.

============================================================
Example
============================================================

            50
          /    \
        30      80
       /  \    /  \
     20   40  70   90

Output:

[
  [50],
  [30, 80],
  [20, 40, 70, 90]
]

============================================================
Code
============================================================
*/

function levelOrder(root) {
  if (!root) return [];

  const queue = [root];
  const levels = [];

  // Front pointer (avoids using shift()).
  let head = 0;

  while (head < queue.length) {
    /*
    How many nodes belong to the CURRENT level?

    queue.length = all discovered nodes.

    head = already processed nodes.

    Their difference equals the number of nodes
    remaining in the current level.

    Example:

    Queue:

    [50]

    head = 0

    levelSize = 1

    ------------------------

    After processing 50:

    Queue:

    [50,30,80]

    head = 1

    levelSize = 3 - 1 = 2

    (30 and 80)

    ------------------------

    After processing them:

    Queue:

    [50,30,80,20,40,70,90]

    head = 3

    levelSize = 7 - 3 = 4

    (20,40,70,90)
    */
    const levelSize = queue.length - head;

    // Stores nodes of one level only.
    const currentLevel = [];

    // Process exactly one level.
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue[head++];

      currentLevel.push(currentNode.value);

      // Discover children for the NEXT level.
      if (currentNode.left) queue.push(currentNode.left);

      if (currentNode.right) queue.push(currentNode.right);
    }

    // Save this completed level.
    levels.push(currentLevel);
  }

  return levels;
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

Levels

[]

--------------------------------

Level 1

levelSize = 1

Process:

50

Queue becomes

[50,30,80]

Current Level

[50]

Levels

[
  [50]
]

--------------------------------

Level 2

head = 1

levelSize = 3 - 1 = 2

Process:

30

80

Queue becomes

[50,30,80,20,40,70,90]

Current Level

[30,80]

Levels

[
  [50],
  [30,80]
]

--------------------------------

Level 3

head = 3

levelSize = 7 - 3 = 4

Process:

20

40

70

90

Current Level

[20,40,70,90]

Levels

[
  [50],
  [30,80],
  [20,40,70,90]
]

Done.

============================================================
Complexity
============================================================

Time

O(n)

Each node is visited exactly once.

----------------------------

Space

O(n)

The queue and the output array
may together store up to all nodes.

============================================================
Interview Notes
============================================================

✔ This is called Level Order Traversal.

✔ It is simply BFS with one extra idea:
   process one level at a time.

✔ The key trick is:

levelSize = queue.length - head

which tells us how many nodes belong
to the current level.

✔ Nodes discovered during the loop
are NOT processed immediately;
they belong to the next level.
*/
