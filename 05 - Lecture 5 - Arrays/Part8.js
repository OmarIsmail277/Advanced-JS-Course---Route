// reduce method

const arr = [1, 10, 12, 18];

let sum = 0;

for (let i = 0; i < arr.length; i++) sum += arr[i];

console.log(sum); // 41

// to calculate the sum, I need two variables, the accumulator (الحصالة) and the current value (الفلوس الي هزودها في الحصالة)

let summation = arr.reduce((sum, ele) => {
  console.log(ele);
  return sum + ele;
}, 0);
