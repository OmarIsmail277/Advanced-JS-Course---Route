// Selection Sort
// Search for the smallest element and place it in its right place

const arr = [6, 3, 8, 2];

// replace the 2 with the 6 to put the smallest number(2) in its correct place
// go to next index (1) => same order
// after that work on [8,6] => swap => [2,3,6,8]

// selection sort in comparison with bubble sort => less swapping but more comparisons because you compare the smallest element with all.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    // Swap the current element ONLY if a smaller one was found somewhere else
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

// trace on example [4,2,7,1]
