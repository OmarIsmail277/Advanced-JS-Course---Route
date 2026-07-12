// Sorting Strings
// Sort the array ["banana", "apple", "orange", "grapes"] using Insertion Sort.

/*
╔══════════════════════════════════════════════════════════════╗
║            INSERTION SORT - SORTING STRINGS 🍎             ║
╚══════════════════════════════════════════════════════════════╝

Given:

["banana", "apple", "orange", "grapes"]

Insertion Sort works exactly the same with strings.

JavaScript compares strings lexicographically (dictionary order).

"a" < "b" < "c" < ...

──────────────────────────────────────────────────────────────

Initial:

["banana", "apple", "orange", "grapes"]

──────────────────────────────────────────────────────────────
PASS 1

Current = "apple"

Compare:

"banana" > "apple" ✔ Shift

["banana", "banana", "orange", "grapes"]

Insert "apple"

["apple", "banana", "orange", "grapes"]

──────────────────────────────────────────────────────────────
PASS 2

Current = "orange"

Compare:

"banana" > "orange" ✖

No shifts needed.

Insert "orange" (same position)

["apple", "banana", "orange", "grapes"]

──────────────────────────────────────────────────────────────
PASS 3

Current = "grapes"

Compare:

"orange" > "grapes" ✔ Shift

["apple", "banana", "orange", "orange"]

Compare:

"banana" > "grapes" ✖

Insert "grapes"

["apple", "banana", "grapes", "orange"]

──────────────────────────────────────────────────────────────

Final Result:

["apple", "banana", "grapes", "orange"]

──────────────────────────────────────────────────────────────

Code
*/

function insertionSortStrings(arr) {
  const result = [...arr];

  let shifts = 0;
  let insertions = 0;

  for (let i = 1; i < result.length; i++) {
    const current = result[i];
    let j = i - 1;

    while (j >= 0 && result[j] > current) {
      result[j + 1] = result[j];
      shifts++;
      j--;
    }

    result[j + 1] = current;
    insertions++;

    console.log(`Pass ${i}:`, result);
  }

  console.log("\nFinal:", result);
  console.log("Shifts:", shifts);
  console.log("Insertions:", insertions);

  return result;
}

insertionSortStrings(["banana", "apple", "orange", "grapes"]);

/*
Output

Pass 1:
["apple", "banana", "orange", "grapes"]

Pass 2:
["apple", "banana", "orange", "grapes"]

Pass 3:
["apple", "banana", "grapes", "orange"]

Final:
["apple", "banana", "grapes", "orange"]

Shifts: 2
Insertions: 3

──────────────────────────────────────────────────────────────

💡 Interview Tip

Insertion Sort doesn't care whether the array contains:

✔ Numbers
✔ Strings
✔ Dates
✔ Objects (using a comparison property)

It only needs a way to compare two values.

For strings, JavaScript compares them lexicographically
(alphabetically based on Unicode values).
*/
