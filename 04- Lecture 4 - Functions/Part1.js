// this

const user = {
  name: "Ahmed",
  age: 33,
  salary: 10000,
  calcSalary: function () {
    console.log(this.salary);
  },
};

// this does not depend on where the function is written but depends on how the function is called.

user.calcSalary(); // 10000 - this ============ user

// Take a reference to the function and call it later without the object reference
const calcFn = user.calcSalary;

calcFn(); // undefined - this ============ global object (window in browser, global in node) (this is lost)

function saySalam() {
  console.log("Salam");
}

const x = saySalam;

// function is not executed here, we are just taking a reference to it, no call or invocation is happening here, no call || invoke.
// so this will not print "Salam" to the console, it will just assign the function reference to x.

// When will it be executed?
x(); // "Salam"

// -------------

const a = saySalam();
// here we are calling the function and assigning its return value to a, since saySalam does not return anything,
// it will return undefined by default, so a will be assigned the value of undefined.

const b = saySalam;
// here we are just taking a reference to the function and assigning it to b, so b will be assigned the function reference,
// not the return value of the function.

console.log(a); // undefined
console.log(b); // [Function: saySalam]

// Now, What if I want to give the function another object context to work with, instead of the global object?

const anotherUser = {
  name: "Ali",
  age: 25,
  salary: 5000,
};

function welcome(salary) {
  console.log(`Welcome ${this.name}, your salary is ${salary}`);
}

// solution: using bind method
const welcomeAli = welcome.bind(anotherUser);
welcomeAli(5000); // Welcome Ali, your salary is 5000

// Function description: @param thisArg — *The object to be used as the this object*

// For a given function, creates a bound function that has the same body as the original function.
// The this object of the bound function is associated with the specified object, and has the specified initial parameters.

// while bind creates a new function, call and apply invoke the function IMMEDIATELY with a given this value and arguments provided
// individually -> (call) or as an array -> (apply).

welcome.call(anotherUser, 5000); // Welcome Ali, your salary is 5000
welcome.apply(anotherUser, [5000]); // Welcome Ali, your salary is 5000

// -------------------------------------

const person1 = {
  name: "Ahmed",
  sayName() {
    console.log(this.name);
  },
};

const person2 = {
  name: "Aya",
};

// I want to use person1's sayName method to print person2's name, "borrowing" the method from person1
person1.sayName.call(person2); // Aya
person1.sayName.apply(person2); // Aya

// -----------------------

Math.max(1, 2, 3); // 3

// What If I want to pass arguments as an array instead of individually?

const arr = [1, 2, 3];

console.log(Math.max(arr)); // NaN - because Math.max expects individual numbers, not an array

// Solution?: using apply method to pass the array as arguments
Math.max.apply(null, arr); // 3

// or using spread operator - modern way to achieve the same result without using apply
Math.max(...arr); // 3

// --------------------------

function displayName() {
  console.log(this.name);
}

const user1 = {
  name: "Ahmed",
};

const user2 = {
  name: "Aya",
};

const fn = displayName.bind(user1);
const fn2 = fn.bind(user2);

fn(); // Ahmed
fn2(); // Ahmed - because bind creates a new function with the this value set to user1,
// and fn2 is a new function created from fn, so it will also have the this value set to user1, not user2.

// That's because the first bind always win 💪 and the second bind will not change the this value of the function, it will still be user1.
// So, once my function is bound to a specific this value, it cannot be re-bound to another this value, ❌
// it will always refer to the original this value that it was bound to. ✅

// -------------------------

// call, apply, bind with arrow functions
// call, apply, and bind are all used to explicitly set the this value of a function when it is called or invoked.
// Arrow functions do not have their own this value, they inherit the this value from their enclosing scope.

const user = {
  name: "Ahmed",
};

const x = () => {
  console.log(this.name);
};

x.call(user); // undefined - because arrow functions do not have their own this value,
// they inherit the this value from their enclosing scope, which is the global object in this case,
// and the global object does not have a name property, so it will print undefined.

// so since arrow functions do not have their own this value, using call, apply, or bind on an arrow function
// will not change the this value of the function, لأن هي أصلا ملهاش this
//  it will still refer to the this value of the enclosing scope.

// so, if you want to use call, apply, or bind to set the this value of a function, you should use a regular function,
// not an arrow function.

// call, apply return the result of the function call, if the function returns a value,
// while bind returns a new function with the this value set to the specified object, but does not call the function immediately.

// Sometimes I pass null or undefined as the first argument to call/apply
// when I don't want to explicitly set `this`.
//
// For regular functions:
// - In non-strict mode, `this` becomes the global object.
// - In strict mode, `this` remains null or undefined.

const user = {
  name: "Omar",
};

function regularFunction() {
  console.log(this);
}

regularFunction.call(user); // { name: "Omar" }
regularFunction.call(null); // global object (non-strict mode) or null (strict mode)

// For arrow functions, call/apply/bind cannot change `this` at all.
// Arrow functions inherit `this` from their enclosing lexical scope.

const user = {
  name: "Omar",
};

const arrowFunction = () => {
  console.log(this);
};

arrowFunction.call(user); // ignored - same in both cases - undefined (or global value)
arrowFunction.call(null); // ignored - same in both cases - undefined (or global value)

// The this value printed by the arrow function is the same in both calls because arrow functions do not have their own this.

const add = (a, b) => a + b;

console.log(add.apply(null, [10, 20])); // 30
console.log(add.call(null, 10, 20)); // 30

// The null is ignored because:

// 1- Arrow functions don't have their own this.
// 2- The function doesn't use this anyway.
// 3- You're only using call() or apply() to control how arguments are passed.

// So, If I don't care about `this` and only want to pass arguments,
// I can use null or undefined as the first argument to call/apply.
//
// This is common with functions like Math.max or with arrow functions
// that don't use `this`.

// ----------------------------------------------------------------------

// One small note: nowadays, the spread operator (...) has largely replaced many uses of apply() for passing arrays as arguments:
Math.max(...numbers);
// but it's still valuable to understand apply() because it teaches how function invocation works under the hood.

// ----------------------------------------------------------------------------

// Sometimes I pass a function as a callback to another function.
// In that case, the original `this` value may be lost.
// I can use `bind` to create a new function whose `this` is permanently
// set to a specific object, then pass that bound function as the callback.

const person = {
  name: "Omar",
  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

setTimeout(person.sayHello, 1000); // `this` is lost

setTimeout(person.sayHello.bind(person), 1000); // Hello, I'm Omar

// ------------------------------------------------------------------------------------

const user = {
  id: 1,
  name: "Ahmed",
};

const user = {};

user.id = 1;
user.name = "Ahmed";
