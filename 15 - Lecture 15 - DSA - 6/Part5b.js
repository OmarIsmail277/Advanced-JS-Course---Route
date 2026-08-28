/*
============================================================
Optimized Breadth First Search (BFS)
============================================================

The previous implementation used

queue.shift()

Every shift moves all remaining elements
one position to the left.

Time of shift()

O(n)

Instead of removing elements,

we keep them inside the array

and move a pointer called "head".

Exactly the same idea we used
when implementing Queue efficiently.

Array

[A, B, C, D]

head = 0

Process A

head = 1

Process B

head = 2

Notice

The array never changes.

Only the pointer moves.

============================================================
Implementation
============================================================
*/

function bfs(startVertex) {
  if (!this.hasVertex(startVertex)) return [];

  const visited = new Set();
  const queue = [startVertex];
  const result = [];

  // Points to the current vertex to process.
  let head = 0;

  visited.add(startVertex);

  /*
  Continue while there are still
  unprocessed vertices.

  queue.length

  Total discovered vertices.

  head

  Number of processed vertices.

  When

  head === queue.length

  every discovered vertex
  has been processed.
  */
  while (head < queue.length) {
    /*
    Instead of

    queue.shift()

    we simply move the pointer.
    */
    const currentVertex = queue[head++];

    result.push(currentVertex);

    const neighbours = this.adjacencyList.get(currentVertex);

    for (const neighbour of neighbours) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);

        queue.push(neighbour);
      }
    }
  }

  return result;
}

/*
============================================================
Trace
============================================================

Graph

        A
      /   \
     B     C
    / \     \
   D   E     F

Initial

queue

[A]

head = 0

------------------------------------------------------------

Process

queue[0]

↓

A

head = 1

queue

[A, B, C]

------------------------------------------------------------

Process

queue[1]

↓

B

head = 2

queue

[A, B, C, D, E]

------------------------------------------------------------

Process

queue[2]

↓

C

head = 3

queue

[A, B, C, D, E, F]

------------------------------------------------------------

Process

queue[3]

↓

D

head = 4

------------------------------------------------------------

Process

queue[4]

↓

E

head = 5

------------------------------------------------------------

Process

queue[5]

↓

F

head = 6

Now

head === queue.length

6 === 6

Finished.

============================================================
Complexity
============================================================

Time

O(V + E)

Every vertex is visited once.

Every edge is explored once.

Unlike shift(),

no elements are moved in memory.

----------------------------

Space

O(V)

visited

+

queue

============================================================
Interview Notes
============================================================

✔ Same BFS algorithm.

✔ Same time complexity.

✔ Better implementation.

✔ queue.shift() is O(n).

✔ queue[head++] is O(1).

✔ This is the preferred implementation
for BFS in JavaScript interviews.
*/
