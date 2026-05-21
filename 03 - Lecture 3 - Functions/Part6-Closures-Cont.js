// Continue of Closures

// Debounce
// A debounce function is a higher-order function that limits the rate at which a function can fire.
// It ensures that a function is only executed after a certain amount of time has passed since it was last invoked.
// This is particularly useful for optimizing performance in scenarios like handling user input events, resizing windows,
// or making API calls.

function debounce(callback, delay) {
  let timerId;

  return function (...args) {
    clearInterval(timerId);

    timerId = setTimeout(function () {
      callback(...args);
    }, delay);

    console.log(`Timer ID: ${timerId}`); // This will log the timer ID, which can be useful for debugging purposes.
  };
}

const search = debounce((value) => {
  console.log(`Searching for: ${value}`);
}, 3000);

search("J");
search("Ja");
search("Jav");
search("Java");
search("JavaS");

// ===============================
// Debounce (Final Summary)
// ===============================
//
// Debounce ensures a function only runs AFTER the user stops triggering it
// for a specified delay.
//
// How it works:
//
// 1. A closure is created over `timerId` so it persists between calls.
// 2. Every time the returned function is called:
//    - The previous timer (if any) is cancelled using clearTimeout(timerId).
//    - A new timer is created using setTimeout and stored in timerId.
// 3. If new calls keep happening before the delay finishes,
//    the timer keeps resetting.
//
// 4. Only when the calls STOP for the full delay duration:
//    - The last setTimeout callback executes
//    - The original function (callback) is finally called with latest arguments.
//
// Key ideas:
// - Closure keeps `timerId` alive across multiple calls.
// - setTimeout schedules delayed execution (asynchronous).
// - clearTimeout prevents previous scheduled executions.
// - Only the last user action "wins".
//
// Result:
// → Useful for search inputs, resize events, API calls, etc.
// → Prevents unnecessary repeated execution.

// ----------------------------------------------------

// Closures are used in Caching and Memoization

function memo(fn) {
  const cache = new Map();

  return function (value) {
    if (cache.has(value)) {
      console.log("Cache hit for value:", value);
      return cache.get(value);
    }
    console.log("Cache miss for value:", value);
    const result = fn(value);
    cache.set(value, result);
    return result;
  };
}

const squre = memo((x) => {
  console.log(`Calculating square for ${x}`);
  return x * x;
});

console.log(squre(4)); // Cache miss, calculates and stores in cache
console.log(squre(4)); // Cache hit, retrieves from cache
console.log(squre(5)); // Cache miss, calculates and stores in cache
console.log(squre(5)); // Cache hit, retrieves from cache

// Closres are like a backpack that carries variables and functions with it, from the outer scope,
// allowing us to access and manipulate them even after the outer function has finished executing.
// They are essential for creating private variables, implementing data encapsulation, and enabling powerful programming patterns
// like debouncing and memoization.
