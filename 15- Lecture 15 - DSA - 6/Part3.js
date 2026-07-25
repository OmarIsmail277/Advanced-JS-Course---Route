// ============================================================
//          Graph Representation in Computer Science
// ============================================================

/*
A graph is just a concept.

The next question is:

"How do we store it in memory?"

The two most common representations are:

1) Adjacency Matrix

2) Adjacency List

============================================================
1) Adjacency Matrix
============================================================

A graph is represented as a 2D array.

Size:

V × V

where

V = number of vertices (nodes)

Each row represents a node.

Each column represents a node.

matrix[i][j]

=

1

means there is an edge between i and j.

=

0

means there is NO edge.

------------------------------------------------------------
Example
------------------------------------------------------------

Graph

A ----- B
|       |
|       |
D ----- C

Matrix

      A B C D

A     0 1 0 1

B     1 0 1 0

C     0 1 0 1

D     1 0 1 0

------------------------------------------------------------
How do we know if A is connected to C?
------------------------------------------------------------

matrix[A][C]

↓

0

Not connected.

----------------------------

matrix[A][B]

↓

1

Connected.

------------------------------------------------------------
JavaScript
------------------------------------------------------------

const matrix = [
  [0, 1, 0, 1],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 1, 0],
];

------------------------------------------------------------
Memory
------------------------------------------------------------

Need

V × V

cells.

Example

10,000 vertices

↓

10,000 × 10,000

=

100,000,000 cells!

Even if only a few edges exist,
all those cells are still allocated.

Space

O(V²)

============================================================
2) Adjacency List
============================================================

Instead of storing EVERY possible connection,

each node stores ONLY its neighbours.

------------------------------------------------------------
Example
------------------------------------------------------------

Graph

A ----- B
|       |
|       |
D ----- C

Adjacency List

A → B, D

B → A, C

C → B, D

D → A, C

------------------------------------------------------------
JavaScript
------------------------------------------------------------

const graph = {
  A: ["B", "D"],
  B: ["A", "C"],
  C: ["B", "D"],
  D: ["A", "C"],
};

Access neighbours

console.log(graph["A"]);

// ["B", "D"]

------------------------------------------------------------
Better JavaScript Implementation
------------------------------------------------------------

Instead of using an object,

we usually prefer

Map

because:

✔ Keys can be any type.

✔ Cleaner API.

✔ Better performance for large collections.

To prevent duplicate neighbours,

use a Set instead of an Array.

Example

const graph = new Map();

graph.set("A", new Set(["B", "D"]));

============================================================
Why is the Adjacency List better?
============================================================

Imagine this graph.

A -------- B


C


D


Only ONE edge exists.

------------------------------------------------------------
Adjacency Matrix
------------------------------------------------------------

Still allocates

V × V

cells.

Most are just zeros.

Waste of memory.

------------------------------------------------------------
Adjacency List
------------------------------------------------------------

Stores only

A → B

B → A

C →

D →

Only existing edges are stored.

Much smaller.

============================================================
Complexity
============================================================

Adjacency Matrix

Space

O(V²)

----------------------------

Check if two nodes are connected

matrix[A][B]

↓

O(1)

Very fast.

----------------------------

Finding all neighbours

Need to scan the entire row.

O(V)

============================================================

Adjacency List

Space

O(V + E)

V

↓

Vertices

E

↓

Edges

Only existing edges are stored.

----------------------------

Getting neighbours

graph["A"]

↓

O(1)

Returns the neighbour collection immediately.

Iterating over neighbours

↓

O(degree)

(degree = number of neighbours)

============================================================
When is Matrix better?
============================================================

Very dense graphs.

Almost every node
is connected to almost every other node.

Example

1000 nodes

Each node connected
to about 950 nodes.

Here,

most matrix cells are already used,
so wasting memory is no longer a big issue.

Also,

checking

matrix[A][B]

is extremely fast.

============================================================
When is List better?
============================================================

Sparse graphs.

Only a few connections exist.

This is the most common case.

Examples

✔ Facebook

✔ Instagram

✔ LinkedIn

✔ Google Maps

✔ Airline Routes

✔ Computer Networks

Most real-world graphs are sparse,
so adjacency lists are preferred.

============================================================
Interview Notes
============================================================

Adjacency Matrix

✔ O(V²) space.

✔ Very fast edge lookup.

✔ Poor memory usage.

----------------------------

Adjacency List

✔ O(V + E) space.

✔ Stores only existing edges.

✔ Easy to traverse neighbours.

✔ Most commonly used in practice.

============================================================
Easy Memory Trick
============================================================

Adjacency Matrix

Think:

Excel Sheet 📋

Every possible relationship
gets a cell.

Even if empty.

----------------------------

Adjacency List

Think:

Contact List 📱

Each person stores
ONLY their actual friends.

Nothing more.

This is why almost every real application
uses an adjacency list instead of a matrix.

// -----------------------

🔍 One correction

This line needs a small correction:

"inserting and finding adjacent nodes is constant time with adj list, while linear time in adj matrix"

A more accurate statement is:

Checking whether an edge exists
    - Adjacency Matrix: O(1) (matrix[i][j])
    - Adjacency List: O(degree of the node) because you may need to search its neighbour list 
    (unless you store neighbours in a Set, where lookup is approximately O(1)).

Listing all neighbours
    Adjacency Matrix: O(V) (scan the whole row).
    Adjacency List: O(degree) (iterate only over actual neighbours).

This distinction is a favorite interview topic because many people accidentally swap these complexities.

*/

