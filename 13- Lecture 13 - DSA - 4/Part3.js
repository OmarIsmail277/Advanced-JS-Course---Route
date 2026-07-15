// ============================================================
//                  SINGLY LINKED LIST (REVISIT)
// ============================================================

/*
A Linked List is a collection of nodes connected together.

Unlike arrays:
- Arrays store elements next to each other in memory.
- Linked Lists store nodes separately.
- Every node simply knows where the NEXT node is.

Each node contains:

1. value -> the actual data.
2. next  -> reference to the next node.

Visual:

HEAD
 ↓
10 → 20 → 30 → null

The last node always points to null.
*/

// ============================================================
// Node
// ============================================================

class Node {
  constructor(value) {
    // Data stored inside the node.
    this.value = value;

    // Reference to the next node.
    this.next = null;
  }
}

/*
Creating nodes manually:

const node1 = new Node(10);
const node2 = new Node(20);

Connect them:

node1.next = node2;

Visualization:

node1

value = 10
next ───────────────► node2

node2

value = 20
next = null

Overall:

HEAD
 ↓
10 → 20 → null
*/

// ============================================================
// Linked List
// ============================================================

class LinkedList {
  constructor() {
    // Points to the first node.
    // If head === null, the list is empty.
    this.head = null;

    // Number of nodes.
    this.size = 0;
  }

  // ==========================================================
  // append(value)
  //
  // Adds a node at the END of the list.
  //
  // Before:
  //
  // HEAD
  //  ↓
  // 10 → 20 → null
  //
  // append(30)
  //
  // Step 1:
  // Create:
  //
  // 30 → null
  //
  // Step 2:
  // Traverse until reaching the last node.
  //
  // current
  //   ↓
  // 10 → 20 → null
  //
  //          ↑
  //      Last node
  //
  // Step 3:
  // Connect:
  //
  // 20.next = 30
  //
  // Result:
  //
  // HEAD
  //  ↓
  // 10 → 20 → 30 → null
  //
  // Time Complexity: O(n)
  // ==========================================================

  append(value) {
    const createdNode = new Node(value);

    // Empty list.
    if (!this.head) {
      this.head = createdNode;
    } else {
      let current = this.head;

      // Move until reaching the last node.
      while (current.next) {
        current = current.next;
      }

      // Connect the last node to the new node.
      current.next = createdNode;
    }

    this.size++;
  }

  // ==========================================================
  // prepend(value)
  //
  // Adds a node at the BEGINNING.
  //
  // Before:
  //
  // HEAD
  //  ↓
  // 20 → 30 → null
  //
  // prepend(10)
  //
  // Create:
  //
  // 10 → null
  //
  // Point it to the current head.
  //
  // 10 ─────────► 20 → 30
  //
  // Move head.
  //
  // HEAD
  //  ↓
  // 10 → 20 → 30 → null
  //
  // Time Complexity: O(1)
  // ==========================================================

  prepend(value) {
    const createdNode = new Node(value);

    createdNode.next = this.head;

    this.head = createdNode;

    this.size++;
  }

  // ==========================================================
  // delete(value)
  //
  // Removes the FIRST node whose value matches.
  //
  // ----------------------------------------------------------
  // Case 1:
  // Empty list.
  //
  // HEAD
  //  ↓
  // null
  //
  // Nothing to remove.
  //
  // ----------------------------------------------------------
  // Case 2:
  // Head contains the value.
  //
  // HEAD
  //  ↓
  // 10 → 20 → 30
  //
  // delete(10)
  //
  // Simply move head.
  //
  // HEAD
  //  ↓
  // 20 → 30
  //
  // ----------------------------------------------------------
  // Case 3:
  // Value is somewhere else.
  //
  // HEAD
  //  ↓
  // 10 → 20 → 30 → 40
  //
  // delete(30)
  //
  // current stops BEFORE the node to delete.
  //
  // current
  //    ↓
  // 10 → 20 → 30 → 40
  //
  // Remove 30:
  //
  // 20.next = 40
  //
  // Final:
  //
  // HEAD
  //  ↓
  // 10 → 20 → 40 → null
  //
  // Time Complexity: O(n)
  // ==========================================================

  delete(value) {
    // Empty list.
    if (!this.head) return null;

    // Value found in the first node.
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;

    /*
      Stop when:

      current.next.value === value

      Why?

      Because we want current to stand
      BEFORE the node we want to remove.

      Example:

      current
         ↓
      10 → 20 → 30 → 40

      We need access to node 20
      so that we can reconnect:

      20.next = 40
    */

    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    // Value found.
    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }
  }
}

/*
============================================================
Visualization
============================================================

append(10)

HEAD
 ↓
10 → null

----------------------------

append(20)

HEAD
 ↓
10 → 20 → null

----------------------------

append(30)

HEAD
 ↓
10 → 20 → 30 → null

----------------------------

prepend(5)

HEAD
 ↓
5 → 10 → 20 → 30 → null

----------------------------

delete(20)

HEAD
 ↓
5 → 10 → 30 → null

============================================================
Complexities
============================================================

append()   -> O(n)

prepend()  -> O(1)

delete()   -> O(n)

Space (per node) -> O(1)

============================================================
Interview Notes

✔ Each node stores:
   - value
   - next

✔ head always points to the first node.

✔ Last node always points to null.

✔ prepend() is faster than append()
   because no traversal is needed.

✔ delete() reconnects nodes instead of shifting data
   like arrays do.

✔ Linked Lists are great when frequent insertions
   and deletions are required.
*/

/*
One interview tip about delete()

A common interview question is:

Why do we search for current.next.value instead of current.value?

Because you can't delete the current node directly in a singly linked list. You need to stop one node before the target so you can bypass it:

Before

current
   ↓
10 → 20 → 30 → 40

Delete 30

20.next = 30.next

After

10 → 20 ─────────► 40

That's why the loop condition is:

while (current.next && current.next.value !== value)

instead of checking current.value. This is a classic interview point that often comes up.
*/
