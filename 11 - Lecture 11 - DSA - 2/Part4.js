/*
╔══════════════════════════════════════════════════════════════╗
║            BUBBLE SORT - DEEPER ANALYSIS 🫧                 ║
╚══════════════════════════════════════════════════════════════╝

Let's revisit Bubble Sort and understand
WHY it works and how its performance is analyzed.

Remember the golden idea:

✨ At the end of every pass (iteration),
the largest unsorted element reaches
its correct position at the end of the array.


╔══════════════════════════════════════════════════════════════╗
║                    TRACE THE ALGORITHM 📝                   ║
╚══════════════════════════════════════════════════════════════╝

Initial array:

[4, 3, 8, 2]

--------------------------------------------------------------

Pass 1

[4, 3, 8, 2]

↓

4 > 3

Swap

↓

[3, 4, 8, 2]

↓

4 > 8

No Swap

↓

[3, 4, 8, 2]

↓

8 > 2

Swap

↓

[3, 4, 2, 8]

🎉 8 is now in its final sorted position.

--------------------------------------------------------------

Pass 2

[3, 4, 2, 8]

↓

3 > 4

No Swap

↓

[3, 4, 2, 8]

↓

4 > 2

Swap

↓

[3, 2, 4, 8]

🎉 4 is now in its final position.

--------------------------------------------------------------

Pass 3

[3, 2, 4, 8]

↓

3 > 2

Swap

↓

[2, 3, 4, 8]

🎉 Array sorted.

Notice that after every pass,

one more element becomes permanently sorted,
so we don't need to compare it again.


╔══════════════════════════════════════════════════════════════╗
║              IMPLEMENTATION 💻                              ║
╚══════════════════════════════════════════════════════════════╝
*/

function bubbleSort(arr) {
  // Create a copy so the original array isn't modified.
  const result = [...arr];

  // Number of passes.
  for (let i = 0; i < result.length; i++) {
    // Ignore the already sorted elements at the end.
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        // Traditional swap.
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
}

/*



╔══════════════════════════════════════════════════════════════╗
║             WHY "length - 1 - i"? 🤔                        ║
╚══════════════════════════════════════════════════════════════╝

After every pass,

the largest remaining element is already
in its correct position.

Example:

After Pass 1

[3, 4, 2, 8]

No need to compare with 8 again.

That's why the inner loop becomes shorter:

result.length - 1 - i

saving unnecessary comparisons.


╔══════════════════════════════════════════════════════════════╗
║           TIME COMPLEXITY ANALYSIS ⏱️                       ║
╚══════════════════════════════════════════════════════════════╝

Standard Bubble Sort

Worst Case:

O(n²)

--------------------------------------------------------------

Average Case:

O(n²)

--------------------------------------------------------------

Best Case:

Still O(n²)

Because the algorithm performs
all passes even if the array
is already sorted.


╔══════════════════════════════════════════════════════════════╗
║            SPACE COMPLEXITY 💾                              ║
╚══════════════════════════════════════════════════════════════╝

This implementation creates:

const result = [...arr];

A completely new array.

Extra memory grows with the input size.

Space Complexity:

✅ O(n)

--------------------------------------------------------------

If we sorted the original array directly
(without making a copy),

Space Complexity would become:

✅ O(1)

because no extra array would be allocated.


╔══════════════════════════════════════════════════════════════╗
║             OPTIMIZED BUBBLE SORT 🚀                        ║
╚══════════════════════════════════════════════════════════════╝
*/

function optimizedBubbleSort(arr) {
  const result = [...arr];

  for (let i = 0; i < result.length; i++) {
    let swapped = false;

    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        // ES6 destructuring swap.
        [result[j], result[j + 1]] = [result[j + 1], result[j]];

        swapped = true;
      }
    }

    // If no swaps happened,
    // the array is already sorted.
    if (!swapped) break;
  }

  return result;
}

/*
The "swapped" flag allows the algorithm
to stop early if the array becomes sorted.


╔══════════════════════════════════════════════════════════════╗
║      TIME COMPLEXITY (OPTIMIZED VERSION) 📈                 ║
╚══════════════════════════════════════════════════════════════╝

Worst Case:

O(n²)

--------------------------------------------------------------

Average Case:

O(n²)

--------------------------------------------------------------

Best Case:

O(n)

Why?

If the array is already sorted,

the first pass performs no swaps.

swapped remains false,

so the algorithm exits immediately.

Example:

[1, 2, 3, 4, 5]

↓

One pass

↓

Stop 🎉


╔══════════════════════════════════════════════════════════════╗
║              INTERVIEW QUESTIONS 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: Why do we subtract "i" from the inner loop?

A:
Because after each pass, the largest remaining element
is already in its correct position,
so there's no need to compare it again.


Q: Why use a "swapped" flag?

A:
To detect when the array is already sorted
and stop early, improving the best-case
time complexity from O(n²) to O(n).


Q: Why is the Space Complexity O(n) here?

A:
Because we created a copy of the original array.

Without copying,

Bubble Sort works in-place
with O(1) space.


💡 Golden Rule

🫧 Bubble Sort repeatedly swaps adjacent elements.

🎈 After every pass,
the largest unsorted element reaches
its final position.

🚀 Adding a "swapped" flag improves
the best case,

while copying the array increases
Space Complexity from O(1) to O(n).
*/
