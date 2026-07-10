/*
╔══════════════════════════════════════════════════════════════╗
║            BIG-O vs BIG-Θ vs BIG-Ω 📊                       ║
╚══════════════════════════════════════════════════════════════╝

When analyzing an algorithm,

we don't always look at only one case.

An algorithm may perform differently depending on
where the desired data is located.

That's why we have three important notations:

1️⃣ Big-O (O)

2️⃣ Big-Theta (Θ)

3️⃣ Big-Omega (Ω)


╔══════════════════════════════════════════════════════════════╗
║                 BIG-O (O) 🔺                                ║
╚══════════════════════════════════════════════════════════════╝

Big-O describes:

✅ Worst-Case Complexity

It answers the question:

"What's the maximum amount of work
this algorithm may perform?"

This is the notation you'll see most often
in interviews and real-world discussions,
because it guarantees an upper bound
on the algorithm's performance.


╔══════════════════════════════════════════════════════════════╗
║                BIG-OMEGA (Ω) 🔻                             ║
╚══════════════════════════════════════════════════════════════╝

Big-Omega describes:

✅ Best-Case Complexity

It answers the question:

"What's the minimum amount of work
this algorithm may perform?"

This represents the most favorable scenario.


╔══════════════════════════════════════════════════════════════╗
║                BIG-THETA (Θ) ⚖️                             ║
╚══════════════════════════════════════════════════════════════╝

Big-Theta describes:

✅ Average-Case Complexity

It answers the question:

"On average, how much work
does the algorithm perform?"

It represents the expected performance
across typical inputs.

💡 Note:

Average-case analysis is usually harder to calculate,
so in practice, developers and interviewers
focus much more on Big-O (worst case).


╔══════════════════════════════════════════════════════════════╗
║               EXAMPLE: LINEAR SEARCH 🔍                     ║
╚══════════════════════════════════════════════════════════════╝
*/

function findUser(users, name) {
  for (const user of users) {
    if (user === name) {
      return user;
    }
  }

  return null;
}

/*
Suppose we search for a user.

--------------------------------------------------------------

Best Case (Ω)

The target is the FIRST element.

Only one comparison is needed.

Ω(1)

--------------------------------------------------------------

Average Case (Θ)

The target is somewhere in the middle.

On average, we'll search through
about half of the array.

Θ(n)

--------------------------------------------------------------

Worst Case (O)

The target is:

• The last element.

or

• Not present at all.

Every element must be checked.

O(n)


╔══════════════════════════════════════════════════════════════╗
║            ANOTHER EXAMPLE: NESTED LOOPS 🔁                 ║
╚══════════════════════════════════════════════════════════════╝
*/

function print(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

/*


--------------------------------------------------------------

Suppose:

arr has 100 elements.

Outer loop:

100 iterations.

Inner loop:

100 iterations for each outer iteration.

Total operations:

100 × 100

=

10,000

Time Complexity:

✅ O(n²)

--------------------------------------------------------------

Space Complexity:

Only the loop variables (i and j) are used.

No additional arrays or objects are created.

Space Complexity:

✅ O(1)


╔══════════════════════════════════════════════════════════════╗
║          WHEN DO WE USE EACH NOTATION? 🤔                   ║
╚══════════════════════════════════════════════════════════════╝

Big-O (O)

↓

Worst Case

↓

Most commonly used.

--------------------------------------------------------------

Big-Theta (Θ)

↓

Average Case

↓

Expected performance.

--------------------------------------------------------------

Big-Omega (Ω)

↓

Best Case

↓

Most favorable scenario.


╔══════════════════════════════════════════════════════════════╗
║              INTERVIEW QUESTIONS 🎤                         ║
╚══════════════════════════════════════════════════════════════╝

Q: What does Big-O describe?

A:

The worst-case time complexity.


Q: What does Big-Theta describe?

A:

The average-case time complexity.


Q: What does Big-Omega describe?

A:

The best-case time complexity.


Q: Which notation is used most often in interviews?

A:

Big-O,

because it tells us the maximum amount of work
an algorithm may need to perform.


💡 Golden Rule

🔺 O (Big-O)

→ Worst Case

⚖️ Θ (Big-Theta)

→ Average Case

🔻 Ω (Big-Omega)

→ Best Case

When someone says an algorithm is "O(n)",

they're usually describing its worst-case performance. 🚀
*/
