// ============================================================
//                         TREE 🌳
// ============================================================

/*
A Tree is a NON-LINEAR data structure.

Unlike arrays or linked lists where elements are arranged
one after another,

a Tree organizes data hierarchically (parent → child).

A Tree is made of:

✔ Nodes -> the actual data.
✔ Edges -> the connections between nodes.

============================================================
Example
============================================================

                CEO
              /     \
           CTO      HR Manager
          /   \      /       \
        FE    BE  Payroll  Recruitment

Nodes:
CEO, CTO, HR Manager, FE, BE...

Edges:
CEO → CTO
CEO → HR Manager
CTO → FE
...

============================================================
Why do we need Trees?
============================================================

Many real-world structures are hierarchical.

Examples:

✔ Folder systems
✔ HTML DOM
✔ Company hierarchy
✔ Family trees
✔ File explorers
✔ Organization charts

Arrays cannot naturally represent these relationships.

============================================================
Tree Terminology
============================================================

------------------------------------------------------------
1. Root
------------------------------------------------------------

The first node in the tree.

There is only ONE root.

                CEO
                 ↑
               Root

------------------------------------------------------------
2. Parent
------------------------------------------------------------

Any node that has one or more children.

CEO is a parent.

CTO is also a parent.

------------------------------------------------------------
3. Child
------------------------------------------------------------

A node directly below another node.

CEO
 │
 ▼
CTO

CTO is a child of CEO.

------------------------------------------------------------
4. Siblings
------------------------------------------------------------

Nodes sharing the same parent.

        CEO
       /   \
     CTO   HR

CTO and HR are siblings.

Also:

FE and BE are siblings.

------------------------------------------------------------
5. Leaf Node
------------------------------------------------------------

A node with NO children.

Also called:

✔ External Node
✔ Terminal Node

Example:

FE
BE
Payroll
Recruitment

All are leaf nodes.

------------------------------------------------------------
6. Internal Node
------------------------------------------------------------

Any node that has at least one child.

Examples:

CEO
CTO
HR Manager

------------------------------------------------------------
7. Ancestor
------------------------------------------------------------

Every parent above a node.

Example:

                CEO
                 |
                CTO
                 |
                FE

Ancestors of FE:

CEO

CTO

------------------------------------------------------------
8. Edge
------------------------------------------------------------

A connection between two nodes.

CEO
 │
 ▼
CTO

The line between them is an edge.

------------------------------------------------------------
9. Path
------------------------------------------------------------

The sequence of nodes (or edges)
used to move from one node to another.

Example:

CEO → CTO → FE

This is a path.

------------------------------------------------------------
10. Path Length
------------------------------------------------------------

The number of EDGES in the path.

CEO → CTO → FE

Edges:

CEO → CTO

CTO → FE

Total = 2

Path Length = 2

============================================================
11. Depth
============================================================

Depth measures how far a node is
FROM THE ROOT.

Starts at 0.

Example:

                CEO          Depth = 0
              /     \
           CTO      HR       Depth = 1
          /   \
        FE    BE             Depth = 2

Some books start counting from 1
and call it the "Level".

Others define:

Depth starts at 0.

Level starts at 1.

Be aware of the terminology in interviews.

============================================================
12. Height
============================================================

Height measures the longest distance
FROM A NODE DOWN TO A LEAF.

Example:

                CEO
              /     \
           CTO      HR
          /   \
        FE    BE

Leaf nodes:

Height = 0

FE = 0

BE = 0

HR = 0

CTO = 1

CEO = 2

Notice:

Depth is measured DOWN from the root.

Height is measured UP from the leaves.

============================================================
13. Degree
============================================================

The number of DIRECT children.

CEO

Children:

CTO

HR

Degree = 2

CTO

Children:

FE

BE

Degree = 2

FE

Children:

None

Degree = 0

============================================================
14. Subtree
============================================================

Every node can be considered
the root of its own smaller tree.

Example:

           CTO
          /   \
        FE    BE

This entire section is a subtree.

============================================================
15. Forest
============================================================

A Forest is simply a collection
of independent trees.

If we remove the root:

                CEO
              /     \
           CTO      HR

After removing CEO:

      CTO            HR
     /   \          /   \
   FE    BE   Payroll Recruitment

Now we no longer have ONE tree.

We have multiple trees.

This is called a Forest.

============================================================
HTML Example
============================================================

<html>
    <head>
    </head>

    <body>
    </body>
</html>

Root:

<html>

Children:

<head>

<body>

Every HTML page is actually a Tree.

This is called the DOM Tree (Document Object Model).

============================================================
Interview Notes
============================================================

✔ Tree = Nodes + Edges.

✔ Trees are hierarchical, not linear.

✔ Root is always one node.

✔ Leaf = no children.

✔ Internal node = has children.

✔ Degree = number of direct children.

✔ Path Length = number of edges.

✔ Depth = distance from root.

✔ Height = distance to the deepest leaf.

✔ Removing the root creates a Forest.

✔ HTML DOM is one of the most common real-world examples
of a Tree.
*/
