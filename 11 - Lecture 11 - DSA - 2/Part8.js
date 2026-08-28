/*
╔══════════════════════════════════════════════════════════════╗
║             ADDITIONAL SORTING ALGORITHMS 🚀                ║
╚══════════════════════════════════════════════════════════════╝

After learning the basic sorting algorithms,

it's good to know that there are many
more sorting techniques.

Two common interview topics are:

• Quick Sort
• Counting Sort

You don't need to memorize every detail,
but you should understand the main idea
behind each one.


╔══════════════════════════════════════════════════════════════╗
║                    QUICK SORT ⚡                            ║
╚══════════════════════════════════════════════════════════════╝

Quick Sort also follows the idea of:

✨ Divide and Conquer

Instead of splitting the array into two equal halves
like Merge Sort,

it chooses one element called:

👉 Pivot

Then it partitions the array into:

• Left  → values smaller than the pivot.

• Right → values greater than (or equal to) the pivot.

Then the same process repeats recursively
for both sides.


╔══════════════════════════════════════════════════════════════╗
║                      EXAMPLE 📝                             ║
╚══════════════════════════════════════════════════════════════╝

Array:

[6, 3, 8, 2]

Choose the last element as the pivot:

Pivot = 2

Partition:

Left:

[]

Right:

[6, 3, 8]

Now the pivot (2) should be placed between them:

[]

2

[6, 3, 8]

Then recursively sort:

[6, 3, 8]

Choose pivot = 8

Left:

[6, 3]

Right:

[]

Repeat...

Eventually:

[2, 3, 6, 8]


╔══════════════════════════════════════════════════════════════╗
║             SIMPLE IMPLEMENTATION 💻                        ║
╚══════════════════════════════════════════════════════════════╝
*/

function quickSort(arr) {
  // Arrays with 0 or 1 element are already sorted.
  if (arr.length <= 1) return arr;

  // Choose the last element as the pivot.
  const pivot = arr[arr.length - 1];

  const left = [];
  const right = [];

  // Exclude the pivot itself from the loop.
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Left + Pivot + Right
  return [...quickSort(left), pivot, ...quickSort(right)];
}

/*
╔══════════════════════════════════════════════════════════════╗
║            TIME COMPLEXITY ⏱️                               ║
╚══════════════════════════════════════════════════════════════╝

Best Case

Pivot divides the array almost equally.

✅ O(n log n)

--------------------------------------------------------------

Average Case

Also:

✅ O(n log n)

--------------------------------------------------------------

Worst Case

If the pivot is always the smallest
or the largest element,

Example:

Already sorted array

[1,2,3,4,5]

and always choosing the last element
as the pivot.

Then the recursion becomes very deep.

Worst Case:

❌ O(n²)

This is why choosing a good pivot
is important.


╔══════════════════════════════════════════════════════════════╗
║             SPACE COMPLEXITY 💾                             ║
╚══════════════════════════════════════════════════════════════╝

This implementation creates:

• left array
• right array
• recursive calls

Space Complexity:

Approximately O(n)

(In-place implementations exist, but they're
more advanced than this educational version.)


╔══════════════════════════════════════════════════════════════╗
║       MAXIMUM CALL STACK SIZE EXCEEDED ⚠️                   ║
╚══════════════════════════════════════════════════════════════╝

Quick Sort is recursive.

Every recursive call is added to
the JavaScript call stack.

If recursion becomes extremely deep
(for example, because of consistently bad pivots),

JavaScript may throw:

Maximum call stack size exceeded

This isn't a problem with Quick Sort itself,
but with how recursion works in JavaScript.


╔══════════════════════════════════════════════════════════════╗
║                  COUNTING SORT 🔢                           ║
╚══════════════════════════════════════════════════════════════╝

Counting Sort is completely different.

It does NOT compare elements.

Instead,

it counts how many times each value appears.

Example:

[3, 1, 2, 1, 3, 2, 1]

Count:

1 → 3 times

2 → 2 times

3 → 2 times

Then rebuild the array:

[1, 1, 1, 2, 2, 3, 3]

Simple and very fast.


╔══════════════════════════════════════════════════════════════╗
║          WHEN SHOULD WE USE COUNTING SORT?                  ║
╚══════════════════════════════════════════════════════════════╝

It works well when:

✅ Values are integers.

✅ The range of values is relatively small.

Examples:

• Student grades (0–100)

• Ages

• Ratings

• Small IDs

It is NOT suitable when values are
very large or spread over a huge range,
because it needs an array whose size
depends on the maximum value.


╔══════════════════════════════════════════════════════════════╗
║             JS INTERVIEW NOTE 💡                            ║
╚══════════════════════════════════════════════════════════════╝

Sometimes interviewers ask:

"How would you count occurrences in JavaScript?"

A common solution is using:

• Map
• Object
• Set (for unique values only)

Remember:

Set does NOT count frequencies.

It only stores unique values.

If you need the number of occurrences,
a Map or Object is usually the appropriate choice.


💡 Golden Rule

🚀 Merge Sort and Quick Sort are both based on
Divide and Conquer.

• Merge Sort
  → Divide equally, then merge.

• Quick Sort
  → Choose a pivot, partition, then recurse.

Counting Sort is a completely different idea:

It sorts by counting occurrences instead of
comparing elements.
*/
