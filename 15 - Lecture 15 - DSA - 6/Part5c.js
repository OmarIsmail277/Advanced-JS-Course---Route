// ============================================================
//                 Graph DFS (Depth First Search)
// ============================================================

/*
============================================================
1. Introduction
============================================================

DFS = Depth First Search.

Unlike BFS, which explores the graph level by level,

DFS keeps moving as DEEP as possible into one path.

When it reaches a dead end,

⬅️ it BACKTRACKS

to the previous vertex,

then explores another unvisited path.

------------------------------------------------------------

Maze Analogy 🏃

Imagine you're inside a maze.

You keep walking through one corridor.

If you reach a dead end,

⬅️ Go back to the previous intersection.

Choose another unexplored corridor.

Repeat until

✔ You find the destination.

or

✔ Every possible path has been explored.

By exploring every possible path,

DFS can determine whether a path exists
between a source vertex and a destination vertex.

------------------------------------------------------------

Example

            A
          /   \
         B     C
        / \     \
       D   E     F

DFS from A

Visit

A

↓

B

↓

D

Dead End

⬅️ Backtrack to B

↓

E

Dead End

⬅️ Backtrack to B

⬅️ Backtrack to A

↓

C

↓

F

Traversal

A → B → D → E → C → F

Notice

DFS completely finishes one branch
before moving to another.

------------------------------------------------------------

Why do we need a visited Set?

Graphs may contain cycles.

Example

        A
      /   \
     B-----C

Without visited:

A → B → C → A → B → C ...

Infinite loop.

The visited Set guarantees
every vertex is processed only once.

------------------------------------------------------------

Complexity

Time

O(V + E)

Why?

✔ Every vertex is visited exactly once.

✔ Every adjacency list is scanned once.

In an undirected graph,

every edge appears twice.

Example

A ----- B

Adjacency List

A -> B

B -> A

The edge (A-B) is examined

✔ Once while processing A.

✔ Once while processing B.

Total neighbour checks

2E

Big-O ignores constants

O(V + 2E)

↓

O(V + E)

----------------------------

Space

O(V)

because of

✔ visited Set

✔ Call Stack (Recursive)

or

✔ Explicit Stack (Iterative)

------------------------------------------------------------

BFS vs DFS

BFS

Queue (FIFO)

Visits vertices level by level.

DFS

Stack (LIFO)

Goes as deep as possible,
then backtracks.

============================================================
2. Recursive DFS
============================================================

Idea

We do NOT create a Stack ourselves.

JavaScript's Call Stack becomes our Stack.

Every recursive function call is pushed
onto the Call Stack.

When the function finishes,

it is automatically popped.

------------------------------------------------------------

Call Stack Visualization

dfs(A)

Call Stack

A

↓

dfs(B)

Call Stack

B
A

↓

dfs(D)

Call Stack

D
B
A

D finishes.

Return.

Call Stack

B
A

↓

dfs(E)

Call Stack

E
B
A

Return.

Call Stack

B
A

↓

Return.

Call Stack

A

↓

dfs(C)

↓

dfs(F)

Eventually

Call Stack

(empty)

------------------------------------------------------------

Recursive Algorithm

1. Visit the current vertex.

2. Mark it as visited.

3. Save it into the result.

4. Recursively visit every unvisited neighbour.

------------------------------------------------------------

Advantages

✔ Very clean.

✔ Easy to write.

✔ Easy to understand.

Disadvantage

Very deep graphs may throw

Maximum call stack size exceeded.

============================================================
3. Iterative DFS
============================================================

Idea

Instead of using JavaScript's Call Stack,

we create our own Stack.

Same algorithm.

Different Stack.

------------------------------------------------------------

Visualization

            A
          /   \
         B     C
        / \     \
       D   E     F

Stack

[A]

↓

Pop A

Visit A

Push C

Push B

Stack

[C, B]

↓

Pop B

Visit B

Push E

Push D

Stack

[C, E, D]

↓

Pop D

Dead End

↓

Pop E

Dead End

↓

Pop C

↓

Pop F

Done.

Notice

The LAST vertex pushed

is the FIRST one processed.

Exactly how Stack works.

LIFO

------------------------------------------------------------

Why push neighbours in reverse order?

Suppose

A -> B, C

Recursive DFS visits

A

↓

B

↓

C

If we push

B

then

C

Stack

[B, C]

Pop()

↓

C

which changes the traversal order.

Instead we push

C

then

B

Stack

[C, B]

Pop()

↓

B

Now the iterative traversal
matches the recursive traversal.

------------------------------------------------------------

Iterative Algorithm

1. Push the start vertex.

2. Mark it as visited.

3. While the Stack is not empty

   - Pop one vertex.

   - Visit it.

   - Push every unvisited neighbour.

============================================================
4. Recursive vs Iterative
============================================================

Recursive

✔ Uses JavaScript's Call Stack.

✔ Cleaner code.

✔ Easier to understand.

❌ May overflow for very deep graphs.

----------------------------

Iterative

✔ Uses an explicit Stack.

✔ No recursion depth limit.

✔ Preferred for very large graphs.

============================================================
5. Common Interview Questions
============================================================

✔ Check if a path exists.

✔ Count connected components.

✔ Detect cycles.

✔ Topological Sort (DAG).

✔ Maze solving.

✔ File & Folder traversal.

✔ Backtracking problems.

- Sudoku

- N Queens

- Word Search

- Rat in a Maze

============================================================
Summary
============================================================

DFS explores one path as deeply as possible.

When it reaches a dead end,

it BACKTRACKS

until it finds another unexplored path.

Recursive DFS

↓

Call Stack

Iterative DFS

↓

Explicit Stack

Both have

Time

O(V + E)

Space

O(V)
*/

function dfsRecursive(startVertex) {
  if (!this.hasVertex(startVertex)) return [];

  const visited = new Set();
  const result = [];

  const dfs = (vertex) => {
    visited.add(vertex);
    result.push(vertex);

    for (const neighbour of this.adjacencyList.get(vertex)) {
      if (!visited.has(neighbour)) {
        dfs(neighbour);
      }
    }
  };

  dfs(startVertex);

  return result;
}

function dfsIterative(startVertex) {
  if (!this.hasVertex(startVertex)) return [];

  const visited = new Set();
  const stack = [startVertex];
  const result = [];

  visited.add(startVertex);

  while (stack.length > 0) {
    const currentVertex = stack.pop();

    result.push(currentVertex);

    // Reverse to match recursive DFS order.
    const neighbours = [...this.adjacencyList.get(currentVertex)];

    for (let i = neighbours.length - 1; i >= 0; i--) {
      const neighbour = neighbours[i];

      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        stack.push(neighbour);
      }
    }
  }

  return result;
}
