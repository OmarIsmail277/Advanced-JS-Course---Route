// Packed Array

const arr = [1, 2, 3, 4];
// This is a packed array. Why? because all elements exist and come one after another(sequential), NO GAPS NO HOLES.

// And that is better in performance.

// Holey (Sparse) Array
const arr2 = [1, 2, , 4];

// some people do that bad practice 👇
// Dangerous Pattern (Highly Sparse Arrays)
const arr3 = [];

arr3[100] = "bl7";

console.log(arr3.length); // 101

console.log(arr3); // [ <100 empty items>, "bl7"]

// Packed array is for sure better and JS loves it more, it loves the organized and stable array
// why is that? to be able to optimize it

// So, Packed arrays are optimized for fast sequential access, while holey arrays require additional existence checks,
// which prevents JavaScript engines from applying certain performance optimizations.
