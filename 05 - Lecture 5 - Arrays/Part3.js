// holes Sparse Arrays (Arrays with Holes) ... undefined

const a = [undefined]; // ==> array with one element its value is undefined [undefined]
const b = new Array(1); // ==> empty slot || hole

/*
a simple analogy
******************
a => There is a chair but no one is sitting on it 🪑🪑🪑
b => no chair at all! 🪑❌

*/

console.log(a[0]); // undefined
console.log(b[0]); // undefined

// both logged undefined, but does that mean they are both the same? NO! They are not the same! and that is an interview trick!

console.log(0 in a); // true

console.log(0 in b); // false

// ---------------------------

const arr = [undefined, undefined, undefined];
const bl7 = new Array(3);

console.log(arr); // [undefined, undefined, undefined]
console.log(bl7); // [ <3 empty items> ] 3 **holes**

// ----------

const arr2 = [1, , 3];
// Here I made a hole (empty item) not undefined

// Lets try looping now!

// normal for loop
for (let i = 0; i < arr2.length; i++) {
  console.log(i, arr2[i]);
  // 0 1
  // 1 undefined -> That's because the normal for loop loops over all the indices even the empty slot
  // 2 3
}

const y = arr2.forEach((value, index) => {
  console.log(index, value);
  return value * 2;
  // 0 1
  // 2 3
  // while here in forEach, all holes are skipped! 🦘
});

// so we conclude from here, that for sure the forEach is better in performance

// But what about the .map() ? what do you think it does? 🤔

const res = arr2.map((x) => x * 2);
console.log(res); // [2, <1 empty item>, 6]

// here it logged an empty item! but wait a second!
// map really skips the hole (same as forEach), but it knows that it's there!

// proof!

const res2 = arr2.map((x, index) => {
  console.log(index);

  return x * 2;
});

console.log(res2);

// 0 \- it did not log index 1 because it's hole!
// 2 /-
// [2, <1 empty item>, 6]

// -----

/*
So in summary, 1- normal for passes overy all the indices even if it's a hole
2- forEach does not pass over hole, and it simply ignores (indices with holes)
3- map skips the hole but preserves its place in the new array
Why does map() preserve holes?
Because map() creates a new array with the same length as the original and only processes existing elements.

*/

// What about the filter?

const res3 = arr2.filter((x) => true); // [1, 3]

// because filter ignores holes

/*
What actually happens?

filter() behaves like forEach and map regarding holes:

👉 It skips holes completely
👉 It does NOT call the callback for missing indices

👉 So, filter() doesn’t "remove holes" — it simply never iterates over them, so they never make it into the result.
*/

// forEach, map, filter, reduce, some, and every skip holes because their callbacks run only for existing indices.

// Most array methods (map, filter, forEach, reduce, etc.) skip holes because they only iterate over existing indices,
// but they still process undefined because it is a real "value" stored at that index.

// map() skips holes during iteration, but preserves their positions in the returned array,
// because it always creates a new array with the same length as the original.

/*
forEach → ignores holes, no output
filter → ignores holes, compacts result
map → ignores holes, keeps shape (sparse structure)
*/
