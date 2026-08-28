/*
╔══════════════════════════════════════════════════════════════╗
║                    MERGE SORT 🚀                            ║
╚══════════════════════════════════════════════════════════════╝

Merge Sort is one of the most important
sorting algorithms.

Unlike Bubble, Selection, and Insertion Sort,

it does NOT repeatedly swap elements.

Instead, it follows a strategy called:

✨ Divide and Conquer

The idea is simple:

1️⃣ Divide the array into two halves.

2️⃣ Keep dividing until each array contains
only one element.

3️⃣ Merge the small sorted arrays together
while keeping them sorted.

Since an array of one element is already sorted,
we can gradually build the final sorted array.


╔══════════════════════════════════════════════════════════════╗
║               DIVIDE & CONQUER 🪓                           ║
╚══════════════════════════════════════════════════════════════╝

Example:

[5, 2, 8, 1]

↓

Split

[5, 2]      [8, 1]

↓

Split again

[5] [2]     [8] [1]

At this point,

every array has one element,

so they're all considered sorted.

Now comes the merge phase.


╔══════════════════════════════════════════════════════════════╗
║                 MERGING 🧩                                  ║
╚══════════════════════════════════════════════════════════════╝

Merge:

[5] + [2]

↓

Compare

5 vs 2

↓

Take 2

↓

Take 5

↓

[2, 5]

--------------------------------------------------------------

Merge:

[8] + [1]

↓

Compare

8 vs 1

↓

Take 1

↓

Take 8

↓

[1, 8]

--------------------------------------------------------------

Final Merge

[2, 5]

+

[1, 8]

↓

Compare

2 vs 1

↓

Take 1

↓

Compare

2 vs 8

↓

Take 2

↓

Compare

5 vs 8

↓

Take 5

↓

Take remaining 8

↓

[1, 2, 5, 8]

🎉 Sorted!


╔══════════════════════════════════════════════════════════════╗
║              IMPLEMENTATION 💻                              ║
╚══════════════════════════════════════════════════════════════╝
*/

function mergeSort(arr) {
  // Base case:
  // Arrays of size 0 or 1 are already sorted.
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);

  // Recursively sort both halves.
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  // Merge the two sorted halves.
  return merge(left, right);
}

function merge(left, right) {
  const result = [];

  let i = 0;
  let j = 0;

  // Compare elements from both arrays.
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Append any remaining elements.
  return result.concat(left.slice(i), right.slice(j));
}

/*
╔══════════════════════════════════════════════════════════════╗
║            WHY IS MERGE SORT FAST? ⚡                        ║
╚══════════════════════════════════════════════════════════════╝

Merge Sort repeatedly cuts the problem in half.

Example:

8 elements

↓

4

↓

2

↓

1

This repeated halving contributes:

log n

Then,

during every merge level,

all n elements are processed once.

So the total work becomes:

n × log n

Time Complexity:

✅ O(n log n)

Much better than:

Bubble Sort

Selection Sort

Insertion Sort

which all have

O(n²)

in the average and worst cases.


╔══════════════════════════════════════════════════════════════╗
║           TIME COMPLEXITY ANALYSIS ⏱️                       ║
╚══════════════════════════════════════════════════════════════╝

Worst Case:

O(n log n)

--------------------------------------------------------------

Average Case:

O(n log n)

--------------------------------------------------------------

Best Case:

O(n log n)

💡 Unlike Bubble Sort,

Merge Sort always divides and merges,
even if the array is already sorted.


╔══════════════════════════════════════════════════════════════╗
║             SPACE COMPLEXITY 💾                             ║
╚══════════════════════════════════════════════════════════════╝

Merge Sort creates:

✓ New arrays using slice()

✓ A temporary result array while merging

This requires additional memory.

Space Complexity:

✅ O(n)

Because of this,

Merge Sort is generally NOT an in-place
sorting algorithm.


╔══════════════════════════════════════════════════════════════╗
║          PRACTICAL ADVANTAGES & DRAWBACKS ⚖️                ║
╚══════════════════════════════════════════════════════════════╝

Advantages

✅ Very fast for large datasets.

✅ Guaranteed O(n log n) performance.

✅ Stable sort
(equal elements keep their relative order).

--------------------------------------------------------------

Drawbacks

❌ Requires extra memory.

❌ Creates many temporary arrays.

❌ On very large datasets, the extra memory
usage may increase pressure on the application's
memory (though saying it will "freeze apps" is an
overstatement—it depends on the available memory
and the environment).


╔══════════════════════════════════════════════════════════════╗
║              INTERVIEW QUESTIONS 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: What strategy does Merge Sort use?

A:

Divide and Conquer.

--------------------------------------------------------------

Q: Is Merge Sort recursive?

A:

Yes.

It recursively divides the array,
then merges the sorted halves.

--------------------------------------------------------------

Q: Why is Merge Sort O(n log n)?

A:

Because:

• The array is divided log n times.

• Each merge processes all n elements.

Together:

O(n log n)

--------------------------------------------------------------

Q: What is the biggest disadvantage of Merge Sort?

A:

Its extra memory usage.

Space Complexity:

O(n)


💡 Golden Rule

🚀 Merge Sort doesn't sort by swapping.

Instead, it:

Divide ➜ Sort ➜ Merge

It is one of the fastest general-purpose sorting algorithms,

trading extra memory for consistently excellent performance.
*/
