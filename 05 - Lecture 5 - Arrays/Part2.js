/*
## Mutation Methods

*These methods **modify (mutate) the original array** they are called on.*

* push() & pop()
* push() adds one or more elements to the **end** of an array and returns the new length.
* pop() removes the **last** element from an array and returns that removed element.


* shift() & unshift()
* shift() removes the **first** element from an array and returns it (shifting all other elements down).
* unshift() adds one or more elements to the **front** of an array and returns the new length.


* splice() -> surgery 😷🩺 - cutting a piece of my array
* Changes the contents of an array by **removing, replacing, or adding** elements at a specific index. 
It returns an array of the deleted elements.


* sort()
* Sorts the elements of an array **in place** (by default, alphabetically as strings) and returns the sorted array.


* reverse()
* Reverses the order of the elements in an array **in place** so that the first becomes the last, and the last becomes the first.


* fill()
* Changes all or a section of elements in an array to a **static value** from a start index to an end index, and returns the modified array.


* copyWithin()
* Shallow copies part of an array to **another location within the same array** without modifying its length, overwriting existing elements.

*/

const arr = [1, 2, 3, 4];

// non-mutation methods -> toReversed, toSorted
const res = arr.toReversed(arr);
console.log(res); // [4, 3, 2, 1];

/*

## Non-Mutation Methods

*These methods **do not change the original array**. Instead, they either return a new array, a single value, or a boolean.*

* map(), filter(), & reduce()
* map() creates a **new array** populated with the results of calling a provided function on every element.
* filter() creates a **new array** containing only the elements that pass a specific condition (test) function.
* reduce() executes a user-supplied "reducer" callback function on each element, 
passing in the return value from the calculation on the preceding element, resulting in a **single summary value**.


* concat()
* Merges two or more arrays together and returns a **brand new combined array** without changing the existing ones.


* includes()
* Determines whether an array includes a certain value among its entries, returning true or false.


* slice() 🍕
* *Just like your pizza analogy!* It extracts and returns a **shallow COPY of a portion** of an array into a new array object, 
defined by a start and end index(not included). The original array remains untouched.

const arr = ["a","b","c","d"];
const res = arr.slice(1,3); from 1->2, 3 is not included

console.log(res); // ["b", "c"]


* find()
* Returns the **value of the first element** in the array that satisfies the provided testing function. 
If no elements satisfy the function, it returns undefined.


* some()
* Tests whether **at least one** element in the array passes the test implemented by the provided function, returning a boolean.


* every()
* Tests whether **all** elements in the array pass the test implemented by the provided function, returning a boolean.

*/

/*
🍕 slice(startIndex, endIndex) vs 🩺 splice(startIndex, deleteCount, item1, item2, ...) item1, item2, are optional params to be inserted from the startingIndex.
the slice is like a pizza slice cut and returned without including the end index
and the original array is untouched, as if I took a slice of pizza magically and the whole pizza is the same
It stops before the endIndex. So slice(1, 4) extracts elements at index 1, 2, and 3.

while the splice is like a surgery, cutting a piece of array and returning it and here no end index, here there is a deleteCount, and the original array is touched
Example: splice(1, 3) doesn't mean "cut from index 1 to 3." It means "start at index 1, and cut out 3 elements total" (indexes 1, 2, and 3).
*/
