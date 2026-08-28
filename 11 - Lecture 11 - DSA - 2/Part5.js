/*
╔══════════════════════════════════════════════════════════════╗
║           SELECTION SORT - REVISIT 🎯                       ║
╚══════════════════════════════════════════════════════════════╝

Let's revisit Selection Sort and analyze
how it works, along with its time and space complexity.

✨ Main Idea

Instead of swapping every time we find
a smaller element,

Selection Sort:

1️⃣ Searches for the smallest element in the
    unsorted portion of the array.

2️⃣ Remembers its index.

3️⃣ Performs ONLY ONE swap at the end of the pass.

After every pass,

the smallest remaining element is placed
in its correct sorted position.


╔══════════════════════════════════════════════════════════════╗
║                    IMPLEMENTATION 💻                        ║
╚══════════════════════════════════════════════════════════════╝
*/

function selectionSort(arr) {
  // Create a copy so the original array isn't modified.
  const result = [...arr];

  for (let i = 0; i < result.length - 1; i++) {
    let minIndex = i;

    // Search for the smallest element.
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }

    // Swap only once per pass.
    if (minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]];
    }
  }

  return result;
}

/*

╔══════════════════════════════════════════════════════════════╗
║                    EXAMPLE 📝                               ║
╚══════════════════════════════════════════════════════════════╝

Initial array:

[4, 2, 7, 1]

--------------------------------------------------------------

Pass 1

Smallest = 1

Swap with 4

↓

[1, 2, 7, 4]

--------------------------------------------------------------

Pass 2

Smallest = 2

Already in the correct position.

↓

[1, 2, 7, 4]

--------------------------------------------------------------

Pass 3

Smallest = 4

Swap with 7

↓

[1, 2, 4, 7]

🎉 Sorted!


╔══════════════════════════════════════════════════════════════╗
║           TIME COMPLEXITY ANALYSIS ⏱️                       ║
╚══════════════════════════════════════════════════════════════╝

Worst Case:

O(n²)

--------------------------------------------------------------

Average Case:

O(n²)

--------------------------------------------------------------

Best Case:

O(n²)

💡 Even if the array is already sorted,

Selection Sort still scans the remaining
unsorted elements looking for the minimum.

Unlike optimized Bubble Sort,

it cannot stop early.


╔══════════════════════════════════════════════════════════════╗
║            SPACE COMPLEXITY 💾                              ║
╚══════════════════════════════════════════════════════════════╝

This implementation creates:

const result = [...arr];

Therefore,

Extra memory grows with the input size.

Space Complexity:

✅ O(n)

--------------------------------------------------------------

If we sorted the original array directly
(without copying),

Space Complexity would become:

✅ O(1)


╔══════════════════════════════════════════════════════════════╗
║        BUBBLE SORT vs SELECTION SORT ⚔️                     ║
╚══════════════════════════════════════════════════════════════╝

Bubble Sort

✓ Swaps many times.

✓ Can stop early (optimized version).

✓ Best Case:

O(n)

--------------------------------------------------------------

Selection Sort

✓ Performs fewer swaps.

✓ Always scans the remaining elements.

✓ Best Case:

O(n²)

💡 Both algorithms have the same
worst-case complexity,

but Selection Sort usually performs
fewer swaps, while Bubble Sort
may perform many more.


💡 Golden Rule

🎯 Selection Sort searches for the smallest
remaining element,

then places it in its correct position
using one swap per pass.

Simple to understand,

but still inefficient for large datasets
compared to more advanced sorting algorithms. 🚀
*/