/*
============================================================
Adjacency Matrix vs Adjacency List
============================================================

Adjacency List

✔ Stores ONLY existing edges.

Example

A → B, D

B → A

C → D

Only these connections are stored.

------------------------------------------------------------

Adjacency Matrix

Stores EVERY possible connection,

whether an edge exists or not.

Example

      A B C D

A     0 1 0 1
B     1 0 1 0
C     0 1 0 1
D     1 0 1 0

Even the zeros consume memory.

============================================================
Storage
============================================================

Adjacency Matrix

Space

O(V²)

Every possible connection
must be stored.

----------------------------

Adjacency List

Space

O(V + E)

Only vertices and existing edges
are stored.

This is much more memory efficient,
especially for sparse graphs.

============================================================
Edge Lookup
============================================================

Need to know whether:

A ----- B ?

Adjacency Matrix

matrix[A][B]

↓

O(1)

Direct access.

----------------------------

Adjacency List

Need to search A's neighbour list.

Array implementation => graph.A.includes("C");

↓

O(degree) 

If neighbours are stored in a Set => graph.A.has("C");

↓

Average O(1)
Also prevents duplicates automatically.

============================================================
Finding All Neighbours
============================================================

Adjacency Matrix

Need to scan the entire row.

O(V)

----------------------------

Adjacency List

Neighbours are already stored.

Just iterate them.

O(degree)

============================================================
Edge Insertion
============================================================

Adjacency Matrix

matrix[A][B] = 1

↓

O(1)

----------------------------

Adjacency List

graph.get(A).add(B)

↓

Average O(1)

(using Set)

============================================================
Storing Extra Information
============================================================

Suppose roads have distances.

Alex ----220km---- Cairo

Adjacency List

Very easy.

A →

[
  { city: "B", distance: 220 }
]

or

Map + Object

graph.get("Alex").add({
  city: "Cairo",
  distance: 220,
});

----------------------------

Adjacency Matrix

Possible...

but every cell becomes responsible for
storing extra information.

For example

matrix[A][B] = 220

matrix[A][C] = Infinity

matrix[A][D] = null

This becomes much less flexible,
especially if every edge has multiple
properties such as:

✔ distance
✔ cost
✔ speed
✔ airline
✔ road type

Adjacency Lists naturally support
storing rich information alongside
each edge.

============================================================
Interview Summary
============================================================

Adjacency Matrix

✔ O(V²) space
✔ Fastest edge lookup
✔ Best for dense graphs

----------------------------

Adjacency List

✔ O(V + E) space
✔ Stores only existing edges
✔ Easy to traverse neighbours
✔ Easy to attach extra data to edges
✔ Used in almost all real-world applications
*/

/*
Why do books usually say "Adjacency List = O(degree)"?

Because they are talking about the data structure itself, not a specific language implementation.

Conceptually, each vertex stores a list of neighbours. If you only know it's a "list", you may have to scan it.

In JavaScript, if you choose to store neighbours in a Set, edge lookup becomes faster.


Interview rule

If they simply say "Adjacency List", assume:

Space: O(V + E)
Traverse neighbours: O(degree)
Check if an edge exists: O(degree)

Then, if you're asked about a JavaScript implementation with Set, you can mention:

"If I implement each neighbour list as a Set, checking whether an edge exists becomes average O(1), 
while still keeping O(V + E) space."

That's a nice detail that shows deeper understanding.
*/
