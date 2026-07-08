/*
╔══════════════════════════════════════════════════════════════╗
║           DATA STRUCTURE #1 - ARRAYS 📦                     ║
╚══════════════════════════════════════════════════════════════╝

An Array is one of the most commonly used data structures.

It stores a collection of elements in contiguous (continuous)
memory locations.

Each element has:

✓ A value
✓ An index

Indexes always start from:

0

Example:
*/

const numbers = [10, 20, 30, 40];

/*
Visual representation:

Index:   0    1    2    3
        ┌────┬────┬────┬────┐
Value:  │10  │20  │30  │40  │
        └────┴────┴────┴────┘

Using the index,

we can directly access any element.

Example:

numbers[2]

↓

30

No looping required.

That's one of the biggest advantages of arrays. 🚀


╔══════════════════════════════════════════════════════════════╗
║      INTERVIEW QUESTION: ACCESS vs SEARCH 🎤               ║
╚══════════════════════════════════════════════════════════════╝

This is one of the most common interview questions.

❓ What's the difference between:

Access

and

Search?

--------------------------------------------------------------

✅ Access

Example:
*/

const arr = [10, 20, 30];

console.log(arr[1]);

/*
JavaScript already knows where index 1 is.

It jumps directly to it.

⏱ Time Complexity:

O(1)

(Constant Time)

This is extremely fast because the location
is known immediately.


--------------------------------------------------------------

✅ Search

Example:

"Does the array contain 30?"

JavaScript has no idea where 30 is.

It must check:

Index 0

↓

Index 1

↓

Index 2

↓

...

until it finds the value
or reaches the end.

⏱ Time Complexity:

O(n)

(Linear Time)

Because, in the worst case,
every element must be checked.


╔══════════════════════════════════════════════════════════════╗
║              ARRAY OPERATION #1 - TRAVERSAL 🚶              ║
╚══════════════════════════════════════════════════════════════╝

Traversal simply means:

"Visit every element."

The most common way:

for loop
*/

const values = [4, 8, 15, 16];

for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}

/*
Every element is visited exactly once.

Time Complexity:

O(n)


╔══════════════════════════════════════════════════════════════╗
║              ARRAY OPERATION #2 - SEARCH 🔍                ║
╚══════════════════════════════════════════════════════════════╝

Let's implement a simple search ourselves.
*/

function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }

  return false;
}

/*
Example:

search([10, 20, 30], 20);

↓

true


search([10, 20, 30], 50);

↓

false


Notice:

We wrote the search ourselves,
even though JavaScript already provides methods for it.

Why?

Because interviews usually test your understanding
of the algorithm behind the built-in methods,
not whether you remember their names.


╔══════════════════════════════════════════════════════════════╗
║             WHAT IS THE WORST CASE? 🤔                      ║
╚══════════════════════════════════════════════════════════════╝

Always ask yourself:

"What is the Worst Case?"

For searching an array:

Worst Case #1

The element does NOT exist.

Example:

search([1,2,3], 100);

Every element must be checked.

--------------------------------------------------------------

Worst Case #2

The element is the LAST item.

Example:

search([1,2,3,100], 100);

Again...

Every previous element must be checked first.

Both cases require scanning the entire array.

⏱ Time Complexity:

O(n)


╔══════════════════════════════════════════════════════════════╗
║          JAVASCRIPT BUILT-IN SEARCH METHODS ⚡              ║
╚══════════════════════════════════════════════════════════════╝

JavaScript provides several helpful methods:

✓ includes()

✓ find()

✓ findIndex()

Examples:
*/

const fruits = ["Apple", "Banana", "Orange"];

fruits.includes("Banana");

fruits.find((fruit) => fruit.startsWith("O"));

fruits.findIndex((fruit) => fruit === "Orange");

/*
These methods are convenient,

but it's important to understand
what happens behind the scenes.

Internally,

they still perform a linear search
for normal arrays.

Their average time complexity is:

O(n)

💡 Interview tip:

If the array contains objects,
methods like find() and findIndex()
are usually more suitable than includes(),
since includes() checks strict equality
for object references.


╔══════════════════════════════════════════════════════════════╗
║      ARRAY OPERATION #3 - INSERTION & DELETION ➕➖         ║
╚══════════════════════════════════════════════════════════════╝

The most common insertion/deletion methods are:

✓ push()

✓ pop()

✓ unshift()

✓ shift()


╔══════════════════════════════════════════════════════════════╗
║             push() vs unshift() ⚔️                         ║
╚══════════════════════════════════════════════════════════════╝

push()

Adds an element to the END.

Example:
*/

const nums1 = [1, 2, 3];

nums1.push(4);

/*
Result:

[1, 2, 3, 4]

Since the new element is simply appended,

JavaScript doesn't need to move existing elements.

⏱ Time Complexity:

O(1) (Amortized)


--------------------------------------------------------------

unshift()

Adds an element to the BEGINNING.
*/

const nums2 = [2, 3, 4];

nums2.unshift(1);

/*
Result:

[1, 2, 3, 4]

But what actually happens?

Before inserting 1,

every existing element must move
one position to the right.

Before:

Index: 0 1 2

[2,3,4]

↓

Shift everything

↓

Index: 1 2 3

[2,3,4]

↓

Insert 1 at index 0

Final:

[1,2,3,4]

Because every element is shifted,

⏱ Time Complexity:

O(n)

This is much slower for large arrays.


╔══════════════════════════════════════════════════════════════╗
║              PERFORMANCE SUMMARY ⚡                         ║
╚══════════════════════════════════════════════════════════════╝

Operation            Time Complexity

Access (arr[index])      O(1)

Traversal                O(n)

Search                   O(n)

push()                   O(1) (Amortized)

pop()                    O(1)

shift()                  O(n)

unshift()                O(n)


╔══════════════════════════════════════════════════════════════╗
║             INTERVIEW QUESTIONS 🎤                          ║
╚══════════════════════════════════════════════════════════════╝

Q: Why is array access O(1)?

A:
Because JavaScript can compute the memory location
directly from the index without scanning the array.


Q: Why is searching O(n)?

A:
Because the array must be scanned element by element
until the target is found or the end is reached.


Q: Why is push() faster than unshift()?

A:
push() appends an element to the end of the array,
while unshift() must first shift all existing elements
one position to the right before inserting the new one.


💡 Golden Rule

📍 Know the index?

→ Access is O(1).

🔍 Know only the value?

→ Search is usually O(n).

Choosing the right operation can make a huge difference
in performance, especially with large datasets. 🚀
*/
