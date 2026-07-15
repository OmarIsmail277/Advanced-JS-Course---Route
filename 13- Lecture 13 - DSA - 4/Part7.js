// ============================================================
//                         RECAP
// ============================================================

/*
============================================================
1. Queue
============================================================

Queue follows the FIFO principle.

FIFO = First In, First Out

Examples:

✔ Customer service
✔ Printer queue
✔ Order processing
✔ Task scheduling

------------------------------------------------------------
Array Implementation

enqueue() -> push() -> O(1)

dequeue() -> shift() -> O(n) ❌

Why?

Because shift() removes the first element,
then JavaScript shifts every remaining element
one position to the left.

------------------------------------------------------------
Optimized Implementation

Instead of an array,
we used an object with two pointers:

front
rear

enqueue()

items[rear] = value;
rear++;

dequeue()

delete items[front];
front++;

Nothing is shifted.

enqueue() -> O(1)

dequeue() -> O(1) ✅

============================================================
2. Linked List
============================================================

A Linked List consists of nodes.

Each node stores:

✔ value
✔ next

Example:

HEAD
 ↓
10 → 20 → 30 → null

Unlike arrays,

Linked Lists do NOT have indexes.

Each node only knows
where the next node is.

============================================================
3. Common Operations
============================================================

prepend() -> O(1)

append() -> O(n)
(because we traverse to the last node)

delete() -> O(n)

search() -> O(n)

access by position -> O(n)

Why is access O(n)?

Because there is NO direct indexing.

To get the 5th node, for example,

HEAD
 ↓
10 → 20 → 30 → 40 → 50

we must start from the head
and move node by node until reaching it.

Unlike arrays:

arr[4]

which is direct access (O(1)).

============================================================
4. Interview Problems
============================================================

✔ Reverse Linked List

Use three pointers:

prev
current
nextNode

Time  -> O(n)

Space -> O(1)

------------------------------------------------------------

✔ Find Middle Node

Use the Slow & Fast Pointer technique.

slow -> 1 step

fast -> 2 steps

When fast reaches the end,
slow is standing in the middle.

Time  -> O(n)

Space -> O(1)

------------------------------------------------------------

✔ Detect Cycle

Solution 1:

Use a Set.

Time  -> O(n)

Space -> O(n)

----------------------------

Solution 2 (Better)

Floyd's Cycle Detection Algorithm.

Slow & Fast pointers.

If they meet,
a cycle exists.

Time  -> O(n)

Space -> O(1) ✅

============================================================
5. Main Takeaways
============================================================

✔ Queue is ideal for FIFO operations.
  Queue Applications:
  Any system where the first request should be processed first (FIFO),
  such as order processing, printer queues, customer support tickets,
  task scheduling, message queues, and Breadth-First Search (BFS) in graphs.

✔ Avoid shift() when performance matters.

✔ Linked Lists trade fast insertions/deletions
for slower searching and indexing.

✔ Arrays excel at random access (O(1)),
while Linked Lists excel at modifying the beginning
of the list (O(1)).

✔ The Slow & Fast Pointer technique is one of the
most important interview patterns and appears in
many Linked List problems.

✔ Understanding pointers is far more important
than memorizing implementations.
*/
