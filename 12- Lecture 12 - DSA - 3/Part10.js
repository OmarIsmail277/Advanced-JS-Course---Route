// Algorithm Choice (Thinking Excercise)
// Choose the best algorithm and explain why for each case:
// small nearly sorted array, large unsorted array, one-time search, multiple searches

/*
╔══════════════════════════════════════════════════════════════╗
║        ALGORITHM CHOICE - THINKING EXERCISE 🧠             ║
╚══════════════════════════════════════════════════════════════╝

The goal is NOT to memorize algorithms.

The goal is to analyze the problem first, then choose the
algorithm that best fits the situation.

──────────────────────────────────────────────────────────────

1. Small Nearly Sorted Array

Best Choice:

✔ Insertion Sort

Why?

- Best case is O(n).
- Performs very few shifts if the array is almost sorted.
- Very simple with low overhead.
- Faster than Merge Sort or Quick Sort for small datasets.

Example:

[1, 2, 4, 3, 5]

Only one element needs to move.

──────────────────────────────────────────────────────────────

2. Large Unsorted Array

Best Choice:

✔ Merge Sort
OR
✔ Quick Sort

Why?

- O(n log n) average performance.
- Much faster than Bubble, Selection, or Insertion Sort
  on large datasets.

Interview Note:

Merge Sort
✔ Stable
✔ Guaranteed O(n log n)
❌ Uses extra memory.

Quick Sort
✔ Usually faster in practice.
✔ O(log n) recursion stack (average).
❌ Worst case O(n²).

──────────────────────────────────────────────────────────────

3. One-Time Search

Best Choice:

✔ Linear Search

Why?

If the array is NOT sorted and you only need one search:

Linear Search:

O(n)

Sorting first:

O(n log n)

Binary Search:

O(log n)

Overall:

O(n log n)

Sorting is more expensive than simply scanning the array once.

──────────────────────────────────────────────────────────────

4. Multiple Searches

Best Choice:

✔ Sort once
✔ Then use Binary Search

Why?

Example:

Searching 1000 times.

Option 1

1000 × Linear Search

1000 × O(n)

Very expensive.

──────────────────────────────────────────────────────────────

Option 2

Sort once:

O(n log n)

Then perform Binary Search each time:

1000 × O(log n)

Much faster overall.

This is exactly how many real-world applications work.

──────────────────────────────────────────────────────────────

🎯 Final Summary

Small + Nearly Sorted
→ Insertion Sort

Large + Unsorted
→ Merge Sort / Quick Sort

One Search
→ Linear Search

Many Searches
→ Sort once + Binary Search

──────────────────────────────────────────────────────────────

💡 Interview Tip

Choosing the correct algorithm is more important than
memorizing every algorithm.

Always ask yourself:

1. Is the data already sorted?
2. How large is the dataset?
3. Will I search once or many times?
4. Do I care more about speed or memory?

Those four questions usually lead you to the best algorithm.
*/
