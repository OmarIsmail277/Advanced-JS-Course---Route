// IIFE (Immediately Invoked Function Expression)

// we had a very silly problem before ES6, let, const and modules(import/export) were introduced,
// that is the private scope of variables. If we declare a variable in the global scope, it can be accessed and modified from anywhere
// in the code, which can lead to unintended consequences and bugs.
// To solve this problem, developers used to wrap their code in a function and immediately invoke it,
// creating a new scope for the variables declared inside the function.
//  This pattern is known as an IIFE (Immediately Invoked Function Expression).

// var is global scope, except in functions

var count = 0; // global variable, can be accessed and modified from anywhere in the code

function increment() {
  count++; // modifies the global variable
}

// but that's not what I want! I may need to use the count variable in other parts of the code,
// but I don't want it to be modified by other functions or code blocks.
// (use it in part 1 and part 2 without worrying about it being modified by each other or by any other code)

// To solve this problem, we can use an IIFE to create a new scope for the count variable, making it private and inaccessible
// from outside the function.

(function () {
  console.log("This is an IIFE!");
  var count = 0; // this count variable is private to the IIFE, it cannot be accessed or modified from outside the function
  console.log(count); // 0
})();

// ()(), one for the function declaration and one for invoking it immediately

// popular example

const counter = (function () {
  let count = 0; // private variable, cannot be accessed or modified from outside the function
  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    },
  };
})();

counter.increment();
counter.increment();
console.log(counter.getCount()); // 2

console.log(counter.count); // undefined, count is not accessible from outside the function
// here there is a closure, the increment and getCount functions have access to the count variable even after the IIFE has been executed,
// because they are defined inside the IIFE and have access to its scope.
