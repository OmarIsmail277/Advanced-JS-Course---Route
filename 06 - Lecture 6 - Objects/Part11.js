/*
=========================================
Set
=========================================

Set is a built-in JavaScript data structure that
stores UNIQUE values only.

If a value already exists in the Set,
it will not be added again.

-----------------------------------------
Creating a Set
-----------------------------------------
*/

const numbers = [10, 20, 30, 10];

const nums = new Set(numbers);

console.log(nums);

/*
Result:

Set(3) { 10, 20, 30 }

The duplicated value (10) was removed.
*/

/*
-----------------------------------------
Converting Set back to Array
-----------------------------------------

A Set is iterable, so we can use the
spread operator.
*/

const arrayNums = [...nums];

console.log(arrayNums);

/*
Result:

[10, 20, 30]
*/

/*
Most common use case:

Removing duplicates from an array.
*/

const arr = [10, 10, 30, 40];

const unique = [...new Set(arr)];

console.log(unique);

/*
Result:

[10, 30, 40]
*/

/*
-----------------------------------------
What does Set have to do with Objects?
-----------------------------------------

Unlike objects, Set does NOT convert values
to strings.

Objects are stored by reference.
*/

const a = { id: 1 };
const b = { id: 1 };

console.log(a === b); // false

/*
Although they have identical content,
they are different objects in memory.

Each object has its own reference.
*/

const set = new Set();

set.add(a);
set.add(b);

console.log(set);
console.log(set.size);

/*
Result:

Set(2) {
  { id: 1 },
  { id: 1 }
}

Why?

Because:

a !== b

Set compares objects by reference,
not by content.

Each object has a different reference,
therefore both values are unique.
*/

/*
-----------------------------------------
Set vs Object
-----------------------------------------

Object:

const obj = {};

const a = {};
const b = {};

obj[a] = "A";
obj[b] = "B";

Result:

{
  "[object Object]": "B"
}

Why?

Object keys are converted to strings.

-----------------------------------------

Set:

const set = new Set();

set.add(a);
set.add(b);

Result:

Set(2)

Because Set keeps object references
as they are.
*/

/*
-----------------------------------------
Common Set Methods
-----------------------------------------
*/

const selectedIds = new Set();

selectedIds.add(1);
selectedIds.add(2);
selectedIds.add(3);

/*
add(value)

Adds a value to the Set.
*/

selectedIds.add(4);

/*
has(value)

Checks whether a value exists.
*/

console.log(selectedIds.has(2)); // true
console.log(selectedIds.has(100)); // false

/*
delete(value)

Removes a value.
*/

selectedIds.delete(2);

console.log(selectedIds);

/*
size

Returns the number of unique values.
*/

console.log(selectedIds.size);

/*
clear()

Removes all values.
*/

selectedIds.clear();

/*
-----------------------------------------
Common Use Cases
-----------------------------------------

1) Remove duplicates

const unique = [...new Set(arr)];

-----------------------------------------

2) Fast existence lookup

selectedIds.has(id)

Much cleaner than repeatedly searching arrays.

-----------------------------------------

3) Checkbox selections

Example:

Dashboard table with checkboxes.

When user selects a row:

selectedIds.add(id);

When user unselects a row:

selectedIds.delete(id);

Check selection state:

selectedIds.has(id);

-----------------------------------------

4) Filters

Booking websites:

- refundable
- free breakfast
- wifi

Store selected filters in a Set because
each filter should only exist once.

-----------------------------------------

5) Prevent duplicate processing

Example:

visitedUsers
processedOrders
loadedPages

=========================================
INTERVIEW NOTES
=========================================

Set:
- Stores unique values
- Preserves insertion order
- Can store primitives and objects
- Compares objects by reference
- Uses .size instead of .length

Most common pattern:

const unique = [...new Set(array)];

=========================================
*/
