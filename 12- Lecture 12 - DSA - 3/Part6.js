/*
╔══════════════════════════════════════════════════════════════╗
║        LINEAR SEARCH - ALL OCCURRENCES 🔍                  ║
╚══════════════════════════════════════════════════════════════╝

Given:

[4, 2, 7, 2, 9, 2]

Target:

2

Unlike the normal Linear Search, which returns the first occurrence,
this version searches the entire array and returns ALL indices where
the target appears.

──────────────────────────────────────────────────────────────

Trace

Index 0 → 4 ✖

Indices:
[]

──────────────────────────────────────────────────────────────

Index 1 → 2 ✔ Found

Indices:
[1]

──────────────────────────────────────────────────────────────

Index 2 → 7 ✖

Indices:
[1]

──────────────────────────────────────────────────────────────

Index 3 → 2 ✔ Found

Indices:
[1, 3]

──────────────────────────────────────────────────────────────

Index 4 → 9 ✖

Indices:
[1, 3]

──────────────────────────────────────────────────────────────

Index 5 → 2 ✔ Found

Indices:
[1, 3, 5]

──────────────────────────────────────────────────────────────

Final Result:

[1, 3, 5]

──────────────────────────────────────────────────────────────

Code
*/

function linearSearch(arr, target) {
  const indices = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indices.push(i);
    }
  }

  return indices;
}

console.log(linearSearch([4, 2, 7, 2, 9, 2], 2));

/*
Output

[1, 3, 5]

──────────────────────────────────────────────────────────────

Time Complexity

Best Case:
O(n)

Average Case:
O(n)

Worst Case:
O(n)

Why?

Even if the first element matches, we CANNOT stop because there
may be more occurrences later in the array.

We must scan the entire array.

──────────────────────────────────────────────────────────────

Space Complexity

Worst Case:
O(n)

Example:

[2, 2, 2, 2, 2]

All indices are stored:

[0, 1, 2, 3, 4]

If no element matches:

[]

Space Complexity becomes O(1).

──────────────────────────────────────────────────────────────

💡 Interview Tip

There are two common versions of Linear Search:

1. Return the first occurrence.
   → Stop immediately when found.

2. Return all occurrences.
   → Traverse the entire array and collect every matching index.
*/
