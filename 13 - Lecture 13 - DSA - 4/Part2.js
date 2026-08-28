/*
// ============================================================
//                QUEUE IMPLEMENTATION (ARRAY)
// ============================================================

/*
JavaScript arrays already provide two methods that can simulate a Queue:

push()  -> insert at the END (Rear)
shift() -> remove from the BEGINNING (Front)

Visual:

Front                     Rear
 ↓                         ↓
[A] → [B] → [C]

enqueue(D)

Front                           Rear
 ↓                               ↓
[A] → [B] → [C] → [D]

--------------------------------------------

dequeue()

Removes A

Front                     Rear
 ↓                         ↓
[B] → [C] → [D]

The problem?

shift() removes the first element,
then JavaScript shifts ALL remaining elements
one position to the left.

Before:

Index:
0    1    2    3

 A → B → C → D

After shift():

Index:
0    1    2

 B → C → D

Every element had to move.

Time Complexity:

enqueue() -> O(1)
dequeue() -> O(n) ❌
peek()    -> O(1)
*/

class Queue {
  constructor() {
    this.items = [];
  }

  // Returns true if the queue has no elements.
  isEmpty() {
    return this.items.length === 0;
  }

  // Adds a new element at the REAR.
  //
  // Before:
  // Front          Rear
  // A → B
  //
  // enqueue(C)
  //
  // Front              Rear
  // A → B → C
  //
  // Time Complexity: O(1)
  enqueue(value) {
    this.items.push(value);
  }

  // Removes the FRONT element.
  //
  // Before:
  // Front              Rear
  // A → B → C
  //
  // dequeue()
  //
  // Returns:
  // A
  //
  // Queue becomes:
  // Front          Rear
  // B → C
  //
  // Time Complexity: O(n)
  // because shift() moves every remaining element.
  dequeue() {
    if (this.isEmpty()) return null;

    return this.items.shift();
  }

  // Returns the FRONT element
  // without removing it.
  //
  // Time Complexity: O(1)
  peek() {
    if (this.isEmpty()) return null;

    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

// Usage

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());

// ============================================================
// BETTER QUEUE IMPLEMENTATION (OBJECT)
// ============================================================

/*
Instead of shifting elements every time,
we simply move TWO pointers.

front -> first element
rear  -> next available position

Initially:

items = {}

front = 0
rear  = 0

Nothing moves in memory.

This is much more efficient.

--------------------------------------------------------------

Example

enqueue("A")

items

{
  0 : "A"
}

front = 0
rear  = 1

--------------------------------------------------------------

enqueue("B")

items

{
  0 : "A",
  1 : "B"
}

front = 0
rear  = 2

--------------------------------------------------------------

enqueue("C")

items

{
  0 : "A",
  1 : "B",
  2 : "C"
}

front = 0
rear  = 3

Visual

Front                        Rear
 ↓
A → B → C
            ↑
       Next insertion

Notice:

rear DOES NOT point to C.

It points to the NEXT empty position.

--------------------------------------------------------------

dequeue()

Remove A

items

{
  1 : "B",
  2 : "C"
}

front = 1
rear  = 3

Visual

Front                  Rear
 ↓
B → C
      ↑
 Next insertion

Notice:

Nothing moved.

We simply increased front.

This is why dequeue becomes O(1).
*/

class Queue2 {
  constructor() {
    this.items = {};

    // Points to the first element.
    this.front = 0;

    // Points to the next available position.
    this.rear = 0;
  }

  // Adds a new element at the REAR.
  //
  // items[rear] = value
  // rear++
  //
  // Time Complexity: O(1)
  enqueue(value) {
    this.items[this.rear] = value;
    this.rear++;
  }

  // Removes the FRONT element.
  //
  // 1. Save the value.
  // 2. Delete it.
  // 3. Move front.
  //
  // Time Complexity: O(1)
  dequeue() {
    if (this.isEmpty()) return null;

    const value = this.items[this.front];

    delete this.items[this.front];

    this.front++;

    return value;
  }

  // Returns the FRONT element.
  //
  // Time Complexity: O(1)
  peek() {
    if (this.isEmpty()) return null;

    return this.items[this.front];
  }

  // Number of stored elements.
  //
  // Example:
  //
  // front = 2
  // rear  = 5
  //
  // Queue:
  //
  // index:
  // 2 3 4
  //
  // size:
  //
  // 5 - 2 = 3
  //
  // Time Complexity: O(1)
  size() {
    return this.rear - this.front;
  }

  // Queue is empty when
  // front catches rear.
  //
  // front = 3
  // rear  = 3
  //
  // Queue is empty.
  //
  // Time Complexity: O(1)
  isEmpty() {
    return this.front === this.rear;
  }

  print() {
    console.log(this.items);
  }
}

// ============================================================
// Usage
// ============================================================

const q = new Queue2();

q.enqueue("A");

// Front Rear
//  ↓     ↓
// A

// -----------------------

q.enqueue("B");

// Front      Rear
//  ↓          ↓
// A → B

// -----------------------

q.enqueue("C");

// Front          Rear
//  ↓              ↓
// A → B → C

q.print();

// -----------------------

q.dequeue();

// Returns:

// "A"

// Front      Rear
//  ↓          ↓
// B → C

q.print();

q.peek();

/*
============================================================
Complexities
============================================================

Array Queue

enqueue() -> O(1)

dequeue() -> O(n) ❌

peek()    -> O(1)

--------------------------------------------------

Object Queue

enqueue() -> O(1)

dequeue() -> O(1) ✅

peek()    -> O(1)

size()    -> O(1)

isEmpty() -> O(1)

============================================================
Interview Notes

✔ Array implementation is simple.

✔ The expensive operation is shift().

✔ Object implementation avoids shifting elements.

✔ We simply move the front pointer.

✔ This is the implementation interviewers usually expect.

✔ Even better implementations use a Linked List,
where enqueue and dequeue are also O(1).
*/
