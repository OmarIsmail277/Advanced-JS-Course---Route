/*
╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                               SORTING ALGORITHMS CHEAT SHEET 🚀                                                  ║
╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝

┌─────────────────┬──────────┬──────────┬──────────┬────────────┬────────────────────────────────────────────────────────────┐
│ Algorithm       │ Best     │ Average  │ Worst    │ Space      │ Notes                                                      │
├─────────────────┼──────────┼──────────┼──────────┼────────────┼────────────────────────────────────────────────────────────┤
│ Bubble Sort     │ O(n)*    │ O(n²)    │ O(n²)    │ O(1)       │ Stable. Simple. Best only with the swapped optimization.   │
│                 │          │          │          │            │ Biggest element moves to the end each pass.                │
├─────────────────┼──────────┼──────────┼──────────┼────────────┼────────────────────────────────────────────────────────────┤
│ Selection Sort  │ O(n²)    │ O(n²)    │ O(n²)    │ O(1)       │ Few swaps, many comparisons.                               │
│                 │          │          │          │            │ Finds the minimum and places it in its correct position.   │
├─────────────────┼──────────┼──────────┼──────────┼────────────┼────────────────────────────────────────────────────────────┤
│ Insertion Sort  │ O(n)     │ O(n²)    │ O(n²)    │ O(1)       │ Excellent for nearly sorted arrays.                        │
│                 │          │          │          │            │ Shifts elements then inserts the current element.          │
├─────────────────┼──────────┼──────────┼──────────┼────────────┼────────────────────────────────────────────────────────────┤
│ Merge Sort      │ O(nlogn) │ O(nlogn) │ O(nlogn) │ O(n)       │ Stable. Divide & Conquer.                                  │
│                 │          │          │          │            │ Fast and predictable, but needs extra memory.              │
├─────────────────┼──────────┼──────────┼──────────┼────────────┼────────────────────────────────────────────────────────────┤
│ Quick Sort      │ O(nlogn) │ O(nlogn) │ O(n²)    │ O(logn)**  │ Divide & Conquer.                                          │
│                 │          │          │          │            │ Usually the fastest in practice. Pivot choice is crucial.  │
├─────────────────┼──────────┼──────────┼──────────┼────────────┼────────────────────────────────────────────────────────────┤
│ JS sort()       │ Engine   │ Engine   │ Engine   │ Engine     │ Uses highly optimized algorithms depending on the engine   │
│ (Built-in)      │ dependent│ dependent│ dependent│ dependent  │ (V8, SpiderMonkey, JavaScriptCore, etc.).                  │
│                 │ ~O(nlogn)│ ~O(nlogn)│          │            │ Mutates the original array.                                │
└─────────────────┴──────────┴──────────┴──────────┴────────────┴────────────────────────────────────────────────────────────┘


📝 Notes

• Bubble Sort
  → Very easy to understand.
  → Rarely used in production.

• Selection Sort
  → Performs the minimum number of swaps.
  → Still slow because of many comparisons.

• Insertion Sort
  → Great for small or almost sorted datasets.
  → Used internally by many modern sorting algorithms.

• Merge Sort
  → Guaranteed O(n log n).
  → Stable.
  → Requires extra memory.

• Quick Sort
  → Usually the fastest general-purpose sorting algorithm.
  → Worst case occurs with poor pivot selection.

• JavaScript sort()
  → Don't memorize its internal algorithm.
  → It depends on the JS engine.
  → Remember:
      ✓ Default sort compares strings.
      ✓ Use a compare callback for numbers.
      ✓ sort() mutates.
      ✓ toSorted() doesn't mutate.

      The implementation depends on the JavaScript engine. Modern engines use highly optimized algorithms 
      (often combining ideas from Quick Sort, Merge Sort, Insertion Sort, or Timsort-like techniques). 
      As developers, we only rely on the behavior of sort(), not its internal implementation.

🏆 Interview Recommendation

Small / Nearly Sorted Array
→ Insertion Sort

Need Guaranteed O(n log n)
→ Merge Sort

Best Real-World Performance
→ Quick Sort (good pivot)

Need Stability
→ Merge Sort

Need Simplicity (learning only)
→ Bubble / Selection

Writing Real JavaScript
→ Use the built-in sort() with a compare callback.


* Bubble Sort achieves O(n) only with the swapped optimization.
** Quick Sort space is O(log n) due to the recursion stack (for a good pivot strategy).
*/
