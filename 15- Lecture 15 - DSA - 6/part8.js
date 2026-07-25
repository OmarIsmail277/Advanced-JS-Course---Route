// resolving collisions
// this is one of many ways - research if you are interested

// improving set method

function set(key, value) {
  const index = this.hash(key);
  // this.table[index] = value;

  const bucket = this.table[index];
  if (!bucket) this.table[index] = [[key, value]];
  else {
    const sameKeyItem = bucket.find((item) => item[0] === key);
    if (sameKeyItem) sameKeyItem[1] = value;
    else bucket.push([key, value]);
  }
}

function get(key) {
  const index = this.hash(key);
  //   return this.table[index];

  const bucket = this.table[index];

  if (bucket) {
    const sameKeyItem = bucket.find((item) => item[0] === key);
    if (sameKeyItem) return sameKeyItem[1];
  }
  return undefined;
}

function remove(key) {
  const index = this.hash(key);
  // this.table[index] = undefined;
  const bucket = this.table[index];
  if (bucket) {
    const sameKeyItem = bucket.find((item) => item[0] === key);
    if (sameKeyItem) bucket.splice(bucket.indexOf(sameKeyItem), 1);
  }
}

/*
i want to mention here that increasing
the size of the array is not the best
solution to handling collisions
sure it may reduce the number of
collisions but there is always a
possibility of data loss
typically whenever the hash table
reaches half the capacity or more
the array capacity is doubled and the
key value pairs are rehashed
all right let me conclude this video by
talking about time complexity
if you have a look at set get and remove
all of them use array.find which loops
over the elements in the array
and if you have watched the algorithms
playlist you can safely say the time
complexity is
linear however with hash tables the
collision is very minimal
and it can be reduced to a great extent
by having better hashing functions
and because of that
we generally consider the average case
time complexity instead of worst case
time complexity when it comes to hash
tables
the average case complexity is constant
that is the reason hash tables are a
prime choice when solving problems

*/
