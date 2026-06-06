// what will happen in sort if array contains an undefined?

const arr = [4, undefined, 1, 2];
arr.sort(); // it will be thrown at the end of the array
console.log(arr); // [1, 2, 4, undefined]

/*
By default, sort():
1- Converts elements to strings.
2- Sorts them lexicographically.
3- Places all undefined values at the end.
*/

// 🍎 --------------------------------------- 🍎
// What if I used that? Numeric sort with undefined
arr.sort((a, b) => a - b); // ==> undefined - 4 => NaN ?

/*
Important

Many developers expect:
undefined - 4 // NaN

and think sorting will break.

However, the engine does not necessarily call the comparator with undefined values. 
The specification treats undefined specially and moves them to the end after sorting the defined elements.
*/

console.log(arr); // [1, 2, 4, undefined] also

// 🍎 --------------------------------------- 🍎

// What if the array contains a hole? Holes (Sparse Arrays)
const arr2 = [4, , 1, 2];
arr2.sort(); // it will also be thrown at the end of the array
console.log(arr2); // [1, 2, 4, <1 empty item>]

/*
What happens?
The hole is preserved as a hole.

The engine:
1. Sorts existing elements.
2. Moves holes to the end.
*/

// 🍎 --------------------------------------- 🍎
// NaN values

const arr3 = [4, NaN, 1, 2];

// arr3.sort((a,b)=>a-b); // [ 4, NaN, 1, 2 ] ❌

// Handling NaN explicitly
arr3.sort((a, b) => {
  const aIsNaN = Number.isNaN(a);
  const bIsNaN = Number.isNaN(b);

  if (aIsNaN && bIsNaN) return 0;
  if (aIsNaN) return 1;
  if (bIsNaN) return -1;

  return a - b;
});
// This sorting logic pushes all NaN values to the very end while sorting valid numbers in ascending order.

console.log(arr3); // [ 4, 1, 2, NaN ]

// Additional Optional Note:

// To handle null, undefined, empty strings "", and whitespace strings " ",
// you should treat them just like NaN by grouping them into an "invalid" category and pushing them to the end.

// Helper to check if a value is invalid (NaN, null, undefined, or empty/whitespace string)
const isInvalid = (val) =>
  Number.isNaN(val) ||
  val === null ||
  val === undefined ||
  (typeof val === "string" && val.trim() === "");

// "We will cover sorting in details with the algorithmic performance, efficiency, and O(n) time complexity
// during our DSA sessions, Insha'Allah.
// Today, our focus was simply on how the native sort() method works,
// its default behavior with strings and numbers, and how to handle its edge cases."
