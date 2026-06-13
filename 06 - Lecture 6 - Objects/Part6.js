// =========================================
// Methods of Creating Objects
// =========================================

/*
-----------------------------------------
1) Object Literal (Most Common)
-----------------------------------------
*/

const user = {
  name: "Ahmed",
};

console.log(user);

/*
Simple, readable, and the most commonly used way
to create objects.
*/

/*
-----------------------------------------
2) Object Constructor
-----------------------------------------
*/

const user2 = new Object();

user2.name = "Abdo";

console.log(user2);

/*
Equivalent to:

const user2 = {};

Historically used, but object literals are preferred.
*/

/*
-----------------------------------------
3) Object.create()
-----------------------------------------
*/

const person = {
  sayHi() {
    console.log("Hi");
  },
};

const user3 = Object.create(person);

user3.name = "Abod";

console.log(user3);

/*
user3 contains:

{
  name: "Abod"
}

Its prototype is person.

Conceptually:

user3
  ↓
person
  ↓
Object.prototype
  ↓
null
*/

user3.sayHi();

/*
Property lookup:

1) Search in user3
2) Search in person => found here ✅
// if not found it will continue looking up 👇
3) Search in Object.prototype
4) Stop at null
*/

/*
Object.create() is commonly used when we want
to explicitly control the prototype.
*/

/*
-----------------------------------------
4) Constructor Function
-----------------------------------------
*/

function User(name, age) {
  this.name = name;
  this.age = age;
}

const u1 = new User("Ahmed", 22);
const u2 = new User("Abdo", 20);

console.log(u1);
console.log(u2);

/*
Before ES6 classes, this was the primary way
to create multiple object instances.

-----------------------------------------
What does "new" do?
-----------------------------------------

When we write:

const u1 = new User("Ahmed", 22);

JavaScript internally does:

1) Create a new empty object {}

2) Set its prototype to User.prototype (The object's prototype is linked to Constructor.prototype)

3) Bind "this" to the new object

4) Execute the function body (constructor function)

5) Return the new object automatically,   
(unless the constructor explicitly returns another object).

*/

/*
Conceptually:

const obj = {};

obj.__proto__ = User.prototype; => Object.setPrototypeOf(obj, User.prototype);

User.call(obj, "Ahmed", 22);

return obj; 
*/

/*
-----------------------------------------
5) ES6 Classes
-----------------------------------------
*/

/*
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

Under the hood, classes are built on top of
constructor functions and prototypes.

Classes are often called:

"Syntactic Sugar"
*/

/*
-----------------------------------------
6) Factory Function - Interview Question
-----------------------------------------
*/

function createUser(name, age) {
  return {
    name,
    age,

    sayHi() {
      console.log(`Hi ${name}`);
    },
  };
}

const u3 = createUser("Ahmed", 33);

console.log(u3);
/*
{
name: 'Ahmed'
age: 33
sayHi: ƒ sayHi()
}
*/

/*
No "new" keyword needed.

Why?

Because the function explicitly returns
an object.

Factory functions are popular because they:

- Are simple
- Avoid "this" confusion
- Work well with closures
*/
