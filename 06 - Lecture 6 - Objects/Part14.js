/*
=========================================
Object Destructuring
=========================================

Destructuring allows us to extract properties
from objects and store them in variables.

Instead of:

const name = user.name;

We can write:

const { name } = user;

This creates a variable called "name"
containing the value of user.name.

-----------------------------------------
Basic Destructuring
-----------------------------------------
*/

const user = {
  name: "Ali",
  age: 25,
  address: {
    city: "Alex",
  },
};

const { name } = user;

console.log(name);

/*
Result:

"Ali"
*/

/*
-----------------------------------------
Aliases (Renaming Variables)
-----------------------------------------

Useful when:

1) A variable with the same name already exists
2) You want a more descriptive name

Syntax:

propertyName: variableName
*/

const name2 = "Nour";

const { name: bl7 } = user;

console.log(bl7);

/*
Result:

"Ali"

Meaning:

const bl7 = user.name;
*/

/*
-----------------------------------------
Default Values
-----------------------------------------

Useful when a property may not exist.

Syntax:

property = defaultValue
*/

const { role = "User" } = user;

console.log(role);

/*
Result:

"User"

Because:

user.role === undefined
*/

/*
If the property exists,
the default value is ignored.
*/

/*
-----------------------------------------
Nested Object Destructuring
-----------------------------------------

We can destructure nested objects directly.
*/

const {
  address: { city },
} = user;

console.log(city);

/*
Result:

"Alex"

Equivalent to:

const city = user.address.city;
*/

/*
-----------------------------------------
Important Note
-----------------------------------------

After:

const {
  address: { city },
} = user;

Only "city" exists as a variable.

There is NO variable called "address".

This will fail:

console.log(address);

ReferenceError
*/

/*
-----------------------------------------
Nested Destructuring + Alias
-----------------------------------------
*/

const {
  address: { city: userCity },
} = user;

console.log(userCity);

/*
Result:

"Alex"
*/

/*
=========================================
INTERVIEW NOTES
=========================================

const { name } = user;

Equivalent to:

const name = user.name;

-----------------------------------------

const { name: userName } = user;

Equivalent to:

const userName = user.name;

-----------------------------------------

const { role = "User" } = user;

Uses default value only when:

role === undefined

-----------------------------------------

const {
  address: { city },
} = user;

Equivalent to:

const city = user.address.city;

=========================================
*/

/*
=========================================
Alias + Default in Destructuring
=========================================

You can rename a property AND set a default value
at the same time.

Syntax:
const { key: alias = defaultValue } = obj;
*/

const user = {
  name: "Ali",
};

const { name: userName = "Guest" } = user;

console.log(userName); // "Ali"

/*
How it works:
- take user.name
- store it in userName
- if undefined → use "Guest"

Important:
Default works ONLY when value is undefined,
not for null, "", 0, false.
*/
