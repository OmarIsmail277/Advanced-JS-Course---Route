// ============================================================
//          Detect a Cycle in a Singly Linked List
// ============================================================

/*
Another famous Linked List interview question.

Problem:

A linked list normally ends with null.

HEAD
 ↓
1 → 2 → 3 → 4 → null

But what if the last node points back
to one of the previous nodes?

HEAD
 ↓
1 → 2 → 3 → 4
    ↑         ↓
    7 ← 6 ← 5

Now the list never ends.

If we keep doing:

current = current.next;

we'll loop forever.

============================================================
Solution 1 - Using a Set
============================================================

Idea:

Store every visited node.

Whenever we visit a node:

1. If we've already seen it,
   then we've found a cycle.

2. Otherwise,
   save it and continue.

Visualization

visited = {}

HEAD
 ↓
1 → 2 → 3 → 4
    ↑         ↓
    7 ← 6 ← 5

--------------------------------

Visit 1

visited

{1}

--------------------------------

Visit 2

visited

{1,2}

--------------------------------

Visit 3

visited

{1,2,3}

...

Eventually:

current points again to node 2.

visited.has(node2)

true

Cycle detected.

============================================================
Code
============================================================
*/

function hasCycle(head) {
  // Stores visited node REFERENCES,
  // not values.
  const visited = new Set();

  let current = head;

  while (current) {
    // Already visited.
    if (visited.has(current)) {
      return true;
    }

    visited.add(current);

    current = current.next;
  }

  return false;
}

/*
============================================================
Complexity

Time  : O(n)

Every node is visited once.

Space : O(n)

Because every visited node is stored
inside the Set.

============================================================
Can we do better?
============================================================

Yes.

No extra memory is actually needed.

============================================================
Solution 2 - Slow & Fast Pointers
(Floyd's Cycle Detection Algorithm)
============================================================

Idea

Use two pointers.

slow -> moves one step.

fast -> moves two steps.

------------------------------------------------------------

Case 1

No cycle.

HEAD
 ↓
1 → 2 → 3 → 4 → null

Fast eventually reaches null.

Return false.

------------------------------------------------------------

Case 2

Cycle exists.

HEAD
 ↓
1 → 2 → 3 → 4
    ↑         ↓
    7 ← 6 ← 5

Slow keeps moving.

Fast keeps moving twice as fast.

Eventually...

they MUST meet.

Why?

Imagine two people running around a circular track.

🐢 Slow runs one step.

🐇 Fast runs two steps.

Even if the rabbit starts ahead,
it eventually catches the turtle
because both are running in circles.

The exact same thing happens
inside a cyclic Linked List.

============================================================
Code
============================================================
*/

function hasCycleOptimized(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    // One step.
    slow = slow.next;

    // Two steps.
    fast = fast.next.next;

    // Same node.
    if (slow === fast) {
      return true;
    }
  }

  // Fast reached null.

  return false;
}

/*
============================================================
Visualization
============================================================

HEAD
 ↓
1 → 2 → 3 → 4
    ↑         ↓
    7 ← 6 ← 5

--------------------------------

Start

S,F

↓

1

--------------------------------

Iteration 1

S → 2

F → 3

--------------------------------

Iteration 2

S → 3

F → 5

--------------------------------

Iteration 3

S → 4

F → 7

--------------------------------

Iteration 4

S → 5

F → 3

--------------------------------

Iteration 5

S → 6

F → 5

--------------------------------

Iteration 6

S → 7

F → 7

Both pointers meet.

Cycle detected.

============================================================
Complexity

Set Solution

Time  : O(n)

Space : O(n)

--------------------------------

Slow & Fast

Time  : O(n)

Space : O(1) ✅

============================================================
Interview Notes

✔ This algorithm is called
   Floyd's Cycle Detection Algorithm.

✔ The Set solution is easier to understand.

✔ The Slow & Fast Pointer solution
   is what interviewers usually expect.

✔ The comparison is:

slow === fast

NOT

slow.value === fast.value

because different nodes may contain
the same value.

We compare NODE REFERENCES,
not stored values.
*/

/*
💡 One important interview note

You wrote:

  "the fast one will meet the slow for sure"

That's correct only if there is a cycle.

  - No cycle → the fast pointer eventually reaches null and the loop ends.
  - Cycle exists → the fast pointer laps the slow pointer and they eventually point to the same node, proving there's a cycle. 
    This distinction is something interviewers sometimes ask about.

*/
