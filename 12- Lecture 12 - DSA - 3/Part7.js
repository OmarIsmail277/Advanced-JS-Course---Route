// Binary Search - Manual Trace
// Given the sorted array [2,4,6,8,10,12,14], search for 10 and write low, high and mid values at each step.

/*
╔══════════════════════════════════════════════════════════════╗
║         BINARY SEARCH - MANUAL TRACE 🔎                    ║
╚══════════════════════════════════════════════════════════════╝

Given:

[2, 4, 6, 8, 10, 12, 14]

Target:

10

Binary Search Idea:
- The array MUST be sorted.
- Check the middle element.
- If the target is greater, search the right half.
- If the target is smaller, search the left half.
- Repeat until the target is found or the search range becomes empty.

──────────────────────────────────────────────────────────────

Initial

Low = 0
High = 6

──────────────────────────────────────────────────────────────

STEP 1

Array:

[2, 4, 6, 8, 10, 12, 14]
 L                 H

mid = Math.floor((0 + 6) / 2) = 3

arr[mid] = 8

Target = 10

10 > 8 ✔

Discard the left half.

Update:

Low = mid + 1 = 4
High = 6

──────────────────────────────────────────────────────────────

STEP 2

Array:

[2, 4, 6, 8, 10, 12, 14]
            L       H

mid = Math.floor((4 + 6) / 2) = 5

arr[mid] = 12

Target = 10

10 < 12 ✔

Discard the right half.

Update:

Low = 4
High = mid - 1 = 4

──────────────────────────────────────────────────────────────

STEP 3

Array:

[2, 4, 6, 8, 10, 12, 14]
            L
            H

mid = Math.floor((4 + 4) / 2) = 4

arr[mid] = 10 ✔

Target Found!

Return index 4.

──────────────────────────────────────────────────────────────

Summary

Step 1

Low  = 0
High = 6
Mid  = 3
Value = 8

Target > 8
Move Right

──────────────────────────────────────────────────────────────

Step 2

Low  = 4
High = 6
Mid  = 5
Value = 12

Target < 12
Move Left

──────────────────────────────────────────────────────────────

Step 3

Low  = 4
High = 4
Mid  = 4
Value = 10

Target Found ✅

──────────────────────────────────────────────────────────────

Code
*/

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    console.log(`Low=${low}, High=${high}, Mid=${mid}, Value=${arr[mid]}`);

    if (arr[mid] === target) {
      return mid;
    }

    if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([2, 4, 6, 8, 10, 12, 14], 10));

/*
Output

Low=0, High=6, Mid=3, Value=8
Low=4, High=6, Mid=5, Value=12
Low=4, High=4, Mid=4, Value=10

4

──────────────────────────────────────────────────────────────

Time Complexity

Best Case:
O(1)

Average Case:
O(log n)

Worst Case:
O(log n)

Space Complexity:
O(1)

──────────────────────────────────────────────────────────────

💡 Interview Tip

Every iteration cuts the search space in half.

Example:

7 elements
↓
3 elements
↓
1 element

This is why Binary Search is much faster than Linear Search
for large sorted datasets.
*/
