// Generators

// normal function that is called and returned normally, all the function work once called, but I need it to work on steps, so I need to use generators,
// and the yield keyword, to pause the function and return a value, and then resume the function when the next value is requested, and so on,
// until the function is done, and then it will return the final value. (like in pagination, or in a loop that needs to be paused and resumed)
function test() {}

// generator function that is called and returned as an iterator, and the function work on steps, and the yield keyword is used to pause the function and '
// return a value, and then resume the function when the next value is requested, and so on, until the function is done, and then it will return the final value.
// (like in pagination, or in a loop that needs to be paused and resumed)
function* counter() {
  yield 1;
  yield 2;
  return 3;
}

const x = counter(); // this will return an iterator object that we can use to get the values one by one
const result1 = x.next(); // { value: 1, done: false }
const result2 = x.next(); // { value: 2, done: false }
const result3 = x.next(); // { value: 3, done: true }

console.log(result1); // { value: 1, done: false }
console.log(result2); // { value: 2, done: false }
console.log(result3); // { value: 3, done: true }

// we can also use a for...of loop to iterate over the generator function, and it will automatically call the next() method for us, until the function is done,
// and then it will stop the loop.

// when to use generators? If I want to calculate something that takes a long time (on steps or in batches), and I want to pause the function and return a value,
// and then resume the function when the next value is requested, and so on... (like in pagination, or in a loop that needs to be paused and resumed)

function* displayName(params) {
  const x = yield "first step";
  // ==> this will pause the function and return "first step", and when the next value is requested, it will resume the function and assign the value to x, x=100
  const y = yield "second step";
  // ==> this will pause the function and return "second step", and when the next value is requested, it will resume the function and assign the value to y, y=50
  return `final step: ${x} and ${y}`;
}

const y = displayName(); // this will return an iterator object that we can use to get the values one by one

console.log(y.next()); // { value: 'first step', done: false }
console.log(y.next(100)); // { value: 'second step', done: false }
console.log(y.next(50)); // { value: 'final step: 100 and 50', done: true }
console.log(y.next(500)); // { value: undefined, done: true } // has no use

function* myTest() {
  try {
    yield 1;
    yield 2;
  } finally {
    console.log("cleanup code");
  }
}

const z = myTest();
console.log(z.next()); // { value: 1, done: false }

console.log(z.return(100)); // { value: 100, done: true } and it will execute the finally block and print "cleanup code"

// .next continues from where the function was paused and assign the value to the variable that is waiting for it,
// and .return will immediately end the function and return the value, and it will execute the finally block if there is one.

// we can also use the .throw() method to throw an error inside the generator function, and it will be caught by the catch block if there is one,
// and it will also execute the finally block if there is one.

// now, can I loop on the generator function?
// yes, I can use a for...of loop to iterate over the generator function, and it will automatically call the next() method for us, until the function is done,
// and then it will stop the loop.

function* range(start, end, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

// for ... generator function, it does not see the return

for (const val of range(0, 5)) console.log(val);

/*

// the code above is equivalent to the code below, but it is more concise and easier to read, and it will automatically handle the done property for us, 
// and it will stop the loop when the function is done.
// as if it's a normal loop that we are iterating over an array, but in this case we are iterating over a generator function that is yielding values one by one.
// behind the scenes, the for...of loop is calling the next() method of the iterator object that is returned by the generator function, 
// and it is checking the done property to know when to stop the loop.

const iterator = range(0, 5);
while (true) {
  const result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}

*/

// --------------

function* trafficLights() {
  while (true) {
    yield "RED";
    yield "YELLOW";
    yield "GREEN";
  }
}

const x2 = trafficLights();
console.log(x2.next().value);
console.log(x2.next().value);
console.log(x2.next().value);

// it will go back again to red, because the loop is while true and no return value
console.log(x2.next().value);

// in generators, once next I can't go back to the previous value, but I can only go forward, and I can only get the next value,
// and I can't go back to the previous value, because the function is paused at the current value, and it will resume from there when the next value is requested.
// but in case of pagination, to go back to the previous page, I can simply call the previous value again, and it will return the previous value,
// because the function is paused at the current value, and it will resume from there when the next value is requested.
// I can send a parameter to the next() method to change the value of the variable that is waiting for it, but I can't change the value of the variable
// that is already yielded, because it is already returned and the function is paused at that point.

// last question

function* gen() {
  yield 1;
  return 99;
}

let x3 = gen();
console.log(x3);
// Object [Generator] {} this is the iterator object that is returned by the generator function,
// and it has a next() method that we can use to get the values one by one, and it has a return() method that we can use to end the function and return a value,
// and it has a throw() method that we can use to throw an error inside the function.

console.log(x3.next()); // { value: 1, done: false }
console.log(x3.next()); // { value: 99, done: true }

// when the function is done, it will return the value that is returned by the function, and it will set the done property to true,
// and it will not return any more values, even if we call next() again, it will return { value: undefined, done: true }
console.log(x3.next()); // { value: undefined, done: true }

// for .. of

for (const x of gen()) {
  console.log(x); // 1
}

// in generators, the return value is not included in the iteration, because it is not yielded, it is returned when the function is done, and it is not part of the iteration,
// and it is not included in the for...of loop, because the loop only iterates over the yielded values, and it does not include the return value,
// because it is not yielded, it is returned when the function is done.

// so looping ignore the value where done is true, and that is unlike .next() method, which returns the value even if done is true,
// but it will not return any more values after that, because the function is done.

// So, Generators are used to divide the execution of a function into multiple steps, and to pause and resume the function at any point,
// and to return a value at each step, and to handle the done property to know when the function is done,
// and to use the for...of loop to iterate over the yielded values, and to use the .next() method to get the next value,
// and to use the .return() method to end the function and return a value, and to use the .throw() method to throw an error inside the function.

// If I called the generator function without using the .next() method, it will not execute the function, it will only return an iterator object,
// that we can use to get the values one by one, and it will not execute the function until we call the .next() method, and it will execute the function
// until it reaches the first yield statement, and then it will pause the function and return the value that is yielded,
// and then when we call the .next() method again, it will resume the function from where it was paused, and it will execute the function
// until it reaches the next yield statement, and then it will pause the function and return the value that is yielded,
// and so on, until the function is done, and then it will return the final value that is returned by the function, and it will set the done property to true.

// -------------------------------------------

function* displayName2(params) {
  const x = yield "start-1";
  const y = yield "start-2";
  const z = yield "start-3";

  console.log(x, y);

  return x + y + z;
}

const x4 = displayName2();
// here If I passed a value to the next() method, it will not be assigned to any variable, because the function is paused at the first yield statement,
// and it will return "start-1", and it will not assign the value to any variable, because it is not waiting for any value at this point,
// because there is no previous yield statement that is waiting for a value, so it will just ignore the value that is passed to the next() method,
// and it will return "start-1", and it will pause the function at this point, and it will wait for the next value to be requested,
// and when the next value is requested, it will resume the function from where it was paused, and it will execute the function until it reaches the next yield statement,
// and then it will pause the function again and return "start-2", and it will wait for the next value to be requested, and when the next value is requested,
// it will resume the function from where it was paused, and it will execute the function until it reaches the next yield statement,
// and then it will pause the function again and return "start-3", and it will wait for the next value to be requested, and when the next value is requested,
// it will resume the function from where it was paused, and it will execute the function until it reaches the end of the function,
//  and then it will return the final value that is returned by the function, which is x + y + z, and it will set the done property to true.

console.log(x4.next());
console.log(x4.next(10));
console.log(x4.next(20));
console.log(x4.next(30));
