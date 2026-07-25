// hash table
/*
a hash table, also known as hash map, is a data structure that is used to store key-value pairs.

given a key, you can associate a value with that key for very fast lookup

dont we already have object in js for that same purpose?

yes! js's object is a special implementaiton of the hash table data strucutre. however, object class adds its own keys.

keys that you input may conflict and overwrite the inherited default properties

what about map? yes it overcomes that shortcomings in object

and that what you should use


writing your own hash table implemenation is a very popular js interview question

hashtable store key-value pairs

1. 'eg' => egypt
2. 'mor' => morocco

we store they key value pairs in a fix sized array
arrays have a numeric index
how do we go frmo using string as index to a number as index

a hashing functions accepts the string kye, converts it into a hash code using a defined logic and then maps it into
a numeric index that is within the bounds of the array

using the index, store the value

the same hasing function is reused to retrieve the value given a key

3 main operations

1- set to store a key-value pair
2- get to retrieve a value given its key
3- remove to delete a key value pair

hash tables are typically imlemented where constant time lookup and insertion are required 👇

database indexing

caches

*/
