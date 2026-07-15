/*
╔══════════════════════════════════════════════════════════════╗
║         DSA MINDSET - THINK BEFORE YOU CODE 🧠              ║
╚══════════════════════════════════════════════════════════════╝

Let's see a simple example to understand the DSA mindset.

Suppose we have the following array:

*/

const numbers = [1, 2, 5, 8, 3, 12, 9];

/*
Question:

How can we find the maximum number?

At first glance, there are multiple possible solutions.

For example:

✅ Solution 1

Keep a variable called "max" and compare every element
with it.

--------------------------------------------------------------

✅ Solution 2

Sort the array and return the last element.

--------------------------------------------------------------

✅ Solution 3

Use JavaScript built-in methods.

For example:

Math.max(...numbers)

or

numbers.sort(...)

--------------------------------------------------------------

Notice something important...

✨ There is more than one correct solution.

The real question is:

"Which solution is better?"

This is exactly what DSA teaches us.


╔══════════════════════════════════════════════════════════════╗
║            DON'T TOUCH THE KEYBOARD YET! ✋                 ║
╚══════════════════════════════════════════════════════════════╝

One of the best habits you can build as a programmer:

📝 Grab a pen and paper first.

Before writing a single line of code:

✓ Understand the problem.
✓ Think about possible solutions.
✓ Draw examples.
✓ Test edge cases mentally.
✓ Write pseudocode.

If you jump directly into coding,

you're much more likely to miss edge cases
or write inefficient logic.

💡 The clearer your thinking,
the better your code will be.


╔══════════════════════════════════════════════════════════════╗
║               STEP 1 - WRITE THE ALGORITHM ⚙️               ║
╚══════════════════════════════════════════════════════════════╝

Before JavaScript...

Before Python...

Before C++...

We write the algorithm.

Example:

1️⃣ Assume the first element is the maximum.

2️⃣ Loop through the remaining elements.

3️⃣ If the current number is greater than max,
   update max.

4️⃣ Return max.

Notice:

There is ZERO programming language syntax here.

This is pure problem solving.

That's an algorithm. 🎯


╔══════════════════════════════════════════════════════════════╗
║         STEP 2 - CONVERT THE ALGORITHM TO CODE 💻           ║
╚══════════════════════════════════════════════════════════════╝
*/

function findMax(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

const result = findMax([1, 2, 5, 8, 3, 12, 9]);

console.log(result); // 12

/*
Notice how easy the implementation becomes.

Why?

Because we already solved the problem
before writing code.

Coding was simply translating our algorithm
into JavaScript.


╔══════════════════════════════════════════════════════════════╗
║            LET'S TRACE THE ALGORITHM 🔍                     ║
╚══════════════════════════════════════════════════════════════╝

Array:

[1, 2, 5, 8, 3, 12, 9]

Initial state:

max = 1

↓

Compare with 2

2 > 1

max = 2

↓

Compare with 5

5 > 2

max = 5

↓

Compare with 8

8 > 5

max = 8

↓

Compare with 3

3 < 8

Nothing changes.

↓

Compare with 12

12 > 8

max = 12

↓

Compare with 9

9 < 12

Nothing changes.

↓

Return:

12 ✅


╔══════════════════════════════════════════════════════════════╗
║             TIME & SPACE COMPLEXITY ⏱️                      ║
╚══════════════════════════════════════════════════════════════╝

Time Complexity:

O(n)

Why?

Because every element is visited exactly once.

--------------------------------------------------------------

Space Complexity:

O(1)

Why?

We only use one extra variable:

max

No matter how large the array becomes.


╔══════════════════════════════════════════════════════════════╗
║        WHAT IF THE ARRAY HAS 1 MILLION ELEMENTS? 🤔         ║
╚══════════════════════════════════════════════════════════════╝

This is where DSA becomes important.

Instead of asking only:

"Does my code work?"

We also ask:

🧠 How fast is it?

🧠 How much memory does it use?

For a very large array,

performance becomes just as important
as correctness.

That's why we'll soon study:

✓ Time Complexity

✓ Space Complexity

✓ Choosing the right Data Structure

✓ Choosing the right Algorithm


╔══════════════════════════════════════════════════════════════╗
║         WAS THE DATA STRUCTURE A GOOD CHOICE? 📦            ║
╚══════════════════════════════════════════════════════════════╝

Notice that our data was stored inside:

An Array.

Now we can start asking better questions.

Is an array the best data structure?

Could another data structure make some operations faster?

Can we improve the algorithm?

These are the kinds of questions DSA teaches us to ask.

Choosing the right data structure is often just as important
as choosing the right algorithm.


╔══════════════════════════════════════════════════════════════╗
║                 WHAT'S NEXT? 🚀                             ║
╚══════════════════════════════════════════════════════════════╝

Now that we understand:

✓ What data is.
✓ What a data structure is.
✓ What an algorithm is.
✓ How to think before coding.

We're ready to study our first data structure:

📦 Arrays

We'll learn:

✓ How arrays work internally.
✓ Their strengths and weaknesses.
✓ Time complexity of common operations.
✓ When they are the right (or wrong) choice.


╔══════════════════════════════════════════════════════════════╗
║              INTERVIEW QUESTIONS 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: What is the first step before writing code?

A:
Understand the problem and design an algorithm
(or write pseudocode) before implementing it.


Q: Why is pseudocode important?

A:
It helps you focus on the solution itself rather than
the syntax of a specific programming language.


Q: What is the time complexity of finding the maximum
element using a linear scan?

A:
O(n), because every element is checked exactly once.


💡 Golden Rule

🧠 Think first.

📝 Write the algorithm.

💻 Then write the code.

Great programmers don't start by typing...
they start by thinking. 🚀
*/
