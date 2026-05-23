//

function sum() {
  console.log(arguments);
  // arguments is an array-like object that contains all the arguments passed to the function
  // we can convert it to an array using Array.from() or the spread operator
  const args = Array.from(arguments);
  // const args = [...arguments];
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10

// rest parameters
function sumRest(...args) {
  // args is an array that contains all the arguments passed to the function
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumRest(1, 2, 3)); // 6
console.log(sumRest(1, 2, 3, 4)); // 10
