// Named function expression

// first, we were doing that

const sayHi = function () {
  console.log("Hi");
};

// But that is an anonymous function expression 🤔
// But!! I can give it a name!

const sayHi = function greeting() {
  console.log("Hi");
};

// but where can I call that function with the name "greeting" ? 🤔🤔🤔

greeting(); // ReferrenceError: greeting is not defined

// Guess what? I can only use that name inside the function itself

const sayHi = function greeting() {
  console.log("Hi");

  greeting();
};

// but outside the function, I use sayHi to call it
sayHi();

// What may be the use cases of that then?
// I can use it with Recursion

const factorial = function fact(n) {
  if (n <= 1) return 1;

  return n * fact(n - 1);
};

console.log(factorial(5));

// but can that be really important? let's see

// Our normal way

const factorial = function (n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

// If I tried that
let res = factorial;
factorial = null;
console.log(res(5)); // TypeError: factorial is not a function

// It will work normally, but since because it depends on factorial inside "factorial(n-1)", it will cause an error!

// but in case of naming the function and depending on it, it will work normally

const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};

const res = factorial;
factorial = null;
console.log(res(5)); // 120 ✅✅✅

// The recursive call does not depend on the outer variable `factorial`.
// It depends on the function's internal name `fact`, so recursion still
// works even if the outer variable `factorial` is reassigned or set to null.

// factorial ──► function fact(){...}
//                  ▲
//                  │
//                fact

// Even if you cut:
factorial = null;
// the internal fact reference still exists, so recursion continues to work.

// So, Named function expressions are useful for recursion because the function
// can refer to itself using its internal name (`fact`) instead of relying
// on the outer variable (`factorial`), which may later be reassigned.
