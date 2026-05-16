const user = {
  name: "Omar",
  age: 30,
};

// Can we iterate over the user object using for...of loop?

// for (const item of user) {
//   console.log(item);
// }

// No, we cannot directly iterate over the user object using a for...of loop because it is not an iterable.
// However, we can make it iterable by implementing the Symbol.iterator method.
// [10, 20, 30] => next => { value: 10, done: false } => next => { value: 20, done: false } => next => { value: 30, done: false }
// => next => { value: undefined, done: true }

// dynamic keys
let userInput = "name";

let user1 = {
  [userInput]: "Omar",
};

console.log(user1); // { name: 'Omar' }

// also may use it as a popup asking the user what key they want to display/access

// Symbol.iterator example:
const evenNumber = {
  [Symbol.iterator]() {
    let n = 0;
    return {
      next() {
        n += 2;
        return n <= 10
          ? { value: n, done: false }
          : { value: undefined, done: true };
      },
    };
  },
};

const user2 = {
  name: "Omar",
  age: 30,
  salary: 50000,
};

console.log(Object.keys(user2)); // ['name', 'age', 'salary']
console.log(Object.values(user2)); // ['Omar', 30, 50000]
console.log(Object.entries(user2)); // [['name', 'Omar'], ['age', 30], ['salary', 50000]]

const user3 = {
  name: "Omar",
  age: 30,
  salary: 50000,
  [Symbol.iterator]() {
    const entries = Object.entries(this);
    let index = 0;
    return {
      next() {
        if (index < entries.length) {
          return {
            value: entries[index++],
            done: false,
          };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

// for...of loop will now work with user3
console.time("for of");
console.log("Iterating over user3:");
for (const [key, value] of user3) {
  console.log(`${key}: ${value}`);
}
console.timeEnd("for of");

// for in loop will still work with user3
console.time("for in");
console.log("Iterating over user3 with for...in:");
for (const key in user3) {
  console.log(`${key}: ${user3[key]}`);
}
console.timeEnd("for in");

// Symbol.iterator allows us to define custom iteration behavior for our objects, making them compatible with for...of loops and other iterable contexts.
// By implementing the Symbol.iterator method, we can control how our objects are iterated over, providing flexibility
// and enhancing their usability in various scenarios.

// Symbol.iterator vs Object.entries:
// Symbol.iterator allows us to define custom iteration behavior for our objects,
// while Object.entries is a built-in method that returns an array of key-value pairs from an object.

// Symbol.iterator is used to make an object iterable, allowing us to use it in for...of loops and other iterable contexts.
// Object.entries, on the other hand, is a convenient way to get an array of key-value pairs from an object, which can be useful for various operations
// like mapping or filtering.

let userrr = {
  name: "Omar",
  age: 30,
};

// normal Object.entries
for (const [key, value] of Object.entries(userrr)) {
  console.log(`${key}: ${value}`);
}

// Object.entries(user) object ==> array of key-value pairs ==> for...of loop to iterate over the array of key-value pairs
// [
//   ["name", "Omar"],
//   ["age", 30],
// ];

let userrr2 = {
  name: "Omar",
  age: 30,
  [Symbol.iterator]() {
    return {
      next() {},
    };
  },
}; // 🧧 used in DSA to create custom iterators for data structures like queue, linked lists, trees, etc.

// In summary, Symbol.iterator is a powerful tool for defining custom iteration behavior for our objects,
// while Object.entries provides a simple way to access the key-value pairs of an object.
// Both have their own use cases and can be used together to enhance the functionality of our objects.

/*
Fastest → Slowest

for...in
↓
Object.keys()
↓
Object.entries()
↓
custom Symbol.iterator
*/
