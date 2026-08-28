// ============================================================
//                     Graph 🌐
// ============================================================

/*
A Graph is a non-linear data structure.

It consists of:

✔ Vertices (Nodes)
✔ Edges (Connections)

Unlike arrays or linked lists,
a graph represents RELATIONSHIPS
between objects.

============================================================
Tree vs Graph
============================================================

A Tree is actually a SPECIAL type of Graph.

Every Tree is a Graph.

BUT...

Not every Graph is a Tree.

Why?

Because graphs may contain:

✔ Cycles
✔ Multiple paths
✔ Disconnected components

Trees cannot.

============================================================
Example
============================================================

Vertices

Ahmed
Sara
Ali
Mona

Relationships

Ahmed ----- Sara

Ahmed ----- Ali

Sara ------ Mona

Ali ------- Mona

Visualization

        Ahmed
       /     \
    Sara     Ali
      \      /
       \    /
        Mona

============================================================
Types of Graphs
============================================================

1) Undirected Graph

Connection works both ways.

A -------- B

Example

Facebook Friends

If Ahmed is Sara's friend,

Sara is Ahmed's friend.

============================================================

2) Directed Graph

Connection has one direction.

A -------> B

Example

Instagram

Ahmed follows Sara.

Sara doesn't have to follow Ahmed.

============================================================

3) Weighted Graph

Each edge has a cost or weight.

Alexandria ----220 km----> Cairo

The weight may represent:

✔ Distance
✔ Time
✔ Cost
✔ Price

============================================================

4) Unweighted Graph

Edges have no cost.

Alexandria -------- Cairo

Only the connection matters.

============================================================

5) Cyclic Graph

A path eventually returns
to the starting node.

Example

A ----- B
|       |
|       |
D ----- C

You can start at A and
eventually come back to A.

============================================================

6) Acyclic Graph

No cycles exist.

A ---- B ---- C
       |
       |
       D

You can never return
to your starting node.

============================================================

7) Connected Graph

Every node can be reached
from every other node.

A ---- B ---- C
       |
       D

============================================================

8) Disconnected Graph

Some nodes cannot be reached.

A ---- B


C ---- D

The graph has more than
one separate component.


============================================================
Real-World Applications
============================================================

Google Maps

Vertices

↓

Cities

Edges

↓

Roads

Weight

↓

Distance / Time

--------------------------------

Social Media

Vertices

↓

Users

Edges

↓

Friendships

Followers

Connections

Used for:

✔ Friend suggestions
✔ Mutual friends
✔ Recommended posts
✔ Network analysis

--------------------------------

Computer Networks

Vertices

↓

Computers / Routers

Edges

↓

Network cables / Wireless links

--------------------------------

Airline Routes

Vertices

↓

Airports

Edges

↓

Flights

============================================================
Important Idea
============================================================

Graphs are used whenever the MAIN THING
is the relationship between data.

Examples

Hierarchy

↓

Tree 🌳

----------------------------

Connections

↓

Graph 🌐

============================================================
Next Step
============================================================

Knowing what a graph is
is only the beginning.

The next question is:

"How can we represent a graph in code?"

The two most common representations are:

✔ Adjacency List (most common)

✔ Adjacency Matrix

These are usually the next topic when studying graphs.
*/

// ============================================================
// Special Cases
// ============================================================

/*
1) Graph with No Edges

A graph does NOT have to contain edges.

It may consist of:

• A single node

A

or

• Multiple isolated nodes

A     B     C

No node is connected to another.

This is still considered a valid graph.

------------------------------------------------------------

2) Self Loop

A self loop is an edge that starts
and ends at the SAME node.

Example (single node)

     ┌───┐
     │ A │
     └─┬─┘
       │
       └──►

A graph may also contain many nodes,
where only one node has a self loop.

Example

A ------ B
         |
         |
         ▼
         B

or

A ------ B
         |
         ▼
         C
         ↺

The self loop affects only that node;
the graph may still have many other
nodes and edges.
*/
