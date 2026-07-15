/*
╔══════════════════════════════════════════════════════════════╗
║                  SORTING ALGORITHMS 🔃                      ║
╚══════════════════════════════════════════════════════════════╝

Sorting means arranging data according to a specific rule.

Common examples:

✓ Ascending order (Small → Large)

✓ Descending order (Large → Small)

✓ Sort by price

✓ Sort by grade

✓ Sort by age

✓ Sort alphabetically

Sorting is one of the most common operations in programming
and is the foundation of many other algorithms
(such as Binary Search).


╔══════════════════════════════════════════════════════════════╗
║           THE BASIC IDEA OF SORTING 💡                      ║
╚══════════════════════════════════════════════════════════════╝

Most comparison-based sorting algorithms follow
the same general idea:

1️⃣ Compare two elements.

2️⃣ If they are in the wrong order,
    swap (or shift) them.

3️⃣ Repeat until the array becomes sorted.

Different sorting algorithms differ mainly in
HOW they compare elements and HOW they move them.


╔══════════════════════════════════════════════════════════════╗
║                 BUBBLE SORT 🫧                              ║
╚══════════════════════════════════════════════════════════════╝

Bubble Sort is one of the simplest sorting algorithms.

Idea:

Compare every element with the element immediately
after it.

If the left element is larger than the right one,

👉 Swap them.

This process continues until the array is sorted.

💡 Why is it called "Bubble Sort"?

Because after every pass,

the largest unsorted element "bubbles up"
to its correct position at the end of the array. 🎈


╔══════════════════════════════════════════════════════════════╗
║                    EXAMPLE 🔍                               ║
╚══════════════════════════════════════════════════════════════╝
*/

const arr = [4, 2, 7, 1];

/*
Initial array:

[4, 2, 7, 1]

--------------------------------------------------------------

Pass 1

Compare:

4 > 2

✅ Swap

[2, 4, 7, 1]

↓

Compare:

4 > 7

❌ Keep

[2, 4, 7, 1]

↓

Compare:

7 > 1

✅ Swap

[2, 4, 1, 7]

🎉 Largest element (7) reached its final position.

--------------------------------------------------------------

Pass 2

Compare:

2 > 4

❌ Keep

↓

Compare:

4 > 1

✅ Swap

[2, 1, 4, 7]

↓

Compare:

4 > 7

❌ Keep

🎉 The second-largest element (4) is now in its final position.

--------------------------------------------------------------

Pass 3

Compare:

2 > 1

✅ Swap

[1, 2, 4, 7]

The array is now completely sorted.

Notice:

After every pass,

one more element reaches its correct position
at the end of the array.


╔══════════════════════════════════════════════════════════════╗
║               IMPLEMENTATION 💻                             ║
╚══════════════════════════════════════════════════════════════╝
*/

function bubbleSort(arr) {
  // Number of passes
  for (let i = 0; i < arr.length; i++) {
    // Compare adjacent elements
    // (Could be optimized to: arr.length - 1 - i)
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

/*
💡 Technical Note

The inner loop is usually written as:

j < arr.length - 1 - i

instead of:

j < arr.length - 1

Why?

Because after each pass,

the largest element is already in its correct position.

There is no need to compare it again.

This reduces unnecessary comparisons,
although the worst-case complexity remains O(n²).


╔══════════════════════════════════════════════════════════════╗
║              OPTIMIZATION 🚀                                ║
╚══════════════════════════════════════════════════════════════╝

Suppose the array is already sorted:

[1, 2, 3, 4, 5]

Should Bubble Sort continue making
all remaining passes?

❌ No.

If an entire pass finishes without performing
a single swap,

the array is already sorted.

We can stop immediately.

That's where the "swapped" flag comes in.
*/

function optimizedBubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }

    // No swaps?
    // The array is already sorted.
    if (!swapped) break;
  }

  return arr;
}

/*
This optimization doesn't improve
the worst-case complexity,

but it greatly improves the best case.


╔══════════════════════════════════════════════════════════════╗
║            TIME & SPACE COMPLEXITY ⏱️                       ║
╚══════════════════════════════════════════════════════════════╝

Worst Case:

O(n²)

Example:

Reverse sorted array.

--------------------------------------------------------------

Average Case:

O(n²)

--------------------------------------------------------------

Best Case (Optimized Version):

O(n)

When the array is already sorted,
only one pass is needed.

--------------------------------------------------------------

Space Complexity:

O(1)

Bubble Sort sorts the array in-place
without creating another array.


╔══════════════════════════════════════════════════════════════╗
║             ADVANTAGES & DISADVANTAGES ⚖️                   ║
╚══════════════════════════════════════════════════════════════╝

✅ Advantages

• Very easy to understand.
• Easy to implement.
• Good for learning sorting concepts.

❌ Disadvantages

• Very slow for large datasets.
• Makes many unnecessary comparisons.
• Rarely used in real-world applications because
  much faster algorithms exist (Merge Sort, Quick Sort, etc.).


╔══════════════════════════════════════════════════════════════╗
║              INTERVIEW QUESTIONS 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: Why is it called Bubble Sort?

A:
Because after each pass, the largest unsorted element
"bubbles" to the end of the array.


Q: Why do we use the "swapped" flag?

A:
To detect if the array is already sorted.
If no swaps occur during a pass, we stop early,
avoiding unnecessary work.


Q: Is Bubble Sort an in-place algorithm?

A:
Yes.

It sorts the array without using additional arrays,
so its Space Complexity is O(1).


💡 Golden Rule

🫧 Bubble Sort repeatedly compares adjacent elements
and swaps them when necessary.

After every pass,

🎈 The largest remaining element reaches
its correct position at the end of the array.

Simple to learn...

but not the algorithm you'd typically choose
for large datasets. 🚀
*/
