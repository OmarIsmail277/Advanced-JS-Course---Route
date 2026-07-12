// Binary Search on strings
// Given ["Ali", "Mona", "Nour", "Omar", "Sara"], use Binary Search to find "Nour". Explain the comparison condition used.

/*
╔══════════════════════════════════════════════════════════════╗
║        BINARY SEARCH ON STRINGS 🔤                         ║
╚══════════════════════════════════════════════════════════════╝

Given:

["Ali", "Mona", "Nour", "Omar", "Sara"]

Target:

"Nour"

Just like numbers, Binary Search also works with strings.

The only requirement is:

✔ The array must be sorted alphabetically.

JavaScript compares strings lexicographically
(dictionary order based on Unicode values).

──────────────────────────────────────────────────────────────

Initial

Low = 0
High = 4

Array:

["Ali", "Mona", "Nour", "Omar", "Sara"]

──────────────────────────────────────────────────────────────

STEP 1

Low = 0
High = 4

Mid = Math.floor((0 + 4) / 2)

Mid = 2

arr[mid] = "Nour"

Target = "Nour"

"Nour" === "Nour" ✔

Target Found!

Return index 2.

──────────────────────────────────────────────────────────────

Comparison Condition

Exactly the same as numbers:

if (arr[mid] === target)
    return mid;

else if (arr[mid] < target)
    low = mid + 1;

else
    high = mid - 1;

The difference is that JavaScript compares strings
alphabetically instead of numerically.

Examples:

"Ali" < "Mona"      ✔
"Mona" < "Nour"     ✔
"Nour" < "Sara"     ✔

──────────────────────────────────────────────────────────────

Code
*/

function binarySearchStrings(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    console.log(`Low=${low}, High=${high}, Mid=${mid}, Value="${arr[mid]}"`);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const names = ["Ali", "Mona", "Nour", "Omar", "Sara"];

console.log(binarySearchStrings(names, "Nour"));

/*
Output

Low=0, High=4, Mid=2, Value="Nour"

2

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

Binary Search is NOT limited to numbers.

It works with any sortable data type, such as:

✔ Numbers
✔ Strings
✔ Dates
✔ Objects (using a comparison property)

The only requirement is that the data is already sorted
according to the comparison being used.
*/

/*
🔥 Why can we compare strings using < and >?

JavaScript compares strings lexicographically, meaning it compares them character by character using their Unicode values.

For example:

console.log("Ali" < "Mona");    // true
console.log("Nour" < "Omar");   // true
console.log("Sara" > "Omar");   // true

If the first characters are the same, JavaScript moves to the next characters until it finds a difference:

"Apple" < "Application"

Comparison:

A = A
p = p
p = p
l = l
e < i   ✔

So "Apple" comes first.

This is why Binary Search works exactly the same for strings as it does for numbers—the comparison operators (<, >, ===) 
already know how to compare strings alphabetically. 🚀

*/
