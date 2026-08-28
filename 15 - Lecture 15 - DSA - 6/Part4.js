// ============================================================
//                 Graph Implementation
// ============================================================

/*
We will implement an UNDIRECTED graph.

Storage:

Adjacency List

Every vertex stores ONLY its neighbours.

Example

        A
       / \
      B---C

Adjacency List

A -> {B, C}
B -> {A, C}
C -> {A, B}

Notice we use a Set instead of an Array.

Why Set?

✔ No duplicate edges.

✔ has()

Average O(1)

✔ delete()

Average O(1)

✔ add()

Average O(1)

Why Map instead of Object?

✔ Keys can be any data type.

✔ Cleaner API:
   get()
   set()
   has()
   delete()

✔ Doesn't inherit Object.prototype.

✔ Preferred for dynamic collections.
*/

class Graph {
  constructor() {
    /*
    Initially

    Map(0) {}

    After

    addVertex("A")

    Map(1) {
      "A" => Set()
    }
    */

    this.adjacencyList = new Map();
  }

  /*
  ============================================================
  Add Vertex
  ============================================================

  Creates an empty neighbour list.

  Before

  Map(0) {}

  addVertex("A")

  After

  Map(1) {
    "A" => Set()
  }
  */
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, new Set());
    }
  }

  /*
  ============================================================
  Add Edge
  ============================================================

  Connects two vertices.

  Undirected graph means BOTH vertices
  know each other.

  A -------- B

  becomes

  A -> B

  B -> A
  */
  addEdge(vertex1, vertex2) {
    // Create the vertices if they don't exist.
    if (!this.hasVertex(vertex1)) this.addVertex(vertex1);
    if (!this.hasVertex(vertex2)) this.addVertex(vertex2);

    this.adjacencyList.get(vertex1).add(vertex2);
    this.adjacencyList.get(vertex2).add(vertex1);
  }

  /*
  ============================================================
  Print Graph
  ============================================================

  Converts every Set into an Array
  only for printing.

  Example

  A -> B, C

  B -> A, C

  C -> A, B
  */
  print() {
    for (const [vertex, neighbours] of this.adjacencyList) {
      console.log(`${vertex} -> ${[...neighbours].join(", ")}`);
    }
  }

  /*
  ============================================================
  Check Vertex
  ============================================================

  Returns true if the vertex exists.

  Example

  hasVertex("A")

  -> true

  hasVertex("X")

  -> false
  */
  hasVertex(vertex) {
    return this.adjacencyList.has(vertex);
  }

  /*
  ============================================================
  Check Edge
  ============================================================

  Does

  A -------- B

  exist?

  Since this is an UNDIRECTED graph,

  A must know B

  AND

  B must know A.

  Set.has()

  Average O(1)
  */
  hasEdge(vertex1, vertex2) {
    return (
      this.hasVertex(vertex1) &&
      this.hasVertex(vertex2) &&
      this.adjacencyList.get(vertex1).has(vertex2) &&
      this.adjacencyList.get(vertex2).has(vertex1)
    );
  }

  /*
  ============================================================
  Get Neighbours
  ============================================================

  Returns all neighbours
  of a given vertex.

  Example

  A -> B, C

  getNeighbours("A")

  -> ["B", "C"]
  */
  getNeighbours(vertex) {
    if (!this.hasVertex(vertex)) return [];

    return [...this.adjacencyList.get(vertex)];
  }

  /*
  ============================================================
  Remove Edge
  ============================================================

  Before

  A -> B

  B -> A

  After

  A

  B

  Only the connection is removed.
  The vertices still exist.
  */
  removeEdge(vertex1, vertex2) {
    if (!this.hasVertex(vertex1)) return false;
    if (!this.hasVertex(vertex2)) return false;

    this.adjacencyList.get(vertex1).delete(vertex2);
    this.adjacencyList.get(vertex2).delete(vertex1);

    return true;
  }

  /*
  ============================================================
  Remove Vertex
  ============================================================

  Example

        A
       / \
      B---C

  removeVertex("B")

  First remove

  A -> B

  B -> A

  B -> C

  C -> B

  Then delete B itself.

  Final graph

      A

      |
      C

  Why loop?

  Because every neighbour still has
  a connection pointing to B.

  We must clean all those connections
  before deleting B.

  Time

  O(degree)

  because we visit only B's neighbours,
  not the whole graph.
  */
  removeVertex(vertex) {
    if (!this.hasVertex(vertex)) return;

    // Iterate over a copy to avoid modifying
    // the Set while looping over it.
    const neighbours = [...this.adjacencyList.get(vertex)];

    for (const neighbour of neighbours) {
      this.removeEdge(vertex, neighbour);
    }

    this.adjacencyList.delete(vertex);
  }
}

/*
============================================================
Usage
============================================================
*/

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.print();

console.log(graph.hasVertex("A")); // true
console.log(graph.hasEdge("A", "B")); // true
console.log(graph.getNeighbours("B")); // ["A", "C"]

/*
Result

A -> B

B -> A, C

C -> B

============================================================
Complexity
============================================================

addVertex()

Average O(1)

----------------------------

addEdge()

Average O(1)

(two Set.add() operations)

----------------------------

hasVertex()

Average O(1)

----------------------------

hasEdge()

Average O(1)

(two Set.has() operations)

----------------------------

getNeighbours()

O(degree)

Returns all neighbours
of the given vertex.

----------------------------

removeEdge()

Average O(1)

(two Set.delete() operations)

----------------------------

removeVertex()

O(degree)

Visits only the neighbours
of that vertex.

----------------------------

print()

O(V + E)

Every vertex is visited once,
and every edge is traversed once.

============================================================
Interview Notes
============================================================

✔ Adjacency List is the standard graph representation.

✔ Map is preferred over Object for dynamic collections.

✔ Set is preferred over Array because:

- Prevents duplicate edges.
- Fast lookup.
- Fast insertion.
- Fast deletion.

✔ Removing a vertex is slower because
all neighbouring edges must be removed first.
*/
