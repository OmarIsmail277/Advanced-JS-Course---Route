/*
╔══════════════════════════════════════════════════════════════╗
║            TIME COMPLEXITY & BIG-O NOTATION ⏱️              ║
╚══════════════════════════════════════════════════════════════╝

Now we come to one of the most important topics in DSA:

✨ Time Complexity

Without understanding Time Complexity,

it's impossible to compare two algorithms objectively.


╔══════════════════════════════════════════════════════════════╗
║               WHAT IS TIME COMPLEXITY? 🤔                   ║
╚══════════════════════════════════════════════════════════════╝

Time Complexity measures:

"How the running time of an algorithm grows
as the input size grows."

Notice carefully...

❌ It is NOT the actual execution time in seconds.

It doesn't mean:

"This algorithm takes exactly 2 seconds."

Instead, it describes how the amount of work changes
when the input becomes larger.

We usually analyze the:

🔥 Worst Case

because it guarantees the maximum amount of work
the algorithm may perform.


╔══════════════════════════════════════════════════════════════╗
║              WHY DON'T WE USE REAL TIME? ⏰                 ║
╚══════════════════════════════════════════════════════════════╝

Real execution time depends on many factors:

✓ CPU speed
✓ RAM
✓ Browser
✓ Operating System
✓ Compiler / JavaScript Engine

So instead of measuring seconds,

we measure how the number of operations
grows as the input size (n) increases.

This makes algorithm comparisons fair
across different computers.


╔══════════════════════════════════════════════════════════════╗
║                WHAT IS "n"? 📦                              ║
╚══════════════════════════════════════════════════════════════╝

In DSA,

n usually represents:

"The size of the input."

Example:

10 elements

↓

n = 10

1000 elements

↓

n = 1000

1,000,000 elements

↓

n = 1,000,000

As n grows,

we study how the algorithm's work grows.


╔══════════════════════════════════════════════════════════════╗
║              BIG-O NOTATION 📈                              ║
╚══════════════════════════════════════════════════════════════╝

We express Time Complexity using:

✨ Big-O Notation

Examples:

O(1)

O(log n)

O(n)

O(n log n)

O(n²)

O(2ⁿ)

O(n!)

The goal is to describe the algorithm's growth,
not its exact running time.


╔══════════════════════════════════════════════════════════════╗
║                 EXAMPLE #1 - SINGLE LOOP 🚶                 ║
╚══════════════════════════════════════════════════════════════╝
*/

for (let i = 0; i < n.length; i++) {
  console.log(n[i]);
}

/*
Suppose:

n = 10

The loop executes:

10 times.

--------------------------------------------

n = 1000

The loop executes:

1000 times.

--------------------------------------------

n = 1,000,000

The loop executes:

1,000,000 times.

The number of operations grows proportionally
with the input size.

Time Complexity:

✅ O(n)

This is called:

Linear Time.


╔══════════════════════════════════════════════════════════════╗
║              EXAMPLE #2 - NESTED LOOPS 🔁                   ║
╚══════════════════════════════════════════════════════════════╝
*/

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}

/*
Suppose:

n = 10

Operations:

10 × 10 = 100

--------------------------------------------

n = 1000

Operations:

1000 × 1000

=

1,000,000

--------------------------------------------

The work grows much faster.

Time Complexity:

✅ O(n²)

This is called:

Quadratic Time.

💡 Notice how quickly the number of operations
explodes as n becomes larger.


╔══════════════════════════════════════════════════════════════╗
║          NESTED LOOPS vs CONSECUTIVE LOOPS ⚠️              ║
╚══════════════════════════════════════════════════════════════╝

Many beginners confuse these.

--------------------------------------------------------------

Nested Loops:
*/

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {}
}

/*
Operations:

n × n

=

n²

Time Complexity:

O(n²)

--------------------------------------------------------------

Consecutive Loops:
*/

for (let i = 0; i < n; i++) {}

for (let j = 0; j < n; j++) {}

/*
Operations:

n + n

=

2n

Time Complexity:

O(2n)

When analyzing Big-O,

we ignore constant factors.

So:

O(2n)

becomes:

✅ O(n)

This is still Linear Time.

🎯 Key idea:

Nested loops multiply.

Consecutive loops add.


╔══════════════════════════════════════════════════════════════╗
║              WHY SHOULD WE CARE? 🤔                         ║
╚══════════════════════════════════════════════════════════════╝

Imagine two solutions.

Solution A:

O(n)

Solution B:

O(n²)

For small inputs,

both may appear fast.

But for large inputs...

n = 1,000,000

The difference becomes enormous.

That's why experienced developers think about
performance before writing code.

As programmers,

we should always ask:

🧠 Can this algorithm be improved?

🧠 Can I reduce the number of operations?

🧠 Is there a better data structure?

Thinking this way is the heart of DSA.


╔══════════════════════════════════════════════════════════════╗
║              INTERVIEW QUESTIONS 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: What is Time Complexity?

A:
Time Complexity describes how the running time of an
algorithm grows as the input size increases.


Q: What does Big-O measure?

A:
It measures the growth rate of an algorithm,
not its exact execution time.


Q: What is the time complexity of a single loop?

A:
O(n)


Q: What is the time complexity of two nested loops?

A:
O(n²)


Q: What is the time complexity of two consecutive loops?

A:
O(2n), which simplifies to O(n) in Big-O notation.


💡 Golden Rule

📈 Big-O is about growth, not seconds.

🔁 Consecutive loops → Add.

🪆 Nested loops → Multiply.

Always think about how your algorithm scales
as the input size grows. 🚀
*/
