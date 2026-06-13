/*
=========================================
Object.freeze()
=========================================

freeze() makes an object immutable.

After freezing:

❌ Cannot add properties
❌ Cannot delete properties
❌ Cannot modify existing values

*/

const user = {
  name: "Nour",
};

Object.freeze(user);

user.name = "Route";
user.age = 22;

console.log(user);

/*
Result:

{ name: "Nour" }

In strict mode:
→ TypeError may be thrown

-----------------------------------------
Important: freeze() is SHALLOW
-----------------------------------------

freeze() only affects the first level.

Nested objects are NOT automatically frozen.
*/

const user2 = {
  name: "Nour",
  address: {
    city: "Alex",
  },
};

Object.freeze(user2);

user2.address.city = "Cairo";

console.log(user2.address.city);

/*
Result:

"Cairo"

Why?

Because:

user2.address

is a completely separate object with its own
reference and its own property descriptors.

JavaScript treats every new {} as a new object.

This is the same reason shallow copies still
share nested objects.

To deeply freeze an object, recursion is needed.
*/

/*
=========================================
Object.seal()
=========================================

seal() is less strict than freeze().

After sealing:

❌ Cannot add properties
❌ Cannot delete properties
✅ Can modify existing values

*/

const user3 = {
  name: "Nour",
  address: {
    city: "Alex",
  },
};

Object.seal(user3);

user3.name = "Route";
user3.age = 22;

console.log(user3);

/*
Result:

{
  name: "Route",
  address: { city: "Alex" }
}

"name" changed successfully.

"age" was NOT added.
*/

/*
-----------------------------------------
freeze() vs seal()
-----------------------------------------

freeze():
❌ add
❌ delete
❌ modify

seal():
❌ add
❌ delete
✅ modify existing values
*/

/*
=========================================
Optional Chaining (?.)
=========================================

Used when a property may not exist.

Prevents runtime errors caused by trying
to access properties of undefined or null.
*/

const obj = {};

console.log(obj.address?.city);

/*
Without optional chaining:

obj.address.city

Error:

Cannot read properties of undefined

Because:

obj.address === undefined

-----------------------------------------

With optional chaining:

obj.address?.city

If address exists:
→ get city

If address is undefined/null:
→ return undefined safely
*/

/*
Common usage:

user?.address?.city
response?.data?.products
currentUser?.name

Useful when working with:
- API responses
- Optional fields
- Async data
*/

/*
=========================================
Nullish Coalescing (??)
=========================================

Provides a fallback value ONLY when the
left side is:

- null
- undefined

Unlike ||, it does NOT treat other falsy
values as missing.
*/

const obj2 = {
  age: 0,
};

console.log(obj2.age || 18);

/*
Result:

18

Why?

Because:

0 is falsy.
*/

console.log(obj2.age ?? 18);

/*
Result:

0

Why?

Because:

?? only checks for:

null
undefined

0 is a valid value.
*/

/*
-----------------------------------------
|| vs ??
-----------------------------------------

|| (logical OR)

Triggers fallback for ANY falsy value:

false
0
""
null
undefined
NaN

-----------------------------------------

?? (nullish coalescing)

Triggers fallback ONLY for:

null
undefined

-----------------------------------------

Examples:

0 || 100      -> 100
0 ?? 100      -> 0

"" || "Guest" -> "Guest"
"" ?? "Guest" -> ""

false || true -> true
false ?? true -> false
*/

/*
=========================================
INTERVIEW NOTES
=========================================

Object.freeze()
→ completely locks first-level properties

Object.seal()
→ prevents adding/removing properties
   but allows modifying existing values

Optional Chaining (?.)
→ safely access nested properties

Nullish Coalescing (??)
→ fallback only for null/undefined

Common combo:

user?.address?.city ?? "Unknown"

Meaning:

1) Safely get city
2) If city is null/undefined
   return "Unknown"
=========================================
*/
