// sorting strings

const names = ["ahmed", "zyad", "sara", "aya"];

names.sort();
console.log(names); // ["ahmed", "zyad", "sara", "aya"] ✅

// When can an issue be introduced?
// When there is a mix between upper and lowercase letters
// Why this happens? because every character has a unique unicode
// and that unicode differs in case of lowercase and uppercase letters

// Solution?

const mixedNames = ["ahmed", "Zyad", "sara", "Aya"];
mixedNames.sort((a, b) => a.localeCompare(b));
console.log(mixedNames);

// ----------------------------------------------------------------

const Arabic_Names = ["ابراهيم", "علي", "أحمد", "محمد"];
Arabic_Names.sort(); // not best practice to use sort alone
console.log(Arabic_Names);

// what is recommended is to also use localCompare but with specifying the language
Arabic_Names.sort((a, b) => a.localeCompare(b, "ar"));

// ----------------------------------------------------------------

const users = [
  { name: "Ahmed", age: 22 },
  { name: "Sara", age: 30 },
  { name: "Abdo", age: 25 },
];

users.sort(); // will not work for sure ❌
console.log(users); // same object

// Solution
users.sort((a, b) => a.age - b.age);
console.log(users); // ✅

// In Real Life, it's not that easy
// For example I may have array of students object, and I want to sort it based on their score,
// and if scores are equal, sort based on their names

const students = [
  { name: "Sara", score: 90 },
  { name: "Ali", score: 90 },
  { name: "Omar", score: 80 },
  { name: "Ahmed", score: 85 },
];

students.sort((a, b) => {
  const scoreDifference = b.score - a.score;
  if (scoreDifference !== 0) return scoreDifference;
  return a.name.localeCompare(b.name);
});

// better solution
const byScore = (a, b) => b.score - a.score;
const byName = (a, b) => a.name.localeCompare(b.name);

students.sort((a, b) => byScore(a, b) || byName(a, b));

// Dates Sorting

const dates = ["2026-01-01"]; // ❌ that form is not recommended
const correctDates = [new Date("2026-01-01")]; // ✅ that is good because it is converted to timestamp, so I can compare it

// When Dealing with dates it's better to use a library like moment.js 🤚✅✅✅✅✅ very recommended
// but it's a little heavy

// Alternatives:
// 1- Day.js (Best for an identical, lightweight drop-in)
// 2. date-fns (Best for Tree-Shaking & Performance)
