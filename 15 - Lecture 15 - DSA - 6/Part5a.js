/*
============================================================
Breadth First Search (BFS)
============================================================

BFS visits the graph LEVEL BY LEVEL.

It starts from one vertex,FD
   D   E     F

Start from A

Traversal

A

↓

B C

↓

D E F

Result

A B C D E F

Notice that BFS explores
the graph horizontally,
one level at a time.

============================================================
Implementation
============================================================
*/

function bfs(startVertex) {
  // The starting vertex doesn't exist.
  if (!this.hasVertex(startVertex)) return [];

  /*
  visited

  Prevents visiting the same vertex twice.

  Without it,

  A ----- B

  would keep visiting each other forever.
  */
  const visited = new Set();

  /*
  Queue (FIFO)

  Stores the vertices waiting
  to be processed.

  The first vertex inserted
  leaves first.
  */
  const queue = [startVertex];

  /*
  Stores the traversal order.

  Example

  ["A", "B", "C", ...]
  */
  const result = [];

  // Mark the starting vertex as visited.
  visited.add(startVertex);

  /*
  Continue until the queue becomes empty.
  */
  while (queue.length > 0) {
    /*
    Remove the first vertex
    from the queue.

    FIFO

    queue

    A B C

    ↓

    process A

    queue

    B C
    */
    const currentVertex = queue.shift();

    // Visit it.
    result.push(currentVertex);

    /*
    Get all neighbours.

    Example

    A

    neighbours

    B
    C
    */
    const neighbours = this.adjacencyList.get(currentVertex);

    /*
    Explore every neighbour.
    */
    for (const neighbour of neighbours) {
      /*
      Ignore vertices we've already visited.

      This prevents infinite loops
      in cyclic graphs.
      */
      if (!visited.has(neighbour)) {
        // Mark as visited immediately.
        visited.add(neighbour);

        /*
        Add to the queue.

        It will be processed later,
        after the older vertices.
        */
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

Start

queue

[A]

visited

{A}

result

[]

------------------------------------------------------------

Visit A

queue

[B, C]

visited

{A, B, C}

result

[A]

------------------------------------------------------------

Visit B

queue

[C, D, E]

visited

{A, B, C, D, E}

result

[A, B]

------------------------------------------------------------

Visit C

queue

[D, E, F]

visited

{A, B, C, D, E, F}

result

[A, B, C]

------------------------------------------------------------

Visit D

queue

[E, F]

result

[A, B, C, D]

------------------------------------------------------------

Visit E

queue

[F]

result

[A, B, C, D, E]

------------------------------------------------------------

Visit F

queue

[]

result

[A, B, C, D, E, F]

Finished.

============================================================
Complexity
============================================================

Time

O(V + E)

V

↓

Every vertex is visited once.

E

↓

Every edge is explored once.

----------------------------

Space

O(V)

visited

+

queue

may each store up to V vertices.

============================================================
Interview Notes
============================================================

✔ Uses a Queue (FIFO).

✔ Explores the graph level by level.

✔ Always keep a visited Set,
otherwise cyclic graphs
may cause infinite loops.

✔ Very useful for:

- Shortest path in an unweighted graph.
- Level-order traversal.
- Finding connected components.
- Web crawlers.
- Social network recommendations.
*/
