const nums = [1, 2, 10, 5];
nums.sort();
console.log(nums); // [1, 10, 2, 5]

// sort method coverts the elements to string, and compare them as text, that's why it sort like that 1, 10, 2, 5, ...
// ["1", "2", "10, "5"] ==> "10" < "2" ? true, because the first char which is 1 is smaller than 2

// how to make it suitable to sort numbers?

nums.sort((a, b) => a - b); // ascending
console.log(nums);
nums.sort((a, b) => b - a); // descending
console.log(nums);
