/*
╔══════════════════════════════════════════════════════════════╗
║                SEARCHING ALGORITHMS 🔍                      ║
╚══════════════════════════════════════════════════════════════╝

Searching is one of the most common operations in programming.

Examples:

✓ Find a user by ID.
✓ Find a product by name.
✓ Find an order.
✓ Search for a word.
✓ Check whether an element exists.

There are many searching algorithms, but the two most
important ones are:

1️⃣ Linear Search

2️⃣ Binary Search

Choosing the right one can make a HUGE difference
in performance. 🚀


╔══════════════════════════════════════════════════════════════╗
║                 1️⃣ LINEAR SEARCH                           ║
╚══════════════════════════════════════════════════════════════╝

Linear Search is the simplest searching algorithm.

Idea:

Start from the first element and move one by one
until:

✓ The target is found.
✓ The array ends.
*/

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

/*
Example:

Array:

[5, 8, 10, 20]

Search for:

10

Steps:

5 ❌

↓

8 ❌

↓

10 ✅

Return:

2


╔══════════════════════════════════════════════════════════════╗
║            TIME COMPLEXITY OF LINEAR SEARCH ⏱️              ║
╚══════════════════════════════════════════════════════════════╝

Best Case:

The target is the first element.

Time Complexity:

O(1)

--------------------------------------------------------------

Worst Case:

The target is:

✓ The last element

or

✓ Not present at all

Every element must be checked.

Time Complexity:

O(n)


╔══════════════════════════════════════════════════════════════╗
║           PROBLEM WITH LINEAR SEARCH ⚠️                     ║
╚══════════════════════════════════════════════════════════════╝

For small arrays,

Linear Search works perfectly fine.

But imagine an array containing:

📦 1,000,000 elements

Searching for the last element means checking:

1

↓

2

↓

3

↓

...

↓

1,000,000

😅 That's a lot of work!

Can we do better?

Absolutely!

This leads us to...


╔══════════════════════════════════════════════════════════════╗
║                 2️⃣ BINARY SEARCH 🚀                        ║
╚══════════════════════════════════════════════════════════════╝

Binary Search is much faster.

BUT...

It has one very important requirement.

✅ The array MUST be sorted.

If the array isn't sorted,

Binary Search will NOT work correctly.


Example:
*/

const numbers = [1, 2, 4, 6, 9, 12];

/*
Target:

9

Instead of checking every element,

Binary Search repeatedly cuts the search space in half.

Think of searching in a dictionary 📖.

You don't start from page 1.

You open near the middle,

then decide whether to go left or right.

That's exactly how Binary Search works.


╔══════════════════════════════════════════════════════════════╗
║              BINARY SEARCH ALGORITHM ⚙️                     ║
╚══════════════════════════════════════════════════════════════╝

1️⃣ Set:

start = first index

end = last index

2️⃣ While start <= end

3️⃣ Find the middle index.

4️⃣ Compare the middle element with the target.

5️⃣ If equal

Return its index.

6️⃣ If target is greater

Search only the RIGHT half.

7️⃣ If target is smaller

Search only the LEFT half.

Repeat until found or no search space remains.


╔══════════════════════════════════════════════════════════════╗
║                 IMPLEMENTATION 💻                           ║
╚══════════════════════════════════════════════════════════════╝
*/

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

/*
Notice:

The return -1 belongs OUTSIDE the loop.

If the loop finishes,

the target doesn't exist.


╔══════════════════════════════════════════════════════════════╗
║            TRACE THE ALGORITHM 🔍                           ║
╚══════════════════════════════════════════════════════════════╝

Array:

[1, 2, 4, 6, 9, 12]

Search for:

9

--------------------------------------------------------------

Iteration 1

start = 0

end = 5

mid = 2

arr[mid] = 4

9 > 4

Ignore the LEFT half.

New start = 3

--------------------------------------------------------------

Iteration 2

start = 3

end = 5

mid = 4

arr[mid] = 9

🎉 Found!

Return index:

4

Notice that we found the target in only:

2 iterations

instead of checking all 6 elements.


╔══════════════════════════════════════════════════════════════╗
║         TIME COMPLEXITY OF BINARY SEARCH ⏱️                 ║
╚══════════════════════════════════════════════════════════════╝

Each iteration removes HALF of the remaining elements.

Example:

1,000,000

↓

500,000

↓

250,000

↓

125,000

↓

...

This shrinking process is logarithmic.

Time Complexity:

✅ O(log n)

This is dramatically faster than O(n)
for large datasets.


╔══════════════════════════════════════════════════════════════╗
║        DOES BINARY SEARCH WORK ONLY WITH NUMBERS? 🤔        ║
╚══════════════════════════════════════════════════════════════╝

❌ No.

Binary Search works with ANY sortable data.

For example:

Strings.
*/

