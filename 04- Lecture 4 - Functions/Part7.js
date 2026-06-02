// Currying
// Currying is a technique where a function that takes multiple arguments
// is transformed into a sequence of functions that each take a single argument.

function add(a, b) {
  return a + b;
}

// 👇

function add(a) {
  return function (b) {
    return a + b;
  };
}

// arrow function syntax
const add = (a) => (b) => a + b;

const x = add(10)(20);
console.log(x);

const addTwo = add(10); // here a is seen from the closure

console.log(addTwo(20));
console.log(addTwo(30));

// use case - roles
const hasRole = (role) => (user) => user.roles.includes(role);

const user = {
  name: "Ahmed",
  roles: ["user", "admin"],
};

// = (user) => user.roles.includes("admin") - returned the function body with the role "admin" in the closure and user is the parameter of the returned function
const isAdmin = hasRole("admin");
console.log(isAdmin(user)); // true

// the is the right way to check if the user has the admin role without repeating the role string multiple times in the code.
// We can create different functions for different roles using the same hasRole function.
// and also canCreate, canDelete, canUpdate functions for different permissions.
