// ============================================================
//              General Tree Implementation
// ============================================================

/*
Now that we understand what a Tree is,

let's build one.

Remember:

A Tree is simply a collection of nodes.

Every node contains:

1. Its own value.
2. References to its children.

Unlike a Linked List,

Node
 └── next

a Tree node may have MANY children.

Node
 ├── Child 1
 ├── Child 2
 ├── Child 3
 └── ...

That's why we store children inside an array.

============================================================
Tree Node
============================================================
*/

class TreeNode {
  constructor(value) {
    // The data stored inside the node.
    this.value = value;

    // Holds all direct children.
    // Initially the node has no children.
    this.children = [];
  }

  /*
  Creates a new child node,
  adds it to the children array,
  then returns it so we can continue building
  the tree from that child.
  */
  addChild(value) {
    const childNode = new TreeNode(value);

    this.children.push(childNode);

    return childNode;
  }
}

/*
============================================================
Building a Company Tree
============================================================

Create the root.

                CEO
*/

const company = new TreeNode("CEO");

/*
Add two children.

                CEO
              /     \
           CTO      HR Manager
*/

const cto = company.addChild("CTO");
const hrManager = company.addChild("HR Manager");

/*
Build the CTO subtree.

                CEO
              /     \
           CTO      HR Manager
          /   \
        FE    BE
*/

cto.addChild("FE");
cto.addChild("BE");

/*
Build the HR subtree.

                CEO
              /     \
           CTO      HR Manager
          /   \      /       \
        FE    BE  Recruitment Payroll
*/

hrManager.addChild("Recruitment");
hrManager.addChild("Payroll");

/*
Print the entire tree.
*/

console.log(company);

/*
============================================================
What does company actually contain?
============================================================

company

{
  value: "CEO",

  children: [

    {
      value: "CTO",

      children: [
        { value: "FE", children: [] },
        { value: "BE", children: [] }
      ]
    },

    {
      value: "HR Manager",

      children: [
        { value: "Recruitment", children: [] },
        { value: "Payroll", children: [] }
      ]
    }

  ]
}

Notice:

Every child is itself another TreeNode.

This is what makes Trees recursive by nature.

============================================================
Why does addChild() return the child?
============================================================

Imagine it didn't:

company.addChild("CTO");

How would we later add:

FE

BE

to CTO?

We couldn't, because we no longer have a reference
to the CTO node.

Instead:

const cto = company.addChild("CTO");

Now we have:

cto

↓

CTO

So we can continue building from it.

cto.addChild("FE");
cto.addChild("BE");

This pattern allows us to build the tree
one level at a time.

============================================================
Visualization
============================================================

company

↓

CEO
│
├──────────────► CTO
│                 │
│                 ├──► FE
│                 │
│                 └──► BE
│
└──────────────► HR Manager
                  │
                  ├──► Recruitment
                  │
                  └──► Payroll

============================================================
Complexity
============================================================

Creating a node

new TreeNode(...)

Time  : O(1)

Space : O(1)

------------------------------------------------------------

addChild()

children.push(...)

Time  : O(1)

Space : O(1)

(No traversal is required.)

============================================================
Interview Notes
============================================================

✔ Every node stores:
   - value
   - children[]

✔ children is an array because a node may have
multiple children.

✔ A Tree is recursive:
   every child is itself another TreeNode.

✔ Returning the created child allows us to keep
building the tree naturally.

✔ This is a General Tree (N-ary Tree),
not a Binary Tree.

A Binary Tree limits each node to at most
two children (left and right), while this
implementation allows any number of children.
*/
