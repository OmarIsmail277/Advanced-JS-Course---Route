/*
╔══════════════════════════════════════════════════════════════╗
║           SPACE COMPLEXITY - ARRAY OPERATIONS 💾           ║
╚══════════════════════════════════════════════════════════════╝

Given:

const arr = [15, 3, 9, 1, 20];

When talking about complexity, remember there are TWO things:

1. Time Complexity
   → How long the algorithm takes.

2. Space Complexity
   → How much EXTRA memory the algorithm uses.

The keyword here is EXTRA.
The input array itself is NOT counted.

──────────────────────────────────────────────────────────────
Built-in Methods
──────────────────────────────────────────────────────────────

arr.find(...)
→ Time: O(n)
→ Space: O(1)

Reason:
Loops through the array but doesn't create another one.

--------------------------------------------------------------

arr.includes(...)
→ Time: O(n)
→ Space: O(1)

Reason:
May check every element until the target is found.

--------------------------------------------------------------

arr.push(...)
arr.pop(...)
→ Time: O(1)
→ Space: O(1)

Reason:
Only work at the end of the array.

--------------------------------------------------------------

arr.shift(...)
arr.unshift(...)
→ Time: O(n)
→ Space: O(1)

Reason:
Every element has to move one position left or right.

──────────────────────────────────────────────────────────────
Example 1 - Copying an Array
──────────────────────────────────────────────────────────────
*/

function copyArray(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }

  return result;
}

/*
Extra memory:

result

Input:
[15, 3, 9, 1, 20]

Output:
[15, 3, 9, 1, 20]

We created another array with the same size.

Time Complexity:
O(n)

Space Complexity:
O(n)

Because the extra memory grows with the size of the input.

──────────────────────────────────────────────────────────────
Example 2 - Updating the Same Array
──────────────────────────────────────────────────────────────
*/

function updateArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
}

/*
Input:

[15, 3, 9, 1, 20]

After calling updateArray():

[30, 6, 18, 2, 40]

Notice:

No new array was created.

We only modified the existing one.

Time Complexity:
O(n)

Space Complexity:
O(1)

Because we only used the loop variable (i),
which takes constant memory regardless of array size.

──────────────────────────────────────────────────────────────
💡 Interview Tips

O(1) Space
✔ Modify the existing array.
✔ Use only a few variables.

Examples:

- Updating values
- Swapping two elements
- Finding the maximum
- Binary Search

--------------------------------------------------------------

O(n) Space
✔ Create another array/object/map/set whose size grows
with the input.

Examples:

- Copying an array
- filter()
- map()
- Merge Sort
- [...arr]

──────────────────────────────────────────────────────────────
Easy Rule to Remember 🎯

Did you create another data structure whose size depends
on the input?

YES → O(n)

NO → O(1)
*/
