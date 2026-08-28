/*
╔══════════════════════════════════════════════════════════════╗
║          SELECTION SORT - INDEX FOCUS 🎯                   ║
╚══════════════════════════════════════════════════════════════╝

Given:

[29, 10, 14, 37, 13]

Selection Sort Idea:
- Assume the current index contains the minimum element.
- Search the remaining unsorted part of the array.
- If a smaller element is found, update minIndex.
- At the end of the pass, perform ONE swap.
- After every pass, the left part of the array becomes sorted.

──────────────────────────────────────────────────────────────

Initial:

[29, 10, 14, 37, 13]

──────────────────────────────────────────────────────────────
PASS 1

Starting Index: 0
Current Minimum: 29 (index 0)

Compare:
10 < 29 ✔ → New Minimum = 10 (index 1)

14 < 10 ✖

37 < 10 ✖

13 < 10 ✖

Swap:

index 0 ↔ index 1
29 ↔ 10

Array:

[10, 29, 14, 37, 13]

Minimum Selected:
10

──────────────────────────────────────────────────────────────
PASS 2

Starting Index: 1
Current Minimum: 29 (index 1)

Compare:
14 < 29 ✔ → New Minimum = 14 (index 2)

37 < 14 ✖

13 < 14 ✔ → New Minimum = 13 (index 4)

Swap:

index 1 ↔ index 4
29 ↔ 13

Array:

[10, 13, 14, 37, 29]

Minimum Selected:
13

──────────────────────────────────────────────────────────────
PASS 3

Starting Index: 2
Current Minimum: 14 (index 2)

Compare:
37 < 14 ✖

29 < 14 ✖

Minimum never changed.

Swap:

index 2 ↔ index 2
(No actual change)

Array:

[10, 13, 14, 37, 29]

Minimum Selected:
14

──────────────────────────────────────────────────────────────
PASS 4

Starting Index: 3
Current Minimum: 37 (index 3)

Compare:
29 < 37 ✔ → New Minimum = 29 (index 4)

Swap:

index 3 ↔ index 4
37 ↔ 29

Array:

[10, 13, 14, 29, 37]

Minimum Selected:
29

──────────────────────────────────────────────────────────────

Final Result:

[10, 13, 14, 29, 37]

──────────────────────────────────────────────────────────────

Summary

Pass 1 → Swap index 0 with index 1

Pass 2 → Swap index 1 with index 4

Pass 3 → Swap index 2 with index 2 (no change)

Pass 4 → Swap index 3 with index 4

──────────────────────────────────────────────────────────────

Code
*/

function selectionSort(arr) {
  const result = [...arr];

  let comparisons = 0;
  let swaps = 0;

  for (let i = 0; i < result.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < result.length; j++) {
      comparisons++;

      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }

    console.log(
      `Pass ${i + 1}: Minimum = ${result[minIndex]} (index ${minIndex})`,
    );

    if (minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]];
      swaps++;
    }

    console.log(result);
  }

  console.log("\nFinal:", result);
  console.log("Comparisons:", comparisons);
  console.log("Swaps:", swaps);

  return result;
}

selectionSort([29, 10, 14, 37, 13]);

/*
Output

Pass 1: Minimum = 10 (index 1)
[10, 29, 14, 37, 13]

Pass 2: Minimum = 13 (index 4)
[10, 13, 14, 37, 29]

Pass 3: Minimum = 14 (index 2)
[10, 13, 14, 37, 29]

Pass 4: Minimum = 29 (index 4)
[10, 13, 14, 29, 37]

Final: [10, 13, 14, 29, 37]

Comparisons: 10
Swaps: 3

💡 Interview Tip

Unlike Bubble Sort:

• Bubble Sort performs many swaps.

• Selection Sort performs at most ONE swap per pass,
  making it useful when swapping elements is expensive.

Remember:

Bubble Sort  → Many swaps 🫧

Selection Sort → Many comparisons, Few swaps 🎯
*/
