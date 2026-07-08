/*
╔══════════════════════════════════════════════════════════════╗
║                    DSA RECAP 📚                             ║
╚══════════════════════════════════════════════════════════════╝

Congratulations! 🎉

We've built a strong foundation in DSA.
Before moving on, let's quickly recap everything we've learned.


╔══════════════════════════════════════════════════════════════╗
║                  1️⃣ WHAT IS DSA?                           ║
╚══════════════════════════════════════════════════════════════╝

DSA = Data Structures + Algorithms

✔ Data Structure

How we organize and store data efficiently.

Examples:

• Array
• Object
• Linked List
• Stack
• Queue
• Tree
• Graph

✔ Algorithm

A sequence of steps used to solve a problem.

Remember:

💡 Algorithms are ideas.

Programming languages are just tools
to implement those ideas.


╔══════════════════════════════════════════════════════════════╗
║              2️⃣ PROBLEM-SOLVING MINDSET 🧠                 ║
╚══════════════════════════════════════════════════════════════╝

Never jump directly into coding.

Instead:

✓ Understand the problem.

✓ Think of an algorithm.

✓ Write pseudocode if needed.

✓ Handle edge cases.

✓ Then write the actual code.

Remember:

📝 A pen and paper are often more valuable
than immediately opening your editor.


╔══════════════════════════════════════════════════════════════╗
║                  3️⃣ ARRAYS 📦                              ║
╚══════════════════════════════════════════════════════════════╝

Arrays store elements using indexes.

Access:

arr[index]

✅ Very fast.

Searching:

Requires checking elements one by one.

❌ Slower.

Common operations:

• Traverse
• Search
• Insert
• Delete

We also learned that different operations
have different performance costs.

Example:

push()

↓

Fast

unshift()

↓

Needs to shift existing elements first,
making it more expensive.


╔══════════════════════════════════════════════════════════════╗
║             4️⃣ TIME COMPLEXITY ⏱️                          ║
╚══════════════════════════════════════════════════════════════╝

Time Complexity tells us:

"How an algorithm's running time grows
as the input size grows."

We describe it using:

✨ Big-O Notation

Examples:

O(1)

O(log n)

O(n)

O(n²)

Important concepts:

✓ Worst Case

✓ Input size (n)

✓ Growth rate

Remember:

Big-O measures growth,
NOT execution time in seconds.


╔══════════════════════════════════════════════════════════════╗
║              5️⃣ SEARCHING 🔍                               ║
╚══════════════════════════════════════════════════════════════╝

We studied two searching algorithms.


1️⃣ Linear Search

✓ Works on any array.

✓ No sorting required.

Worst Case:

O(n)

--------------------------------------------------------------

2️⃣ Binary Search

✓ Much faster.

✓ Requires a sorted array.

Worst Case:

O(log n)

The key idea:

Instead of checking every element,

Binary Search eliminates HALF
of the remaining search space
on every iteration.


╔══════════════════════════════════════════════════════════════╗
║               6️⃣ SORTING 🔃                                ║
╚══════════════════════════════════════════════════════════════╝

Sorting means arranging data according
to a specific rule.

Examples:

• Ascending
• Descending
• Alphabetically
• By price
• By grade

Most comparison-based sorting algorithms follow
the same general pattern:

1. Compare

2. Swap (or shift)

3. Repeat


╔══════════════════════════════════════════════════════════════╗
║               7️⃣ BUBBLE SORT 🫧                            ║
╚══════════════════════════════════════════════════════════════╝

Idea:

Compare adjacent elements.

If they're in the wrong order,

swap them.

After every pass,

the largest remaining element
moves to its correct position.

Worst Case:

O(n²)

Optimization:

Use a "swapped" flag to stop early
if the array is already sorted.


╔══════════════════════════════════════════════════════════════╗
║             8️⃣ SELECTION SORT 🎯                           ║
╚══════════════════════════════════════════════════════════════╝

Idea:

Find the smallest element
in the unsorted part of the array,

then place it in its correct position.

Characteristics:

✓ Fewer swaps than Bubble Sort.

✓ Still performs many comparisons.

Worst Case:

O(n²)


╔══════════════════════════════════════════════════════════════╗
║            THE BIGGEST LESSON SO FAR ⭐                     ║
╚══════════════════════════════════════════════════════════════╝

DSA is NOT about memorizing algorithms.

It's about learning how to think.

Always ask yourself:

🧠 Can I reduce the number of operations?

🧠 Can I choose a better data structure?

🧠 Can I avoid unnecessary loops?

🧠 Is there a more efficient algorithm?

That's the mindset interviewers
are looking for.


╔══════════════════════════════════════════════════════════════╗
║                  WHAT'S NEXT? 🚀                            ║
╚══════════════════════════════════════════════════════════════╝

Next, we'll continue our journey with more advanced
sorting algorithms.

We'll answer questions like:

✓ Which sorting algorithm should we use
  before Binary Search?

✓ Why are some sorting algorithms much faster
  than Bubble Sort and Selection Sort?

✓ What are Big-O, Big-Theta (Θ), and Big-Omega (Ω),
  and how do they describe algorithm performance?

The journey is just getting started...
The fun part is coming next! 😁💪
*/
