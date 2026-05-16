const arr = Array(1_000_000).fill(1);

console.time("uncached");
let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
  sum1 += arr[i];
}
console.timeEnd("uncached");

console.time("cached");
let sum2 = 0;
// let len = new Array(1e6).length;
for (let i = 0, len = arr.length; i < len; i++) {
  sum2 += arr[i];
}
console.timeEnd("cached");

// length is cached in the second loop, so it doesn't have to access the length property of the array on each iteration, which can improve performance.
// In the first loop, the length property is accessed on each iteration, which can be slower, especially for large arrays. 1 million times
// By caching the length in a variable (len), the second loop avoids this overhead and can execute faster. 1 time only.
// This is a common optimization technique in JavaScript when working with arrays or other iterable structures.

// that variable is scooped to the loop, so when the loop finishes, the variable is not accessible anymore, which can help prevent accidental modifications
// to the length variable outside of the loop. and also it's collected by the garbage collector after the loop finishes, which can help free up memory.
