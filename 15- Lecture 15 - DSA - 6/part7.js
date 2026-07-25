// // 3 main operations

// 1- set to store a key-value pair
// 2- get to retrieve a value given its key
// 3- remove to delete a key value pair
// +
//  hashing function to convert a str key to a num index

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) total += key.charCodeAt(i);
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) console.log(i, this.table[i]);
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

// a bug can be found if the key is anagarm => name, mane, will produce the same index using the simple hashing function used
// and the latter will override the former value, that is called a collison and needs to be handled in our implementation
