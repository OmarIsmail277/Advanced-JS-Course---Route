/*
// ============================================================
//                         QUEUE
// ============================================================

/*
A Queue is a linear data structure that follows the FIFO principle.

FIFO = First In, First Out

The FIRST element added is the FIRST one to be removed.

Think of it like people waiting in a queue.

Front                                    Rear

Ahmed  →  Sara  →  Aya
 ↑                      ↑
First In             Last In

When serving people:

dequeue()

Sara  →  Aya

Ahmed leaves first because he entered first.

--------------------------------------------------------------
Real-Life Examples
--------------------------------------------------------------

✔ Supermarket checkout

Person 1 → Person 2 → Person 3

The first customer in line is served first.

--------------------------------------------------------------

✔ Printer Queue

Document A
Document B
Document C

The printer prints:

A → B → C

--------------------------------------------------------------

✔ Customer Support Queue

The first customer who requests support
is the first one to be served.

--------------------------------------------------------------

✔ Task Scheduling

Many operating systems and applications
process tasks in queue order.

--------------------------------------------------------------
Main Operations
--------------------------------------------------------------

1. enqueue(value)

Adds a new element to the REAR (end) of the queue.

Example:

Front                 Rear

10 → 20 → 30

enqueue(40)

Front                      Rear

10 → 20 → 30 → 40

Time Complexity:
O(1)

--------------------------------------------------------------

2. dequeue()

Removes and returns the FRONT element.

Example:

Before:

Front                 Rear

10 → 20 → 30 → 40

dequeue()

Returns:

10

After:

Front            Rear

20 → 30 → 40

Time Complexity:
O(1)

--------------------------------------------------------------

3. peek()

Returns the FRONT element
without removing it.

Example:

Front

10 → 20 → 30

peek()

Returns:

10

Queue remains unchanged.

Time Complexity:
O(1)

--------------------------------------------------------------

4. isEmpty()

Checks whether the queue contains any elements.

Returns:

true  -> queue is empty
false -> queue contains elements

Time Complexity:
O(1)

--------------------------------------------------------------

5. size()

Returns the number of elements currently stored.

Time Complexity:
O(1)

--------------------------------------------------------------
Stack vs Queue
--------------------------------------------------------------

Stack (LIFO)

Top

30
20
10

pop()

30 leaves first.

----------------------------

Queue (FIFO)

Front            Rear

10 → 20 → 30

dequeue()

10 leaves first.

--------------------------------------------------------------
Interview Notes

✔ Queue follows FIFO (First In, First Out).

✔ New elements are inserted at the REAR.

✔ Elements are removed from the FRONT.

✔ Common implementations:
   - Array (simple but dequeue can be expensive)
   - Linked List (most efficient)

✔ Very common interview applications:
   - Printer Queue
   - Task Scheduling
   - BFS (Breadth First Search)
   - Request Processing
   - Message Queues
*/
