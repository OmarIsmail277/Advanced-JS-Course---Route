// Recursion:
// A function calling itself.
//
// Every recursive function must have a base case (stopping condition)
// that eventually ends the recursion.
//
// Without a base case, the function will keep calling itself until
// the call stack overflows, resulting in:
// "Maximum call stack size exceeded".

function countdown(n) {
  // base case
  if (n === 0) return;

  console.log(n);
  countdown(n - 1);
}

// Factorial - most famous recursion examples

function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}
