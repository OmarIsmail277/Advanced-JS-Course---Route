/*
=========================================
Object Copying - Shallow vs Deep Copy
=========================================
*/

const user = {
  name: "Nour",
  age: 32,

  // nested object (important for shallow copy concept)
  address: {
    city: "Alex",
  },
};

/*
-----------------------------------------
1) Reference Copy (NOT a copy)
-----------------------------------------
*/

const copy1 = user;

copy1.name = "Abdo";

console.log(copy1);
console.log(user); // changes reflect here

/*
Why?

Because copy1 and user point to the SAME object in memory.
*/

/*
-----------------------------------------
2) Shallow Copy
-----------------------------------------
*/

// Spread operator
const copy2 = { ...user };

copy2.name = "Sara";

console.log(copy2);
console.log(user); // name change NOT reflected

/*
BUT nested objects are still shared!
*/

copy2.address.city = "Cairo";

console.log(copy2.address);
console.log(user.address); // changed!

/*
Why is it called SHALLOW?

Because it only copies the first level.

Nested objects are still copied by reference.
*/

/*
Same shallow copy using:
*/

const copy3 = Object.assign({}, user);

/*
-----------------------------------------
3) Deep Copy (Real Copy)
-----------------------------------------
*/

// Modern solution
const copy4 = structuredClone(user);

copy4.address.city = "London";

console.log(copy4.address);
console.log(user.address); // NOT affected

/*
structuredClone creates a true deep copy.

BUT:
- It cannot clone functions
- It cannot clone some special types (like DOM nodes)
*/

/*
-----------------------------------------
4) JSON Trick (Old workaround)
-----------------------------------------
*/

const user2 = {
  name: "Ali",
  birthDate: new Date(),
  sayHi() {
    console.log("hi");
  },
  x: undefined,
};

const copy5 = JSON.parse(JSON.stringify(user2));

console.log(copy5);

/*
Problems with JSON method:

❌ removes functions
❌ removes undefined
❌ converts Date -> string
❌ breaks Map, Set, Symbol
*/

/*
-----------------------------------------
5) So what's the best solution?
-----------------------------------------
There is NO perfect built-in deep clone for everything in JavaScript.
but will talk about that further in OOP Section Insha'Allah and also you can make you own custom deep clone or using lodash lbrary
*/

// Library
import cloneDeep from "lodash/cloneDeep";

const copy = cloneDeep(obj);

// Custom
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const result = {};
  for (let key in obj) {
    result[key] = deepClone(obj[key]);
  }

  return result;
}

// “There is no universal deep copy in JavaScript because objects can contain functions, circular references, and complex built-in types.
// That’s why structuredClone exists for safe cases, and libraries or custom logic are used for advanced cases.”
