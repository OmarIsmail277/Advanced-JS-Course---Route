// ============================================================
//          Find the Middle of a Singly Linked List
// ============================================================

/*
Another very common Linked List interview question.

Problem:

Given:

HEAD
 ↓
1 → 2 → 3 → 4 → 5 → null

Return:

3

------------------------------------------------------------

Naive Solution

1. Traverse the entire list to calculate its size.
2. Traverse again until reaching size / 2.

Example:

Pass 1:

1 → 2 → 3 → 4 → 5

size = 5

Pass 2:

Move to index 2

1 → 2 → 3

Return:

3

Problem?

Two traversals are required.

Time Complexity:
O(n)

Space Complexity:
O(1)

------------------------------------------------------------

Optimal Solution (Slow & Fast Pointers)

Use two pointers:

slow -> moves ONE step every iteration.

fast -> moves TWO steps every iteration.

Since fast moves twice as quickly,
when it reaches the end,
slow will naturally be standing in the middle.

Visualization:

HEAD
 ↓
1 → 2 → 3 → 4 → 5 → null
↑
S,F

------------------------------------------------------------

Iteration 1

slow moves one step.

fast moves two steps.

HEAD
 ↓
1 → 2 → 3 → 4 → 5 → null
    ↑     ↑
    S     F

------------------------------------------------------------

Iteration 2

HEAD
 ↓
1 → 2 → 3 → 4 → 5 → null
         ↑         ↑
         S         F

------------------------------------------------------------

Iteration 3

Fast tries to move two more steps.

It can't.

Loop stops.

Slow is pointing to:

3

Return 3.

============================================================
Even Number of Nodes
============================================================

Example:

HEAD
 ↓
1 → 2 → 3 → 4 → 6 → 8 → null

Iteration 1

S -> 2
F -> 3

Iteration 2

S -> 3
F -> 6

Iteration 3

S -> 4
F -> null

Return:

4

Notice:

For an even-length list,
this implementation returns the SECOND middle node.

Middle nodes:

1 → 2 → [3] → [4] → 6 → 8

              ↑ Returned

This is the standard behavior in most interview solutions.

============================================================
Why does this work?
============================================================

Fast moves twice as quickly as slow.

For every:

1 step by slow

Fast moves:

2 steps.

So when fast has traveled the ENTIRE list,

Slow has traveled only HALF of it,

which is exactly the middle.

============================================================
Code
============================================================
*/

function findMiddle(head) {
  // Both pointers start at the head.
  let slow = head;
  let fast = head;

  /*
  Continue while:

  1. fast exists.
  2. fast has another node ahead.

  Otherwise fast cannot jump two steps.
  */

  while (fast && fast.next) {
    // Move one step.
    slow = slow.next;

    // Move two steps.
    fast = fast.next.next;
  }

  // Slow is now pointing at the middle node.
  return slow;
}

/*
============================================================
Time Complexity

O(n)

Although two pointers are moving,

they are moving during ONE traversal.

We never restart from the beginning.

============================================================
Space Complexity

O(1)

Only two pointers are used.

============================================================
Interview Notes

✔ Classic Slow & Fast Pointer technique.

✔ Only ONE traversal is required.

✔ No need to calculate the size.

✔ Very common pattern used in interview questions like:

- Find Middle Node
- Detect Cycle (Floyd's Algorithm)
- Check Palindrome Linked List
- Find kth Node from the End
- Happy Number
*/

/*

💡 Intuition

Think of two people running on a track:

🐢 Slow walks 1 step each turn.
🐇 Fast runs 2 steps each turn.

By the time the rabbit reaches the finish line, the turtle has naturally reached halfway—the middle of the list. 
That's the whole idea behind the slow & fast pointer technique.
*/
