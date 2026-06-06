// Array-Like

// Not everything that looks like an "Array" is an "Array". 💭

// Example of obj that looks like an array
const obj = {
  0: "HTML",
  1: "CSS",
  2: "JS",
  length: 3,
};

console.log(obj[0]);
console.log(obj.length);

// But hold on 🤚! I can't call the array methods
obj.map(); // obj.map is not a function => because obj is not a real array

// How to convert it?
const res = Array.from(obj); // from inside it, it uses Symbol.iterator

console.log(res); // ["HTML", "CSS", "JS"]

// Array.from is useful when dealing with NodeList & HTMLCollection & arguments

function test() {
  console.log(arguments);
  console.log(Array.isArray(arguments));
}

test(1, 2, 3); // false

// Array.from has to be used on an iterable object

// can't be used on an object like that

const user = {
  name: "ahmed",
  age: 33,
};

console.log(Array.from(user)); // [] -> empty array

// convert an array to object

const fruits = ["apple", "banana", "orange"];

const obj = { ...fruits };

console.log(obj); // {0: "apple", 1: "banana", 2: "orange"}

//////////////////////

// input
const list = [
  {
    id: 1,
    title: "bl7",
  },
];

// output
const btee5 = {
  1: {},
};

const results = {};

list.map((ele) => {
  results[ele.id] = ele;
});

console.log(results); // {1: {id:1, title: "bl7"}} obj where key is the id, value is the obj => grouping
// we used it in the groupBy method in the assignment
