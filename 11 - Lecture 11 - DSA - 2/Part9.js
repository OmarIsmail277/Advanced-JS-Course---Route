/*
╔══════════════════════════════════════════════════════════════╗
║            JAVASCRIPT BUILT-IN sort() 📦                    ║
╚══════════════════════════════════════════════════════════════╝

JavaScript already provides a built-in sorting method:

arr.sort()

This is one of the most common interview topics because
its default behavior surprises many developers. 😄


╔══════════════════════════════════════════════════════════════╗
║                DEFAULT BEHAVIOR ⚠️                          ║
╚══════════════════════════════════════════════════════════════╝

By default, sort() converts array elements into STRINGS,
then compares them lexicographically (dictionary order).

Example:

const arr = [10, 2, 30];

Internally it compares:

"10"
"2"
"30"

NOT

10
2
30

Since:

"10" < "2"

(the first character '1' comes before '2'),

the result becomes:

[10, 2, 30]

instead of

[2, 10, 30]

This is why we almost always provide a compare function
when sorting numbers.


╔══════════════════════════════════════════════════════════════╗
║              THE COMPARE FUNCTION 🧠                        ║
╚══════════════════════════════════════════════════════════════╝

Ascending:

arr.sort((a, b) => a - b);

Descending:

arr.sort((a, b) => b - a);

--------------------------------------------------------------

How does it work?

JavaScript repeatedly picks TWO values
and calls your compare function.

Example:

a = 2
b = 10

Return:

2 - 10 = -8

Negative number

↓

Place "a" before "b"

--------------------------------------------------------------

Example:

a = 30
b = 10

30 - 10 = 20

Positive number

↓

Place "b" before "a"

--------------------------------------------------------------

If the callback returns:

< 0  → a comes first

> 0  → b comes first

= 0  → keep their relative order


╔══════════════════════════════════════════════════════════════╗
║              SORTING OBJECTS 🛒                             ║
╚══════════════════════════════════════════════════════════════╝

We simply compare the property we care about.

Example:

products.sort((a, b) => a.price - b.price);

The same idea works for:

• age
• salary
• score
• createdAt
• etc.


╔══════════════════════════════════════════════════════════════╗
║        IMPORTANT: sort() MUTATES THE ARRAY ⚠️               ║
╚══════════════════════════════════════════════════════════════╝

sort() does NOT create a new array.

Instead, it sorts the ORIGINAL array and returns
a reference to that same array.

Example:

const sorted = products.sort(...);

sorted === products

// true

Both variables point to the SAME array.

So changing one affects the other.

This behavior is called:

✨ In-place sorting.


╔══════════════════════════════════════════════════════════════╗
║            HOW TO AVOID MUTATION 🛡️                         ║
╚══════════════════════════════════════════════════════════════╝

Option 1 (works everywhere):

const sorted = [...products].sort(...);

Create a copy first,
then sort the copy.

--------------------------------------------------------------

Option 2 (Modern JavaScript):

const sorted = products.toSorted(...);

toSorted():

✅ Returns a NEW sorted array.

✅ Leaves the original array untouched.

Think of it as:

sort()     → mutable

toSorted() → immutable


╔══════════════════════════════════════════════════════════════╗
║          WHAT ALGORITHM DOES JS USE? 🤔                     ║
╚══════════════════════════════════════════════════════════════╝

There is NO single algorithm.

It depends on the JavaScript engine.

Examples:

• Chrome / Node.js → V8

• Firefox → SpiderMonkey

• Safari → JavaScriptCore

Modern engines use highly optimized algorithms,
often combining ideas from:

• Quick Sort
• Merge Sort
• Insertion Sort
• Timsort (or similar optimizations)

The ECMAScript specification only defines
the behavior of sort(),

NOT the algorithm itself.


╔══════════════════════════════════════════════════════════════╗
║              INTERVIEW QUESTIONS 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: Why doesn't sort() work correctly for numbers?

A:
Because it compares strings by default.

--------------------------------------------------------------

Q: How do you sort numbers correctly?

A:

arr.sort((a, b) => a - b);

--------------------------------------------------------------

Q: Does sort() mutate the array?

A:

Yes.

It sorts the original array in place.

--------------------------------------------------------------

Q: How do you sort without mutating?

A:

[...arr].sort(...)

or

arr.toSorted(...)


💡 Golden Rule

Always remember:

• Default sort() = string comparison.
• Use a compare callback for numbers/objects.
• sort() mutates the original array.
• toSorted() returns a new sorted array. 🚀
*/
