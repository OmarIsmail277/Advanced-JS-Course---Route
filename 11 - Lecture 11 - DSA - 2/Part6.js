/*
╔══════════════════════════════════════════════════════════════╗
║              INSERTION SORT 🃏                              ║
╚══════════════════════════════════════════════════════════════╝

Insertion Sort works similarly to the way
most people sort playing cards in their hands.

You pick one card at a time,

then insert it into its correct position
among the already sorted cards.

✨ Main Idea

Divide the array into two parts:

✅ Sorted Part

✅ Unsorted Part

Initially,

the first element is considered sorted.

Then, one element at a time,

take the next element and insert it
into its correct position inside
the sorted section.


╔══════════════════════════════════════════════════════════════╗
║                   TRACE THE EXAMPLE 📝                      ║
╚══════════════════════════════════════════════════════════════╝

Initial array:

[5, 2, 4, 1]

--------------------------------------------------------------

Pass 1

Sorted:

[5]

Current:

2

5 > 2

Shift 5 to the right.

↓

[5, 5, 4, 1]

Insert 2.

↓

[2, 5, 4, 1]

--------------------------------------------------------------

Pass 2

Sorted:

[2, 5]

Current:

4

5 > 4

Shift 5.

↓

[2, 5, 5, 1]

Insert 4.

↓

[2, 4, 5, 1]

--------------------------------------------------------------

Pass 3

Sorted:

[2, 4, 5]

Current:

1

Shift 5

↓

Shift 4

↓

Shift 2

↓

Insert 1

↓

[1, 2, 4, 5]

🎉 Array sorted!


╔══════════════════════════════════════════════════════════════╗
║                IMPLEMENTATION 💻                            ║
╚══════════════════════════════════════════════════════════════╝
*/

function insertionSort(arr) {
  // Create a copy so the original array isn't modified.
  const result = [...arr];

  // Start from the second element.
  // The first element is already considered sorted.
  for (let i = 1; i < result.length; i++) {
    const current = result[i];
    let j = i - 1;

    // Shift larger elements one position to the right.
    while (j >= 0 && result[j] > current) {
      result[j + 1] = result[j];
      j--;
    }

    // Insert the current element
    // into its correct position.
    result[j + 1] = current;
  }

  return result;
}

/*
💡 Technical Fix

The original code contained this line:

❌ result[j + 1] = result[i];

This is incorrect because it repeatedly copies
the original current value instead of shifting
the previous elements.

The correct line is:

✅ result[j + 1] = result[j];

We shift the larger element to the right,
creating space for "current".


╔══════════════════════════════════════════════════════════════╗
║          WHY DOES INSERTION SORT WORK? 🤔                   ║
╚══════════════════════════════════════════════════════════════╝

At every iteration,

everything to the left of "i"
is already sorted.

We only need to find where the current
element belongs,

shift the larger elements,

then insert it.

Unlike Bubble Sort,

we're inserting an element,

not repeatedly swapping adjacent elements.


╔══════════════════════════════════════════════════════════════╗
║           TIME COMPLEXITY ANALYSIS ⏱️                       ║
╚══════════════════════════════════════════════════════════════╝

Worst Case

Example:

[5, 4, 3, 2, 1]

Every new element must be shifted
all the way to the beginning.

Time Complexity:

✅ O(n²)

--------------------------------------------------------------

Average Case

Some shifting is required.

Time Complexity:

✅ O(n²)

--------------------------------------------------------------

Best Case

Example:

[1, 2, 3, 4, 5]

No shifting is needed.

Each element is checked only once.

Time Complexity:

✅ O(n)

This makes Insertion Sort much faster than
Selection Sort on nearly sorted arrays.


╔══════════════════════════════════════════════════════════════╗
║             SPACE COMPLEXITY 💾                             ║
╚══════════════════════════════════════════════════════════════╝

This implementation creates:

const result = [...arr];

Therefore:

Space Complexity:

✅ O(n)

--------------------------------------------------------------

If we sorted the original array directly,

Space Complexity would become:

✅ O(1)


╔══════════════════════════════════════════════════════════════╗
║      INSERTION vs BUBBLE vs SELECTION ⚔️                    ║
╚══════════════════════════════════════════════════════════════╝

Bubble Sort

✓ Repeatedly swaps adjacent elements.

--------------------------------------------------------------

Selection Sort

✓ Finds the smallest element,
then performs one swap.

--------------------------------------------------------------

Insertion Sort

✓ Shifts elements.

✓ Inserts each element into its
correct position.

✓ Excellent for nearly sorted arrays.

✓ Best Case:

O(n)


╔══════════════════════════════════════════════════════════════╗
║              INTERVIEW QUESTIONS 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: Why does Insertion Sort start from index 1?

A:

Because the first element is already
considered a sorted array of one element.


Q: Does Insertion Sort swap elements?

A:

Not usually.

It mainly shifts larger elements
to the right, then inserts the current
element into its correct position.


Q: When is Insertion Sort a good choice?

A:

When the dataset is small
or already (or nearly) sorted,

because its best-case time complexity
is O(n).


💡 Golden Rule

🃏 Insertion Sort builds the sorted array
one element at a time.

Instead of swapping,

it shifts larger elements and inserts
the current element into its proper place.

It's one of the fastest simple sorting algorithms
for nearly sorted data. 🚀
*/
