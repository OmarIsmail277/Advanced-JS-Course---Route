// =========================================
// Interview Questions Summary (Objects)
// =========================================

// 1) Object used as a key
const obj1 = {};

obj1[{}] = "hello";

console.log(obj1);

/*
Key Insight:
- Object keys are always converted to strings
- {} becomes "[object Object]"

Result:
{
  "[object Object]": "hello"
}
*/

// =========================================

// 2) Object key ordering

const obj2 = {
  2: "two",
  1: "one",
  b: "bee",
  a: "aye",
};

console.log(Object.keys(obj2));

/*
Key Insight:
Object key order rules:

1) Numeric keys → sorted ascending
2) String keys → insertion order

Result:
["1", "2", "b", "a"]
*/

// =========================================

// 3) Object.create + prototype

const user = Object.create({ role: "Admin" });

user.name = "Ahmed";

console.log(user);

/*
Key Insight:
- "role" is NOT inside user itself
- It exists in prototype

user (own):
{ name: "Ahmed" }

prototype:
{ role: "Admin" }
*/

// =========================================

// 4) "in" vs Object.hasOwn

console.log("role" in user);
console.log(Object.hasOwn(user, "role"));

/*
Key Insight:

"in"
→ checks object + prototype chain
→ returns true (role exists in prototype)

Object.hasOwn()
→ checks ONLY own properties
→ returns false (role is not own property)
*/

// =========================================
