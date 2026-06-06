// Arrays

/*
[undefined] ... holes ... packed array ... array-like

mutation? -> interview question
if the method used returned a new array then it's not mutation, else if it modified the same array, then it's a mutation
*/

// Example

const arr = [1, 2, 3, 4];

const res = arr.push(5); // mutates the same array and returns that length after appending -> 5, same as pop

// so mutation means, I have an existing reference and I change the data inside it
// but If I am creating a new reference that does not mean mutation

// a trick 🤔

const x = arr;

x.push(10);

console.log(arr); // ?? -> [1,2,3,4,5,10] , the 10 will be added because x & arr share the same reference

/*

we have stack, that contains the primitive data types

and also the heap(will be discussed later when talking about performance)

objects and arrays values are thrown in the heap and take an address(referrence) to it [1, 2, 3, 4] ==> #123

const arr = [1,2,3,4] -> in reality it looks like that const arr = #123 -> and that address refers to the value,

const arr = #123 is in the stack, so when I make const x = arr, so I have x = #123 also points to the same address,

so therefore x & arr both points to the same address (#123), so when i modify any value, it modifies in the other

so that's actually not a copy, it's the same referrence to the same place

Note: that the heap is large topic, conatins string pool(string const pool) and it has a relation with the string with a differnt way
will be discussed later insha'Allah, the heap did not stop in storing only the value [1,2,3,4], no it also makes some optimizations
in the string


*/
