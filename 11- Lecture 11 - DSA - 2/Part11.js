/*
╔══════════════════════════════════════════════════════════════╗
║               PROBLEM SOLVING & OPTIMIZATION 🧠             ║
╚══════════════════════════════════════════════════════════════╝

One of the biggest goals of DSA is not writing code that simply works.

It's writing code that works...

✅ Faster
✅ With fewer unnecessary operations
✅ While handling large datasets efficiently

Always ask yourself:

"Can I avoid looping over the same data multiple times?"


╔══════════════════════════════════════════════════════════════╗
║                  THE ORIGINAL SOLUTION                      ║
╚══════════════════════════════════════════════════════════════╝

const res = products
  .map(product => {
    const category = categories.find(
      cat => cat.id === product.categoryId
    );

    return {
      ...product,
      categoryName: category.name,
    };
  })
  .sort((a, b) => a.price - b.price);

Works perfectly. ✅

But...

Inside every map iteration,
we execute find().

So the execution looks like:

Product 1
    ↓
Loop over ALL categories

Product 2
    ↓
Loop over ALL categories

Product 3
    ↓
Loop over ALL categories

...

This means:

map()

↓

find()

↓

Nested loops!


Time Complexity

Products = n

Categories = m

↓

O(n × m)

For small arrays that's fine,

but with thousands of products,
it becomes expensive.


╔══════════════════════════════════════════════════════════════╗
║                BETTER IDEA 💡                               ║
╚══════════════════════════════════════════════════════════════╝

Instead of searching through categories
for every product,

why not create a lookup table once?

JavaScript gives us:

Map

A Map allows very fast lookups by key.


Example:

categoryMap

↓

1 → Electronics

2 → Mobile

3 → Accessories

Now,

instead of searching,

we directly retrieve the category:

categoryMap.get(product.categoryId)

No loop needed.


╔══════════════════════════════════════════════════════════════╗
║                  STEP 1                                     ║
╚══════════════════════════════════════════════════════════════╝
*/

const categoryMap = new Map();

for (const category of categories) {
  categoryMap.set(category.id, category.name);
}

/*
The Map becomes:

1 → Electronics

2 → Mobile

3 → Accessories


Time Complexity

O(m)


╔══════════════════════════════════════════════════════════════╗
║                  STEP 2                                     ║
╚══════════════════════════════════════════════════════════════╝
*/

const res2 = products
  .map((product) => ({
    ...product,
    categoryName: categoryMap.get(product.categoryId),
  }))
  .sort((a, b) => a.price - b.price);

/*
Now,

each product performs only:

categoryMap.get(...)

instead of

categories.find(...)

Map lookup is approximately:

O(1)

So mapping all products becomes:

O(n)

instead of

O(n × m)


╔══════════════════════════════════════════════════════════════╗
║             TOTAL TIME COMPLEXITY 📈                        ║
╚══════════════════════════════════════════════════════════════╝

Building the Map

↓

O(m)

-----------------------------

Mapping Products

↓

O(n)

-----------------------------

Sorting

↓

O(n log n)

-----------------------------

Total

O(m + n + n log n)

Usually simplified to:

O(n log n)

because sorting dominates for large datasets.


╔══════════════════════════════════════════════════════════════╗
║           TIME vs SPACE TRADE-OFF ⚖️                        ║
╚══════════════════════════════════════════════════════════════╝

We created an extra Map.

Memory increased by:

O(m)

But...

We eliminated repeated searches.

This is a classic DSA trade-off:

Spend a little more memory

↓

Save a lot of execution time.

Very common in real-world applications.


╔══════════════════════════════════════════════════════════════╗
║           CHAINING ARRAY METHODS 🤔                         ║
╚══════════════════════════════════════════════════════════════╝

Example:

const res = products
    .filter(...)
    .sort(...)
    .map(...);

Many beginners think:

"Three methods...

so O(n³)!"

❌ That's NOT true.

Each method loops independently.

So the complexity is approximately:

filter

↓

O(n)

+

sort

↓

O(n log n)

+

map

↓

O(n)

Not nested.

They're consecutive operations,
not loops inside loops.

Overall complexity:

O(n log n)


╔══════════════════════════════════════════════════════════════╗
║        WHY SOME DEVELOPERS STILL AVOID LONG CHAINS?         ║
╚══════════════════════════════════════════════════════════════╝

Although the complexity isn't O(n³),

each method:

• Iterates over the array again.

• May create a new intermediate array.

For very large datasets,

multiple passes and extra allocations
can affect performance.


Example:

filter()

↓

creates a new array

↓

map()

↓

creates another array

↓

sort()

↓

mutates that new array


Sometimes,

one loop can do the same work.


Example:

const filteredNames = [];

for (const product of products) {
  if (product.price > 2500) {
    filteredNames.push(product.name);
  }
}

This performs only one traversal.

💡 Note:
The original notes called this "good", but be careful.

If your goal is to sort by price, you should sort the products BEFORE extracting their names.

Otherwise, after mapping to names (strings), this won't work:

filteredNames.sort((a, b) => a.price - b.price); ❌

because strings don't have a price property.

A correct approach would be:

const filteredProducts = products.filter(
  product => product.price > 2500
);

filteredProducts.sort((a, b) => a.price - b.price);

const names = filteredProducts.map(
  product => product.name
);


╔══════════════════════════════════════════════════════════════╗
║                GOLDEN LESSON ✨                              ║
╚══════════════════════════════════════════════════════════════╝

DSA isn't only about choosing the best algorithm.

It's also about asking:

• Can I avoid nested loops?

• Can I replace repeated searches with a lookup (Map/Object)?

• Can I reduce unnecessary traversals?

• Is using a little more memory worth the performance gain?

Thinking this way is what separates a working solution
from an optimized one. 🚀
*/
