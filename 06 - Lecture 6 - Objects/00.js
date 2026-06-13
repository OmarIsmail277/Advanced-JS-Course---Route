// object ==> structure ==> data ... as key : value

// non primitive data types consist of primitive data types

const user = {
  name: "Nourhan",
  age: 32,
  isInstructor: true,
};

console.log(user.age); // more common - when the key name is known
console.log(user["age"]); // used when key is dynamic

const userInput = window.prompt("enter the key you want"); // name, age, isIns
// console.log(user.userInput); ❌
console.log(user[userInput]); // ✅

// ---

const field = "email";

const user = {
  name: "Ali",
  [field]: "asd@yahoo.com",
};

// used in forms

const user = {};
function updateUser(key, value) {
  user[key] = value;
}

updateUser("name", "ahmed"); // ✅
updateUser("age", 33); // ✅

// user.name = "ahmed"; ❌
// user.age = 33; ❌

const x = {
  1: "asda",
  true: "adsd",
};

// In objects, keys are coerced to strings

const obj = {};

const a = {};
const b = {};

obj[a] = "A";
obj[b] = "B";
console.log(obj);

/*
{} : "a" -> "{}" ==> "[object Object]" : "A" 
*/

// Clone Object

// ❌
const user = {
  name: "Nour",
  age: 32,
};

// reference copy
const copy = user;
