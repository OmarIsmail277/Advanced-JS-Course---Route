// 1. Bubble Sort - Step Tracking

// Given the array [5,3,8,4,2], apply Bubble Sort and write the array after each pass.
// Count the number of comparisons and swaps.

/*
╔══════════════════════════════════════════════════════════════╗
║              BUBBLE SORT - STEP TRACKING 🫧                 ║
╚══════════════════════════════════════════════════════════════╝

Given:

[5, 3, 8, 4, 2]

Bubble Sort Idea:
- Compare adjacent elements.
- If left > right → swap.
- At the end of every pass, the largest element reaches its correct position.

──────────────────────────────────────────────────────────────

Initial:

[5, 3, 8, 4, 2]

──────────────────────────────────────────────────────────────
PASS 1

5 > 3 ✔ swap
[3, 5, 8, 4, 2]

5 > 8 ✖
[3, 5, 8, 4, 2]

8 > 4 ✔ swap
[3, 5, 4, 8, 2]

8 > 2 ✔ swap
[3, 5, 4, 2, 8]

Largest element (8) is now fixed.

Comparisons: 4
Swaps: 3

──────────────────────────────────────────────────────────────
PASS 2

3 > 5 ✖
[3, 5, 4, 2, 8]

5 > 4 ✔ swap
[3, 4, 5, 2, 8]

5 > 2 ✔ swap
[3, 4, 2, 5, 8]

Largest remaining element (5) is fixed.

Comparisons: 3
Swaps: 2

──────────────────────────────────────────────────────────────
PASS 3

3 > 4 ✖
[3, 4, 2, 5, 8]

4 > 2 ✔ swap
[3, 2, 4, 5, 8]

Largest remaining element (4) is fixed.

Comparisons: 2
Swaps: 1

──────────────────────────────────────────────────────────────
PASS 4

3 > 2 ✔ swap
[2, 3, 4, 5, 8]

Array is now completely sorted.

Comparisons: 1
Swaps: 1

──────────────────────────────────────────────────────────────

Final Result:

[2, 3, 4, 5, 8]

──────────────────────────────────────────────────────────────

Total Comparisons:

4 + 3 + 2 + 1 = 10

Total Swaps:

3 + 2 + 1 + 1 = 7

──────────────────────────────────────────────────────────────

Code
*/
function bubbleSort(arr) {
  const result = [...arr];

  let comparisons = 0;
  let swaps = 0;

  for (let i = 0; i < result.length - 1; i++) {
    let swapped = false;

    console.log(`\nPass ${i + 1}`);

    for (let j = 0; j < result.length - 1 - i; j++) {
      comparisons++;

      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];

        swaps++;
        swapped = true;
      }

      console.log(result);
    }

    if (!swapped) break;
  }

  console.log("\nFinal:", result);
  console.log("Comparisons:", comparisons);
  console.log("Swaps:", swaps);

  return result;
}

bubbleSort([5, 3, 8, 4, 2]);

/*
Output

Pass 1
[3, 5, 8, 4, 2]
[3, 5, 8, 4, 2]
[3, 5, 4, 8, 2]
[3, 5, 4, 2, 8]

Pass 2
[3, 5, 4, 2, 8]
[3, 4, 5, 2, 8]
[3, 4, 2, 5, 8]

Pass 3
[3, 4, 2, 5, 8]
[3, 2, 4, 5, 8]

Pass 4
[2, 3, 4, 5, 8]

Final: [2, 3, 4, 5, 8]
Comparisons: 10
Swaps: 7

💡 Interview Tip

You don't have to manually count comparisons and swaps.
Simply increment:

comparisons++;

before every comparison, and

swaps++;

after every successful swap.

This is the standard way to analyze sorting algorithms during interviews.
*/
