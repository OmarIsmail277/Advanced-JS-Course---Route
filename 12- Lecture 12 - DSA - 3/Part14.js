// ============================================================
//                  SINGLY LINKED LIST
// ============================================================

/*
A Linked List is a linear data structure made up of nodes.

Unlike arrays:
- Arrays store elements continuously in memory.
- Linked Lists store elements as separate nodes connected together.

Each node knows ONLY the next node.

Example:

HEAD
 ↓
[10|•] → [20|•] → [30|null]

The Linked List itself stores:

1. head -> points to the first node.
2. size -> number of nodes.
*/

// ============================================================
// Node
// ============================================================

/*
Represents one element inside the Linked List.

Each node contains:
- value -> actual stored data.
- next  -> reference to the next node.

Visual:

┌──────────────┐
│ value : 10   │
│ next  :  ●───┼────► next node
└──────────────┘

Last node:

┌──────────────┐
│ value : 30   │
│ next  : null │
└──────────────┘
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// ============================================================
// Linked List
// ============================================================

class LinkedList {
  constructor() {
    // Points to the first node.
    this.head = null;

    // Number of nodes.
    this.size = 0;
  }

  // ==========================================================
  // Returns true if the list has no nodes.
  //
  // Time Complexity: O(1)
  // ==========================================================

  isEmpty() {
    return this.size === 0;
  }

  // ==========================================================
  // Returns the number of nodes.
  //
  // Time Complexity: O(1)
  // ==========================================================

  getSize() {
    return this.size;
  }

  // ==========================================================
  // prepend(value)
  //
  // Inserts a node at the BEGINNING of the list.
  //
  // Before:
  //
  // HEAD
  //  ↓
  // 10 → 20 → 30 → null
  //
  // prepend(5)
  //
  // Step 1:
  // Create node
  //
  // 5 → null
  //
  // Step 2:
  // Point it to the current head
  //
  // 5 ─────► 10 → 20 → 30
  //
  // Step 3:
  // Move head
  //
  // HEAD
  //  ↓
  // 5 → 10 → 20 → 30 → null
  //
  // Time Complexity: O(1)
  // ==========================================================

  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  // ==========================================================
  // append(value)
  //
  // Inserts a node at the END of the list.
  //
  // Since we only know the head,
  // we must traverse until reaching the last node.
  //
  // Before:
  //
  // HEAD
  //  ↓
  // 10 → 20 → 30 → null
  //
  // append(40)
  //
  // HEAD
  //  ↓
  // 10 → 20 → 30 → null
  //  ↑
  // current
  //
  // Traversal:
  //
  // HEAD
  //  ↓
  // 10 → 20 → 30
  //              ↑
  //         last node found
  //
  // Attach:
  //
  // HEAD
  //  ↓
  // 10 → 20 → 30 → 40 → null
  //
  // Time Complexity: O(n)
  // ==========================================================

  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;

      // Traverse until reaching the last node.
      while (current.next) {
        current = current.next;
      }

      // Connect the last node to the new node.
      current.next = node;
    }

    this.size++;
  }

  // ==========================================================
  // removeFirst()
  //
  // Removes the first node.
  //
  // Before:
  //
  // HEAD
  //  ↓
  // 30 → 20 → 10 → null
  //
  // Store removed node.
  //
  // removed = 30
  //
  // Move head.
  //
  // HEAD
  //  ↓
  // 20 → 10 → null
  //
  // Return:
  //
  // 30
  //
  // Time Complexity: O(1)
  // ==========================================================

  removeFirst() {
    if (this.isEmpty()) {
      return "List is empty";
    }

    const removedNode = this.head;

    this.head = this.head.next;

    this.size--;

    return removedNode.value;
  }

  // ==========================================================
  // getHead()
  //
  // Returns the value of the first node
  // without removing it.
  //
  // HEAD
  //  ↓
  // 30 → 20 → 10
  //
  // Returns:
  //
  // 30
  //
  // Time Complexity: O(1)
  // ==========================================================

  getHead() {
    if (this.isEmpty()) {
      return "List is empty";
    }

    return this.head.value;
  }

  // ==========================================================
  // print()
  //
  // Traverses the entire linked list and prints every node.
  //
  // Traversal:
  //
  // HEAD
  //  ↓
  // 10 → 20 → 30 → 40 → null
  //
  // current
  //    ↓
  //   10
  //
  // current = current.next
  //
  //         ↓
  //        20
  //
  // Continue until current becomes null.
  //
  // Time Complexity: O(n)
  // ==========================================================

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    let values = "";

    while (current) {
      values += `${current.value} `;
      current = current.next;
    }

    console.log(values);
  }
}

// ============================================================
// Usage
// ============================================================

const list = new LinkedList();

console.log(list.isEmpty()); // true

list.prepend(10);

// HEAD
//  ↓
// 10 → null

// list.prepend(20);

// HEAD
//  ↓
// 20 → 10 → null

// list.prepend(30);

// HEAD
//  ↓
// 30 → 20 → 10 → null

// list.append(40);

// HEAD
//  ↓
// 30 → 20 → 10 → 40 → null

console.log(list.getHead()); // 30

console.log(list.removeFirst()); // 30

// HEAD
//  ↓
// 20 → 10 → 40 → null

list.print();

// 20 10 40

/*
============================================================
Time Complexity
============================================================

isEmpty()      → O(1)

getSize()      → O(1)

prepend()      → O(1)

append()       → O(n)

removeFirst()  → O(1)

getHead()      → O(1)

print()        → O(n)

============================================================
Interview Notes

✔ Every node stores:
   - value
   - next

✔ head always points to the FIRST node.

✔ Last node always points to null.

✔ prepend() is much faster than append()
   because no traversal is required.

✔ A Linked List is a GENERAL data structure.

✔ A Stack can later be implemented using a Linked List:

push()  → prepend()

pop()   → removeFirst()

peek()  → getHead()
*/
