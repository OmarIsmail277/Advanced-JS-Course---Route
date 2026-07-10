/*
╔══════════════════════════════════════════════════════════════╗
║              TYPES OF COMPLEXITY 📈                         ║
╚══════════════════════════════════════════════════════════════╝

When analyzing an algorithm,

we don't ask:

❌ "How many seconds does it take?"

Instead, we ask:

✅ "How does its performance change as the input size grows?"

This gives us a fair way to compare algorithms,
regardless of the computer they're running on.


╔══════════════════════════════════════════════════════════════╗
║          WHY DON'T WE MEASURE SECONDS? ⏱️                   ║
╚══════════════════════════════════════════════════════════════╝

Execution time depends on many external factors:

✓ CPU speed
✓ RAM
✓ Operating System
✓ JavaScript Engine
✓ Background processes
✓ Hardware specifications

Because of these differences,

measuring an algorithm in seconds isn't reliable.

Instead, we study how the amount of work
(or memory usage) grows as the input size (n) grows.


╔══════════════════════════════════════════════════════════════╗
║           TWO TYPES OF COMPLEXITY 📚                        ║
╚══════════════════════════════════════════════════════════════╝

Algorithm complexity has two main types:

1️⃣ Time Complexity

2️⃣ Space Complexity


╔══════════════════════════════════════════════════════════════╗
║             1️⃣ TIME COMPLEXITY ⏱️                          ║
╚══════════════════════════════════════════════════════════════╝

Time Complexity measures:

"How the running time (number of operations)
grows as the input size increases."

Example:

O(n)

If:

n = 10

↓

About 10 operations.

If:

n = 1000

↓

About 1000 operations.

The larger the input,

the more work the algorithm performs.


╔══════════════════════════════════════════════════════════════╗
║            2️⃣ SPACE COMPLEXITY 💾                          ║
╚══════════════════════════════════════════════════════════════╝

Space Complexity measures:

"How much extra memory an algorithm needs
as the input size increases."

It's concerned with **additional memory**
allocated by the algorithm,
not the memory used by the input itself.


╔══════════════════════════════════════════════════════════════╗
║                 EXAMPLE #1                                  ║
╚══════════════════════════════════════════════════════════════╝
*/

function copyArray(arr) {
  const copy = [...arr];
  return copy;
}

/*
A new array is created.

If:

arr contains 10 elements,

the new array also contains 10 elements.

If:

arr contains 1,000,000 elements,

the new array also contains 1,000,000 elements.

Extra memory grows with the input size.

Space Complexity:

✅ O(n)


╔══════════════════════════════════════════════════════════════╗
║                 EXAMPLE #2                                  ║
╚══════════════════════════════════════════════════════════════╝
*/

function firstElement(arr) {
  return arr[0];
}

/*
Regardless of whether the array has:

10 elements

or

10,000,000 elements,

we only return one value.

No additional data structure is created.

Space Complexity:

✅ O(1)

(Constant Space)


╔══════════════════════════════════════════════════════════════╗
║           TIME vs SPACE TRADE-OFF ⚖️                        ║
╚══════════════════════════════════════════════════════════════╝

Sometimes, improving one type of complexity
comes at the cost of the other.

For example:

🚀 An algorithm may run faster,

but require more memory.

--------------------------------------------------------------

Or:

💾 An algorithm may use very little memory,

but perform more operations and run slower.

This is known as the:

✨ Time-Space Trade-Off

As developers,

we choose the approach that best fits
the problem we're solving.


╔══════════════════════════════════════════════════════════════╗
║              INTERVIEW QUESTIONS 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: What are the two main types of algorithm complexity?

A:

• Time Complexity
• Space Complexity


Q: What does Time Complexity measure?

A:

How the number of operations grows
as the input size increases.


Q: What does Space Complexity measure?

A:

How much additional memory an algorithm
requires as the input size grows.


Q: Can an algorithm be fast but use more memory?

A:

Yes.

There is often a trade-off between
execution time and memory usage.


💡 Golden Rule

⏱️ Time Complexity measures work.

💾 Space Complexity measures extra memory.

A great algorithm balances both whenever possible. 🚀
*/
