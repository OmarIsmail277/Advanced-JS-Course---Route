// Optimized bubble sort
// Write a bubble sort implementation that stops early if the array is already sorted. Test it with [1,2,3,4,5] and [5,4,3,2,1].

function optimizedBubbleSort(arr) {
  let comparisons = 0;
  let swaps = 0;

  for (let pass = 0; pass < arr.length - 1; pass++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - pass; j++) {
      comparisons++;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
        swaps++;
      }
    }
    console.log(`pass ${pass + 1} ${arr}`);
    if (!swapped) {
      console.log("array already sorted");
      break;
    }
  }
  console.log("comparisons: ", comparisons);
  console.log("swaps: ", swaps);

  return arr;
}

// Test 1
optimizedBubbleSort([1, 2, 3, 4, 5]);

/*
Pass 1: [1,2,3,4,5]
Array is already sorted ✅

Comparisons: 4
Swaps: 0

Notice how it performs only one pass.

Without optimization, it would have made 4 passes.
*/

// Test
optimizedBubbleSort([5, 4, 3, 2, 1]);

/*
Pass 1: [4,3,2,1,5]
Pass 2: [3,2,1,4,5]
Pass 3: [2,1,3,4,5]
Pass 4: [1,2,3,4,5]

Comparisons: 10
Swaps: 10
*/

// The optimization doesn't help here because every pass performs at least one swap.

// The swapped flag changes only the best case: from O(n²) to O(n)