const names = ["Ahmed", "Mona", "Nour", "Omar", "Youssef", "Zain"];

function binarySearchStrings(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

/*
Example:

Search for:

"Nour"

Since strings are sorted alphabetically,

Binary Search works exactly the same way.

💡 The requirement isn't "numbers".

The requirement is:

✅ Sorted data.


╔══════════════════════════════════════════════════════════════╗
║         SHOULD WE SORT FIRST? 🤔                            ║
╚══════════════════════════════════════════════════════════════╝

Interview Question:

"What if the backend sends an unsorted array?

Should I sort it first, then use Binary Search?"

Answer:

✅ It depends.

If you're performing **only one search**, sorting first
is usually not worth it because sorting itself has a cost.

Typical complexities:

Sorting → O(n log n)

Binary Search → O(log n)

Total:

O(n log n)

whereas one Linear Search is only:

O(n)

--------------------------------------------------------------

However...

If you're going to perform **many searches** on the same data,

then sorting once and using Binary Search repeatedly
is usually much faster overall.

💡 Rule of thumb:

One search?

→ Linear Search is often sufficient.

Many searches?

→ Sort once, then use Binary Search.


╔══════════════════════════════════════════════════════════════╗
║         THINK ABOUT IMPROVING YOUR SOLUTION 🧠              ║
╚══════════════════════════════════════════════════════════════╝

As programmers,

our job isn't just to make code work.

Our job is to make it efficient.

Example:

Imagine writing nested loops just to find
an element before doing another operation.

Instead,

search for the element once (using an appropriate method
or algorithm), save its index, then continue your work.

Reducing unnecessary loops can significantly improve
performance.

Always ask yourself:

💭 "Can I reduce the number of operations?"

That's the mindset DSA teaches.


╔══════════════════════════════════════════════════════════════╗
║         LINEAR SEARCH vs BINARY SEARCH ⚔️                   ║
╚══════════════════════════════════════════════════════════════╝

Linear Search

✓ Works on any array.

✓ No sorting required.

✓ Simple to implement.

✓ Time Complexity:

O(n)

--------------------------------------------------------------

Binary Search

✓ Requires a sorted array.

✓ Much faster for large datasets.

✓ Repeatedly halves the search space.

✓ Time Complexity:

O(log n)


╔══════════════════════════════════════════════════════════════╗
║              INTERVIEW QUESTIONS 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: What is the prerequisite for Binary Search?

A:
The data must be sorted.


Q: Which is faster?

A:
Binary Search (O(log n)) is much faster than
Linear Search (O(n)) for large sorted datasets.


Q: Does Binary Search only work with numbers?

A:
No.

It works with any sortable data type,
such as numbers, strings, dates, or any data
that can be consistently ordered.


💡 Golden Rule

🔍 Linear Search

→ Check one element at a time.

✂️ Binary Search

→ Eliminate half of the remaining elements each step.

The better your algorithm,
the less work your computer has to do. 🚀
*/

// ❌ Inefficient Approach (Nested Loops) Suppose we have: users orders and for every order we loop through all users to find its owner.

for (const order of orders) {
  for (const user of users) {
    if (user.id === order.userId) {
      console.log(user.name);
    }
  }
}

/* Time Complexity: O(n²) because for every element in one array, we loop through the other array. 
-------------------------------------------------------------- 
✅ Better Approach If you only need ONE specific user, 

search for it ONCE, save its index, then continue working with it. 

*/
const index = users.findIndex((user) => user.id === targetId);
if (index !== -1) {
  const user = users[index];

  // Continue working with the user...
  console.log(user.name);
}

/* Time Complexity: findIndex() ↓ O(n) Instead of repeatedly searching or nesting loops, we searched once and reused the result. 


💡 Golden Rule The optimization is NOT because of findIndex() itself. 

The optimization comes from reducing the number of unnecessary loops. 

DSA teaches us to ask: 🧠 "Can I avoid scanning the same data again?" */
