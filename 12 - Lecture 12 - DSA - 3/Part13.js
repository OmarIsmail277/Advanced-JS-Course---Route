/*
╔══════════════════════════════════════════════════════════════╗
║          IMPLEMENTING A STACK CLASS IN JAVASCRIPT 🚀        ║
╚══════════════════════════════════════════════════════════════╝

Instead of simply using an array directly, we can wrap it inside
our own Stack class.

Why?

- Encapsulation (users only interact with stack operations)
- Cleaner API
- Easier to switch the internal implementation later
  (Array → Linked List, for example)
- Very common interview exercise

──────────────────────────────────────────────────────────────
Implementation
*/

class Stack {
  constructor() {
    // Internal storage
    this.items = [];
  }

  // Add to the top
  push(value) {
    this.items.push(value);
  }

  // Remove from the top
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    return this.items.pop();
  }

  // Return the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    return this.items[this.items.length - 1];
  }

  // Check whether the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Number of elements
  size() {
    return this.items.length;
  }

  // Print the stack
  print() {
    console.log(this.items);
  }
}

/*
──────────────────────────────────────────────────────────────
Using the Stack
──────────────────────────────────────────────────────────────
*/

const stack = new Stack();

console.log(stack.peek());
// "Stack is empty"

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();
// [10, 20, 30]

console.log(stack.peek());
// 30

console.log(stack.pop());
// 30

stack.print();
// [10, 20]

console.log(stack.isEmpty());
// false

console.log(stack.size());
// 2

/*
──────────────────────────────────────────────────────────────
How Each Operation Works
──────────────────────────────────────────────────────────────

Initially:

[]

────────────────────────────────────

push(10)

TOP
10

────────────────────────────────────

push(20)

TOP
20
10

────────────────────────────────────

push(30)

TOP
30
20
10

────────────────────────────────────

peek()

Returns:

30

Stack remains:

TOP
30
20
10

────────────────────────────────────

pop()

Returns:

30

Stack becomes:

TOP
20
10

──────────────────────────────────────────────────────────────
Time Complexity
──────────────────────────────────────────────────────────────

push()      → O(1)
pop()       → O(1)
peek()      → O(1)
isEmpty()   → O(1)
size()      → O(1)
print()     → O(n)
              (prints every element)

──────────────────────────────────────────────────────────────
Small Improvements 💡

1. Method name

You wrote:

peak()

The standard name in Computer Science is:

peek()

because it means "take a quick look".

────────────────────────────────────

2. print()

You wrote:

console.log(items);

This causes:

ReferenceError: items is not defined

because items belongs to the object.

Correct:

console.log(this.items);

────────────────────────────────────

3. Strict comparison

Prefer:

this.items.length === 0

instead of

this.items.length == 0

It's the JavaScript best practice.

──────────────────────────────────────────────────────────────
💡 Interview Tip

Notice that this Stack is actually USING an array internally.

So although we built a Stack class, the underlying data structure
is still an Array.

Later, you can build another Stack using a Linked List without
changing the public API:

stack.push(...)
stack.pop(...)
stack.peek(...)

Only the internal implementation changes.
*/

// Stack operations are very fast (mostly O(1)),
// which is why stacks are widely used internally by programming
// languages and runtimes (e.g., the JavaScript Call Stack for
// managing function execution).

// more accurate: It's not that engines use a stack because it's fast;
// Engines use it because LIFO perfectly models nested function calls, and the O(1) operations are an added advantage.
