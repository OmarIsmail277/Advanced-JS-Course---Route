// // 3 main operations

// 1- set to store a key-value pair
// 2- get to retrieve a value given its key
// 3- remove to delete a key value pair
// +
//  hashing function to convert a str key to a num index

class HashTable {
  // default size
  constructor(size = 53) {
    // this.table = new Array(size);
    this.buckets = new Array(size);
    this.size = size;
  }

  _hash(key) {
    let total = 0;
    // preferrred first numbers, when you use a large prime number, it reduces collisions
    const prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charCode = key.charCodeAt(i);
      total = (total * prime + charCode) % this.size;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key); // Converts the key into an array index

    // If the bucket at this index doesn't exist yet, initialize it as an empty array
    if (!bucket) {
      // If the key wasn't found in the bucket, add it as a new key-value pair (Insert)
      this.buckets[index] = [[key, value]];
      return this;
    }

    // If the bucket exists, grab it and check for updates or pushes
    const bucket = this.buckets[index];

    // Search through the bucket to see if the key already exists (Update)
    for (const entry of bucket) {
      if (entry[0] === key) {
        entry[1] = value;
        return this; // Return 'this' to allow method chaining (e.g., ht.set('a', 1).set('b', 2))
      }
    }

    // Key wasn't in the existing bucket, so push it as a new pair
    bucket.push([key, value]);
    return this;
  }

  get(key) {
    const index = this._hash(key); // 1. Jump directly to the right index
    let bucket = this.buckets[index];

    if (!bucket) return undefined; // 2. Fast Exit: No bucket means key was never added

    // 3. Destructure each [key, value] pair in the bucket
    for (const [storedKey, storedValue] of bucket) {
      if (storedKey === key) return storedValue; // Match found! Return value
    }

    return undefined; // 4. Scanned the bucket, but key wasn't there
  }

  remove(key) {
    const index = this._hash(key); // 1. Jump directly to the bucket index
    const bucket = this.buckets[index];
    if (!bucket) return false; // 2. Fast Exit: Bucket is empty, key doesn't exist

    // 3. Find the exact position of the key inside the bucket array
    const entryIndex = bucket.findIndex(([storedKey]) => storedKey == key);

    if (entryIndex == -1) return false; // 4. Scanned bucket, key wasn't found

    bucket.splice(entryIndex, 1); // 5. Remove 1 item at entryIndex

    // 6. Cleanup: If bucket is now empty, delete it to free memory
    if (bucket.length == 0) this.buckets[index] = undefined;

    return true; // 7. Successfully removed!
  }

  display() {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) console.log(i, this.buckets[i]);
    }
  }
}

const table = new HashTable(50);

table.set("name", "Ahmed");
table.set("age", "25");
table.display();

console.log(table.get("name"));

table.set("mane", "Mohamed");
table.display();
