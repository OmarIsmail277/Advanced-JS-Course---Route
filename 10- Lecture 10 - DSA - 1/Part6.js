/*
╔══════════════════════════════════════════════════════════════╗
║         LINEAR SEARCH vs BINARY SEARCH ⚔️                   ║
╚══════════════════════════════════════════════════════════════╝

Searching is one of the most common operations in programming.

The two most popular searching algorithms are:

1️⃣ Linear Search

2️⃣ Binary Search


╔══════════════════════════════════════════════════════════════╗
║                 LINEAR SEARCH 🔍                            ║
╚══════════════════════════════════════════════════════════════╝

How it works:

Starts from the first element and checks each element
one by one until:

✓ The target is found.

or

✓ The end of the array is reached.

✅ Advantages

• Works with ANY array.
• The array does NOT need to be sorted.
• Very simple to implement.

❌ Disadvantages

• Can become slow for large datasets because it may
  scan every element.

Worst Case Time Complexity:

O(n)


╔══════════════════════════════════════════════════════════════╗
║                 BINARY SEARCH 🚀                            ║
╚══════════════════════════════════════════════════════════════╝

How it works:

Instead of checking every element,

it repeatedly divides the search space into half
until the target is found.

✅ Advantages

• Much faster for large datasets.
• Eliminates half of the remaining elements
  in every iteration.

❌ Requirement

The array MUST be sorted.

Otherwise, Binary Search will NOT work correctly.

Worst Case Time Complexity:

O(log n)


╔══════════════════════════════════════════════════════════════╗
║           WHAT IF THE ARRAY ISN'T SORTED? 🤔                ║
╚══════════════════════════════════════════════════════════════╝

You have two options:

1️⃣ Use Linear Search directly.

Time Complexity:

O(n)

--------------------------------------------------------------

2️⃣ Sort the array first, then use Binary Search.

Sorting:

O(n log n)

Binary Search:

O(log n)

Total:

O(n log n)

💡 Which one is better?

✔ If you're performing only ONE search,
Linear Search is usually sufficient.

✔ If you're going to perform MANY searches
on the same dataset,

sorting once and then using Binary Search
is usually much more efficient overall.


╔══════════════════════════════════════════════════════════════╗
║                QUICK COMPARISON 📊                          ║
╚══════════════════════════════════════════════════════════════╝

Linear Search

✓ Works on sorted arrays. ✅
✓ Works on unsorted arrays. ✅
✓ Simple to implement.
✓ Worst Case: O(n)

--------------------------------------------------------------

Binary Search

✓ Works only on sorted arrays. ✅
✓ Works on unsorted arrays. ❌
✓ Much faster for large datasets.
✓ Worst Case: O(log n)


💡 Golden Rule

🔍 Linear Search

→ Simple and works everywhere.

✂️ Binary Search

→ Faster, but only when the data is sorted.

Always choose the algorithm that best fits
your data and your use case. 🚀
*/
