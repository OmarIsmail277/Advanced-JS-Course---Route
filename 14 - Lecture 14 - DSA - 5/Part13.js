// ============================================================
//          Tracing BFS by Level (Step by Step)
// ============================================================

/*
Tree

            50
          /    \
        30      80
       /  \    /  \
     20   40  70   90

----------------------------------------------------
Start
----------------------------------------------------

queue = [50]
head = 0
levels = []

----------------------------------------------------
First while iteration
----------------------------------------------------

queue = [50]
head = 0

levelSize = queue.length - head
          = 1 - 0
          = 1

Meaning:

👉 There is ONLY 1 node waiting to be processed
in this level.

So the for loop will run ONCE.

Process 50

currentLevel = [50]

While processing 50, we discover its children
and add them to the queue.

queue = [50, 30, 80]
head = 1

Notice:

30 and 80 were added...

BUT they are NOT processed now.

Why?

Because the for loop only runs levelSize (=1) time.

levels = [
  [50]
]

----------------------------------------------------
Second while iteration
----------------------------------------------------

queue = [50, 30, 80]
head = 1

levelSize = queue.length - head
          = 3 - 1
          = 2

Meaning:

👉 There are exactly 2 nodes waiting.

Those are:

30
80

The for loop will run TWICE.

--------------------------------

Iteration 1

Process 30

currentLevel = [30]

Add its children:

20
40

queue = [50,30,80,20,40]

head = 2

--------------------------------

Iteration 2

Process 80

currentLevel = [30,80]

Add its children:

70
90

queue = [50,30,80,20,40,70,90]

head = 3

Finished this level.

levels = [
  [50],
  [30,80]
]

----------------------------------------------------
Third while iteration
----------------------------------------------------

queue = [50,30,80,20,40,70,90]
head = 3

levelSize = queue.length - head
          = 7 - 3
          = 4

Meaning:

👉 There are 4 nodes waiting.

They are:

20
40
70
90

The for loop runs 4 times.

None of them has children.

After processing them:

head = 7

levels = [
  [50],
  [30,80],
  [20,40,70,90]
]

----------------------------------------------------
Loop ends
----------------------------------------------------

head = 7
queue.length = 7

head < queue.length ❌

Done.

====================================================
The Trick to Remember
====================================================

queue.length
=
All discovered nodes.

head
=
Already processed nodes.

So:

queue.length - head

=

Nodes STILL waiting.

At the beginning of each while iteration,
those waiting nodes are exactly ONE LEVEL.

*/

/*
🧠 One-line memory trick

Think of it like this:

queue.length = "Everyone who has entered the queue."
head = "Everyone who has already been served."


So:
levelSize = queue.length - head;

means:
"How many people are currently waiting in line?"

Those waiting people are exactly the nodes of the current tree level.
*/
