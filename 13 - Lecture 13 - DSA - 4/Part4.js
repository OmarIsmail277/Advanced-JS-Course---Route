// ============================================================
//             Reverse a Singly Linked List (Interview)
// ============================================================

/*
One of the most common Linked List interview questions.

Problem:

Input:

HEAD
 ↓
1 → 2 → 3 → null

Output:

HEAD
 ↓
3 → 2 → 1 → null

------------------------------------------------------------

Idea

Normally every node points FORWARD.

1 ───► 2 ───► 3 ───► null

We want to reverse every arrow.

null ◄─── 1 ◄─── 2 ◄─── 3

Since changing one arrow may lose the rest of the list,
we keep THREE pointers:

prev
current
nextNode

prev     current
 ↓         ↓
null      1 → 2 → 3 → null

At every iteration we:

1. Save the next node.
2. Reverse the arrow.
3. Move prev forward.
4. Move current forward.

Repeat until current becomes null.
*/

function reverseLinkedList(head) {
  // Previous node.
  // Initially there is nothing before the head.
  let prev = null;

  // Start from the first node.
  let current = head;

  while (current) {
    /*
    Save the next node BEFORE changing anything.

    current
       ↓
    1 → 2 → 3

    nextNode
          ↓
          2

    Without this variable,
    we would lose access to the remaining nodes.
    */
    const nextNode = current.next;

    /*
    Reverse the arrow.

    Before:

    null    1 → 2

    After:

    null ← 1   2
    */
    current.next = prev;

    /*
    Move prev one step forward.

    prev
      ↓
      1
    */
    prev = current;

    /*
    Continue traversing.

    current
        ↓
        2
    */
    current = nextNode;
  }

  /*
  current becomes null.

  prev now points to the new head.

  3 → 2 → 1 → null
  */

  return prev;
}

/*
============================================================
Step-by-Step Visualization
============================================================

Initial

prev      current
 ↓          ↓
null      1 → 2 → 3 → null

------------------------------------------------------------

Iteration 1

nextNode = 2

Reverse:

1 → null

Move pointers:

prev
 ↓
1 → null

current
 ↓
2 → 3 → null

------------------------------------------------------------

Iteration 2

nextNode = 3

Reverse:

2 → 1 → null

Move pointers:

prev
 ↓
2 → 1 → null

current
 ↓
3 → null

------------------------------------------------------------

Iteration 3

nextNode = null

Reverse:

3 → 2 → 1 → null

Move pointers:

prev
 ↓
3 → 2 → 1 → null

current
 ↓
null

Loop ends.

Return prev.

============================================================
Final Result

HEAD
 ↓
3 → 2 → 1 → null

============================================================
Time Complexity

O(n)

We visit each node exactly once.

============================================================
Space Complexity

O(1)

Only three pointers are used:
- prev
- current
- nextNode

No new Linked List is created.

============================================================
Interview Notes

✔ This is an in-place algorithm.

✔ No extra array or list is created.

✔ The trick is saving nextNode BEFORE reversing the link.

✔ If you don't save nextNode first,
   you'll lose access to the rest of the list.

✔ This is one of the highest-frequency Linked List interview questions.
*/

// This "save → reverse → move pointers" pattern is the heart of almost every in-place linked list problem.
