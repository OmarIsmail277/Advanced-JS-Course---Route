// Search After Sorting
// Given [15, 3, 9, 1, 20], sort the array using any sorting algorithm, then search for 9
// using Binary Search

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

const numbers = [15, 3, 9, 1, 20];
const sorted = [...numbers].sort((a, b) => a - b);

console.log(binarySearch(res, 9));

/*
🪔 Tip 🪔

If you need to search ONLY ONCE in an unsorted array:

✔ Linear Search (O(n)) is usually better because sorting first
adds extra work.

If you need to search MANY TIMES in the same dataset:

✔ Sort once (O(n log n))
✔ Then perform Binary Search repeatedly (O(log n) each)

This is much faster than performing a Linear Search every time.
*/
