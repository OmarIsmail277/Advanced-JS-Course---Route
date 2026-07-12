/*
╔══════════════════════════════════════════════════════════════╗
║                  STACK (LIFO) 📚                           ║
╚══════════════════════════════════════════════════════════════╝

Stack is a linear data structure that follows the LIFO principle:

LIFO = Last In, First Out

The last element added is the first one to be removed.

Think of it like a stack of plates 🍽️

                TOP
            ┌─────────┐
            │ Plate 4 │  ← Removed first
            ├─────────┤
            │ Plate 3 │
            ├─────────┤
            │ Plate 2 │
            ├─────────┤
            │ Plate 1 │
            └─────────┘
              BOTTOM

──────────────────────────────────────────────────────────────
Main Operations
──────────────────────────────────────────────────────────────

1. push(value)
→ Add a new element to the TOP of the stack.

Example:

push(10)
push(20)
push(30)

Stack:

TOP
30
20
10

Time Complexity:
O(1)

──────────────────────────────────────────────────────────────

2. pop()

Removes AND returns the top element.

Example:

Stack before:

TOP
30
20
10

pop()

Returns:

30

Stack becomes:

TOP
20
10

Time Complexity:
O(1)

──────────────────────────────────────────────────────────────

3. peek() (sometimes called top())

Returns the top element WITHOUT removing it.

Example:

Stack:

TOP
30
20
10

peek()

Returns:

30

Stack remains unchanged.

Time Complexity:
O(1)

──────────────────────────────────────────────────────────────

4. isEmpty()

Checks whether the stack contains any elements.

Example:

[]

Returns:

true

Time Complexity:
O(1)

──────────────────────────────────────────────────────────────

5. size()

Returns the number of elements currently inside the stack.

Example:

10
20
30

size()

Returns:

3

Time Complexity:
O(1)

──────────────────────────────────────────────────────────────
Real-Life Examples 🌍
──────────────────────────────────────────────────────────────

✔ Browser Back Button

Visited:

Google
↓
GitHub
↓
YouTube

Press Back:

YouTube ← removed first
GitHub
Google

Exactly LIFO.

--------------------------------------------------------------

✔ Undo / Redo

Typing:

A
B
C

Undo:

Removes C
Removes B
Removes A

The last action is undone first.

--------------------------------------------------------------

✔ Function Calls (Call Stack)

Whenever a function calls another function, JavaScript
stores them in a stack.

The most recently called function finishes first.

(You'll study this in more depth later.)

──────────────────────────────────────────────────────────────
Implementing a Stack in JavaScript
──────────────────────────────────────────────────────────────

JavaScript arrays already provide exactly what a stack needs:

- push()
- pop()

So an array can simulate a stack perfectly.
*/

const stack = [];

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack);
// [10, 20, 30]

console.log(stack.pop()); // 30
console.log(stack.pop()); // 20
console.log(stack.pop()); // 10

/*
After all pops:

[]

──────────────────────────────────────────────────────────────
Time Complexity Summary
──────────────────────────────────────────────────────────────

push()      → O(1)
pop()       → O(1)
peek()      → O(1)
isEmpty()   → O(1)
size()      → O(1)

Very efficient because all operations happen only at
the TOP of the stack.

──────────────────────────────────────────────────────────────
💡 Interview Notes

✔ Stack follows LIFO (Last In, First Out).

✔ In JavaScript, a stack is commonly implemented using an array
because push() and pop() already behave like stack operations.

✔ Although arrays simulate a stack, we can also implement a real
Stack class ourselves using objects or linked lists—which is
exactly what we'll build next, Insha'Allah! 🚀
*/
