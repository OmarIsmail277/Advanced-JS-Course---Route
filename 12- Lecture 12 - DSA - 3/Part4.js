/*
╔══════════════════════════════════════════════════════════════╗
║          INSERTION SORT - SHIFTS COUNTER 📥                ║
╚══════════════════════════════════════════════════════════════╝

Given:

[8, 3, 5, 2]

Insertion Sort Idea:
- Assume the first element is already sorted.
- Pick the next element (current).
- Shift all larger elements one position to the right.
- Insert the current element into its correct position.
- Repeat until the whole array becomes sorted.

──────────────────────────────────────────────────────────────

// Insertion Sort - Shifts Counter
// Given [8, 3, 5, 2]. Apply Insertion Sort and Count the number of Shifts and Insertions.

──────────────────────────────────────────────────────────────

Initial:

[8, 3, 5, 2]

──────────────────────────────────────────────────────────────
PASS 1

Current = 3

8 > 3 ✔ Shift 8 to the right

[8, 8, 5, 2]

Insert 3

[3, 8, 5, 2]

Shifts: 1
Insertions: 1

──────────────────────────────────────────────────────────────
PASS 2

Current = 5

8 > 5 ✔ Shift 8

[3, 8, 8, 2]

3 > 5 ✖ Stop

Insert 5

[3, 5, 8, 2]

Shifts: 1
Insertions: 1

──────────────────────────────────────────────────────────────
PASS 3

Current = 2

8 > 2 ✔ Shift

[3, 5, 8, 8]

5 > 2 ✔ Shift

[3, 5, 5, 8]

3 > 2 ✔ Shift

[3, 3, 5, 8]

Insert 2

[2, 3, 5, 8]

Shifts: 3
Insertions: 1

──────────────────────────────────────────────────────────────

Final Result:

[2, 3, 5, 8]

──────────────────────────────────────────────────────────────

Total Shifts:

1 + 1 + 3 = 5

Total Insertions:

3

──────────────────────────────────────────────────────────────

Code
*/

function insertionSort(arr) {
  const result = [...arr];

  let shifts = 0;
  let insertions = 0;

  for (let i = 1; i < result.length; i++) {
    const current = result[i];
    let j = i - 1;

    while (j >= 0 && result[j] > current) {
      result[j + 1] = result[j]; // shift to the right
      shifts++;
      j--;
    }

    result[j + 1] = current; // insert current
    insertions++;

    console.log(`Pass ${i}:`, result);
  }

  console.log("\nFinal:", result);
  console.log("Shifts:", shifts);
  console.log("Insertions:", insertions);

  return result;
}

insertionSort([8, 3, 5, 2]);

/*
Output

Pass 1:
[3, 8, 5, 2]

Pass 2:
[3, 5, 8, 2]

Pass 3:
[2, 3, 5, 8]

Final:
[2, 3, 5, 8]

Shifts: 5
Insertions: 3

💡 Interview Tip

Difference between a Shift and an Insertion:

Shift:
Move an existing element one position to the right.

result[j + 1] = result[j];

Insertion:
Place the current element into its final correct position.

result[j + 1] = current;

Remember:
• One insertion happens every pass.
• A pass may perform zero, one, or many shifts.
*/
